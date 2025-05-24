import SectionSumbagan from "@/components/home/SectionSumbangan";
import React from "react";

const page = async () => {
  const sumbangan = await prisma.sumbangan.findMany();
  return (
    <div className="w-full">
      <SectionSumbagan sumbangan={sumbangan} title="Program Donasi Kami" />
    </div>
  );
};

export default page;
