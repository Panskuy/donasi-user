"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-white mt-96">
      <div className="flex flex-col items-center space-y-4">
        <svg
          className="animate-spin h-12 w-12 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <p className="text-green-600 text-lg font-medium">Tunggu...</p>
      </div>
    </div>
  );
};

export default Loading;
