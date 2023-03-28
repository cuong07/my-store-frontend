import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productsSlice from '../../store/productsSlice';

const Slider = () => {
    const { image } = useSelector((state) => state.public);
    const dispatch = useDispatch();
    const handlerSetProductType = (productType) => {
        dispatch(productsSlice.actions.getProductType(productType))
        console.log("1");
    }
    return (
        <div className='h-full bg-[#CACACA] pt-[85px] flex flex-col gap-5 text-center'>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider text-[#00000020]'>MC.CLUB</div>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider'>MC.CLUB</div>
            <img src={image?.url} alt='bg' className='absolute top-0 z-10 min-w-max  ' />
            <div className='absolute 768:top-[40%] top-1/4 translate-x-1/4 768:ml-[25%] flex flex-col  text-white bg-black p-5 gap-4 z-20 items-center rounded-md duration-500 animate-slide-right'>
                <div className=''>
                    <div className='768:text-[88px] text-[66px] leading-none font-bold uppercase tracking-tightest'>Street</div>
                    <div className='768:text-[88px] text-[66px] leading-none font-bold uppercase tracking-tightest'>wears</div>
                </div>
                <span className='font-semibold text-[14px] uppercase'>High quality cool tshirts for street fashion</span>
                <Link
                    to="/mens"
                    className='rounded-full border-2 border-white w-3/5 py-2 hover:bg-white hover:text-black'
                    onClick={() => { handlerSetProductType(1) }}
                >
                    Start shopping
                    &#8594;
                </Link>
            </div>
        </div>
    )
}

export default Slider; 