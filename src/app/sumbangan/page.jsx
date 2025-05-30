import SectionSumbagan from "@/components/home/SectionSumbangan";
import prisma from "@/lib/prisma";
import React from "react";

const page = async () => {
  const sumbangan = await prisma.sumbangan.findMany({
    where: {
      isShow: true,
    },
  });
  return (
    <div className="mt-10">
      <SectionSumbagan sumbangan={sumbangan} title="Program Donasi Kami" />
    </div>
  );
};

export default page;
