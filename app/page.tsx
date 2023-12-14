"use client";

import Synopsis from "./components/Synopsis";
import { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollable, setScrollable] = useState<boolean>(false);

  useEffect(() => {
    if (scrollable) {
      document.body.style.overflow = "overlay";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [scrollable]);

  return (
    <>
      <LandingPage
        openWindow={isOpen}
        scrollable={scrollable}
        setOpenWindow={setIsOpen}
        setScrollable={setScrollable}
      />
      <Synopsis />
    </>
  );
}
