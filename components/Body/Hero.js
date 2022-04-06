import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        import("@lottiefiles/lottie-player");
    }, [])


    return (
        <div className="bg-[#111111] pt-[64px] flex justify-center">
            <div className='max-w-6xl w-full px-5 grid grid-cols-1 lg:grid-cols-2 items-center relative'>
                <div>
                    <div className='text-white space-y-10 py-48 lg:py-32'>
                        <div className='text-4xl font-semibold lg:text-6xl'><span className='text-red-600'>Software Development</span> Company</div>
                        <div className='text-xl'>If you care about speed and quality - you've come to the right place.</div>
                        <div>
                            <span className='bg-red-600 py-3 px-14 rounded-full font-semibold cursor-pointer hover:bg-opacity-0 hover:text-red-600 transition-all duration-200 border-2 border-red-600'>Hire Now</span>
                        </div>
                    </div>
                    <div className="py-9 lg:py-14 space-x-4 flex">
                        <div><Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/02/Union.png"} height={50} width={70} objectFit="contain" /></div>
                        <div><Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/01/cmmi.svg"} height={50} width={70} objectFit="contain" /></div>
                        <div><Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/01/Clutch_1000_grey.svg"} height={50} width={70} objectFit="contain" /></div>
                    </div>
                </div>
                <div className="-right-20 absolute hidden lg:flex">
                    <lottie-player
                        id="firstLottie"
                        ref={ref}
                        autoplay
                        loop
                        mode="normal"
                        src="https://assets8.lottiefiles.com/packages/lf20_vybwn7df.json"
                        style={{ width: "600px", height: "600px" }}
                    ></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Hero