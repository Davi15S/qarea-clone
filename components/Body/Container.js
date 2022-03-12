import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Container() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })

    return (
        <div className='flex justify-center relative overflow-hidden'>
            <div data-aos="fade-up" className='px-5 grid py-12 md:py-24 max-w-6xl w-full grid-cols-1 md:grid-cols-2 gap-x-10'>
                <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/start_fast.png"} width={499} height={386} objectFit="contain" />
                <div className='space-y-7'>
                    <div className="text-3xl font-bold">
                        <span className='text-red-600'>Start fast. </span>Finish confidently.
                    </div>
                    <div className='text-[#5a5a5a]'>We want you to be able to start working on your project quickly, so we begin planning our work before our first call to hit the ground running as soon as you settle on your team.</div>
                    <div className='text-[#5a5a5a]'>As a quality-obsessed software development outsourcing company, we want to ensure your satisfaction with our work, so our QA is more thorough than you can imagine.</div>
                    
                    <div className='grid grid-cols-3 gap-10'>
                    <div>
                        <div className='font-bold text-3xl'>20</div>
                        <div className='text-[#5a5a5a]'>Years in Business</div>
                    </div>
                    <div>
                        <div className='font-bold text-3xl'>250+</div>
                        <div className='text-[#5a5a5a]'>Qualified Experts</div>
                    </div>
                    <div>
                        <div className='font-bold text-3xl'>800+</div>
                        <div className='text-[#5a5a5a]'>Finished Projects</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Container