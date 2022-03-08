import { ChevronDownIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'

function NavbarItem({ text, chevron, component, height }) {
    const [toggleHover, setToggleHover] = useState(false)

    const ToggleHover = () => {
        setToggleHover(!toggleHover)
    }

    const subMenuAnimation = {
        exit: {
            height: 0,
            transitionEnd: {
                display: "none"
            }
        },
        enter: {
            height: height,
            display: "block"
        }
    }

    return (
        <motion.div
            onHoverStart={chevron != null ? null : ToggleHover}
            onHoverEnd={chevron != null ? null : ToggleHover}
            className="relative">
            <div className='flex text-white font-semibold items-center space-x-1 cursor-pointer hover:text-red-500 transition-all duration-200'>
                <div>{text}</div>
                {chevron != null ? null : <ChevronDownIcon className="h-4" />}
            </div>
            <AnimatePresence>
                {toggleHover && (
                    <motion.div
                        key="key"
                        initial="exit"
                        animate="enter"
                        exit="exit"
                        transition={{ duration: 0.2, ease: "linear" }}
                        variants={subMenuAnimation}
                        className="bg-[#1c1c1c] text-white absolute w-80 pt-8 overflow-hidden"
                    >
                        {component}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}


export default NavbarItem