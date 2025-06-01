import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary-dark text-gray-300 mt-12 pt-10 py-2">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          <div className="md:col-span-1 lg:col-span-1 w-full lg:w-96">
            <h1 className="font-bold text-3xl text-white mb-2">KASIBA.COM</h1>
            <p className="text-sm text-gray-400 text-justify hover:text-gray-300 transition-all">
              Kasiba adalah aplikasi web donasi yang dibuat untuk memudahkan
              siapa saja yang ingin berbagi kebaikan kepada anak-anak di panti
              asuhan. Melalui Kasiba.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg text-white mb-3">Navigasi</h2>
            <ul className="space-y-2">
              <Link href={"/"}>
                <p className="hover:text-white transition-colors duration-200">
                  Beranda
                </p>
              </Link>
              <li>
                <Link href={"/sumbangan"}>
                  <p className="hover:text-white transition-colors duration-200">
                    Sumbangan
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/blog"}>
                  <p className="hover:text-white transition-colors duration-200">
                    Blog
                  </p>
                </Link>
              </li>
            </ul>
          </div>

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

        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} KASIBA.COM. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
