"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const SearchResults = dynamic(() => import("../../components/search/SearchResults"), {
  ssr: false, // Force client-side rendering
});

const SearchPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
};

export default SearchPage;
