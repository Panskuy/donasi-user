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
      title: "judul",
      description: "deskripsi",
      link: `/sumbangan/67360530-4e3f-4fc4-8913-79a17f6256cd`,
    },
    {
      title: "judul",
      description: "deskripsi",
      link: `/sumbangan/67360530-4e3f-4fc4-8913-79a17f6256cd`,
      image: "/images/senyum-anak-yatim.jpg",
    },
  ];
  return (
    <div className="mt-16">
      <Carousel>
        <CarouselContent options={{ perView: 2, gap: "0.5rem" }}>
          <CarouselItem>
            <Link href="https://forms.gle/SWcLsbCLeFBxYWnTA">
              <div className="relative w-full h-96 lg:h-[500px] p-2">
                <Image
                  src="/images/senyum-anak-yatim.jpg"
                  alt="Background Image"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />

                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-black/0 to-black/60 flex flex-col justify-center items-center lg:items-start lg:justify-end p-8 text-center">
                  <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                    Daftar Panti Asuhan Sekarang!
                  </h1>
                  <p className=" text-md text-white drop-shadow">
                    Daftar Sekarang!
                  </p>
                </div>
              </div>
            </Link>
          </CarouselItem>

          {HeroList.map((item, index) => {
            return (
              <CarouselItem className=" " key={index}>
                <Link href={`${item.link}`}>
                  <div className="w-full h-96 lg:h-[500px] p-2">
                    <div className="w-full h-full bg-gradient-to-b from-black/80 to-black rounded-2xl text-white flex flex-col justify-center items-center lg:items-start lg:justify-end  p-4">
                      <div>
                        <h1 className="font-bold text-3xl">{item.title}</h1>
                        <p className="text-lg">{item.description}</p>
                      </div>
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
