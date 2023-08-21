import React from 'react'

const Footer = () => {
  return (
    <>  
    <div className='flex absolute bottom-0 max-h-[100px] w-[70%] justify-between items-center
                    border-t-2 border-[#242b2d] py-2 mx-4'>

        <object className='h-10 w-10 ' 
        type="image/svg+xml" data="../public/vite.svg"></object>

        <a href='/'
            className='font-studio '>Instagram</a>
            
    </div>
    </>
  )
}

export default Footer