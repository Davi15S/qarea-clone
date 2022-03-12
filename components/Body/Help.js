import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

function Help() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })

    const [AbilitiesState, setAbilitiesState] = useState([true, false, false])

    const handleClick = e => {
        const id = e.target.id
        const activateState = [false, false, false]
        activateState[id] = true;
        setAbilitiesState(activateState)
    }

    return (
        <div className='relative py-12 lg:py-32 bg-[#fafafa] flex justify-center'>
            <div data-aos="fade-up" className='max-w-6xl w-full px-5'>
                <h2 className="text-4xl font-semibold pb-10">We Help With</h2>
                <div className='flex gap-12 border-b overflow-x-scroll max-w-min scrollbar-hide border-[#bdbdbd]'>
                    <Abilities txt={"Services"} id={0} handleClick={handleClick} style={AbilitiesState[0] ? "text-red-600 border-b-2 border-red-600" : "text-[#bdbdbd]"} />
                    <Abilities txt={"Technologies"} id={1} handleClick={handleClick} style={AbilitiesState[1] ? "text-red-600 border-b-2 border-red-600" : "text-[#bdbdbd]"} />
                    <Abilities txt={"Industries"} id={2} handleClick={handleClick} style={AbilitiesState[2] ? "text-red-600 border-b-2 border-red-600" : "text-[#bdbdbd]"} />
                </div>
                {AbilitiesState[0] &&
                    <div data-aos="fade-in" data-aos-duration={1000} className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Group-1944.png"} h1={"Design"} txt={"Improving conversions and turning complex interactions into simple flows."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Group-1947.png"} h1={"Development"} txt={"Creating new software and integrating new features into existing suites."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/Group-19871.png"} h1={"Testing & QA"} txt={"Ensuring the quality of your projects and the reliability of your code."} />
                    </div>
                }
                {AbilitiesState[1] &&
                    <div data-aos="fade-in" data-aos-duration={1000} className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads//2020/08/icon_offer_04.svg"} h1={"Front-End"} txt={"Building flexible, cross-platform interfaces for your business."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/backend.png"} h1={"Back-End"} txt={"Ensuring the scalability and reliability of your websites and software."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/mobile.png"} h1={"Mobile"} txt={"Creating memorable mobile experiences and reliable applications."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/quality-assurance.png"} h1={"Quality Assurance"} txt={"Eliminating technical debt and supporting the stability of your products."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/ERP.png"} h1={"Business & Management"} txt={"Providing your business and employees with reliable tools and suites."} />
                    </div>
                }
                {AbilitiesState[2] &&
                    <div data-aos="fade-in" data-aos-duration={1000} className='grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3'>
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/ecommerce.png"} h1={"eCommerce"} txt={"Launching new eCommerce platforms and implementing web shops."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/healthcare.png"} h1={"Healthcare"} txt={"Building robust software for healthcare businesses and organisations."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/entertainment.png"} h1={"Entertainment"} txt={"Creating software and websites for media creation and distribution."} />
                        <Card logo={"https://s8a8b5w5.stackpathcdn.com/wp-content/uploads/2020/08/finance_banking.png"} h1={"Finance & Banking"} txt={"Developing CRM and ERP tools for businesses in the Fintech sector."} />
                    </div>
                }
            </div>
        </div>
    )
}

function Abilities({ txt, id, handleClick, style }) {
    return (
        <div onClick={handleClick} id={id} className={`cursor-pointer transition-colors duration-300 text-xl font-semibold pb-4 ${style}`}>
            {txt}
        </div>
    )
}

function Card({ logo, h1, txt }) {
    return (
        <div className='bg-white space-y-3 shadow-md p-5 py-10 group cursor-pointer hover:scale-105 transition-transform duration-200'>
            <div><Image src={logo} width={28} height={28} objectFit="contain" /></div>
            <div className='font-semibold text-lg group-hover:text-red-600 transition-colors duration-200'>{h1}</div>
            <div className='font-semibold text-[#747474]'>{txt}</div>
        </div>
    )
}

export default Help