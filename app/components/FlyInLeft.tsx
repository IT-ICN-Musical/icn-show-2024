'use client'

import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
    children: JSX.Element
}

export const FlyInLeft = ({children}: Props) => {
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
        style={{position: 'relative', zIndex: 0}}
            variants={{
                hidden: {opacity: 0, x: -200},
                visible: {opacity: 1, x: 0,},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5}}
        >
            {children}
        </motion.div>
    </div>
  )
}
