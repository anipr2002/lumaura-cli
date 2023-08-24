import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="grid grid-cols-[70%_30%] grid-rows-[max-content_auto_max-content]
                    gap-x-4 w-screen h-screen">

          <div className=' bg-orange-300 col-[1_/_3] row-[1_/_2] max-h-[100px] pr-4'>
            <Navbar />
          </div>

            {/* MAIN BODY */}
          <div className=' bg-slate-500 col-[1_/_2] row-[2_/_3]'> 
              <div className='min-h-full w-full ml-4
                              grid grid-rows-[70%_30%]'>
                    <div className='font-studio text-[28px] font-extrabold text-center'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tempore voluptatibus non odit fuga itaque, quisquam magnam repellendus reprehenderit asperiores rerum magni, ea, pariatur eligendi expedita iste soluta repudiandae aliquam.
                    </div>
                    <div className=''>
                        <div className='w-full h-[2px] bg-[#242b2d] skew-y-[-15deg]'>

                        </div>
                    </div>
                    
              </div>
          </div>


          <div className='col-[1_/_2] row-[3_/_4] max-h-[100px] bg-orange-700
                        '>
            <Footer />
          </div>


            {/* SIDE PANEL */}
          <div className=' bg-green-500 ml-4 col-[2_/_3] row-[2_/_4] border-l-2 border-[#242b2d]'>

          </div>



    </div>
  )
}

export default Home