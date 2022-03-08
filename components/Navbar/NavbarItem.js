import { ChevronDownIcon } from '@heroicons/react/solid'
import React from 'react'

function NavbarItem({text, chevron}) {
  return (
    <div className='text-white font-semibold flex items-center space-x-1 cursor-pointer hover:text-red-500 transition-all duration-200'>
        <div>{text}</div>
        {chevron != null ? null : <ChevronDownIcon className="h-4" />}
    </div>
  )
}

export default NavbarItem