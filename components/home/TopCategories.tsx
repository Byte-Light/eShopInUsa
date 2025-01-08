// components/TopCategories.tsx
interface Category {
  id: number;
  name: string;
  description: string;
  link: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Laptops",
    description: "Find the best laptops for work, gaming, or personal use.",
    link: "/categories/1", // Use categoryId directly
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


const TopCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore Top Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="flex items-center justify-center bg-blue-100 h-32 text-6xl">
                <span>{category.icon}</span>
              </div>
              {/* Category Details */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
