import React from "react";
import { HandHeart, ShieldCheck, Users, CheckCircle } from "lucide-react";

const AboutKasiba = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-6 py-12 bg-blue-50 rounded-xl shadow-md">
      {/* Tentang Kasiba */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Tentang <span className="text-blue-600">KASIBA</span>
        </h2>
        <p className="text-gray-700 text-base md:text-lg text-justify leading-relaxed">
          Kasiba adalah aplikasi web donasi yang dibuat untuk memudahkan siapa
          saja yang ingin berbagi kebaikan kepada anak-anak di panti asuhan.
          Melalui Kasiba, pengguna bisa melihat langsung informasi tentang
          panti-panti asuhan yang membutuhkan bantuan mulai dari profil,
          kebutuhan harian, hingga kegiatan yang sedang mereka jalankan. Donasi
          bisa diberikan dengan mudah, baik berupa uang maupun barang, dan
          semuanya tercatat secara transparan. Kasiba hadir sebagai jembatan
          antara para donatur dan panti asuhan, agar setiap kebaikan yang
          disalurkan bisa sampai ke tangan yang tepat dan membawa dampak nyata
          bagi masa depan mereka yang membutuhkan.
        </p>
      </div>

      {/* Keunggulan Kasiba */}
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          Mengapa Harus <span className="text-blue-600">KASIBA</span>?
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          KASIBA menjadi jembatan kebaikan yang menghubungkan donatur dan panti
          asuhan secara aman, mudah, dan terpercaya.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <HandHeart className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
            <span className="text-gray-700">
              Penyaluran bantuan ke panti asuhan jadi mudah dan efisien.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <ShieldCheck className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
            <span className="text-gray-700">
              Transparansi dan keamanan dalam setiap donasi.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Users className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
            <span className="text-gray-700">
              Fokus pada panti asuhan yang benar-benar membutuhkan bantuan.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1 shrink-0" />
            <span className="text-gray-700">
              Semua panti telah diverifikasi oleh tim KASIBA.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutKasiba;
