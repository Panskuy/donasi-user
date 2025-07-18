import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kasiba",
  description: "Donasi untuk kebaikan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased tracking-tight bg-background-light`}
      >
        <Toaster position="top-center" />
        <Navbar />
        <main className="min-h-screen py-16 w-full max-w-[1800px] mx-auto px-2">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
