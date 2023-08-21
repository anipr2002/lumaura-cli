import React, { useState } from 'react'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <>
    <div className="flex mx-4 max-h-[100px] justify-between items-center
                    border-b-2 border-[#242b2d]">
        <p className=' font-studio text-[#242b2d] not-italic font-bold
                         2xl:text-[36px] tracking-[-2.0px]'>
            Lumaura<span className='mx-0.5 text-xs'>©</span></p>
        <ul className='flex justify-center items-center font-medium 2xl:text-[24px]'>
            <li className='flex items-center justify-center px-2'>
                <div className={`circle ${activeLink === 'home' ? 'filled' : ''}`}></div>
                <a
                  href="#"
                  onClick={() => handleLinkClick('home')}
                >
                  Home
                </a></li>
            <li className='flex items-center justify-center px-2'>
                <div className={`circle ${activeLink === 'gallery' ? 'filled' : ''}`}></div>
                <a
                  href="#"
                  onClick={() => handleLinkClick('gallery')}
                >
                  Gallery
                </a>
            </li>
            <li className='flex items-center justify-center px-2'>
                <div className={`circle ${activeLink === 'contact' ? 'filled' : ''}`}></div>
                <a
                  href="#"
                  onClick={() => handleLinkClick('contact')}
                >
                  Contact
                </a>
              </li>
        </ul>
    </div>

    </>
  )
}

export default Navbar