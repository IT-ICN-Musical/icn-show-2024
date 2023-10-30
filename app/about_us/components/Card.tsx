'use client'

import React from 'react'
import ActiveCard from './ActiveCard'
import Image from 'next/image'

type CardProps = { year: string, name: string, logo: string, isActive: boolean, onShow: React.MouseEventHandler<HTMLButtonElement>}

export default function Card(props: CardProps) {
  if(props.isActive) {
    return (
      <ActiveCard year={props.year} name={props.name} logo={props.logo} />
    )
  }
  return (
    <button onClick={props.onShow} className='flex w-[75%] min-h-[110px] bg-white rounded-2xl pl-[10%] pr-[7%] drop-shadow-md items-center justify-between'>

      <div className='max-w-[50%] h-[100%] flex flex-col py-[12px] justify-between items-stretch'>
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
            Explore
          </p>
        </div>
      </div>

      <div className='flex max-w-[40%] max-h-[60%] justify-right'>
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
