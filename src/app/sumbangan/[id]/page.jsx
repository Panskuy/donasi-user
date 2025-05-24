import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;

  const sumbangan = await prisma.sumbangan.findUnique({
    where: { id },
    include: {
      donasi: true,
    },
  });

  if (!sumbangan) {
    return (
      <div className="w-full mt-8 text-center text-red-600">
        <h1 className="text-2xl font-semibold">
          Data sumbangan tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full mt-8 px-4 md:px-8">
      <div className="text-center text-green-800 mb-6">
        <h1 className="text-4xl font-bold first-letter:uppercase">
          {sumbangan.title}
        </h1>
        <p className="text-xl mt-2 first-letter:uppercase">
          {sumbangan.location}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <div className=" bg-green-100 p-4 rounded-md text-green-900 text-justify h-fit">
            <p>{sumbangan.description}</p>
          </div>
        </div>
        <div className=" rounded-md flex flex-col items-center justify-center">
          <Image
            src={sumbangan.imageUrl || "https://placehold.co/600x400/png"}
            width={600}
            height={400}
            alt={`Image dari ${sumbangan.title}`}
            className="rounded-md object-cover"
          />

          <div className="w-full flex justify-between items-center mt-4">
            <div className="flex">
              {sumbangan.donasi.length === 0 ? (
                <p className="p-2 bg-green-700 text-white rounded-md">
                  <span className="font-bold">Belum Ada Transaksi</span>
                </p>
              ) : (
                <p className="p-2 bg-green-700 text-white rounded-md">
                  Jumlah Transaksi Donasi:{" "}
                  <span className="font-bold">{sumbangan.donasi.length}</span>
                </p>
              )}
            </div>
            <button>Tambah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
