"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchSumbanganInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/sumbangan?search=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex">
      <input
        type="text"
        placeholder="Cari sumbangan..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 w-full rounded-lg"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Cari
      </button>
    </form>
  );
};

export default SearchSumbanganInput;
