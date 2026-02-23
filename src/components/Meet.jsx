import React from 'react'
import Tim from '../assets/img/tim-smith.png'
import ClientImgLogo01 from '../assets/img/clients/client-01.png'
import ClientImgLogo02 from '../assets/img/clients/client-02.png'
import ClientImgLogo03 from '../assets/img/clients/client-03.png'
import ClientImgLogo04 from '../assets/img/clients/client-04.png'
import ClientImgLogo05 from '../assets/img/clients/client-05.png'
import ClientImgLogo06 from '../assets/img/clients/client-06.png'
import { HiOutlineArrowRight } from "react-icons/hi";

function Meet() {
  return (
    <div className='bg-[#F5F7FA] py-10'>
        <div className='container mx-auto max-w-[1320px] p-10 grid grid-cols-1 md:grid-cols-2 '>
            <div>
                <img src={Tim} alt="Tim Smith" />
            </div>
            <div >
                <p className='text-[#717171] my-5'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <h3 className='mt-5 md:mt-0 text-[1.25rem] font-semibold text-[#4CAF4F]'>Tim Smith</h3>
                <p className='text-[#89939E] '>British Dragon Boat Racing Association</p>
                <ul className='flex flex-col items-center md:flex-row md:justify-between mt-10'>
                    <li><img src={ClientImgLogo01} alt="Client Logo 1" /></li>
                    <li><img src={ClientImgLogo02} alt="Client Logo 2" /></li>
                    <li><img src={ClientImgLogo03} alt="Client Logo 3" /></li>
                    <li><img src={ClientImgLogo04} alt="Client Logo 4" /></li>
                    <li><img src={ClientImgLogo05} alt="Client Logo 5" /></li>
                    <li><img src={ClientImgLogo06} alt="Client Logo 6" /></li>
                    <li><a className='text-[#4CAF4F] flex items-center font-bold' href="#">Meet All Customer<HiOutlineArrowRight className="inline ml-1" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Meet
