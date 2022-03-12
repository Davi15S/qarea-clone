import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function RedContainer() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div className='bg-[#ff3333] flex justify-center overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full justify-center grid grid-cols-1 lg:grid-cols-3 space-y-10 lg:space-y-0 items-center px-10 py-14'>
                <div className='hidden md:block text-center'>
                    <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/home-03.png"} width={224} height={136} objectFit="contain" />
                </div>
                <div className='text-white text-2xl font-semibold text-center lg:text-left'>
                    Ready to start on your development or testing project? We are!
                </div>
                <div className='text-center'>
                    <span className='bg-white hover:bg-opacity-0 px-14 py-3 cursor-pointer border-2 border-white text-red-600 hover:text-white font-semibold rounded-full transition-all duration-200'>Get in Touch</span>
                </div>
            </div>
        </div>
    )
}

export default RedContainer