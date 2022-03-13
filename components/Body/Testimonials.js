import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Testimonials() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    const [[page, direction], setCardId] = useState([1, 0])

    const paginate = (direction) => {
        if (direction == -1 && page <= 6 && page > 1) {
            setCardId([page + direction, direction])
        }
        if (direction == 1 && page >= 1 && page < 6) {
            setCardId([page + direction, direction])
        }
    }

    const variants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? "100%" : "-100",
                opacity: 0
            }
        },
        center: {
            x: 0,
            zIndex: 1,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                opacity: 0,
                x: direction < 0 ? "100%" : "-100",
            }
        }
    }

    return (
        <div className='flex justify-center bg-[#fafafa] overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-5 py-16'>
                <div className='space-y-8 pb-8'>
                    <div className='text-3xl font-semibold text-[#1c1c1c]'>Testimonials</div>
                    <div className='text-[#5a5a5a] space-y-6'>
                        <div className='font-semibold'>We are proud of every single project we've completed for our clients. We're happy that our code and thorough testing have helped our clients run their businesses and attract new customers every day.</div>
                        <div>Here's what our clients have to say about our software development outsourcing services. We hope to see your name here in a couple of months as well!</div>
                    </div>
                </div>
                <div className="lg:mt-24">
                    <div className='w-full h-[420px] lg:h-[360px] overflow-x-hidden scrollbar-hide overflow-y-visible relative'>
                        <AnimatePresence custom={direction}>
                            <motion.div
                                key={page}
                                variants={variants}
                                custom={direction}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30, duration: 500 },
                                }}
                                className='absolute'
                            >
                                {page == 1 &&
                                    <Card
                                        txt={'“The team did excellent work and I was very happy with everyone we added to the project via QArea. Together we built a custom video CMS in Django and native apps for iOS and Android powered by json feeds from this CMS.”'}
                                        bg="bg-red-500"
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/ava.svg"
                                        name="Theo Burry"
                                        position="Former CTO at NowThis Media, Inc."
                                    />}
                                {page == 2 &&
                                    <Card
                                        txt={"“QArea has shown to have very competent resources, and have delivered the quality that our team was expecting. Concerns arose over time (that’s expected) but you have always been very proactive in resolving them.”"}
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/MrBaffo.jpg"
                                        name="Peter Dunham"
                                        position="Co-Founder, Mr. Baffo."
                                    />}
                                {page == 3 &&
                                    <Card
                                        txt={"“QArea has consistently delivered quality product for us and have been very accommodating when we were on tight schedules to complete our projects on time. We look forward to our continued development efforts with their team.”"}
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Jon-Sugihara.png"
                                        name="Jon Sugihara"
                                        position="President & Co-Founder at Perx."
                                    />}
                                {page == 4 &&
                                    <Card
                                        txt="“QArea has played a critical role in the development of HuffingtonPost.com. They have been able to become a part of the core team very quickly and develop amazing features that perform under the highest performance and demand requirements possible.”"
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/photo-03.png"
                                        name="Paul Berry"
                                        position="CTO at the HuffPost."
                                    />}
                                {page == 5 &&
                                    <Card
                                        txt={"“The team were extremely responsive, with a quick turnaround, excellent client communications and have the flexibility to adapt to new requests. Responsive design can present a number of challenges but QArea were up to it and found the right solutions to meet our needs.”"}
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Julie-Gilbert-Binns.jpg"
                                        name={"Julie Gilbert-Binns"}
                                        position="3rd Wave Communications"
                                    />}
                                {page == 6 &&
                                    <Card
                                        txt={"“QArea was able to assist us with the design and development of a brand new site that our customers love. Because we have a CMS now, we can manage many aspects of the e-commerce site ourselves. Their team is responsive and professional and we always felt like our new site was in good hands. ”"}
                                        img="https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Katherine-VanHenley.jpg"
                                        name={"Katherine VanHenley"}
                                        position="Third & Wall."
                                    />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className='flex space-x-6 items-center justify-center'>
                        <ArrowLeftIcon onClick={() => paginate(-1)} className={page == 1 ? "text-red-300 h-8 cursor-pointer" : "text-red-600 h-8 cursor-pointer"} />
                        <div className='text-red-600 select-none font-semibold text-xl'>{`${page}/6`}</div>
                        <ArrowRightIcon onClick={() => paginate(1)} className={page == 6 ? "text-red-300 h-8 cursor-pointer" : "text-red-600 h-8 cursor-pointer"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Card({ txt, img, name, position }) {
    return (
        <div className={`bg-white p-5 space-y-7 py-10 select-none shadow-md`}>
            <div className='text-[#5a5a5a] font-medium text-lg'>
                {txt}
            </div>
            <div className='flex space-x-7'>
                <div>
                    <Image className='rounded-full' src={img} height={48} width={48} objectFit="contain" />
                </div>
                <div>
                    <div className='font-semibold text-lg text-[#1c1c1c]'>{name},</div>
                    <div className='text-[#5a5a5a] font-medium'>{position}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials