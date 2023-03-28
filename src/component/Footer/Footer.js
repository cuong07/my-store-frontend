import React from 'react'
import { Link } from 'react-router-dom';
import icons from '../../utils/icons';

const { TiSocialFacebook, AiFillGithub, TiSocialPinterest, TiSocialDribbble, TiSocialTwitter } = icons;

const Footer = () => {
    return (
        <div className='bg-black w-[80%] flex flex-col my-20'>
            <div className='flex justify-center'>
                <div className='text-white 768:w-1/3 flex flex-col items-center gap-5'>
                    <div className='font-bold text-[60px] tracking-slider text-center '>MC.CLUB</div>
                    <div className='flex gap-4 text-[28px] justify-center'>
                        <Link to="https://facebook.com/manhcuong.apk" target="_blank">
                            <TiSocialFacebook />
                        </Link >
                        <Link to="https://github.com/cuong07" target="_blank">
                            <AiFillGithub />
                        </Link>
                        <Link>
                            <TiSocialPinterest />
                        </Link>
                        <Link>
                            <TiSocialDribbble />
                        </Link>
                        <Link>
                            <TiSocialTwitter />
                        </Link>
                    </div>
                </div>
                <div className='w-2/3 768:flex hidden '>
                    <div className='w-[30%] text-white flex flex-col gap-4'>
                        <h2 className='uppercase text-[16px] font-bold'>Quick links</h2>
                        <div className='flex flex-col'>
                            <span className='text-[#A1A1A1] text-[14px]'>Home</span>
                            <span className='text-[#A1A1A1] text-[14px]'>About us</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Offers</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Services</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Contact us</span>
                        </div>
                    </div>
                    <div className='w-[30%] text-white flex flex-col gap-4'>
                        <h2 className='uppercase text-[16px] font-bold'>About</h2>
                        <div className='flex flex-col'>
                            <span className='text-[#A1A1A1] text-[17px]'>How it work</span>
                            <span className='text-[#A1A1A1] text-[14px]'>our packages</span>
                            <span className='text-[#A1A1A1] text-[14px]'>promotions</span>
                            <span className='text-[#A1A1A1] text-[14px]'>refer a friend</span>
                        </div>
                    </div>
                    <div className='w-[30%] text-white flex flex-col gap-4'>
                        <h2 className='uppercase text-[16px] font-bold'>Help Centre</h2>
                        <div className='flex flex-col'>
                            <span className='text-[#A1A1A1] text-[17px]'>Payments</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Shipping</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Product returns</span>
                            <span className='text-[#A1A1A1] text-[14px]'>FAQs</span>
                            <span className='text-[#A1A1A1] text-[14px]'>Checkout</span>
                            <span className='text-[#A1A1A1] text-[14px]'>other Issues</span>
                        </div>
                    </div>
                </div>
            </div>
            <span className='w-full h-[1px] bg-gray-400 mt-20 mb-10'></span>
            <div className='text-white flex justify-between mb-30'>
                <span className='text-[10px] text-[#A1A1A1]'>
                    &#169; 2023MC.CLUB All rights reserved.
                </span>
                <span className='text-[10px] text-[#A1A1A1]'>
                    Design by ManhCuong
                </span>
            </div>
        </div >
    )
}

export default Footer;