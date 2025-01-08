import React from "react";

const CategoriesPage = () => {
  const categories = [
    {
      id: 1,
      name: "Laptops",
      description: "Find the best laptops for work, gaming, or personal use.",
      link: "/categories/1",
      icon: "💻",
    },
    {
      id: 2,
      name: "Smartphones",
      description: "Explore the latest smartphones and their features.",
      link: "/categories/2",
      icon: "📱",
    },
    {
      id: 3,
      name: "Accessories",
      description: "Discover essential tech accessories for all your devices.",
      link: "/categories/3",
      icon: "🎧",
    },
    {
      id: 4,
      name: "External Storage",
      description: "Expand your storage with reliable external devices.",
      link: "/categories/4",
      icon: "💾",
    },
    {
      id: 5,
      name: "Chargers & Power Banks",
      description: "Stay powered up with chargers and power banks.",
      link: "/categories/5",
      icon: "🔋",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-4xl">{category.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{category.name}</h2>
              <p className="text-gray-600 mt-2">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
