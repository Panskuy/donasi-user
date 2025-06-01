import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import Link from "next/link";
import React from "react";
import LoginButton from "./Buttons";
import Image from "next/image";

const Navbar = async () => {
  const user = await getCurrentUser();

  const NavList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Program",
      link: "/sumbangan",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-primary shadow-md z-50">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center p-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:opacity-90 flex items-center gap-2"
        >
          <Image
            src={"/images/logoKasiba1.png"}
            width={40}
            height={10}
            alt="logo Kasiba"
            className=" rounded-md"
          />
          <h1 className="text-gray-800">KASIBA.COM</h1>
        </Link>

        <nav
          className={`hidden md:flex gap-6 text-text-primary font-medium ${
            user ? "-mr-20" : "-ml-16"
          }`}
        >
          {NavList.map((item, index) => {
            return (
              <Link
                href={item.link}
                key={index}
                className="hover:underline underline-offset-4 hover:scale-110 transition-transform duration-200"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

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
