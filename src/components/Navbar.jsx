import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import Link from "next/link";
import React from "react";
import LoginButton from "./Buttons";

const Navbar = async () => {
  const user = await getCurrentUser();
  return (
    <div className="fixed top-0 left-0 w-full ">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center bg-green-700 text-white rounded-b-2xl p-4">
        <Link href={"/"} className="font-bold text-2xl">
          Logo
        </Link>

        <ul>
          <Link href={"/"}>Home</Link>
        </ul>

        <LoginButton user={user} />
      </div>
    </div>
  );
};

export default Navbar;
