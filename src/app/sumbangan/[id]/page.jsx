import ButtonTambahDonasi from "@/components/sumbangan/ButtonTambahDonasi";
import CommentInput from "@/components/sumbangan/CommentInput";
import CommentSection from "@/components/sumbangan/CommentSection";
import SumbanganHistoryUser from "@/components/sumbangan/SumbanganHistoryUser";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const Page = async ({ params }) => {
  const { id } = await params;

  const sumbangan = await prisma.sumbangan.findUnique({
    where: { id },
    include: {
      donasi: true,
      comment: {
        include: {
          user: true,
        },
      },
    },
  });

  const user = await getCurrentUser();

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
    <div className="w-full mt-10 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row w-full  gap-4">
        {/* Image dan info donasi */}
        <div className="flex flex-col items-center w-fit ">
          <Image
            src={sumbangan.imageUrl || "https://placehold.co/600x400/png"}
            width={600}
            height={400}
            alt={`Image dari ${sumbangan.title}`}
            className="rounded-xl object-cover shadow-lg"
          />

          <div className="w-full mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="w-full lg:w-fit text-center lg:text-start bg-primary-dark text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium">
              Total Semua Donasi:{" "}
              <span className="font-bold">{sumbangan.donasi.length}</span>
            </p>

            {user ? (
              <ButtonTambahDonasi sumbanganId={sumbangan.id} userId={user.id} />
            ) : null}
          </div>
        </div>

        {/* Informasi detail */}
        <div className="text-justify w-full">
          <h1 className="text-4xl font-bold text-text-primary leading-tight mb-3 first-letter:uppercase">
            {sumbangan.title}
          </h1>

          <p className="text-base leading-relaxed whitespace-pre-line text-text-secondary">
            {sumbangan.description}
          </p>
        </div>
      </div>

      <div className="mt-3 w-full overflow-auto">
        {user ? (
          <SumbanganHistoryUser userId={user.id} sumbanganId={id} />
        ) : null}
      </div>

      <div className="w-full mt-2">
        <h1 className="text-2xl font-semibold text-green-800 mb-3">Komentar</h1>

        {user ? (
          <CommentInput userId={user.id} sumbanganId={sumbangan.id} />
        ) : null}

        <CommentSection commentData={sumbangan.comment} />
      </div>
    </div>
  );
};

export default Page;
