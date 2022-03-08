import Image from 'next/image'
import React from 'react'

function DropDownItem({ img, text }) {
    return (
        <div>
            <div className='flex space-x-3 cursor-pointer p-4'>
                <Image src={img} objectFit="contain" width={16} height={16} />
                <p className='font-semibold hover:text-red-500 duration-300 transition-all'>{text}</p>
            </div>
        </div>
    )
}

export default DropDownItem