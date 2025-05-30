import Link from "next/link";
import React from "react";
// Anda mungkin perlu menginstal react-icons jika ingin menggunakan ikon sungguhan
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-dark text-gray-300 mt-12 pt-10 pb-6">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Atas Footer dengan Kolom */}
        <div className="flex justify-between gap-8 mb-8">
          {/* Kolom 1: Nama Situs & Deskripsi Singkat */}
          <div className="md:col-span-1 lg:col-span-1">
            <h1 className="font-bold text-3xl text-white mb-2">KASIBA.COM</h1>
            <p className="text-sm text-gray-400">
              Platform Anda untuk [deskripsi singkat situs Anda].
            </p>
          </div>

          {/* Kolom 2: Link Cepat */}
          <div>
            <h2 className="font-semibold text-lg text-white mb-3">Navigasi</h2>
            <ul className="space-y-2">
              <Link href={"/"}>
                <p className="hover:text-white transition-colors duration-200">
                  Beranda
                </p>
              </Link>
              <li>
                <a
                  href="/tentang"
                  className="hover:text-white transition-colors duration-200"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/layanan"
                  className="hover:text-white transition-colors duration-200"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="hover:text-white transition-colors duration-200"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Bantuan & Dukungan */}
          <div>
            <h2 className="font-semibold text-lg text-white mb-3">Bantuan</h2>
            <ul className="space-y-2">
              <Link href={"/"}>
                <p className="hover:text-white transition-colors duration-200">
                  FAQ
                </p>
              </Link>
              <li>
                <a
                  href="/kebijakan-privasi"
                  className="hover:text-white transition-colors duration-200"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a
                  href="/syarat-ketentuan"
                  className="hover:text-white transition-colors duration-200"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-700 my-6" />

        {/* Bagian Bawah Footer: Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} KASIBA.COM. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
