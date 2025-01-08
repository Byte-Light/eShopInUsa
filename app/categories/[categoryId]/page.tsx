"use client";
import React, { useEffect, useState } from "react";

const categoryNames: { [key: string]: string } = {
  "1": "Laptops",
  "2": "Smartphones",
  "3": "Accessories",
  "4": "External Storage",
  "5": "Chargers & Power Banks",
};

const CategoryPage = ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // Resolve the `params` promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setCategoryId(resolvedParams.categoryId);
    };
    resolveParams();
  }, [params]);

  // Fetch products when `categoryId` is resolved
  useEffect(() => {
    if (categoryId) {
      const fetchProducts = async () => {
        try {
          const response = await fetch(`/api/products?categoryId=${categoryId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setProducts(data);
        } catch (error: any) {
          setError(error.message);
        }
      };

      fetchProducts();
    }
  }, [categoryId]);

  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!categoryId || !products.length)
    return <div className="text-center text-gray-600 mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Products for Category: <span className="text-indigo-600">{categoryNames[categoryId] || "Unknown"}</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-indigo-600 font-bold text-lg">
                    ${product.price}
                  </span>
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white bg-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
