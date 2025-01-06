"use client";
import { useState, useEffect } from "react";

interface SearchResult {
  id: number;
  name: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setSearchResults([]);
      }
    };

    // Debounce the fetch to avoid rapid API calls
    const delayDebounce = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          eShopInUsa
        </a>

        {/* Search Bar */}
        <div className="relative hidden md:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-5 py-2 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.trim() !== "" && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50">
              {searchResults.map((result) => (
                <a
                  key={result.id}
                  href={`/products/${result.id}`}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  {result.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/products" className="hover:text-gray-300">
            Products
          </a>
          <a href="/categories" className="hover:text-gray-300">
            Categories
          </a>
          <a href="/blog" className="hover:text-gray-300">
            Blog
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="space-y-2 px-4 py-4">
            <a href="/" className="block hover:text-gray-300">
              Home
            </a>
            <a href="/products" className="block hover:text-gray-300">
              Products
            </a>
            <a href="/categories" className="block hover:text-gray-300">
              Categories
            </a>
            <a href="/blog" className="block hover:text-gray-300">
              Blog
            </a>
            <a href="/contact" className="block hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
