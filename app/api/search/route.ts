import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

const dbConfig = {
  host: "82.197.82.55",
  user: "u201082593_ashraf23usa",
  password: "ByteLight24#",
  database: "u201082593_aff2025",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
  }

  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute(
      `SELECT id, name, description, price, image_url AS imageUrl, affiliate_link AS affiliateLink 
       FROM products 
       WHERE name LIKE ? LIMIT 10`,
      [`%${query}%`]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch search results" }, { status: 500 });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
