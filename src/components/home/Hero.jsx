"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

const Hero = ({ blog }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="mt-16">
      <Carousel>
        <CarouselContent options={{ perView: 2, gap: "0.5rem" }} ref={emblaRef}>
          {blog.map((item) => {
            return (
              <CarouselItem className="basis-1/2" key={item.id}>
                <Link href={`/sumbangan/${item.sumbangan.id}`}>
                  <div className="w-full h-60 p-2">
                    <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-700 rounded-lg text-white flex flex-col items-center justify-between p-4">
                      <div className="w-full">{item.sumbangan.location}</div>
                      <div className="text-center">
                        <h1 className="text-xl font-bold  text-white">
                          {item.title}
                        </h1>
                        <p className="mt-2 text-sm ">{item.content}</p>
                      </div>
                      <div className="w-full text-end">
                        {item.sumbangan.location}
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}

          <CarouselItem>
            <Link href={"https://forms.gle/SWcLsbCLeFBxYWnTA"}>
              <div className="w-full h-60 p-2">
                <div className="w-full h-full bg-gradient-to-b from-green-400 to-green-700 rounded-lg flex flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold text-center text-white">
                    Daftar Sumbangan
                  </h1>
                  <p className="mt-2 text-sm text-white">Daftar Sekarang!</p>
                </div>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
