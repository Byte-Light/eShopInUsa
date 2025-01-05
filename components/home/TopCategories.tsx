// components/TopCategories.tsx
const categories = [
    {
      title: "Laptops",
      image: "/images/laptops-category.png",
      link: "/categories/laptops",
    },
    {
      title: "Smartphones",
      image: "/images/smartphones-category.png",
      link: "/categories/smartphones",
    },
    {
      title: "Accessories",
      image: "/images/accessories-category.png",
      link: "/categories/accessories",
    },
    {
      title: "Gaming",
      image: "/images/gaming-category.png",
      link: "/categories/gaming",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Category Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                />
                {/* Category Title */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-700 group-hover:text-blue-600">
                    {category.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TopCategories;
  