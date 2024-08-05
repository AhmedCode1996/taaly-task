"use client";

import Image from "next/image";
import React from "react";

const CarouselItem = ({
  id,
  title,
  location,
  description,
  lightColor,
  darkColor,
}: {
  id: number;
  title: string;
  location: string;
  description: string;
  lightColor: string;
  darkColor: string;
}) => {
  return (
    <article
      style={{ backgroundColor: lightColor }}
      className={`p-6 flex flex-col gap-1 text-[#04001A] rounded-2xl relative`}
    >
      <Image
        className="absolute top-0 left-6 z-0 invert-0 stroke-[#C3E763] "
        src="/assets/carousel/top.svg"
        alt="top carousel floating image"
        width={280}
        height={270}
      />
      <p className="font-semibold text-[1.8rem] leading-8 z-10">{title}</p>
      <p className="font-semibold text-base z-10">{location}</p>
      <p className="font-semibold text-base max-w-[70%] z-10">{description}</p>
      <button
        style={{ backgroundColor: darkColor }}
        className="capitalize w-fit rounded-[4px] p-2 leading-5 self-end mt-6 font-semibold text-[14px]"
      >
        details
      </button>
    </article>
  );
};

export default CarouselItem;
