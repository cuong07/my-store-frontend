import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { Footer, Header } from '../../component'

const Public = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className='flex flex-col h-max'>
            <div className={`mt-8 w-full fixed top-0 left-0 right-0 z-20 border-b border-b-[#00000020] duration-200 ${offset > 0 ? "bg-[#CACACA] mt-0 border-b-0 shadow-xl" : ""} `}>
                <Header />
            </div>
            <div className='w-full h-full'>
                <Outlet />
            </div>
            <div className='w-full max-h-max'>
                <Footer />
            </div>
        </div>
    )
}

export default Public