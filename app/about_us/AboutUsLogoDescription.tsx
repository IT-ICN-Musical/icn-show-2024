"use client";

import React from "react";
import Image from "next/image";
import { FadeUp } from "../(components)/FadeUp";

export default function AboutUsLogoDescription() {
  return (
    <main className="bg-[#FBF8F3] overflow-hidden">
      <div>
        <FadeUp x={0} duration={1}>
          <div className="min-h-[100%] w-screen h-screen bg-cover bg-center bg-[url('/images/landing-page/landing-bunga.png'),_url('/images/landing-page/landing-cloud.png'),_url('/images/landing-page/landing-percik-kecil.png'),_url('/images/landing-page/landing-smoke.png'),_url('/images/landing-page/landing-bg.png')]">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center inset-0 w-screen h-screen">
                <div className="flex justify-center items-center inset-0 w-screen h-screen">
                  <Image
                    src="/images/kaharsa-full.png"
                    alt="Asset 1"
                    width={550}
                    height={0}
                    className="px-10"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
