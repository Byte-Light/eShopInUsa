// components/DealsSection.tsx
const deals = [
    {
      title: "50% Off on Gaming Laptops",
      description: "Get the best gaming laptops at half the price. Limited time only!",
      image: "/images/gaming-laptop-deal.png",
      link: "/deals/gaming-laptops",
      tag: "Hot Deal",
    },
    {
      title: "Save $300 on iPhone 15 Pro",
      description: "Experience the latest iPhone with incredible savings!",
      image: "/images/iphone-deal.png",
      link: "/deals/iphone-15-pro",
      tag: "Limited Offer",
    },
    {
      title: "Buy 1 Get 1 Free: Headphones",
      description: "Grab two premium headphones for the price of one!",
      image: "/images/headphones-deal.png",
      link: "/deals/headphones",
      tag: "BOGO Offer",
    },
    {
      title: "20% Off on Accessories",
      description: "Exclusive discount on all tech accessories.",
      image: "/images/accessories-deal.png",
      link: "/deals/accessories",
      tag: "Trending",
    },
  ];
  
  const DealsSection: React.FC = () => {
    return (
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Today's Best Deals & Offers
          </h2>
  
          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {deals.map((deal, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                {/* Deal Image */}
                <a href={deal.link} className="block">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </a>
  
                {/* Deal Content */}
                <div className="p-4">
                  {/* Tag */}
                  <span className="inline-block bg-blue-600 text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full mb-3">
                    {deal.tag}
                  </span>
  
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">
                    <a href={deal.link} className="hover:text-blue-400">
                      {deal.title}
                    </a>
                  </h3>
  
                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4">{deal.description}</p>
  
                  {/* Action Button */}
                  <a
                    href={deal.link}
                    className="block bg-blue-600 text-center py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    View Deal
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default DealsSection;
  