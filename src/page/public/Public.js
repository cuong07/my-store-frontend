import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../component'

const Public = () => {
    return (
        <div className='flex flex-col h-min'>
            <div className='mt-8 w-full fixed top-0 left-0 right-0 z-20 border-b border-b-[#00000020]'>
                <Header />
            </div>
            <div className='w-full h-full'>
                <Outlet />
            </div>
            <div>
                footer
            </div>
        </div>
    )
}

export default Public