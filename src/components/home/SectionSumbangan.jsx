import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionSumbagan = async ({ sumbangan, href }) => {
  if (!sumbangan || sumbangan.length === 0) {
    return (
      <section className="mx-auto py-12">
        <p className="text-center text-text-secondary">
          Tidak ada sumbangan yang tersedia saat ini.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sumbangan.map((item) => (
          <Link
            href={`/sumbangan/${item.id}`}
            key={item.id}
            className="border border-border-light rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100 hover:border-blue-300 transition-all duration-300 bg-white group"
          >
            <Image
              src={item.imageUrl || "https://placehold.co/600x400/png"}
              width={400}
              height={250}
              alt={item.title}
              className="rounded-md mb-4 object-cover w-full h-auto"
            />
            <h3 className="text-2xl font-semibold text-text-primary group-hover:text-blue-800 mb-3 transition-all duration-300">
              {item.title}
            </h3>
            <p className="text-text-secondary mb-4 min-h-[60px] line-clamp-3 text-justify">
              {item.description}
            </p>
            <div className="flex justify-between text-sm font-medium text-text-muted">
              <span className="uppercase tracking-wide">{item.kategori}</span>
              <span>{item.location}</span>
            </div>
          </Link>
        ))}
      </div>

      {href && (
        <div className="flex justify-end mt-6">
          <Link
            href={href}
            className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg text-white border border-green-600/20"
          >
            Lihat Semua
          </Link>
        </div>
      )}
    </section>
  );
};

export default SectionSumbagan;
