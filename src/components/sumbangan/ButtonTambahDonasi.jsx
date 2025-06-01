"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ButtonTambahDonasi = ({ userId, sumbanganId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [items, setItems] = useState("");
  const [isSend, setIsSend] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSend(true);

    if (!items.trim()) {
      toast.error("Mohon isi daftar item donasi");
      setIsSend(false);
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
      setItems("");
      closeModal();
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan");
      setIsSend(false);
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsSend(false);
    }, 200);
  };

  return (
    <div className={`w-full lg:w-fit ${isOpen ? "z-50" : "z-20"}`}>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition"
      >
        Donasi Sekarang
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className={`fixed inset-0 bg-black/30 z-40 transition-opacity backdrop-blur-sm duration-100 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Modal */}
          <div
            role="dialog"
            aria-modal="true"
            className={`fixed top-1/2 left-1/2 z-50 max-w-lg w-full p-6 bg-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition-all  duration-300 ${
              isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-blue-800 text-xl font-semibold">Donasi</h2>
              <button
                onClick={closeModal}
                className="bg-blue-100 hover:bg-blue-800 text-blue-800 hover:text-white px-4 py-2 rounded-lg transition-all"
              >
                Tutup
              </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-blue-900 font-medium">
                Daftar Item Donasi (pisahkan dengan koma):
                <textarea
                  rows={4}
                  value={items}
                  onChange={(e) => setItems(e.target.value)}
                  className="mt-1 w-full p-2 border border-blue-300 ring-0 focus:ring-blue-600 rounded"
                  placeholder="Contoh: Beras 5kg, Susu 2 kaleng, Pakaian"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base transition"
                disabled={isSend}
              >
                {isSend ? "Mengirim..." : "Kirim Donasi"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonTambahDonasi;
