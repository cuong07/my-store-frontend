/* eslint-disable array-callback-return */
import React from 'react'
import Navigation from './Navigation/Navigation'
import icons from '../../utils/icons'

const { RiUserLine, AiOutlineHeart, BsCart } = icons;

const Header = () => {
    return (
        <div className='h-20 w-full flex justify-around pt-[14px]'>
            <div className='flex  gap-12 '>
                <div className='font-logo font-bold text-[27px] leading-7'>
                    <h2 className='tracking-tighter'>MC.CLUB</h2>
                </div>
                <div className='flex font-logo font-bold text-[14px] uppercase gap-4 pt-1'>
                    <Navigation />
                </div>
            </div>
            <div className='flex gap-6'>
                <div className='w-[27px] h-[27px] relative' >
                    <RiUserLine size={18} className="font-bold absolute bottom-0 left-0" />
                </div>
                <div className='w-[27px] h-[27px] relative' >
                    <AiOutlineHeart size={18} className="font-bold absolute bottom-0 left-0" />
                    <span
                        className='absolute text-[9px] font-semibold tracking-wide w-[17px] h-[17px] bg-black text-white rounded-full flex items-center justify-center top-0 right-0'
                    >
                        12
                    </span>
                </div>
                <div className='w-[27px] h-[27px] relative' >
                    <BsCart size={18} className="font-bold absolute bottom-0 left-0" />
                    <span
                        className='absolute text-[9px] font-semibold tracking-wide w-[17px] h-[17px] bg-black text-white rounded-full flex items-center justify-center top-0 right-0'
                    >
                        2
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header