'use client'

import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa"

type ActiveCardProps = { year: string, name: string, logo: string }

export default function ActiveCard(props: ActiveCardProps) {
  return (
    <button className='relative flex w-[75%] min-h-[110px] bg-white rounded-2xl pl-[10%] pr-[7%] drop-shadow-md items-center justify-between overflow-hidden'>

      <Image
        className='object-cover absolute'
        style={{maskImage: "linear-gradient(to right, rgb(0,0,0,0), rgb(0,0,0,1))", WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"}}
        src='/batik_minang.svg'
        alt='batik'
        layout='fill'
      />
      <div className='max-w-[50%] h-[100%] flex flex-col py-[12px] justify-between items-stretch self-start'>
        <div className='self-start'>
          <p className='text-[12px]'>
            {props.year}
          </p>
        </div>
        <div className='self-end mb-[5%] text-left'>
          <p className='font-gyahegi text-[16px] mt-[5%]'>
            {props.name}
          </p>
          <p className='text-[10px] mt-[10%]'>
            Read More <FaArrowRight className='inline' />
          </p>
        </div>
      </div>
      <div className='flex max-w-[45%] max-h-[75%] justify-right relative'>
        <Image
          className='object-contain'
          src={props.logo}
          alt={props.name}
          width={160}
          height={160}
        />
      </div>
      
    </button>
  )
}
