"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { cast } from "../cast";
import "./embla.css";
import EmblaThumb from "@/app/(components)/EmblaThumb";
import {
  AnimatePresence,
  AnimationProps,
  motion,
  useAnimate,
} from "framer-motion";

const transition: AnimationProps["transition"] = {
  duration: 0.6,
  ease: [0.44, 0, 0.58, 1],
};

/** default carousel height in pixels */
const DEFAULT_CAROUSEL_HEIGHT = 364;

export default function CastSelectionPage() {
  /** Control background carousel and thumbnail carousel
   *  Taken from https://www.embla-carousel.com/examples/predefined/#thumbnails */
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    duration: 45,
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    dragFree: true,
  });
  /** */

  const [scope, animate] = useAnimate();
  const [carouselShrinked, setCarouselShrinked] = useState(false);
  const [thumbShrinked, setThumbShrinked] = useState<undefined | boolean>(
    undefined
  );

  const heightRef = useRef(null);
  const [height, setHeight] = useState(DEFAULT_CAROUSEL_HEIGHT);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (index !== emblaMainApi.selectedScrollSnap()) {
        emblaMainApi.scrollTo(index);
      } else {
        // Runs when the already selected thumbnail is clicked again
        animate(
          scope.current,
          {
            // magic numbers
            x: "95%",
            width: "51.5%",
          },
          {
            duration: 0.6,
            ease: [0.44, 0, 0.58, 1],
            onComplete: () => setCarouselShrinked(true),
          }
        );
        setThumbShrinked(true);
      }
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onBack = () => {
    animate(
      scope.current,
      {
        // magic numbers
        x: "0%",
        width: "151.5%",
      },
      {
        duration: 0.6,
        ease: [0.44, 0, 0.58, 1],
      }
    );
    setCarouselShrinked(false);
    setThumbShrinked(false);
  };

  /** Taken from https://www.embla-carousel.com/examples/predefined/#thumbnails */
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);
  /** */

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  //

  useEffect(() => {
    if (heightRef.current) {
      setHeight(heightRef.current["clientHeight"]);
    }
  }, []);

  return (
    <>
      <button
        onClick={onBack}
        className="absolute top-10 left-10 z-50 bg-slate-200 w-auto px-5 py-3 rounded-full shadow-lg font-medium"
      >
        Back
      </button>
      <div className="w-screen h-screen flex flex-col relative text-white">
        <div className="embla absolute inset-0" ref={emblaMainRef}>
          <div className="embla__container">
            {cast.map((c, index) => (
              <div
                className="embla__slide embla__slide__background"
                key={index}
              >
                <Image
                  className="w-screen h-screen object-cover object-[50%_35%]"
                  src={c.image.src}
                  alt={c.image.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <motion.div
          layout
          className="z-10 flex grow flex-col justify-end px-20 py-10"
          transition={transition}
        >
          <motion.h2
            animate={{
              fontSize: thumbShrinked ? "1.25rem" : "1rem",
              lineHeight: thumbShrinked ? "1.75rem" : "1.5rem",
              fontWeight: thumbShrinked ? 600 : 500,
            }}
            transition={transition}
            initial={false}
            className="z-10 mb-4"
          >
            Main Cast
          </motion.h2>
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
        </motion.div>
        <div
          ref={scope}
          className="z-20 min-h-[33%] flex grow items-center absolute bottom-0 inset-x-0"
        >
          <div ref={heightRef} className="relative">
            {/* Workaround to animate the `background` property */}
            <motion.div
              animate={{ opacity: thumbShrinked ? 0 : 100 }}
              transition={transition}
              className="absolute h-full w-screen inset-x-0 bottom-0 backdrop-blur-lg bg-[linear-gradient(94deg,rgba(255,255,255,0.60)_-15.81%,rgba(255,255,255,0.10)_107.99%)]"
            />
            <motion.h2
              animate={{ opacity: thumbShrinked ? 1 : 0 }}
              // Slight delay to ensure `h2` does not move while animating opacity
              transition={{ ...transition, delay: thumbShrinked ? 0.3 : 0 }}
              initial={false}
              className="absolute -top-2 left-20 -m-4 z-20 text-xl font-bold mb-4"
            >
              Other Casts
            </motion.h2>
            <div
              className="embla relative h-full flex px-16 py-8 "
              ref={emblaThumbsRef}
            >
              <div className="embla__container gap-12">
                {cast.map((c, index) => (
                  <EmblaThumb
                    img={c.image}
                    onClick={() => onThumbClick(index)}
                    selected={index === selectedIndex}
                    shrinked={thumbShrinked}
                    index={index}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <motion.div
          animate={{
            height: thumbShrinked ? "18%" : height,
            marginBottom: thumbShrinked ? "2rem" : 0,
          }}
          transition={transition}
          initial={false}
          className="px-20 w-1/2 overflow-hidden"
          style={{ zIndex: carouselShrinked ? 20 : 10 }}
        >
          <p>{cast[selectedIndex].desc}</p>
        </motion.div>
      </div>
    </>
  );
}
