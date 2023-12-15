"use client";

import { useEffect, useState } from "react";
import LandingPage from "./(components)/LandingPage";
import LandingPageContent from "./(components)/LandingPageContent";

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
    <main className="overflow-y-hidden">
      <LandingPage
        openWindow={isOpen}
        scrollable={scrollable}
        setOpenWindow={setIsOpen}
        setScrollable={setScrollable}
      />
      <LandingPageContent />
    </main>
  );
}
