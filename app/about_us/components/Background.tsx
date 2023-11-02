import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion'

type BackgroundProps = { isActive: boolean, activeCard: number}

export default function Card(props: BackgroundProps) {

    const backgroundImages = [
        "/saujana_bg.svg",
        "/nilanka_bg.svg",
        "/arunika_bg.svg",
        "/lakonna_bg.svg",
        "/nirwata_bg.svg",
        "/nilam_bg.svg",
        "/angkara_bg.svg"
      ]

    if(props.isActive) {
        return (
            <div className='w-full h-screen absolute'>
                <motion.div
                    key={props.activeCard}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    duration: 2.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                >
                    <Image src={backgroundImages[props.activeCard-1]} alt='background' width={1500} height={1500} priority={true}/>
                </motion.div>
            </div>
        )     
    }
}
