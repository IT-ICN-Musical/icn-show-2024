'use client'

import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: JSX.Element
    x: number
}

export const FadeUp = ({children, x}: Props) => {
const ref = useRef(null)
const isInView = useInView(ref, {once: true})

const mainControls = useAnimation()

useEffect(() => {
    if(isInView) {
        mainControls.start('visible')
    }
}, [isInView])

  return (
    <div ref={ref}>
        <motion.div 
            // style={{position: 'relative', zIndex: 10}}
            variants={{
                hidden: {opacity: 0, y: 100, x: x},
                visible: {opacity: 1, y: 0, x: 0},
            }}
            layout
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.2, delay: 0.3}}
        >
            {children}
        </motion.div>
    </div>
  )
}
