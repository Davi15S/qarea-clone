import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { AnimatePresence, motion } from 'framer-motion'
import Aos from "aos";
import "aos/dist/aos.css";

function Details() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div className='flex justify-center bg-[#fafafa] overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full px-5 py-14 md:py-20'>
                <div className='font-bold text-4xl text-[#1c1c1c]'>Small but Important details</div>
                <div className='space-y-4 mt-10'>
                    <Card
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/12/g1.svg"}
                        text="What are your rates?"
                        dropdown={<p>Our rates average at <em>$30 – $49 / hr</em> depending on factors such as the preferred collaboration model, skill level of the specialists involved, and project duration. <br /> <br /> For your convenience, we have developed an easy-to-use <span className='text-red-600 border-b cursor-pointer hover:text-black transition-all duration-500 hover:border-white font-semibold border-red-600'>pricing calculator</span>. Have a project at hand? Try it out!</p>}
                        height={165}
                    />
                    <Card
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/12/g2.svg"}
                        text="How quickly will you be able to start on my project?"
                        dropdown={<p>On average, it takes us 10 business days to launch a project. The timeline may be affected by the size of your project (requirements analysis, project estimation, and planning) as well as the number and availability of the required specialists. On complex, enterprise-level projects, the starting phase may take up to one month.</p>}
                        height={165}
                    />
                    <Card
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/12/g3.svg"}
                        text="How do I know whether my project requires a Junior, Middle, or Senior engineer?"
                        dropdown={<p>Your choice of an engineer should depend on the role they are hired to perform on your project as well as the complexity and scale of the particular tasks they would need to complete. Obviously, senior and middle engineers possess far better coding skills and more knowledge accumulated along the way, but sometimes a junior specialist’s enthusiasm and curiosity about learning new things might provide your project with many new, interesting, unconventional ideas and solutions. <br /> <br /> To avoid any extra costs when hiring a specialist and have a clear understanding of what you’re actually paying for and why, read our <span className='text-red-600 border-b cursor-pointer hover:text-black transition-all duration-500 hover:border-white font-semibold border-red-600'>comprehensive quide</span> on Software Development Roles and Responsibilities in Outsourcing.</p>}
                        height={350}
                    />
                    <Card
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/12/g4.svg"}
                        text="Who will handle the project management?"
                        dropdown={<p>The project manager should be where most of your software development team is. If the majority of your team is located in-house, it’s best to keep project management in-house too. When going with outsourcing or staff augmentation services, however, you should always consider hiring a project manager from your vendor. Having a manager close to the team is key to efficient communication and high productivity. <br /> <br /> <span className='text-red-600 border-b cursor-pointer hover:text-black transition-all duration-500 hover:border-white font-semibold border-red-600'>Learn more</span> about the pros and cons of In-house and Outsourced Project Management.</p>}
                        height={280}
                    />
                    <div className='flex cursor-pointer bg-white items-center p-4 justify-between gap-7'>
                        <div className='space-x-5 flex items-center'>
                            <div className='min-w-[32px] min-h-[32px]' />
                            <div className='text-[#1c1c1c] font-semibold'>Still have questions? We have answers!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Card({ img, text, height, dropdown }) {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const variants = {
        initial: {
            height: 0
        },
        animate: {
            height: height
        }
    }

    return (
        <div className="bg-white p-4">
            <div onClick={handleClick} className='flex cursor-pointer items-center justify-between gap-5'>
                <div className='space-x-5 flex items-center'>
                    <div className='min-w-[32px] min-h-[32px] flex items-center'>
                        <Image src={img} width={32} height={32} objectFit="contain" />
                    </div>
                    <div className='text-[#1c1c1c] font-semibold'>{text}</div>
                </div>
                <div className={!isActive ? "cardRow" : "cardRow open"}>
                    <div className='cardRow-btn' />
                </div>
            </div>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        key={"cardRow"}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                        transition={{ duration: 0.3, ease: "linear" }}
                        variants={variants}
                        className='overflow-hidden mt-3 text-[#5a5a5a] md:pl-10 max-w-[530px]'>
                        {dropdown}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Details