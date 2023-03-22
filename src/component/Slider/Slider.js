import React from 'react'
import { useSelector } from 'react-redux';


const Slider = () => {
    const { image } = useSelector((state) => state.public);
    return (
        <div className='h-full bg-[#CACACA] pt-[85px] flex flex-col gap-5 text-center'>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider text-[#00000020]'>MC.CLUB</div>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider'>MC.CLUB</div>
            <img src={image?.url} alt='bg' className='absolute top-0 z-10 min-w-max  ' />
        </div>
    )
}

export default Slider; 