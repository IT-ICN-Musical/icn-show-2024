"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function GoldSponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const images = [
    "BISA.png",
    "ivori.png",
    "Elsound.png",
    "Wardaya College.png",
    "Decrin.png",
  ] as const;

  return (
    <div className="flex flex-wrap justify-center items-center mx-[10%]">
      <motion.div
        ref={ref}
        key={0}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/Hillcon.png`}
          alt="Hillcon.png"
          width={170}
          height={0}
          className="mx-5 mb-10"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={1}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 1 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/Bank Indonesia.png`}
          alt="Bank Indonesia.png"
          width={170}
          height={0}
          className="mx-5 mb-10 scale-[120%]"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={2}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 2 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/BISA.png`}
          alt="BISA.png"
          width={170}
          height={0}
          className="mx-5 mb-10"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={3}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 3 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/ivori.png`}
          alt="ivori.png"
          width={170}
          height={0}
          className="mx-5 mb-10"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={4}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 4 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/Elsound.png`}
          alt="Elsound.png"
          width={170}
          height={0}
          className="mx-5 mb-10 scale-90"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={5}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 5 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/Wardaya College.png`}
          alt="Wardaya College.png"
          width={170}
          height={0}
          className="mx-5 mb-10"
          loading="eager"
        />
      </motion.div>

      <motion.div
        ref={ref}
        key={6}
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 6 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Gold/Decrin.png`}
          alt="Decrin.png"
          width={170}
          height={0}
          className="mx-5 mb-10"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
