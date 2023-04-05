import React, { useEffect } from 'react'
import { Features, HomeProducts, Slider } from '../../component';
import publicSlice from '../../store/publicSlice';
import * as apis from "../../apis"
import { useDispatch } from 'react-redux';
import bgSale from "../../assets/img/Rectangle.png"
import { useLocation } from 'react-router';
import productsSlice from '../../store/productsSlice';


const Home = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    let path = location.pathname.slice(1)
    console.log(location.pathname);
    useEffect(() => {
        const fetchPublic = async () => {
            const response = await apis.getPublic();
            dispatch(publicSlice.actions.getPublic(response?.data?.data))
            dispatch(productsSlice.actions.getProductTypePath(path))
        }
        fetchPublic()
    }, [dispatch, path])

    return (
        <>
            <div className=''>
                <div className='h-[90%] overflow-hidden relative'>
                    <Slider />
                </div>
                <div className='flex  justify-center'>
                    <Features />
                </div>
                <div className='flex justify-center'>
                    <HomeProducts />
                </div>
                <div className='relative'>
                    <img src={bgSale} alt="Sale" />
                    <div className='absolute z-10 top-1/4 pl-[50%] -translate-x-[25%] hidden 768:flex text-white gap-10 '>
                        <p className='flex flex-col'>
                            <span className="text-[66px] font-sale font-semibold">Get <strike className='italic'>20%</strike> <strong>OFF</strong> on your first purchase</span>
                            <span>Sign Up for our newsletter and never miss any offers</span>
                        </p>
                        <form className='flex flex-col mt-8 gap-6'>
                            <input type="email" placeholder='your email address' required className='px-3 py-1 rounded-md outline-none text-black' />
                            <button type='submit' className='bg-black duration-300 hover:bg-white hover:text-black border-2 px-3 py-1 rounded-md border-black'>Subscribe now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;