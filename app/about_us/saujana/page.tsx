'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function page() {
  return (
    <main className='bg-[#FBF8F3]'>

        <div className='w-[100%] h-screen overflow-hidden'>

            <div className='flex w-[100%] justify-center items-center mt-[8%] space-x-[5%]'>
                <Image
                className='flex object-cover'
                    src='/saujana.svg'
                    alt="saujana"
                    width={160}
                    height={160}
                />
                <p className='flex font-gyahegi text-6xl'>
                    Saujana
                </p>
            </div>

            <div className='flex w-[100%] justify-center items-center mt-[3%] space-x-[6%] px-[10%]'>
                <Image
                className='flex object-cover rounded-2xl'
                    src='/saujana_bg.svg'
                    alt="saujana"
                    width={650}
                    height={650}
                />
                <div className='grid grid-cols-1 max-w-[40%] self-start'>
                    <p className='text-md'>
                        In the fog of war of the constant moral battles that are waged amongst us these days, we often forget those that are left behind...
                        <br/><br/>
                        The quintessential modern-day teenager: rough, gruff and a bit hypocritical. The epitome of modern-day parenting: sincere, 
                        semi-progressive and somewhat confused about what is happening these days. Between all the fighting and bereaving, there are those who are left alone, 
                        who try to fix this house built on sand.
                        <br/><br/>
                        ICN 2023 tells the story of those that we leave behind in the fight for righteousness through a modern-day Indonesian lens, 
                        and examines how those affected get on with life and try to stay strong in an increasingly hostile and divisive world.
                        <br/><br/>
                    </p>
                    <div className='space-x-[5%]'>
                        <button 
                            className='px-[3%] py-[1%] text-black bg-white border-2 border-white rounded-lg drop-shadow-md 
                            hover:border-[#E8C67A] hover:text-[#E8C67A] duration-300'
                        > 
                            Back
                        </button>
                        <button className='px-[3%] py-[1%] text-black bg-white border-2 border-white rounded-lg drop-shadow-md 
                            hover:border-[#E8C67A] hover:text-[#E8C67A] duration-300'
                        > 
                            Watch Trailer
                        </button>
                        
                    </div>
                </div>
            </div>

        </div>

    </main>
  )
}
