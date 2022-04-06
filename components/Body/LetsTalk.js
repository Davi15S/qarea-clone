import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function LetsTalk() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div className='bg-[#111111] flex justify-center overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full px-5 text-white py-14 text-center space-y-10 md:py-24'>
                <div className='font-bold text-4xl'>You've come this far.</div>
                <div className='font-bold text-4xl'>Enough about us - tell us about your project!</div>
                <div>
                    <span className='bg-red-600 border-red-600 hover:bg-opacity-0 hover:text-red-600 duration-500 transition-all cursor-pointer border-2 px-12 py-2 font-semibold text-lg rounded-full'>Let's talk</span>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk