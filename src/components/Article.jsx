import React from 'react'
import articleImg01 from '../assets/img/article-01.png'
import articleImg02 from '../assets/img/article-02.png'
import articleImg03 from '../assets/img/article-03.png'
import { HiOutlineArrowRight } from "react-icons/hi";

function Article() {
    return (
        <div className='pt-10 pb-20 text-center'>
            <div className='container mx-auto max-w-[1320px]'>
                <h3 className='text-[2.2rem] font-semibold text-[#4D4D4D]'>Caring is the new marketing</h3>
                <p className='text-[#717171]'>The Nexcent blog is the best place to read about the latest membership insights,<br /> trends and more. See who's joining the community,<br /> read about how our community are increasing their membership income and lot's more.​</p>

                <div className='my-10 '>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={articleImg01} alt="Article 01" />

                            <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-lg'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</p>
                                <a className='text-[#4CAF4F] font-bold' href="">Readmore <HiOutlineArrowRight className='inline-block ml-2' /></a>
                            </div>
                        </div>

                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={articleImg02} alt="Article 02" />

                            <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-lg'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>What are your safeguarding <br />responsibilities and how can <br /> you manage them?</p>
                                <a className='text-[#4CAF4F] font-bold' href="">Readmore <HiOutlineArrowRight className='inline-block ml-2' /></a>
                            </div>
                        </div>

                        <div className='relative m-5 md:m-0'>
                            <img className='rounded-xl' src={articleImg03} alt="Article 03" />

                            <div className='absolute bg-[#F5F7FA] bottom-[-50px] left-[50%] translate-x-[-50%] w-full max-w-[350px] p-5 shadow-lg rounded-lg'>
                                <p className='font-bold text-[1.25rem] text-[#717171] mb-5'>Revamping the Membership <br /> Model with Triathlon  <br />Australia </p>
                                <a className='text-[#4CAF4F] font-bold' href="">Readmore <HiOutlineArrowRight className='inline-block ml-2' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
