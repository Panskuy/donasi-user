"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoginButton({ user }) {
  return (
    <div className="flex items-center justify-between gap-2">
      {user ? (
        <Link href={"/account"} className="flex items-center gap-2 h-full">
          <span className="text-end hidden lg:block">
            <p>{user.name}</p>

            <p>{user.email}</p>
          </span>

          <Image
            src={user.image}
            width={40}
            height={40}
            alt="image"
            className="h-full rounded-lg "
          />
        </Link>
      ) : null}
      {user ? (
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-green-100  text-green-900 rounded-lg hover:bg-green-700 hover:text-green-100 border border-green-100 transition"
        >
          Keluar
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-green-100  text-green-900 rounded-lg hover:bg-green-700 hover:text-green-100 border border-green-100 transition"
        >
          Login dengan Google
        </button>
      )}
    </div>
  );
}
