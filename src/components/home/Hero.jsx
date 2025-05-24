import Image from "next/image";
import React from "react";

const Hero = ({ user }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full mx-auto p-12 rounded-lg bg-white shadow-lg mt-4">
      {!user ? (
        <>
          <h1 className="text-2xl text-center lg:text-4xl font-extrabold mb-4 text-green-900">
            Selamat Datang di Website Kami!
          </h1>
          <p className="text-lg text-green-700 max-w-md text-center">
            Nikmati pengalaman terbaik dengan fitur lengkap yang kami sediakan.
          </p>
        </>
      ) : (
        <>
          {user.image && (
            <Image
              src={user.image}
              alt={`${user.name} profile`}
              width={100}
              height={100}
              className="w-28 h-28 rounded-full border-4 border-green-400 shadow-md mb-6"
              loading="lazy"
            />
          )}
          <h1 className="text-5xl font-extrabold mb-2 text-green-900">
            Halo, {user.name}!
          </h1>
          <p className="text-xl text-green-700 text-center">
            Senang melihat kamu kembali. Yuk jelajahi fitur-fitur kami!
          </p>
        </>
      )}
    </section>
  );
};

export default Hero;
