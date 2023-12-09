'use client'

import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    children: any
    scroll: boolean
}

export const ScrollFadeOut = ({children, scroll}: Props) => {
    const ref = useRef(null)
    const mainControls = useAnimation()

    if(scroll) mainControls.start('hidden')

    return (
        <div ref={ref}>
            <motion.div
            style={{position: 'relative', zIndex: 0}}
                variants={{
                    hidden: {opacity: 0, y: -100, x: 0, scale: 0.7},
                    visible: {opacity: 1, y: 0, x: 0},
                }}
                initial="visible"
                animate={mainControls}
                transition={{duration: 0.3}}
            >
                {children}
            </motion.div>
        </div>
    )
}
