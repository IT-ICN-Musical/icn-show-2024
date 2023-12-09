'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ScrollFadeOut } from "./ScrollFadeOut";
import { ScrollFadeIn } from "./ScrollFadeIn";
import Navbar from "./Navbar";

export default function AboutUsLogoDescription() {
  const [scroll, setScroll] = useState(false)
  
  const handleScroll = () => {
    setScroll(true)
  }

  useEffect(()=>{
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll)
      }
  })

  return (
    <main className="min-h-[100%] w-screen h-screen bg-cover bg-center bg-[url('/landing/bunga.png'),_url('/landing/cloud.png'),_url('/landing/percik-kecil.png'),_url('/landing/smoke.png'),_url('/landing/bg.png')]">
      <Navbar disable={scroll==false}/>
      <div className="min-h-[100%] w-screen h-screen bg-cover bg-center bg-[url('/landing/star.png')] animate-[pulse_1.25s_ease-in-out_infinite]" />
      <div className="flex justify-center items-center absolute inset-0">
        <ScrollFadeOut scroll={scroll}>
            <Image
            src='/ICN-logo.png'
            alt='Asset 1'
            width={557}
            height={496}              
            />
        </ScrollFadeOut>
      </div>
      <div className="flex justify-center items-center absolute inset-0">
        <ScrollFadeIn scroll={scroll}>
          <div className="w-[640px]">
            <p className="font-[400] text-center text-[#FBF8F3]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ex diam. Nulla porttitor arcu nisl, non tincidunt elit gravida vel. Fusce eget mi pharetra, hendrerit diam sit amet, consequat purus. Aliquam tincidunt mollis augue, vel feugiat justo pulvinar sit amet. Integer ante ligula, maximus eu maximus eget, elementum et erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et ex diam. Nulla porttitor arcu nisl, non tincidunt elit gravida vel. Fusce eget mi pharetra, hendrerit diam sit amet, consequat purus. Aliquam tincidunt mollis augue, vel feugiat justo pulvinar sit amet. Integer ante ligula, maximus eu maximus eget, elementum et erat.
            </p>
          </div>
        </ScrollFadeIn>
      </div>
    </main>
  );
}
