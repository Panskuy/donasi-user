import React from "react";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogSection = ({ blog }) => {
  return (
    <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[800px] overflow-auto px-0 lg:pr-2">
      {blog.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
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
              href={"/"}
              className="self-start text-blue-700 hover:text-blue-900 font-medium text-sm transition"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
