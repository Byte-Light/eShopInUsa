// components/HeroSection.tsx
const HeroSection: React.FC = () => {
    return (
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-80"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-shadow-lg leading-tight">
            Discover the Future of Tech Products
          </h1>
  
          {/* Subheading */}
          <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-opacity-90">
            Explore curated reviews, exclusive deals, and the latest in gadgets — all in one place. Get the best tech products today.
          </p>
  
          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-8">
            <a
              href="/products"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
            >
              Explore Products
            </a>
            <a
              href="/deals"
              className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out"
            >
              View Deals
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  