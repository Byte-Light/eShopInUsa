"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateLink: string;
}

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query) {
      fetch(`/api/search?query=${encodeURIComponent(query)}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div>No products found for "{query}".</div>;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="border rounded shadow p-4 flex flex-col items-center"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-bold">${product.price}</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition inline-block text-center"
          >
            Buy Now
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
