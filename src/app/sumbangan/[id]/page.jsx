import BlogSection from "@/components/sumbangan/BlogSection";

import CommentInput from "@/components/sumbangan/CommentInput";
import CommentSection from "@/components/sumbangan/CommentSection";
import SumbanganDetail from "@/components/sumbangan/SumbanganDetail";
import SumbanganHistoryUser from "@/components/sumbangan/SumbanganHistoryUser";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";
import { BookOpen } from "lucide-react";

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
      blog: true,
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
    <div className="w-full mt-10 px-4 md:px-6 space-y-16">
      <SumbanganDetail sumbangan={sumbangan} user={user} />

      <div className="mt-3 w-full mb-3">
        <h1 className="text-xl font-bold mb-16 flex items-center gap-2">
          <BookOpen className="text-blue-600" />
          Blog
        </h1>

        <BlogSection blog={sumbangan.blog} />
      </div>

      <div className="mt-3 w-full ">
        {user ? (
          <SumbanganHistoryUser userId={user.id} sumbanganId={sumbangan.id} />
        ) : null}
      </div>

      <div className="w-full mt-2">
        <h1 className="text-2xl font-semibold text-blue-800 text-center mb-3">
          Komentar
        </h1>

        {user ? (
          <CommentInput userId={user.id} sumbanganId={sumbangan.id} />
        ) : null}

        <div className="w-full ">
          <CommentSection commentData={sumbangan.comment} />
        </div>
      </div>
    </div>
  );
};

export default Page;
