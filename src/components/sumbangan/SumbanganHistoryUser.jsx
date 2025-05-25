import prisma from "@/lib/prisma";
import React from "react";

const SumbanganHistoryUser = async ({ userId, sumbanganId }) => {
  const historyUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      donasi: {
        where: {
          sumbanganId: sumbanganId, // filter berdasarkan sumbanganId, bukan id donasi
        },
      },
    },
  });

  if (!historyUser) {
    return <p className="text-red-500">User tidak ditemukan.</p>;
  }

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-green-800 font-bold text-xl">Donasi Anda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {historyUser.donasi.length === 0 ? (
          <p className="text-gray-500">
            Anda belum ada donasi pada sumbangan ini.
          </p>
        ) : (
          historyUser.donasi.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-green-300 rounded-md bg-green-50"
            >
              <h1 className="font-semibold text-green-700 flex gap-2">
                Status Pengiriman:{" "}
                <p className=" text-green-900 first-letter:uppercase">
                  {item.status_pengiriman}
                </p>
              </h1>
              <p className="text-sm text-green-700 mt-2">
                Item: {item.item.join(", ")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Tanggal: {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SumbanganHistoryUser;
