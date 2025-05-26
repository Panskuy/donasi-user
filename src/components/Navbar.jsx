import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import Link from "next/link";
import React from "react";
import LoginButton from "./Buttons";
import Image from "next/image";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <header className="fixed top-0 left-0 w-full bg-background-light text-primary shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:opacity-90"
        >
          KASIBA.COM
        </Link>

        {/* Nav links */}
        <nav
          className={`hidden md:flex gap-6 text-text-primary font-medium ${
            user ? "-mr-36" : null
          }`}
        >
          <Link href="/" className="hover:underline underline-offset-4">
            Beranda
          </Link>
          <Link
            href="/sumbangan"
            className="hover:underline underline-offset-4"
          >
            Program
          </Link>
          <Link href="/tentang" className="hover:underline underline-offset-4">
            Tentang
          </Link>
        </nav>

        {/* User Info & Button */}
        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href={"/account"}
              className="flex items-center gap-3 text-text-primary"
            >
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-sm opacity-80">{user.email}</p>
              </div>
              <Image
                src={user.image || "/default-avatar.png"}
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full border-2 border-white shadow-sm"
              />
            </Link>
          ) : null}
          <LoginButton user={user} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
