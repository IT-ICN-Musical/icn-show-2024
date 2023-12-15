"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: any;
};

export const ScrollFadeOut = ({ children }: Props) => {
  const mainControls = useAnimation();

  mainControls.start("hidden");

  return (
    <div>
      <motion.div
        style={{ position: "relative", zIndex: 0 }}
        variants={{
          hidden: { opacity: 0, y: -100, x: 0, scale: 0.7 },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="visible"
        animate={mainControls}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
