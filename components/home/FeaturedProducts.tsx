"use client";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  affiliateLink: string;
};

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to get 8 random products
  const getRandomProducts = (allProducts: Product[], count: number): Product[] => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Fetch all products
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const randomProducts = getRandomProducts(data, 8); // Select 8 random products
        setProducts(randomProducts);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading featured products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
            >
              {/* Product Image */}
              <a href={product.affiliateLink}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </a>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 truncate">
                  <a href={product.affiliateLink}>{product.name}</a>
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-xl font-semibold text-gray-900 mt-4">{product.price}</p>
                <a
                  href={product.affiliateLink}
                  className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
