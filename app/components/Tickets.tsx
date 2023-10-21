'use client'

import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { BsFillCalendarWeekFill } from "react-icons/Bs";

export default function Tickets() {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-[100%] h-screen bg-cover bg-center">
        <div className="h-screen w-[100%] flex justify-center items-center">
            <div className="inline-flex p-[3rem] justify-center items-center absolute space-x-[5.25rem] bg-white rounded-[4rem]">
                <div className="bg-[url('/TicketImage.png')] w-[30rem] h-[13rem] bg-cover bg-center rounded-[1.25rem]" />
                <div className="flex flex-col gap-[24px] ">
                    <div className="flex flex-start align-start gap-[24px]">
                        <FaLocationDot size={20} />
                        <div className="py-[0px]">
                            <p className="font-[600]">
                                Drama Centre Theater
                            </p>
                            <p className="font-[400]">
                                National Library Building Level 3 <br/>
                                100 Victoria Street Singapore 188064
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-start align-start gap-[24px]">
                        <BsFillCalendarWeekFill size={20} />
                        <div className="py-[0px]">
                            <p className="font-[600]">
                                February 1, 2024
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-start align-start gap-[24px]">
                        <FaClock size={20} />
                        <div className="py-[0px]">
                            <p className="font-[600]">
                                15:00 - 19:00
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-start gap-[1rem]">
                        <Button url="home" animate="animate">Buy Tickets</Button>
                        <Button url="home" animate="animate">Watch Trailer</Button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
