import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";
import React from "react";

import HistoryDonasiUser from "@/components/account/HistoryDonasiUser";

export const dynamic = "force-dynamic";

const page = async () => {
  const user = await getCurrentUser();

  const historyDonasiById = await prisma.donasi.findMany({
    where: {
      userId: user.id,
    },
    include: {
      sumbangan: true,
    },
  });

  return (
    <div className=" mx-auto">
      <h1 className="text-3xl font-semibold text-green-800 mb-8">
        Riwayat Donasi
      </h1>

      {historyDonasiById.length === 0 ? (
        <p className="text-gray-600 text-center">Belum ada riwayat donasi.</p>
      ) : (
        <HistoryDonasiUser historyDonasiById={historyDonasiById} />
      )}
    </div>
  );
};

export default page;
