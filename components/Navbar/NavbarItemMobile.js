import React, { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/solid"
import { AnimatePresence, motion } from 'framer-motion'

function NavbarItemMobile({ text, border_t, chevron, dropDown, height }) {
    const [isActive, setIsActive] = useState(false)
    const variants = {
        initial: {
            height:0
        },
        animate: {
            height:height
        }
    }

    return (
        <div className={isActive && chevron == null && "border-b border-[#313131]"}>
            <div
                onClick={() => setIsActive(!isActive)}
                className={!isActive ? `navbarItem ${border_t}` : `navbarItem ${border_t} text-red-500 bg-[#1c1c1c]`}>
                <p className='text-xl font-semibold hover:text-red-500 transition-colors duration-300'>{text}</p>
                {chevron != null ? null : <ChevronDownIcon className={!isActive ? "h-6 transition-all duration-150" : "h-6 rotate-180 transition-all duration-150"} />}
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        key="NavbarItem"
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        transition={{ duration: 0.3, ease: "linear" }}
                        variants={variants}
                        className='px-7 pr-12 overflow-hidden bg-[#1c1c1c]'>
                        {dropDown}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default NavbarItemMobile