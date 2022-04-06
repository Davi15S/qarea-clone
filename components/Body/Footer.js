import { ArrowDownIcon, ChevronDownIcon, LinkIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

function Footer() {
    return (
        <div className='flex justify-center bg-[#fafafa]'>
            <div className='max-w-6xl w-full px-5 py-12'>
                <div>
                    <Image src={"https://qarea.com/wp-content/themes/qarea/assets3/img/logo.svg?x23263"} objectFit="contain" width={159} height={56} />
                </div>
                <div className='grid grid-cols-2 gap-10 pt-8 md:grid-cols-5'>
                    <div className='space-y-5'>
                        <div className='font-semibold text-2xl'>Contacts</div>
                        <div className='text-[#5a5a5a] pt-2'>QArea ltd. Guiseppe Cali street Ta’Xbiex, XBX, Malta</div>
                        <div className='text-red-600 font-semibold'>
                            <div>
                                <span className='border-b border-red-600 cursor-pointer'>business@qarea.com</span>
                            </div>
                            <div>
                                <span className='border-b border-red-600 cursor-pointer'>+1 310 388 93 34</span>
                            </div>
                        </div>
                        <div>
                            <div className='text-[#5a5a5a] h-6 hover:text-red-600 duration-500 transition-all cursor-pointer'>
                                <span className='flex w-min items-center gap-x-1 hover:border-b border-red-600'>Whatsapp <LinkIcon className='h-4' /></span>
                            </div>
                            <div className='text-[#5a5a5a] h-6 hover:text-red-600 duration-500 transition-all cursor-pointer'>
                                <span className='flex w-min items-center gap-x-1 hover:border-b border-red-600'>Telegram <LinkIcon className='h-4' /></span>
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-y-2'>
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-04.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-02.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-03.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-06.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-05.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/social-01.svg?x23263"} />
                            <Icon img={"https://qarea.com/wp-content/themes/qarea/assets3/img/twitter-icon.svg?x23263"} />
                        </div>
                    </div>
                    <Menu
                        h1={"About"}
                        dropdown={<div>
                            <DropDown txt={"Business Career"} />
                            <DropDown txt={"Career"} />
                            <DropDown txt={"Portfolio"} />
                            <DropDown txt={"Content"} />
                        </div>}
                        height={200}
                    />
                    <Menu
                        h1={"Services"}
                        dropdown={<div>
                            <DropDown txt={"Design"} />
                            <DropDown txt={"Custom Software Development"} />
                            <DropDown txt={"Web Development"} />
                            <DropDown txt={"Mobile App Development"} />
                            <DropDown txt={"Testing & QA"} />
                            <DropDown txt={"DevOps"} />
                            <DropDown txt={"MVP Development"} />
                            <DropDown txt={"Dedicated Development Teams"} />
                        </div>}
                        height={360}
                    />
                    <Menu
                        h1={"Technologies"}
                        dropdown={<div>
                            <DropDown txt={".Net"} />
                            <DropDown txt={"C#"} />
                            <DropDown txt={"Angular"} />
                            <DropDown txt={"React"} />
                            <DropDown txt={"Node.js"} />
                            <DropDown txt={"PHP"} />
                            <DropDown txt={"WordPress"} />
                            <DropDown txt={"Odoo"} />
                            <DropDown txt={"React Native"} />
                            <DropDown txt={"Quality Assurance"} />
                        </div>}
                        height={390}
                    />
                    <Menu
                        h1={"Industries"}
                        dropdown={<div>
                            <DropDown txt={"eCommerce"} />
                            <DropDown txt={"Healthcare"} />
                            <DropDown txt={"Entertainment"} />
                            <DropDown txt={"Finance & Banking"} />
                            <DropDown txt={"Startups"} />
                        </div>}
                        height={200}
                    />
                </div>
            </div>
        </div>
    )
}

function Menu({ h1, height, dropdown }) {
    const [isActive, setIsActive] = useState(false)

    const variants = {
        initial: {
            height: 0
        },
        animate: {
            height: height
        }
    }

    return (
        <div className='space-y-5'>
            <div onClick={() => setIsActive(!isActive)} className={!isActive ? "cursor-pointer flex items-center gap-x-3 transition-all duration-200" : "cursor-pointer flex items-center gap-x-3 text-red-600"}>
                <div className='font-semibold text-2xl'>{h1}</div>
                <ChevronDownIcon className={!isActive ? "h-8 transition-transform" : "h-8 rotate-180 transition-transform"} />
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        key={"footerDropDown"}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        transition={{ duration: 0.3, ease: "linear" }}
                        variants={variants}
                        className="overflow-hidden"
                    >
                        {dropdown}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function Icon({ img }) {
    return (
        <div className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
            <Image src={img} height={24} width={24} />
        </div>
    )
}

function DropDown({ txt }) {
    return (
        <div className='py-2 font-semibold cursor-pointer hover:text-red-600 duration-300 transition-all'>{txt}</div>
    )
}

export default Footer