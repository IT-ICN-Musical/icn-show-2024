"use client";

import React from "react";
import Button from "./Button";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { FadeUp } from "./FadeUp";

export default function Tickets() {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-[100%] h-screen bg-cover bg-center">
      <div className="h-screen w-[100%] flex justify-center items-center">
        <FadeUp x={0} duration={0.5}>
          <div className="inline-flex p-[2rem] lg:p-[3rem] justify-center flex-col lg:flex-row items-center lg:space-x-[5.25rem] bg-white rounded-[4rem]">
            <div className="bg-[url('/images/cast/main-cast.jpg')] w-72 h-48 sm:w-[30rem] sm:h-[15rem] bg-cover bg-center rounded-[1.25rem]" />
            <div className="flex flex-col gap-[24px]  mt-7 lg:mt-0">
              <div className="flex flex-start align-start gap-[24px]">
                <FaLocationDot size={20} />
                <div className="py-[0px]">
                  <p className="font-[600]">Drama Centre Theater</p>
                  <p className="font-[400]">
                    National Library Building Level 3 <br />
                    100 Victoria Street Singapore 188064
                  </p>
                </div>
              </div>
              <div className="flex flex-start align-start gap-[24px]">
                <BsFillCalendarWeekFill size={20} />
                <div className="py-[0px]">
                  <p className="font-[600]">February 3, 2024</p>
                </div>
              </div>
              <div className="flex flex-start align-start gap-[24px]">
                <FaClock size={20} />
                <div className="py-[0px]">
                  <p className="font-[600]">Matinee&nbsp; 14.00 - 16.45 SGT</p>
                  <p className="font-[600]">
                    Night&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 19.00 - 21.45 SGT
                  </p>
                </div>
              </div>
              <div className="flex flex-start justify-center gap-[1rem]">
                <Button url="./store" animate="animate">
                  Buy Tickets
                </Button>
                <Button
                  url="https://youtu.be/8OL-IFmio-M"
                  animate="animate"
                  outsideURL={true}
                >
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
