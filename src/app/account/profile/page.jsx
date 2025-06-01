import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";
import Image from "next/image";
import React from "react";
import { UserIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from "lucide-react";
import { EditProfileButtons } from "@/components/account/ProfileButtons";

export const dynamic = "force-dynamic";

const page = async () => {
  const user = await getCurrentUser();

  const findUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  return (
    <div className=" mx-auto px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">
        Profil Anda
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image
              src={findUser?.image || "/default-avatar.png"}
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-lg font-medium text-gray-800">
            {findUser?.name || "Pengguna"}
          </p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <UserIcon className="text-blue-500 w-5 h-5" />
            <p>
              <span className="font-semibold text-gray-900">Nama:</span>{" "}
              {findUser?.name || "-"}
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="text-blue-500 w-5 h-5" />
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {findUser?.email}
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <PhoneIcon className="text-blue-500 w-5 h-5" />
            <p>
              <span className="font-semibold text-gray-900">
                Nomor Telepon:
              </span>{" "}
              {findUser?.phone || "Tidak tersedia"}
            </p>
          </div>
          <EditProfileButtons user={findUser} />
        </div>
      </div>
    </div>
  );
};

export default page;
