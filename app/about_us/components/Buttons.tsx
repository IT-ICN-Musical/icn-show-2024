import React from 'react'
import Link from 'next/link'
import { BsFillPlayFill } from 'react-icons/bs'

type ButtonProps = {name: string}

export default function Buttons( props: ButtonProps ) {
    const trailers = {
        'saujana': 'https://www.youtube.com/watch?v=U0BXt2__S7Y&t=2s&pp=ygUTaWNuIHNhdWphbmEgdHJhaWxlcg%3D%3D',
        'nilanka': 'https://www.youtube.com/watch?v=GoxZTlc2bFs&pp=ygUTaWNuIG5pbGFua2EgdHJhaWxlcg%3D%3D',
        'arunika': 'https://www.youtube.com/watch?v=SclgRDH05JM&pp=ygUSaWNuIGFydW5pa2F0cmFpbGVy',
        'lakonna': 'https://www.youtube.com/watch?v=x6btfYvzqj0&pp=ygUTaWNuIGxha29ubmEgdHJhaWxlcg%3D%3D',
        'nirwata': 'https://www.youtube.com/watch?v=uHTnPqOYJ9Q&pp=ygUTaWNuIG5pcndhdGEgdHJhaWxlcg%3D%3D',
        'nilam': 'https://www.youtube.com/watch?v=Og5kgG_xUAU&pp=ygURaWNuIG5pbGFtIHRyYWlsZXI%3D',
        'angkara': 'https://www.youtube.com/watch?v=WrIb4dlAWcw&pp=ygUTaWNuIGFuZ2thcmEgdHJhaWxlcg%3D%3D'
    }
    const trailer: string = trailers[props.name as keyof typeof trailers];
    return (
    <>
    <Link href='/about_us'>
        <button
            className='px-[3%] py-[1%] text-black bg-white border-2 border-white rounded-lg drop-shadow-md
            hover:border-[#E8C67A] hover:text-[#E8C67A] duration-300'
        >
            Back
        </button>
    </Link>
    <Link href={trailer}>
        <button className='relative px-[3%] py-[1%] text-black bg-white border-2 border-white rounded-lg drop-shadow-md
            hover:border-[#E8C67A] hover:text-[#E8C67A] hover:pr-[5%] duration-300 group'
        >
            Watch Trailer <BsFillPlayFill className='text-[#E8C67A] inline opacity-0 absolute group-hover:opacity-100 duration-300 bottom-[30%] right-[5%]' />
        </button>
    </Link>
    </>
  )
}
