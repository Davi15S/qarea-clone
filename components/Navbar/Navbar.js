import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import Company from './Company';
import NavbarItemMobile from './NavbarItemMobile';
import Services from './Services';
import Technologies from './Technologies';
import Industries from './Industries';
import Content from './Content';
import NavbarItem from './NavbarItem';

function Navbar() {
    const [hamburgerActive, setHamburgerActive] = useState(false)

    const SetNavbarActive = () => {
        setHamburgerActive(!hamburgerActive);
    }

    return (
        <div>
            <div className={!hamburgerActive ? "h-[64px] lg:h-[96px] flex items-center" : "h-[64px] flex items-center"}>
                <div className='px-5 flex flex-grow z-30 bg-[#1c1c1c] justify-center h-full'>
                    <div className='flex items-center relative max-w-6xl flex-grow justify-between '>
                        <Image src={"https://qarea.com/wp-content/themes/qarea/webpack-wp-3/dist/assets/img/logo_dark.svg?x89583"} objectFit="contain" height={50} width={160} className="cursor-pointer"/>
                        <div onClick={SetNavbarActive} className={hamburgerActive ? "hamburger-menu open" : "hamburger-menu lg:hidden"}>
                            <div className='hamburger-menu-btn'></div>
                        </div>
                        {!hamburgerActive && <>
                            <div className='lg:flex space-x-5 hidden'>
                                <NavbarItem text={"Company"} component={<Company />} height={320}/>
                                <NavbarItem text={"Services"} component={<Services />} height={265}/>
                                <NavbarItem text={"Technologies"} component={<Technologies />} height={320}/>
                                <NavbarItem text={"Industries"} component={<Industries />} height={430}/>
                                <NavbarItem text={"Portfolio"} chevron={false} />
                                <NavbarItem text={"Content"} component={<Content />} height={210}/>
                            </div>
                            <div className='text-white font-semibold border border-white z-30 px-8 py-2 rounded-full lg:flex hover:bg-white hover:text-black transition-all duration-200 cursor-pointer hidden'>
                                Contact Us
                            </div></>}
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
                            className="ml-6 overflow-scroll overflow-x-hidden fixed bg-[#111111] top-0 w-full h-full text-white z-20"
                        >
                            <div className='mt-16'>
                                <NavbarItemMobile text="Company" dropDown={<Company />} height={290} border_t={"border-t"} />
                                <NavbarItemMobile text="Services" dropDown={<Services />} height={230} />
                                <NavbarItemMobile text="Technologies" dropDown={<Technologies />} height={230} />
                                <NavbarItemMobile text="Industries" dropDown={<Industries />} height={390} />
                                <NavbarItemMobile text="Portfolio" chevron={false} />
                                <NavbarItemMobile text="Content" dropDown={<Content />} height={180} />
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

export default Navbar