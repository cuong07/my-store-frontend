/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import Navigation from './Navigation/Navigation'
import icons from '../../utils/icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../apis';

const { RiUserLine, AiOutlineHeart, BsCart, AiOutlineMenu, AiOutlineClose } = icons;

const Header = () => {
    const [isShowNav, setIsShowNav] = useState(false);
    const [isShowLogin, setIsShowLogin] = useState(false);
    const user = useSelector(state => state.auth.login.currentUser)

    const handlerToggoleMenu = () => {
        setIsShowNav(!isShowNav)
    }
    const handlerToggoleUser = () => {
        setIsShowLogin(!isShowLogin)
    }

    return (
        <div className='h-20 w-full flex justify-around pt-[14px]'>
            <div className='flex  gap-12 '>
                <span className='992:hidden cursor-pointer' onClick={handlerToggoleMenu}>
                    <AiOutlineMenu size={24} />
                </span>
                <div className='font-logo font-bold text-[27px] leading-7'>
                    <Link to="/"><h2 className='tracking-tighter'>MC.CLUB</h2></Link>
                </div>
                <nav className="hidden 992:flex font-logo font-bold text-[14px]  gap-4 pt-1  ">
                    <Navigation />
                </nav>
                {isShowNav &&
                    <nav className="flex font-logo font-bold text-[14px] cursor-pointer  gap-4 pt-1 flex-col absolute left-0 top-full  items-center animate-slide-right bg-[#cccccc90] w-full h-screen">
                        <Navigation />
                        <AiOutlineClose size={24} className="absolute right-0 top-0 cursor-pointer" onClick={() => setIsShowNav(false)} />
                    </nav>
                }
            </div>
            <div className='flex gap-6'>
                {user && <Link className='text-center flex justify-center'>Hi! {user?.user.username}</Link>}
                <span
                    className='w-[27px] h-[27px] relative cursor-pointer z-40'
                    onClick={() => { handlerToggoleUser() }}
                >
                    <RiUserLine size={18} className="font-bold absolute bottom-0 left-0" />
                    {isShowLogin &&
                        <div className='absolute top-full ml-[50%] -translate-x-[50%] rounded-md shadow-md bg-[#cacaca]'>
                            {!user && <div className='flex flex-col px-8 py-5 gap-3'>
                                <Link to="/login">SignIn</Link>
                                <Link to="/signup">SignUp</Link>
                            </div>}
                            {user && <div className='flex flex-col px-8 py-5 gap-3'>
                                <Link>Hi! {user.user.username}</Link>
                                <Link>LogOut</Link>
                                {user?.user.admin && <Link to="/listusers" >All User</Link>}
                            </div>}
                        </div>
                    }
                </span>
                <span className='w-[27px] h-[27px] relative' >
                    <AiOutlineHeart size={18} className="font-bold absolute bottom-0 left-0" />
                    <span
                        className='absolute text-[9px] font-semibold tracking-wide w-[17px] h-[17px] bg-black text-white rounded-full flex items-center justify-center top-0 right-0'
                    >
                        12
                    </span>
                </span>
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