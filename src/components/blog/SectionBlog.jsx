import React from "react";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SectionBlog = ({ blog, title, href }) => {
  return (
    <section className="w-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {blog.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:shadow-blue-200 hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image || "https://placehold.co/600x400/png"}
                alt="image"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                {item.title}
              </h2>

              <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarDays className="w-4 h-4 mr-1" />
                <span>
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Tanggal tidak tersedia"}
                </span>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-3 flex-1">
                {item.content ||
                  "Belum ada deskripsi untuk blog ini. Klik untuk membaca lebih lanjut..."}
              </p>

              <Link
                href={`/blog/${item.id}`}
                className="self-start text-blue-700 hover:text-blue-900 font-medium text-sm transition"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {href ? (
        <Link href={href} className="flex justify-end mt-6">
          <span className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-white border border-green-600/20">
            Lihat Semua
          </span>
        </Link>
      ) : null}
    </section>
  );
};

export default SectionBlog;
