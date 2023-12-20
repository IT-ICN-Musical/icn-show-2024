"use client";

import { useEffect, useState } from "react";
import LandingPage from "./(components)/LandingPage";
import LandingPageContent from "./(components)/LandingPageContent";
import Navbar from "./(components)/Navbar";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar attribute="home" scrollable={scrollable} />
      <LandingPage
        openWindow={isOpen}
        scrollable={scrollable}
        setOpenWindow={setIsOpen}
        setScrollable={setScrollable}
      />
      {scrollable ? <LandingPageContent /> : null}
    </main>
  );
}
