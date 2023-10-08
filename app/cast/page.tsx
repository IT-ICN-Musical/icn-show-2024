"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

type ImageType = {
  text: string;
  src: string;
  className: string;
};

const images: ImageType[] = [
  {
    text: "Supporting Cast",
    src: "/assets/cast/supporting-cast.jpeg",
    className: "object-[0%_10%]", // use this to adjust the large background position
  },
  {
    text: "Main Cast",
    src: "/assets/cast/main-cast.jpeg",
    className: "object-[0%_85%]",
  },
  {
    text: "People behind the Scene",
    src: "/assets/cast/crew.jpeg",
    className: "object-[0%_45%]",
  },
];

export default function CastPage() {
  const [curIndex, setCurIndex] = useState<number>(1);
  return (
    <main className="relative w-screen min-h-screen bg-black overflow-x-hidden">
      {/* Main Carousel Component */}
      <div className="overflow-hidden">
        <div
          className="w-[300vw] h-screen flex flex-row transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(curIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => {
            return (
              <div
                className="relative h-full w-screen overflow-hidden"
                key={index}
              >
                <Image
                  src={image.src}
                  alt={image.text}
                  className={image.className}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "radial-gradient(84.86% 84.86% at 50% 29.05%, rgba(0, 0, 0, 0.03) 0%, rgba(9, 32, 84, 0.60) 100%)",
        }}
      ></div>
      <div className="absolute bottom-[10%] left-2/4 -translate-x-2/4 w-fit h-2/5">
        <div
          className="relative w-fit h-full flex flex-row justify-center transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${((1 - curIndex) * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => {
            return (
              <div className="px-7">
                <div
                  className={clsx(
                    "relative aspect-[3/4] h-full rounded-3xl overflow-hidden bg-black",
                    index == curIndex ? "scale-[1.2]" : "hover:scale-105",
                    "transition-all duration-700 ease-in-out cursor-pointer"
                  )}
                  key={index}
                  onClick={() => setCurIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.text}
                    fill
                    objectFit="cover"
                    className="opacity-70"
                  />
                  <p
                    className={clsx(
                      "absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 font-gyahegi text-center text-white",
                      index !== curIndex ? "opacity-0" : "opacity-100",
                      "transition-opacity duration-700 ease-in-out"
                    )}
                  >
                    {image.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
