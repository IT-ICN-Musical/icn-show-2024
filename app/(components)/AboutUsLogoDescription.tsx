"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollFadeOut } from "./ScrollFadeOut";
import { ScrollFadeIn } from "./ScrollFadeIn";
import Navbar from "./Navbar";

export default function AboutUsLogoDescription() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-[100%] w-screen h-screen bg-cover bg-center bg-[url('/landing/bunga.png'),_url('/landing/cloud.png'),_url('/landing/percik-kecil.png'),_url('/landing/smoke.png'),_url('/landing/bg.png')]">
      <Navbar />
      <div className="flex flex-col items-center">
        {scroll < 200 ? (
          <div className="flex justify-center items-center inset-0 w-screen h-screen">
            <div className="w-[640px]">
              <p className="font-[400] text-center text-[#FBF8F3]">
                And Now...
              </p>
            </div>
          </div>
        ) : scroll < 400 ? (
          <div className="flex justify-center items-center inset-0 w-screen h-screen">
            <div className="flex justify-center items-center inset-0 w-screen h-screen">
              <Image
                src="/ICN-logo.png"
                alt="Asset 1"
                width={557}
                height={496}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center inset-0 w-screen h-screen">
            <div className="w-[640px]">
              <p className="font-[400] text-center text-[#FBF8F3]">
                Galih, fueled by a fervent desire for fame, sets out on a
                journey to Jakarta, leaving behind the familiarity of home.
                Alongside his sister Laras' pursuit of acting dreams, their
                divergent paths unfold against the backdrop of Indonesia's
                burgeoning music scene in the 1970s. As Galih faces harsh
                realities and shattered illusions in pursuit of stardom, will he
                discover that true fulfillment lies not in fame but in embracing
                the present moment? His journey raises a poignant question: Can
                one reconcile ambition with the simple joy of living?
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
