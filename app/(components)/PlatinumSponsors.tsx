"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function PlatinumSponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

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
        transition={{ duration: 0.3, delay: 0 * 0.13 }}
      >
        <Image
          src={`/images/sponsors-logo/sponsors/Platinum/indomie.png`}
          alt="indomie.png"
          width={250}
          height={0}
          className="mx-10 mb-20 scale-[90%]"
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
          src={`/images/sponsors-logo/sponsors/Platinum/braincode solution.png`}
          alt="braincode.png"
          width={250}
          height={0}
          className="mx-10 mb-20"
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
          src={`/images/sponsors-logo/sponsors/Platinum/samudera.png`}
          alt="samudera.png"
          width={250}
          height={0}
          className="mx-10 mb-20 scale-[180%] px-5"
          loading="eager"
        />
      </motion.div>
    </div>
  );
}
