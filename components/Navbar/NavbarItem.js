import { ChevronDownIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Company from './Company'

function NavbarItem({ text, chevron, component }) {
    const [toggleHover, setToggleHover] = useState(false)

    const ToggleHover = () => {
        setToggleHover(!toggleHover)
    }

    const subMenuAnimation = {
        exit: {
            opacity: 0,
            rotateX: -15,
            display: "none"
        },
        enter: {
            opacity: 1,
            rotateX: 0,
            display: "block"
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                onHoverStart={chevron != null ? null : ToggleHover}
                onHoverEnd={chevron != null ? null : ToggleHover}
                className="relative">
                <div className='flex text-white font-semibold items-center space-x-1 cursor-pointer hover:text-red-500 transition-all duration-200'>
                    <div>{text}</div>
                    {chevron != null ? null : <ChevronDownIcon className="h-4" />}
                </div>
                <motion.div
                    initial="exit"
                    animate={toggleHover ? "enter" : "exit"}
                    exit="exit"
                    transition={{ duration: 0.1 }}
                    variants={subMenuAnimation}
                    className="bg-[#1c1c1c] text-white absolute pt-6 w-72"
                >
                    {component}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default NavbarItem