"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const EditProfileButtons = ({ user }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleEditUser = async () => {
    try {
      const res = await fetch("/api/account/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: username, phone: phone }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Profil berhasil diupdate");
      setShow(false);
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Terjadi kesalahan");
    }
  };

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
      >
        Edit Profil
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg border border-blue-200 relative animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-700">
                Edit Profil
              </h2>
              <button
                onClick={() => setShow(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Masukkan username baru"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="text-sm text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Masukkan username baru"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm text-gray-700 mb-1">
                  No Telp
                </label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  placeholder="Masukkan username baru"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => handleEditUser()}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
