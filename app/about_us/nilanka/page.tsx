import React from 'react'
import Image from 'next/image'
import Buttons from '../components/Buttons'

export default function page() {
  return (
    <main className='bg-[#FBF8F3] overflow-hidden'>

        <div className='w-[100%] h-screen overflow-auto'>

            <div className='flex w-[100%] justify-center items-center mt-[8%] space-x-[5%]'>
                <Image
                className='flex object-cover'
                    src='/nilanka.svg'
                    alt="nilanka"
                    width={160}
                    height={160}
                />
                <p className='flex font-gyahegi text-6xl'>
                    Nilanka
                </p>
            </div>

            <div className='flex w-[100%] justify-center mt-[3%] space-x-[6%] px-[10%]'>
              <div className='flex max-w-[60%] self-start'>
                  <Image
                  className='rounded-2xl'
                      src='/nilanka_bg.svg'
                      alt='nilanka_bg'
                      width={650}
                      height={650}
                      loading='lazy'
                  />
                </div>
                <div className='grid grid-cols-1 max-w-[40%] self-start mb-[5%]'>
                    <p className='text-md'>
                      The aftermath of a civil war in the late nineteenth century saw the emergence of various family groups of the Batak tribe in North Sumatra.
                      A kingdom in the East is home to Arta, the crown prince, whose leadership style has always been questioned by the people. Deemed spineless and weak, 
                      Arta loses confidence each day closer to his coronation despite constant reassurance from his doting sister Manik.
                      Their fierce uncle, Kareang, is a visionary with an ambitious plan for the kingdom. As a wise temporary ruler, his plan is catalysed by Hasea, 
                      a royal physician, who is captivated by the king’s charm.
                      <br/><br/>
                      Across the forest stands the kingdom of the West, led by Batara, who is known for his unrivaled wisdom. Greatly respected by his people, 
                      the only person whom he cannot seem to get through to is his beloved daughter, Nihita.
                      <br/><br/>  
                      Restricted by the expectations of being a graceful princess, Nihita longs to break free and prove her worth to lead the kingdom as an equal. 
                      Yet, her father hardly even lets her out of the palace walls.
                      A retelling of the Batak folklore 'Dayang Bandir and Sandean Raja', Nilanka chronicles the characters' intertwined journey in fighting for their own purpose. 
                      When a decision goes wrong, one step could change the course of their lives - forever.
                    </p>
                    <div className='space-x-[5%] mt-[5%]'>
                        <Buttons name={'nilanka'} />
                    </div>
                </div>
            </div>

        </div>

    </main>
  )
}
