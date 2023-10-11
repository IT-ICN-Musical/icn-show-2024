import React from 'react'
import Graphic from './Graphic'
import Supported_by from './Supported_by'
import { FlyInLeft } from './FlyInLeft'
import { FlyInRight } from './FlyinRight'

export default function Synopsis() {
  return (
    <main className='bg-[#FBF8F3]'>

      <div className='h-screen w-[100%] flex justify-center items-center'>
        <div className='w-[640px]'>
          <p className='text-center text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut et ex diam. Nulla porttitor arcu nisl, non tincidunt elit gravida vel.
            Fusce eget mi pharetra, hendrerit diam sit amet, consequat purus.
            Aliquam tincidunt mollis augue, vel feugiat justo pulvinar sit amet.
            Integer ante ligula, maximus eu maximus eget, elementum et erat.
          </p>
        </div>
      </div>

      <div className='h-screen w-[100%] flex justify-center items-center'>
        <div className='w-[1134px] flex justify-center items-center space-x-[120px]'>
          
          <FlyInLeft>
            <Graphic />
          </FlyInLeft>

          <FlyInRight>
            <div className='w-[419px] h-[94px]'>
              <p className='font-gyahegi text-header text-[16px] text-center'>
                In the beginning...
              </p>
              <p className='mt-5 text-[16px] text-center'>
              Galih, a young boy from a small village in Minangkabau, has an unwavering passion for music and dreams of becoming a pop star.
              </p>
            </div>
          </FlyInRight>

        </div>
      </div>

      <div className='h-screen w-[100%] flex justify-center items-center'>
        <div className='w-[1134px] flex justify-center items-center space-x-[120px]'>
          
          <FlyInLeft>
            <div className='w-[419px] h-[166px]'>
              <p className='font-gyahegi text-header text-[16px] text-center'>
                As the journey continues...
              </p>
              <p className='mt-5 text-[16px] text-center'>
              Inspired by his sister, Laras, he sets off on a journey to Jakarta to pursue his career in the entertainment industry.
              However, he quickly realizes that the city is not as glamorous as he had envisioned.
              Despite his best efforts, Galih struggles to capture the attention of record labels and loses sight of his life's purpose.
              </p>
            </div>
          </FlyInLeft>

          <FlyInRight>
            <Graphic />
          </FlyInRight>

        </div>
      </div>

      <div className='h-screen w-[100%] flex justify-center items-center'>
        <div className='w-[1134px] flex justify-center items-center space-x-[120px]'>
          
          <FlyInLeft>
            <Graphic />
          </FlyInLeft>

          <FlyInRight>
            <div className='w-[419px] h-[142px]'>
              <p className='font-gyahegi text-header text-[16px] text-center'>
                Finally...
              </p>
              <p className='mt-5 text-[16px] text-center'>
              To make matters worse, Galih discovers that his sister's success may not be what it seems.
              Nevertheless, with the help of his new friends that he befriended along the way,
              Galih learns to reconcile with life and reassess what it means to live.
              </p>
            </div>
          </FlyInRight>

        </div>
      </div>

      <div className='w-[100%] h-screen flex justify-center items-center'>
        <div className='w-[850px] flex flex-col space-y-[40px]'>
          <p className='font-gyahegi text-body text-[32px] text-center'>
            Supported By
          </p>
          <Supported_by />
        </div>
      </div>



    </main>
  )
}
