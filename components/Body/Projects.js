import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid"
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })
    const [activeProject, setActiveProject] = useState(1)

    const nextProject = () => {
        if (activeProject == 4) {
            setActiveProject(1)
        }
        else {
            setActiveProject(activeProject + 1)
        }
    }

    const prevProject = () => {
        if (activeProject == 1) {
            setActiveProject(4)
        }
        else {
            setActiveProject(activeProject - 1)
        }
    }

    return (
        <div className='bg-[#111111] flex justify-center overflow-hidden'>
            <div data-aos="fade-up" className='max-w-6xl w-full px-5 py-10 md:py-28'>
                <div className='flex items-center justify-between'>
                    <div className='text-white text-3xl font-bold'>Our Past Projects</div>
                    <div className='md:flex space-x-8 hidden'>
                        <div className='text-red-600 text-lg font-semibold cursor-pointer hover:text-white duration-200 transition-all'>View all</div>
                        <div className='flex space-x-2'>
                            <ArrowLeftIcon onClick={prevProject} className='text-red-600 h-6 cursor-pointer hover:text-white transition-all duration-500' />
                            <ArrowRightIcon onClick={nextProject} className='text-red-600 h-6 cursor-pointer hover:text-white transition-all duration-500' />
                        </div>
                    </div>
                </div>

                {activeProject === 1 &&
                    <Project
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/huffpost-1.png?x89583"}
                        h1="HuffPost"
                        txt="High traffic is both the main goal and challenge for the news websites. We helped HuffPost build a site and app that are incredibly convenient to use and capable of sustaining the heavy usage load. Having optimized the front-end and back-end of HuffPost, our client can be sure that their message delivery system can send 150,000 messages per second."
                    />}
                {activeProject === 2 &&
                    <Project
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Group-1620-1.png?x89583"}
                        h1="Dashlane"
                        txt="Security is important for individuals as well as businesses. Our QA engineers helped Dashlane ensure that their password manager and digital wallet will remain fully functional on new versions of OS, browsers, and devices. Now our client knows that their solution works perfectly under all circumstances."
                    />}
                {activeProject === 3 &&
                    <Project
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Group-1581.png?x89583"}
                        h1="Code Better"
                        txt="We developed an effective web application that helps developers to write semantically correct code and form useful coding habits with better practices, superior tools, and proven methodologies. The application provides thorough data analysis and real-time statistics as well as features such as sorting errors by priority. The app is compatible with all popular desktop and mobile devices."
                    />}
                {activeProject === 4 &&
                    <Project
                        img={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/distractify.png?x89583"}
                        h1="Distractify"
                        txt="New businesses must strike while the iron is hot. Chasing after a fast time-to-market can make your business vulnerable to performance risks. We helped Distractify perform a fast but extremely thorough Quality Assurance process before they hit “publish” on their first viral story."
                    />}

                <div className='flex justify-between mt-14 md:hidden'>
                    <div className='text-red-600 font-semibold cursor-pointer hover:text-white duration-200 transition-all'>View all</div>
                    <div className='flex space-x-2'>
                        <ArrowLeftIcon onClick={prevProject} className='text-red-600 h-6 cursor-pointer hover:text-white transition-all duration-500' />
                        <ArrowRightIcon onClick={nextProject} className='text-red-600 h-6 cursor-pointer hover:text-white transition-all duration-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Project({ img, h1, txt }) {
    return (
        <div data-aos="fade-in" data-aos-duration={2000} className='relative h-[670px] md:h-[500px] flex items-center'>
            <div className='select-none absolute flex flex-col md:flex-row-reverse items-center'>
                <div className='p-10 text-center md:w-1/2'><Image src={img} width={500} height={400} objectFit="contain" /></div>
                <div className='space-y-6 md:w-1/2'>
                    <div className='text-white font-semibold text-3xl'>{h1}</div>
                    <div className='text-[#b8b8b8]'>{txt}</div>
                    <div className='text-red-600 text-xl font-semibold cursor-pointer hover:text-white duration-200 transition-all'>Read more</div>
                </div>
            </div>
        </div>
    )
}

export default Projects