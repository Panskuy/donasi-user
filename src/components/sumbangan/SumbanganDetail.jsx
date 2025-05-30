import React from "react";
import ButtonTambahDonasi from "./ButtonTambahDonasi";
import Image from "next/image";

const SumbanganDetail = ({ sumbangan, user }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full  gap-4">
      <div className="flex flex-col items-center w-fit ">
        <Image
          src={sumbangan.imageUrl || "https://placehold.co/600x400/png"}
          width={600}
          height={400}
          alt={`Image dari ${sumbangan.title}`}
          className="rounded-xl object-cover shadow-lg"
        />

        <div className="w-full mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="w-full lg:w-fit text-center lg:text-start bg-primary-dark text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium">
            Total Semua Donasi:{" "}
            <span className="font-bold">{sumbangan.donasi.length}</span>
          </p>

          {user ? (
            <ButtonTambahDonasi sumbanganId={sumbangan.id} userId={user.id} />
          ) : null}
        </div>
      </div>

      <div className=" w-full">
        <h1 className="text-4xl lg:text-justify font-bold text-text-primary leading-tight  first-letter:uppercase">
          {sumbangan.title}
        </h1>
        <h1 className="text-xl lg:text-justify  text-gray-500 leading-tight mb-3 first-letter:uppercase">
          {sumbangan.location}
        </h1>

        <p className="text-justify text-base leading-relaxed whitespace-pre-line text-text-secondary">
          {sumbangan.description}
        </p>
      </div>
    </div>
  );
};

export default SumbanganDetail;
