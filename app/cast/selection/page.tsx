"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { cast } from "../cast";
import "./embla.css";
import EmblaThumb from "@/app/components/EmblaThumb";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";

export default function CastSelectionPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    duration: 45,
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (index !== emblaMainApi.selectedScrollSnap()) {
        emblaMainApi.scrollTo(index);
      } else {
        console.log("double click");
      }
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar transparent="transparent"/>
      <div className="embla absolute inset-0" ref={emblaMainRef}>
        <div className="embla__container">
          {cast.map((c, index) => (
            <div className="embla__slide" key={index}>
              <Image
                className="w-screen h-screen object-cover object-[50%_35%]"
                src={c.image.src}
                alt={c.image.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grow" />
      <div className="z-10 text-white mx-20 my-10">
        <h2 className="z-10 text-base mb-4">Main Cast</h2>
        <h3 className="z-10 font-gyahegi text-3xl relative">
          <span className="invisible">{cast[selectedIndex].name}</span>
          <AnimatePresence mode="sync" initial={false}>
            <motion.span
              key={cast[selectedIndex].name}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0"
            >
              {cast[selectedIndex].name}
            </motion.span>
          </AnimatePresence>
        </h3>
      </div>
      <div
        className="embla px-16 py-8 backdrop-blur-lg bg-[linear-gradient(94deg,rgba(255,255,255,0.60)_-15.81%,rgba(255,255,255,0.10)_107.99%)]"
        ref={emblaThumbsRef}
      >
        <div className="embla__container gap-12">
          {cast.map((c, index) => (
            <EmblaThumb
              className="w-[200px]"
              img={c.image}
              onClick={() => onThumbClick(index)}
              selected={index === selectedIndex}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
