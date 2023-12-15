"use client";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../(components)/Navbar";

type ImageType = {
  text: string;
  src: string;
  className: string;
  link: string | null;
  isCastDetailAvailable: boolean;
};

const images: ImageType[] = [
  {
    text: "Supporting Cast",
    src: "/images/cast/supporting-cast.jpg",
    className: "object-[0%_10%]", // use this to adjust the large background position
    link: null,
    isCastDetailAvailable: false,
  },
  {
    text: "Main Cast",
    src: "/images/cast/main-cast.jpg",
    className: "object-[0%_85%]",
    link: "cast/selection",
    isCastDetailAvailable: true,
  },
  {
    text: "People behind the Scene",
    src: "/images/cast/tops.jpg",
    className: "object-[0%_45%]",
    link: null,
    isCastDetailAvailable: false,
  },
];

export default function CastPage() {
  const router = useRouter();
  const [curIndex, setCurIndex] = useState<number>(1);

  const handleImageDoubleClick = (link: string | null) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <main className="relative w-screen min-h-screen bg-black overflow-x-hidden">
      {/* Main Carousel Component */}

      <div className="overflow-hidden">
        <Navbar />
        <div
          className="w-[300vw] h-screen flex flex-row transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(curIndex * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => {
            return (
              <div className="relative h-full w-screen" key={index}>
                <Image
                  src={image.src}
                  alt={image.text}
                  className={`${image.className} object-center object-cover`}
                  fill
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
      <div className="absolute bottom-[10%] left-2/4 -translate-x-2/4 w-fit sm:h-2/5 h-1/3">
        <div
          className="relative w-fit h-full flex flex-row justify-center transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${((1 - curIndex) * 100) / images.length}%)`,
          }}
        >
          {images.map((image, index) => {
            return (
              <div key={index} className="px-7">
                <div
                  className={clsx(
                    "relative aspect-[3/4] h-full rounded-3xl overflow-hidden bg-black",
                    index == curIndex ? "scale-[1.2]" : "hover:scale-105",
                    "transition-all duration-700 ease-in-out cursor-pointer"
                  )}
                  key={index}
                  onClick={() => setCurIndex(index)}
                  onDoubleClick={() => handleImageDoubleClick(image.link)}
                >
                  <Image
                    src={image.src}
                    alt={image.text}
                    fill
                    sizes="100%"
                    className="opacity-70 object-cover"
                  />
                  <div
                    className={clsx(
                      "absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 font-gyahegi text-center text-white",
                      index !== curIndex ? "opacity-0" : "opacity-100",
                      "transition-opacity duration-700 ease-in-out"
                    )}
                  >
                    {image.text}

                    {image.isCastDetailAvailable && (
                      <div className="text-xs font-serif pt-4">
                        Double Click to See More
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
