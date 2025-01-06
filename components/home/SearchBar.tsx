"use client";
import { useState, useEffect } from "react";

interface SearchResult {
  id: number;
  name: string;
}

interface SearchBarProps {
  placeholder: string;
  containerClassName?: string;
  inputClassName?: string;
  resultContainerClassName?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  containerClassName = "",
  inputClassName = "",
  resultContainerClassName = "",
}) => {
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

    const delayDebounce = setTimeout(() => {
      fetchSearchResults();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <div className={`relative ${containerClassName}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full px-5 py-2 rounded-full text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all ${inputClassName}`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery.trim() !== "" && searchResults.length > 0 && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50 ${resultContainerClassName}`}
        >
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
  );
};

export default SearchBar;
