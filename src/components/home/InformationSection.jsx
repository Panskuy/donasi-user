import prisma from "@/lib/prisma";
import React from "react";
import { Users, Gift, HandHeart } from "lucide-react";

const InformationSection = async () => {
  const users = await prisma.user.count({
    where: {
      role: "user",
    },
  });
  const totalDonasi = await prisma.donasi.count();
  const totalSumbangan = await prisma.sumbangan.count({
    where: {
      isShow: true,
    },
  });

  return (
    <div className=" flex items-center justify-center px-4">
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Donatur */}
        <div className="bg-background-card p-6 rounded-xl shadow-lg border border-white/10 flex items-center gap-4">
          <div className="bg-primary p-3 rounded-full text-white shadow-md">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg text-muted-foreground">Jumlah Donatur</h3>
            <p className="text-2xl font-bold text-text-primary">{users}</p>
          </div>
        </div>

        {/* Penerima Donasi */}
        <div className="bg-background-card p-6 rounded-xl shadow-lg border border-white/10 flex items-center gap-4">
          <div className="bg-green-600 p-3 rounded-full text-white shadow-md">
            <HandHeart className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground">
              Jumlah Penerima Donasi
            </h3>
            <p className="text-2xl font-bold text-text-primary">
              {totalSumbangan}
            </p>
          </div>
        </div>

        {/* Total Donasi */}
        <div className="bg-background-card p-6 rounded-xl shadow-lg border border-white/10 flex items-center gap-4">
          <div className="bg-yellow-500 p-3 rounded-full text-white shadow-md">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm text-muted-foreground">
              Jumlah Donasi Masuk
            </h3>
            <p className="text-2xl font-bold text-text-primary">
              {totalDonasi}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
