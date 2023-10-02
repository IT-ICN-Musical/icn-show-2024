import Image from "next/image";
import React from 'react'
import { FadeUp } from "./FadeUp";
import { FlyInLeft } from "./FlyInLeft";

export default function Graphic() {
  return (
    <div className='w-[360px] h-[360px] items-center relative'>
            <FadeUp>
                <Image
                src='/Asset1.png'
                alt='Asset 1'
                width={159.52}
                height={173.89}
                style={{position: 'absolute', bottom: 0, left: 0, zIndex: 10}}
                />
            </FadeUp>
            
            <FadeUp>
                <Image
                    src='/Asset2.png'
                    alt='Asset 2'
                    width={155.21}
                    height={58.2}
                    style={{position: 'absolute', bottom: "215px", right: "70px", zIndex: 0}}
                />
            </FadeUp>
            
            <FadeUp>
                <Image
                    src='/Asset3.png'
                    alt='Asset 3'
                    width={155.93}
                    height={65.39}
                    style={{position: 'absolute', left: "35px", bottom: "270px", zIndex: 0}}
                />
            </FadeUp>

            <Image className='object-cover'
                src='/Asset4.png'
                alt='Asset 4'
                width={360}
                height={360}
                style={{position: 'absolute', zIndex: 0}}
            />
    </div>
  )
}
