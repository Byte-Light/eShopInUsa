// components/FeaturedProducts.tsx
const featuredProducts = [
    {
      title: "Apple MacBook Pro 14-inch",
      description: "M2 Pro chip, 16GB RAM, 512GB SSD.",
      price: "$1999",
      image: "/images/macbook-pro.png",
      link: "/products/macbook-pro",
    },
    {
      title: "Samsung Galaxy S23 Ultra",
      description: "256GB, Dynamic AMOLED 2X Display.",
      price: "$1199",
      image: "/images/galaxy-s23.png",
      link: "/products/galaxy-s23",
    },
    {
      title: "Sony WH-1000XM5",
      description: "Noise-Canceling Wireless Headphones.",
      price: "$399",
      image: "/images/sony-headphones.png",
      link: "/products/sony-wh-1000xm5",
    },
    {
      title: "Logitech MX Master 3S",
      description: "Ergonomic Wireless Mouse for Productivity.",
      price: "$99",
      image: "/images/logitech-mouse.png",
      link: "/products/logitech-mx-master-3s",
    },
  ];
  
  const FeaturedProducts: React.FC = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Featured Products
          </h2>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {/* Product Image */}
                <a href={product.link}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </a>
  
                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700 hover:text-blue-600">
                    <a href={product.link}>{product.title}</a>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                  <p className="text-lg font-bold text-gray-800 mt-2">{product.price}</p>
                  <a
                    href={product.link}
                    className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
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
  