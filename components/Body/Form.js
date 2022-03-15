import React, { useEffect } from 'react'
import emailjs from "emailjs-com"
import Aos from "aos";
import "aos/dist/aos.css";

function Form() {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6wc3i04', 'template_wr5pvd4', e.target, 'wdPmASd-pJ466PxTc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

        return (
            <div className='flex justify-center overflow-hidden'>
                <div data-aos="fade-up" className='max-w-6xl w-full grid grid-cols-1 px-5 py-12 md:py-28 lg:grid-cols-2'>
                    <div></div>
                    <div className='space-y-10'>
                        <div className='space-y-2'>
                            <div className='text-red-600 font-bold text-3xl'>Let's talk.</div>
                            <div className='text-3xl font-bold'>Tell us about your project. Let's get to work!</div>
                        </div>
                        <form onSubmit={sendEmail} className='space-y-8'>
                            <div className='grid grid-cols-1 md:grid-cols-2 md:space-y-0 gap-x-8 space-y-8'>
                                <div className='space-y-2'>
                                    <div for="name" className="text-gray-400 text-sm opacity-75">Name*</div>
                                    <input name='name' required className='w-full border-b border-gray-400 outline-none focus:border-gray-600 transition-all duration-500' type="text" />
                                </div>
                                <div className='space-y-2'>
                                    <div className="text-gray-400 text-sm opacity-75">Email*</div>
                                    <input name='email' required className='w-full border-b border-gray-400 outline-none focus:border-gray-600 transition-all duration-500' type="email" />
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className="text-gray-400 text-sm opacity-75">Project Description*</div>
                                <textarea name='project_description' required className='w-full max-h-20 border-b overflow-scroll scrollbar-hide border-gray-400 outline-none focus:border-gray-600 transition-all duration-500' type="text" />
                            </div>
                            <div className='flex items-center space-x-5'>
                                <input required type="checkbox" id='checkbox' />
                                <div className='text-gray-500'>I agree to the QArea <span className='text-red-600 border-b border-red-600 cursor-pointer hover:text-black transition-all duration-300 hover:border-black'>Cookie Policy</span> and <span className='text-red-600 cursor-pointer border-b border-red-600 hover:text-black transition-all duration-300 hover:border-black'>Privacy Policy</span> *</div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between md:space-y-0 space-y-14 pt-12'>
                                <button type='submit'><span className='bg-red-600 py-2 px-14 text-white font-semibold rounded-full text-lg border-2 border-red-600 hover:text-red-600 hover:bg-opacity-0 transition-all duration-300'>Submit</span></button>
                                <div className='flex flex-col items-center font-semibold text-gray-500'>
                                    <div className='hover:opacity-100 opacity-50 h-6 hover:border-b border-gray-500 transition-all duration-300 cursor-pointer'>business@qarea.com</div>
                                    <div className='hover:opacity-100 opacity-50 h-6 hover:border-b border-gray-500 transition-all duration-300 cursor-pointer'>+1 310 388 93 34</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default Form