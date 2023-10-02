'use client'

import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: JSX.Element
}

export const FadeUp = ({children}: Props) => {
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
            style={{position: 'relative', zIndex: 10}}
            variants={{
                hidden: {opacity: 0, transform: 'translateY(410px)'},
                visible: {opacity: 1, transform: 'translateY(360px)'},
            }}
            layout
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    </div>
  )
}
