'use client'

import React from 'react'
import { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'

type Props = {
    children: any
    scroll: boolean
}

export const ScrollFadeIn = ({children, scroll}: Props) => {
    const ref = useRef(null)
    const mainControls = useAnimation()

    if(scroll) mainControls.start('visible')

    return (
        <div ref={ref}>
            <motion.div 
                variants={{
                    hidden: {opacity: 0, y: 0, x: 0},
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
