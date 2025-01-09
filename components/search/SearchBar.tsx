"use client"
import { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  containerClassName?: string;
  onSearch?: (query: string) => void; // Make sure this is included
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  containerClassName,
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center bg-white rounded shadow ${containerClassName}`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-gray-700 focus:outline-none rounded-l"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
