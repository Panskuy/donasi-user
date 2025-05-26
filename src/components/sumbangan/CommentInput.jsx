"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CommentInput = ({ userId, sumbanganId }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCommentPost = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("Komentar tidak boleh kosong!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, sumbanganId, comment }),
      });

      if (!res.ok) throw new Error("Gagal mengirim komentar");

      toast.success("Komentar Terkirim!");
      setComment("");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan saat mengirim komentar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm mt-4">
      <form
        onSubmit={handleCommentPost}
        className="flex items-center space-x-2"
      >
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="Tulis komentar Anda..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 h-10 px-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
          disabled={loading}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  );
};

export default CommentInput;
