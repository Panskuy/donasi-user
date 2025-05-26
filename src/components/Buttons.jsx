"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginButton({ user }) {
  return (
    <div className="flex items-center justify-between gap-2">
      {user ? (
        <button
          onClick={() => signOut({ redirect: "/" })}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark hover:text-green-100 border border-green-100 transition"
        >
          Keluar
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark hover:text-green-100 border border-green-100 transition"
        >
          Login dengan Google
        </button>
      )}
    </div>
  );
}
