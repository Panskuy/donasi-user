"use client";

import React from "react";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const CommentButtons = ({ id }) => {
  const router = useRouter();
  const handleDeleteComment = async () => {
    try {
      const response = await fetch(`/api/comment/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Komentar berhasil dihapus");
        router.refresh();
      } else {
        toast.error("Gagal menghapus komentar");
      }
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan");
    }
  };

  return (
    <button
      onClick={handleDeleteComment}
      className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition"
    >
      <Trash2 size={16} />
      <h1 className="hidden lg:flex">Hapus</h1>
    </button>
  );
};
