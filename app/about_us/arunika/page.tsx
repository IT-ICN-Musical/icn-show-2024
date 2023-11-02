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
                    src='/arunika.svg'
                    alt="arunika"
                    width={160}
                    height={160}
                />
                <p className='flex font-gyahegi text-6xl'>
                    Arunika
                </p>
            </div>

            <div className='flex w-[100%] justify-center mt-[3%] space-x-[6%] px-[10%]'>
                <div className=' flex max-w-[60%] self-start'>
                  <Image
                      className='rounded-2xl'
                      src='/arunika_bg.svg'
                      alt='arunika_bg'
                      width={650}
                      height={650}
                      loading='lazy'
                  />
                </div>
                <div className='grid grid-cols-1 max-w-[40%] self-start mb-[5%]'>
                    <p className='text-md'>
                    In the early nineteenth century, Batavia was the capital of the trading giant: the Dutch East India Company. Many Dutch traders enslaved native people from different parts of the Indonesian archipelago, giving rise to discrimination and violence within the social hierarchy.
                    <br/><br/>
                    The vibrant city was home to Anika, a Dutch-Indonesian girl with a big dream, and her down-to-earth mother, Ningsih, who had always advised her to be aware of their social standing. As her Dutch father left before she was born, she became ostracized by her peers--her only friend being a friendly slave girl from the Moluccan village, Deya. One day, they met a new slave boy, Raka, who showed his desire to escape and rebel against the oppression of the Dutch.
                    <br/><br/>
                    At the same time, the company was facing bankruptcy, which affected the lives of the Dutch traders in Batavia. One of them being Gustaaf, the owner of Deya and Raka. As he was troubled by the situation in Batavia, his old friend and a Dutch officer, Clement, came to Batavia with an attempt to challenge the status quo.
                    <br/><br/>
                    As the characters’ lives intertwined with each unexpected turn of events, stories were told, the past was revealed, and difficult choices must be made.
                    </p>
                    <div className='space-x-[5%] mt-[5%]'>
                        <Buttons name={'arunika'} />
                    </div>
                </div>
            </div>

        </div>

    </main>
  )
}
