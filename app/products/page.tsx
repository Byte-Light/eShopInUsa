"use client";
import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateLink: string;
  categoryId: number;
  createdAt: string;
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/products'); // Ensure this matches your API route
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
        setError(''); // Clear any previous error
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>

      {/* Show loading indicator */}
      {isLoading && <div className="text-center text-blue-500">Loading products...</div>}

      {/* Error Handling */}
      {error && <div className="text-red-500 text-center">{error}</div>}

      {/* Display Products */}
      {!isLoading && !error && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-4">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                </div>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Products */}
      {!isLoading && !error && products.length === 0 && (
        <div className="text-center text-gray-500">No products available.</div>
      )}
    </div>
  );
};

export default ProductsPage;
