import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import disableScroll from 'disable-scroll';
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/solid"

function Navbar() {
    const [hamburgerActive, setHamburgerActive] = useState(false)

    const SetNavbarActive = () => {
        setHamburgerActive(!hamburgerActive);
    }

    return (
        <div className=''>
            <div className='h-[64px] bg-[#1c1c1c] flex items-center'>
                <div className='px-5 flex items-center flex-grow justify-between'>
                    <Image src={"https://qarea.com/wp-content/themes/qarea/webpack-wp-3/dist/assets/img/logo_dark.svg?x89583"} objectFit="contain" height={40} width={150} />
                    <div onClick={SetNavbarActive} className={hamburgerActive ? "hamburger-menu open" : "hamburger-menu"}>
                        <div className='hamburger-menu-btn z-30'></div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {hamburgerActive && (
                    <div>
                        <motion.div
                            key="child"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%", transition: { duration: 0.5 } }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="ml-6 fixed bg-[#111111] overflow-auto top-0 w-full h-full text-white z-20"
                        >
                            <div className='mt-16'>
                                <Company />
                                <NavbarItem text="Services" />
                                <NavbarItem text="Technologies" />
                                <NavbarItem text="Industries" />
                                <NavbarItem text="Content" border_b={"border-b"} />
                            </div>
                        </motion.div>
                        <motion.div
                            key="child2"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%", transition: { duration: 0.6 } }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="bg-[#ff3333] fixed top-0 w-full h-full"
                        />
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

function NavbarItem({ text, border_b }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <div
            onClick={() => setIsActive(!isActive)}
            className={!isActive ? `navbarItem ${border_b}` : `navbarItem ${border_b} text-red-500`}>
            <p className='text-xl font-semibold'>{text}</p>
            <ChevronDownIcon className={!isActive ? "h-6 transition-all duration-150" : "h-6 rotate-180 transition-all duration-150"} />
        </div>
    )
}

function Company() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <div
                onClick={() => setIsActive(!isActive)}
                className={!isActive ? `navbarItem` : `navbarItem text-red-500`}>
                <p className='text-xl font-semibold'>Company</p>
                <ChevronDownIcon className={!isActive ? "h-6 transition-all duration-150" : "h-6 rotate-180 transition-all duration-150"} />
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        key="NavbarItem"
                        initial={{ height: 0 }}
                        animate={{ height: 150 }}
                        exit={{ height: 0}}
                        transition={{ duration: 0.3, ease: "linear" }}
                        className='px-7 pr-12 overflow-hidden'>
                        <p>Pricing</p>
                        <p>Business Models</p>
                        <p>Career</p>
                        <p>Our Team</p>
                        <p>About Us</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar