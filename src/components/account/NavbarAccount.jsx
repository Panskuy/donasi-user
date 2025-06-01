import Link from "next/link";
import React from "react";

export const NavbarAccount = () => {
  const NavPageList = [
    {
      name: "Profile",
      href: "/account/profile",
    },
    {
      name: "History Donasi",
      href: "/account/sumbangan",
    },
  ];

  return (
    <div className="fixed top-10 left-0 w-full pt-8 z-40 flex bg-white lg:bg-white/0  items-center lg:backdrop-blur-lg shadow-sm">
      <div className="w-full max-w-7xl mx-auto flex   items-center  rounded-lg px-4 py-2">
        <ul className="w-full flex justify-between lg:justify-center items-center text-xs lg:text-lg text-gray-700 font-medium px-2">
          {NavPageList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="font-semibold px-4 py-2 block transition-transform duration-200 transform hover:scale-105 hover:text-blue-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
