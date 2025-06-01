"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const HeroList = [
    {
      title: "Mari Bersama Membentuk Masa Depan yang Lebih Cerah!",
      description:
        "Dengan kebersamaan, kita bukan hanya menjadi lebih kuat—kita menjadi harapan bagi mereka yang membutuhkan. Bergabunglah bersama kami dan jadilah bagian dari perubahan nyata!",
      link: "https://forms.gle/SWcLsbCLeFBxYWnTA",
      image: "/images/senyum-anak-yatim.jpg",
    },
    {
      title: "Buka Hati Anda, Ulurkan Tangan untuk Mereka!",
      description:
        "Setiap rupiah yang Anda donasikan adalah cahaya bagi anak-anak yatim dan piatu untuk meraih masa depan yang lebih baik. Jadilah alasan di balik senyum dan harapan mereka hari ini.",
      link: "/sumbangan",
      image: "/images/hero-page1.png",
    },
  ];

  return (
    <div className="mt-16">
      <Carousel>
        <CarouselContent options={{ perView: 2, gap: "0.5rem" }}>
          {HeroList.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <Link href={item.link}>
                  <div className="relative w-full h-96 lg:h-[500px] p-2">
                    <Image
                      src={item.image}
                      alt="Background Image"
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />

                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/0 to-black/80 flex flex-col justify-center items-center lg:items-start lg:justify-end p-8 text-center">
                      <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                        {item.title}
                      </h1>
                      <p className=" text-md text-white drop-shadow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
