"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = ({ user, donasi }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % donasi.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [donasi.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % donasi.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? donasi.length - 1 : prev - 1));
  };

  return (
    <section className=" relative  rounded-lg overflow-hidden shadow-lg mt-8">
      {/* Carousel Container */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {donasi.map((image, index) => (
          <Link
            href={image.href || `/sumbangan/${image.id}`}
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <Image
              src={image.src || "https://placehold.co/600x400/png"}
              alt={image.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay dengan gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-center p-8">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg first-letter:uppercase">
                  {image.title}
                </h1>
                <p className="text-lg lg:text-sm w-full drop-shadow-md line-clamp-2 text-justify">
                  {image.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {donasi.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-75 ease-linear"
          style={{
            width: `${((currentSlide + 1) / donasi.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
