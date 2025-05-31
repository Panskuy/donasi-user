import SectionSumbagan from "@/components/home/SectionSumbangan";
import SearchSumbanganInput from "@/components/sumbangan/SearchSumbanganInput";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";

  const sumbangan = await prisma.sumbangan.findMany({
    where: {
      isShow: true,
      ...(search && {
        title: {
          contains: search,
          mode: "insensitive",
        },
      }),
    },
  });

  return (
    <div className="mt-10">
      <SearchSumbanganInput />
      <SectionSumbagan sumbangan={sumbangan} title="Program Donasi Kami" />
    </div>
  );
};

export default page;
