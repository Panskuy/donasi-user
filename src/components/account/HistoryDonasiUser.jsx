import { Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const HistoryDonasiUser = ({ historyDonasiById }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {historyDonasiById.map((donasi) => (
        <Link
          key={donasi.id}
          href={`/sumbangan/${donasi.sumbangan?.id}`}
          className="flex flex-col justify-between bg-white border hover:bg-blue-50 hover:border-blue-400 rounded-lg shadow-md p-5  transition-all h-full"
        >
          {/* Judul dan lokasi sumbangan */}
          <div className="mb-3">
            <h2 className="text-xl font-semibold text-text-primary truncate first-letter:uppercase">
              {donasi.sumbangan?.title ?? "Tidak ada judul"}
            </h2>
            <p className="text-sm text-text-secondary truncate first-letter:uppercase leading-tight mt-1">
              {donasi.sumbangan?.location ?? "Lokasi tidak tersedia"}
            </p>
          </div>

          {/* Daftar item donasi */}
          <div className="mb-4 max-h-28 overflow-y-auto rounded   p-3">
            {donasi.item && donasi.item.length > 0 ? (
              <ul className="list-decimal list-inside text-gray-700 text-sm m-0 p-0">
                {donasi.item.map((it, idx) => (
                  <li
                    key={idx}
                    className="align-top leading-tight mb-1 last:mb-0"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 italic text-sm m-0 p-0">
                Tidak ada item donasi.
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 text-blue-700 text-sm font-medium">
            <Package size={18} />
            <span className="first-letter:uppercase">
              {donasi.status_pengiriman ?? "Status tidak tersedia"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HistoryDonasiUser;
