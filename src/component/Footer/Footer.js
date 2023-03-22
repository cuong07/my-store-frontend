import React from 'react'
import { Link } from 'react-router-dom';
import icons from '../../utils/icons';

const { TiSocialFacebook, AiFillGithub } = icons;

const Footer = () => {
    return (
        <div className='bg-black h-[900px]'>
            <div className='text-white'>
                <div>MC.CLUB</div>
                <div>
                    <Link to="https://facebook.com/manhcuong.apk" target="_blank">
                        <TiSocialFacebook />
                    </Link >
                    <Link to="https://github.com/cuong07" target="_blank">
                        <AiFillGithub />
                    </Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div >
    )
}

export default Footer;