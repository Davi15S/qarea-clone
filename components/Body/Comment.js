import React from 'react'

function Comment() {
  return (
    <div className='flex justify-center text-center bg-[#1c1c1c] text-white p-4 font-semibold'>
        This site was created just for education purposes. Visit <span className='px-1 underline'> <a href="https://qarea.com/" target="_blank">qarea.com</a> </span> for the original site.
    </div>
  )
}

export default Comment