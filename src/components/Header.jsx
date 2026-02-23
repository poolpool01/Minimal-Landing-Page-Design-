import React from 'react'
import HeaderImg from '../assets/img/header-img.png'

function Header() {
  return (
    <div className='bg-[#F5F7FA] h-auto md:h-[600px] flex items-center'>
      <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between md:items-center md:p-0'>
        <div>
            <h1 className='text-[4rem] leading-[1] font-semibold text-[#4D4D4D]'>Lessons and insights <br /> <span className='text-[#4CAF4F]'>from 8 years</span></h1>
            <p className='text-[#717171] mt-5'>Where to grow your business as a photographer: site or social media?</p>
            <a href="#" className='inline-flex justify-center items-center py-3 px-8 mt-5 bg-[#4CAF4F] text-white rounded-md'>Register</a>
        </div>

        <div className=''>
            <img src={HeaderImg} alt="header-img" />
        </div>
      </div>
    </div>
  )
}

export default Header
