"use client";

import React, { useState } from "react";
import Image from "next/image";
import LoadImages from "./components/LoadImages";
import Background from "./components/Background";
import Card from "./components/Card";
import Title from "./components/Title";
import { FadeUp } from "../(components)/FadeUp";

export default function History() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <main className="bg-[#FBF8F3] relative overflow-hidden">
      <LoadImages />
      <Background isActive={activeCard !== 0} activeCard={activeCard} />
      <div
        className="absolute top-[-120%] left-[-27%] w-[165%] h-[340%] rounded-[100%] md:block hidden"
        style={{
          background:
            "radial-gradient(30.77% 30.77% at 30.77% 50%, rgba(251, 248, 243, 0.00) 61.6%, #FBF8F3 100%)",
        }}
      />

      <div className="w-[100%] h-screen flex items-center justify-center">
        <Title activeCard={activeCard} />
        <div className="w-[75%] sm:w-[60%] lg:w-[35%] h-screen flex items-center justify-center">
          <div
            className="w-[100%] h-[80%] mb-[5%] flex self-end justify-center overflow-auto no-scrollbar space-x-[2%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%",
            }}
          >
            <div className="min-h-[1020px] flex mt-[115px]">
              <Image
                className="object-fill"
                src="/timeline.svg"
                alt="timeline"
                width={15}
                height={1020}
              />
            </div>
            <div className="w-[100%] lg:w-[70%] h-full grid grid-cols-1 justify-items-center content-start py-[60px] gap-y-[60px] mb-[90%]">
              <Card
                year="2023"
                name="Saujana"
                logo="/saujana.svg"
                isActive={activeCard === 1}
                onShow={() => setActiveCard(1)}
              />
              <Card
                year="2020"
                name="Nilanka"
                logo="/nilanka.svg"
                isActive={activeCard === 2}
                onShow={() => setActiveCard(2)}
              />
              <Card
                year="2019"
                name="Arunika"
                logo="/arunika.svg"
                isActive={activeCard === 3}
                onShow={() => setActiveCard(3)}
              />
              <Card
                year="2018"
                name="Lakonna"
                logo="/lakonna.svg"
                isActive={activeCard === 4}
                onShow={() => setActiveCard(4)}
              />
              <Card
                year="2016"
                name="Nirwata"
                logo="/nirwata.svg"
                isActive={activeCard === 5}
                onShow={() => setActiveCard(5)}
              />
              <Card
                year="2015"
                name="Nilam"
                logo="/nilam.svg"
                isActive={activeCard === 6}
                onShow={() => setActiveCard(6)}
              />
              <Card
                year="2014"
                name="Angkara"
                logo="/angkara.svg"
                isActive={activeCard === 7}
                onShow={() => setActiveCard(7)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen flex justify-center items-center bg-[#FBF8F3]">
        <FadeUp x={0} duration={0.5}>
          <p className="font-gyahegi text-[64px] text-black">And Now...</p>
        </FadeUp>
      </div>
    </main>
  );
}
