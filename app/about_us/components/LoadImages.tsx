import React from 'react'
import Image from 'next/image'

export default function LoadImages() {
  return (
    <>
      <Image
        className='opacity-0 absolute'
        src='/saujana_bg.svg'
        alt='saujana_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/nilanka_bg.svg'
        alt='nilanka_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/arunika_bg.svg'
        alt='arunika_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/lakonna_bg.svg'
        alt='lakonna_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/nirwata_bg.svg'
        alt='nirwata_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/nilam_bg.svg'
        alt='nilam_load'
        fill
      />
      <Image
        className='opacity-0 absolute'
        src='/angkara_bg.svg'
        alt='angkara_load'
        fill
      />
    </>
  )
}
