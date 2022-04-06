import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function News() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    return (
        <div className='flex justify-center overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full px-5 py-12 md:py-32'>
                <div className='font-bold text-3xl'>Latest news and Insights</div>
                <div className='grid grid-cols-1 pt-8 md:grid-cols-2 gap-10'>
                    <Report
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/12/Clutch_global_2021.jpg?x13498"}
                        subtxt="Company News"
                        text="Clutch Honors QArea as One of the Top 1000 Service Providers for 2021"
                    />
                    <Report
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2021/11/Main-1-1-2048x1019.png?x13498"}
                        subtxt="Testing & QA"
                        text="The Nuances of QA in Healthcare: Our Experience"
                    />
                </div>
            </div>
        </div>
    )
}

function Report({ img, text, subtxt }) {
    return (
        <div className='cursor-pointer group'>
            <Image src={img} height={510} width={1024} objectFit="cover" />
            <div className='text-gray-600 font-semibold pt-4 group-hover:text-red-600 transition-all duration-500'>{subtxt}</div>
            <div className='text-2xl font-semibold pt-6 group-hover:text-red-600 transition-all duration-500'>{text}</div>
        </div>
    )
}

export default News