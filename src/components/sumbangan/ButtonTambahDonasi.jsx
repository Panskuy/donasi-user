"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ButtonTambahDonasi = ({ userId, sumbanganId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!items.trim()) {
      toast.error("Mohon isi daftar item donasi");
      return;
    }

    const itemArray = items
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    try {
      const res = await fetch("/api/donasi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sumbanganId,
          userId,
          item: itemArray,
        }),
      });

      if (!res.ok) throw new Error("Gagal donasi");

      toast.success("Donasi berhasil ditambahkan!");
      setIsOpen(false);
      setItems("");
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan");
    }
  };

  return (
    <div className="w-full lg:w-fit">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition"
      >
        Donasi Sekarang
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-1/2 left-1/2 z-50 max-w-lg w-full p-6 bg-white rounded-lg shadow-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-green-800 text-xl font-semibold">
                Form Donasi
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className=" bg-green-100 hover:bg-green-800 text-green-800 hover:text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-green-900 font-medium">
                Daftar Item Donasi (pisahkan dengan koma):
                <textarea
                  rows={4}
                  value={items}
                  onChange={(e) => setItems(e.target.value)}
                  className="mt-1 w-full p-2 border border-green-300 rounded"
                  placeholder="Contoh: Beras 5kg, Susu 2 kaleng, Pakaian"
                />
              </label>

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition"
              >
                Kirim Donasi
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonTambahDonasi;
