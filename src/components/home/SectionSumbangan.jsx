import Link from "next/link";
import React from "react";

const SectionSumbagan = async ({ sumbangan, title, href }) => {
  if (!sumbangan || sumbangan.length === 0) {
    return (
      <section className="mx-auto py-12">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          {title}
        </h2>
        <p className="text-center text-text-secondary">
          Tidak ada sumbangan yang tersedia saat ini.
        </p>
      </section>
    );
  }
  return (
    <section className="mx-auto">
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sumbangan.map((item) => (
          <Link
            href={`/sumbangan/${item.id}`}
            key={item.id}
            className="border border-border-light rounded-xl p-6 shadow-sm hover:shadow-lg hover:translate-y-1 transition-all duration-300 bg-background-card"
          >
            <h3 className="text-2xl font-semibold text-text-primary mb-3">
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

      {href ? (
        <Link href={href} className="flex justify-end mt-6">
          <span className="bg-primary px-4 py-2 rounded-lg text-white border border-green-600/20">
            Lihat Semua
          </span>
        </Link>
      ) : null}
    </section>
  );
};

export default SectionSumbagan;
