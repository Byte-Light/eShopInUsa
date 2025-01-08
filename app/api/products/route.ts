import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: '82.197.82.55', // MySQL server address
  user: 'u201082593_ashraf23usa', // Database username
  password: 'ByteLight24#', // Database password
  database: 'u201082593_aff2025', // Database name
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");

  let connection: mysql.Connection | undefined;
  try {
    connection = await mysql.createConnection(dbConfig);

    const query = categoryId
      ? `
          SELECT 
            id,
            name,
            description,
            price,
            image_url AS imageUrl,
            affiliate_link AS affiliateLink,
            category_id AS categoryId,
            created_at AS createdAt
          FROM products
          WHERE category_id = ?
        `
      : `
          SELECT 
            id,
            name,
            description,
            price,
            image_url AS imageUrl,
            affiliate_link AS affiliateLink,
            category_id AS categoryId,
            created_at AS createdAt
          FROM products
        `;

    const [rows] = await connection.execute(query, categoryId ? [categoryId] : []);

    return NextResponse.json(rows);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Database connection error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("An unknown error occurred");
      return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
    }
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}
