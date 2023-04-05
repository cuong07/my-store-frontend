import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import icons from '../../utils/icons';
import * as apis from "../../apis"

const { RiUserLine, AiFillEye, AiFillEyeInvisible } = icons;

const Signup = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setrPassword] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            password: password,
            username: username,
            email: email
        }
        apis.signupUser(newUser, dispatch, navigate);
    }

    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#f7f7f7]'>
            <div className='768:w-1/3 w-3/4 h-3/4 shadow-xl bg-white rounded-md flex flex-col justify-around'>
                <div className='flex flex-col w-full items-center gap-2'>
                    <RiUserLine className="text-blue-500 768:text-[50px] text-[30px]" />
                    <strong className='768:text-5xl text-2xl'>Create account!</strong>
                </div>
                <form
                    method='POST' action=''
                    className='flex-col flex w-full items-center gap-8'
                    onSubmit={handleSignup}
                >
                    <span className='768:w-3/5 w-4/5'>
                        <label form='name'>Name</label>
                        <span className='flex border-b-2 pb-1 '>
                            <input
                                type="text"
                                name='name'
                                className='outline-none w-full '
                                onChange={(e) => { setName(e.target.value) }}

                            />
                            <RiUserLine className='w-8' />
                        </span>
                    </span>
                    <span className='768:w-3/5  w-4/5 '>
                        <label form='username'>Username</label>
                        <span className='flex border-b-2 pb-1 '>
                            <input
                                type="text" name='username'
                                className='outline-none w-full '
                                onChange={(e) => { setUsername(e.target.value) }}
                            />
                            <RiUserLine className='w-8' />
                        </span>
                    </span>
                    <span className='768:w-3/5  w-4/5 '>
                        <label form='email'>Email</label>
                        <span className='flex border-b-2 pb-1 '>
                            <input
                                type="email"
                                name='email'
                                className='outline-none w-full '
                                onChange={(e) => { setEmail(e.target.value) }}

                            />
                            <RiUserLine className='w-8' />
                        </span>
                    </span>
                    <span className='768:w-3/5  w-4/5'>
                        <label form='password'>Password</label>
                        <span
                            className='flex border-b-2 pb-1 cursor-pointer '

                        >
                            <input
                                type={`${isShowPassword ? "password" : "text"}`}
                                name='password'
                                className='outline-none w-full '
                                onChange={(e) => { setrPassword(e.target.value) }}

                            />
                            <span
                                onClick={() => { setIsShowPassword(!isShowPassword) }}
                            >
                                {!isShowPassword && <AiFillEye className='w-8' />}
                                {isShowPassword && <AiFillEyeInvisible className='w-8' />}
                            </span>
                        </span>
                    </span>
                    <div className='flex justify-between 768:w-3/5  w-4/5'>
                        <Link to="/login">do you already have an account?</Link>
                        <Link>forgot password?</Link>
                    </div>
                    <button type='submit' className='bg-blue-500 ml-10 px-6 py-3 text-white rounded-md hover:opacity-80'>Sign Up &#8594;</button>
                </form>
            </div>
        </div>
    )
}
export default Signup