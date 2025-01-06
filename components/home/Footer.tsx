// components/Footer.tsx
const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-4">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
              <p className="text-sm">
                We provide the best deals, reviews, and recommendations for tech enthusiasts. Find the perfect gadgets and accessories at unbeatable prices!
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/categories" className="hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/deals" className="hover:text-white">
                    Deals & Offers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Subscribe to get the latest deals and updates directly to your inbox.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>
  
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} eShopInUsa. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h11.25v-9.375H9.375V11.25h3.375V8.437c0-3.3 2.016-5.1 4.959-5.1 1.409 0 2.624.105 2.975.152v3.45h-2.041c-1.603 0-1.916.761-1.916 1.877v2.435h3.822l-.499 3.375h-3.323V24h6.507A1.5 1.5 0 0024 22.5v-21A1.5 1.5 0 0022.5 0z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M24 4.556a9.816 9.816 0 01-2.828.775 4.932 4.932 0 002.165-2.723c-.936.555-1.976.959-3.084 1.184a4.916 4.916 0 00-8.375 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.556 4.896 4.896 0 01-2.23-.616v.061a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.917 4.917 0 004.593 3.417A9.865 9.865 0 010 21.542a13.919 13.919 0 007.548 2.212c9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.556z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387-.113-.987-.214-2.49.044-3.566.236-.971 1.517-6.147 1.517-6.147s-.387-.774-.387-1.918c0-1.797 1.044-3.141 2.344-3.141 1.105 0 1.637.828 1.637 1.824 0 1.113-.707 2.777-1.071 4.324-.301 1.265.639 2.3 1.894 2.3 2.272 0 3.801-2.993 3.801-6.521 0-2.691-1.817-4.71-5.113-4.71-3.718 0-6.039 2.777-6.039 5.858 0 1.07.417 2.221.94 2.847a.379.379 0 01.092.363c-.101.399-.33 1.265-.372 1.44-.055.226-.18.271-.418.164-1.551-.657-2.52-2.723-2.52-4.391 0-3.572 2.594-6.848 7.474-6.848 3.918 0 6.965 2.796 6.965 6.539 0 3.887-2.448 7.017-5.84 7.017-1.141 0-2.211-.59-2.577-1.289l-.701 2.666c-.255.97-.947 2.183-1.414 2.923A11.97 11.97 0 0012 24c6.628 0 12-5.372 12-12S18.628 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  