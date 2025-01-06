"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold">
          eShopInUsa
        </a>

        {/* Search Bar for Desktop */}
        <div className="hidden md:flex items-center w-1/2">
          <SearchBar
            placeholder="Search products..."
            containerClassName="w-full"
          />
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
          <div className="space-y-4 px-4 py-4">
            {/* Search Bar for Mobile */}
            <SearchBar
              placeholder="Search products..."
              containerClassName="w-full"
            />

            {/* Links */}
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
