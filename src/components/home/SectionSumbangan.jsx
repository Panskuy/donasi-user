import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const SectionSumbagan = async ({ sumbangan, title, href }) => {
  return (
    <section className="mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-green-900 mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sumbangan.map((item) => (
          <Link
            href={`/sumbangan/${item.id}`}
            key={item.id}
            className="border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              {item.title}
            </h3>
            <p className="text-green-700 mb-4 min-h-[60px] line-clamp-3 text-justify">
              {item.description}
            </p>
            <div className="flex justify-between text-sm font-medium text-green-600">
              <span className="uppercase tracking-wide">{item.kategori}</span>
              <span>{item.location}</span>
            </div>
          </Link>
        ))}
      </div>

      {href ? (
        <Link href={href} className="flex justify-end mt-3">
          <span className="bg-green-700 px-4 py-2 rounded-lg text-white border border-green-600/20">
            Lihat Semua
          </span>
        </Link>
      ) : null}
    </section>
  );
};

export default SectionSumbagan;
