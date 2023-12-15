"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Supported_by() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const images = [
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
    "pintu_logo",
  ] as const;

  return (
    <div className="flex flex-wrap justify-center items-center mx-[10%]">
      {images.map((path: string, i: number) => (
        <motion.div
          ref={ref}
          key={i}
          className="flex items-center justify-center"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: i * 0.13 }}
        >
          <Image
            src={`/${path}.png`}
            alt={path}
            width={111.03}
            height={0}
            className="mx-5 mb-10"
          />
        </motion.div>
      ))}
    </div>
  );
}
