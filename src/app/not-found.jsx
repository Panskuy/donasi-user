"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full  flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="text-xl font-medium text-text-primary mt-2">
          Halaman tidak ditemukan
        </p>
        <p className="text-gray-500 mt-1">
          Sepertinya halaman yang kamu cari tidak tersedia.
        </p>
        <button
          onClick={() => router.back()}
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
};

export default NotFound;
