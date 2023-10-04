import Image from "next/image";
import React from 'react'
import { FadeUp } from "./FadeUp";

export default function Graphic() {
  return (
    <div className='w-[360px] h-[360px] items-center relative' style={{clipPath: "border-box"}}>
            <div className="z-20 absolute bottom-0 left-0">
                <FadeUp x={0}>
                    <Image
                    src='/Asset1.png'
                    alt='Asset 1'
                    width={159.52}
                    height={173.89}
                    // style={{bottom: 0, left: 0}}
                    />
                </FadeUp>
            </div>

            <div className="absolute -z-10 bottom-[215px] right-[70px]">
                <FadeUp x={0}>
                    <Image
                        src='/Asset2.png'
                        alt='Asset 2'
                        width={155.21}
                        height={58.2}
                        // style={{position: 'absolute', bottom: "215px", right: "70px", zIndex: -1}}
                    />
                </FadeUp>
            </div>
            
            <div className="absolute left-[35px] bottom-[270px] -z-10">
                <FadeUp x={-20}>
                    <Image
                        src='/Asset3.png'
                        alt='Asset 3'
                        width={155.93}
                        height={65.39}
                        // style={{position: 'absolute', left: "35px", bottom: "270px", zIndex: 1}}
                    />
                </FadeUp>
            </div>

            <div>
                <Image className='object-cover z-0'
                    src='/Asset4.png'
                    alt='Asset 4'
                    width={360}
                    height={360}
                    // style={{zIndex: 0}}
                />
            </div>
    </div>
  )
}
