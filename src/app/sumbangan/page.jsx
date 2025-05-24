import SectionSumbagan from "@/components/home/SectionSumbangan";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const sumbangan = await prisma.sumbangan.findMany();
  return (
    <div>
      <SectionSumbagan sumbangan={sumbangan} title="Program Donasi Kami" />
    </div>
  );
};

export default page;
