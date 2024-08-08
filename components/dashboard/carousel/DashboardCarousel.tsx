"use client";

import { useState } from "react";
import Image from "next/image";
import CarouselWrapper from "./CarouselWrapper";

const DashboardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <div className="overflow-hidden pl-3">
      <div className="relative">
        <div
          onClick={nextSlide}
          className="absolute z-20 cursor-pointer top-[50%] right-0 w-12 h-12 rounded-[50%] flex items-center justify-center bg-white"
        >
          <Image
            src="/assets/carousel/right-arrow.svg"
            alt="right carousel arrow"
            width={16}
            height={16}
          />
        </div>

        <CarouselWrapper currentSlide={currentSlide} />

        <div
          onClick={prevSlide}
          className="absolute z-20 cursor-pointer top-[50%] -left-3 w-12 h-12 rounded-[50%] flex items-center justify-center bg-white"
        >
          <Image
            src="/assets/carousel/left-arrow.svg"
            alt="left carousel arrow"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCarousel;
