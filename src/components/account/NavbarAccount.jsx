import Link from "next/link";
import React from "react";

export const NavbarAccount = () => {
  const NavPageList = [
    {
      name: "Dashboard",
      href: "/account",
    },
    {
      name: "Profile",
      href: "/account/profile",
    },
    {
      name: "Sumbangan",
      href: "/account/sumbangan",
    },
    {
      name: "Pengaturan",
      href: "/account/settings",
    },
  ];

  return (
    <div className="fixed top-16 left-0 w-full py-8 px-2  z-40 flex bg-background-light">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center  border border-black/40 rounded-lg">
        <ul className="w-full flex justify-center items-center gap-6 text-text-primary font-medium">
          {NavPageList.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                prefetch={false}
                className=" hover:text-primary font-semibold px-4 py-2 block"
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
