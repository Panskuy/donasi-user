import prisma from "@/lib/prisma";
import React from "react";
import { PackageCheck, ShoppingBag, Clock } from "lucide-react";

const statusColor = {
  "menunggu konfirmasi": "bg-gray-700",
  "dalam persiapan": "bg-yellow-500",
  "sedang dikirim": "bg-blue-500",
  "sampai tujuan": "bg-green-500",
  selesai: "bg-emerald-600",
  dibatalkan: "bg-red-500",
};

const SumbanganHistoryUser = async ({ userId, sumbanganId }) => {
  const historyUser = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      donasi: {
        where: { sumbanganId: sumbanganId },
      },
    },
  });

  if (!historyUser) {
    return <p className="text-red-500 text-center">User tidak ditemukan.</p>;
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <PackageCheck className="w-6 h-6 text-blue-600" />
        Riwayat Donasi Anda
      </h2>

      {historyUser.donasi.length === 0 ? (
        <p className="text-gray-500">
          Anda belum melakukan donasi untuk sumbangan ini.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {historyUser.donasi.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl shadow-sm p-5 bg-white hover:shadow-md transition"
            >
              <div className="flex items-center gap-2 text-sm mb-3">
                <PackageCheck className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">Status:</span>
                <span
                  className={`px-2 py-1 text-white text-xs rounded-md capitalize ${
                    statusColor[item.status_pengiriman] || "bg-gray-400"
                  }`}
                >
                  {item.status_pengiriman}
                </span>
              </div>

              <div className="flex items-start gap-2 mb-2">
                <ShoppingBag className="w-4 h-4 text-blue-600 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Item:</span>{" "}
                  {item.item.join(", ")}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock className="w-4 h-4" />
                <p>
                  {new Date(item.createdAt).toLocaleString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Jakarta",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SumbanganHistoryUser;
