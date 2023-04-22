import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import productsSlice from '../../store/productsSlice';
import bg from "../../assets/img/background.png"

const Slider = () => {
    const dispatch = useDispatch();
    const handlerSetProductType = (productType) => {
        dispatch(productsSlice.actions.getProducts(productType))
    }
    return (
        <div className='h-full bg-[#CACACA] pt-[85px] flex flex-col gap-5 text-center'>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider text-[#00000020]'>MC.CLUB</div>
            <div className='font-logo font-bold text-[300px] leading-[300px] tracking-slider'>MC.CLUB</div>
            <img src={bg} alt='bg' className='absolute top-0 z-10 min-w-max  ' />
            <div className='absolute 768:top-[40%] top-1/4 mx-[10%] translate-x-1/4 768:ml-[25%] flex flex-col  text-white bg-black p-5 gap-4 z-20 items-center rounded-md duration-500 animate-slide-right'>
                <div className=''>
                    <div className='768:text-[88px] text-[72px] leading-none font-bold uppercase tracking-tightest'>Street</div>
                    <div className='768:text-[88px] text-[72px] leading-none font-bold uppercase tracking-tightest'>wears</div>
                </div>
                <span className='font-semibold text-[14px] uppercase'>High quality cool tshirts for street fashion</span>
                <Link
                    to="/womens"
                    className='rounded-full border-2 border-white w-3/5 py-2 hover:bg-white hover:text-black capitalize'
                    onClick={() => { handlerSetProductType("women") }}
                >
                    Bắt đầu mua sắm
                    &#8594;
                </Link>
            </div>
        </div>
    )
}

export default Slider; 