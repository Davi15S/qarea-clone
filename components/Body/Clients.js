import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Clients() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div className='flex justify-center overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full py-24 space-y-10 px-5'>
                <div className='font-bold text-4xl'>Some of our clients</div>
                <div className='overflow-scroll scrollbar-hide'>
                    <div className='flex justify-between items-center w-[1000px] lg:w-full'>
                        <div className="lg:grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/logo-kroodle.svg"} width={178} height={38} objectFit="contain" />
                        </div>
                        <div className="lg:grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/logo-lastmile.svg"} width={80} height={52} objectFit="contain" />
                        </div>
                        <div className="lg:grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2018/09/logo-dashlane.svg"} width={202} height={54} objectFit="contain" />
                        </div>
                        <div className="lg:grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/logo-HuffPost.svg"} width={225} height={27} objectFit="contain" />
                        </div>
                        <div className="lg:grayscale hover:grayscale-0 transition-all duration-500">
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/logo-skype.svg"} width={126} height={56} objectFit="contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients