import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Awards() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    const [active, setActive] = useState([true, false, false])

    const handleClick = e => {
        const id = e.target.id
        const activateState = [false, false, false]
        activateState[id] = true;
        setActive(activateState)
    }

    return (
        <div className='bg-black flex justify-center py-12 relative'>
            <div className='border-white border-b h-16 absolute w-full z-0' />
            <div className='max-w-6xl w-full px-5 z-50'>
                <div className='flex text-[#bdbdbd] font-semibold text-2xl gap-10 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
                    <Certificates handleClick={handleClick} id={0} txt={"Certification"} style={active[0] && "text-red-600 border-b-[3px] border-red-600 pb-[29px]"} />
                    <Certificates handleClick={handleClick} id={1} txt={"Top Awards"} style={active[1] && "text-red-600 border-b-[3px] border-red-600 pb-[29px]"} />
                    <Certificates handleClick={handleClick} id={2} txt={"Other ratings"} style={active[2] && "text-red-600 border-b-[3px] border-red-600 pb-[29px]"} />
                </div>

                <div className='overflow-scroll scrollbar-hide'>
                    {active[0] && (
                        <div data-aos="fade-in" data-aos-duration={1000} className='flex w-[1000px] lg:w-full justify-between mt-6'>
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab1_1.svg"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab1_2.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/ISTQB-Advanced-level.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab1_4.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab1_5.svg?x89583"} objectFit="contain" height={128} width={128} />
                        </div>
                    )}
                    {active[1] && (
                        <div data-aos="fade-in" data-aos-duration={1000} className='flex w-[1000px] lg:w-full justify-between mt-6'>
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_1.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_2.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_3.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_4.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_5.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab2_6.svg?x89583"} objectFit="contain" height={128} width={128} />
                        </div>
                    )}
                    {active[2] && (
                        <div data-aos="fade-in" data-aos-duration={1000} className='flex w-[1000px] lg:w-full justify-between mt-6'>
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab3_1.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab3_2.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab3_3.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab3_4.svg?x89583"} objectFit="contain" height={128} width={128} />
                            <Image src={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/09/tab3_5.svg?x89583"} objectFit="contain" height={128} width={128} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

function Certificates({ txt, style, handleClick, id }) {
    return (
        <div onClick={handleClick} className={`${style} cursor-pointer`} id={id}>
            {txt}
        </div>
    )
}

export default Awards