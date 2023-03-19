import React from 'react'
import { NavLink } from "react-router-dom"
import { navbarItems } from '../../../utils/nav';

const Navigation = () => {
    return (
        <>
            {navbarItems?.map(item => (
                <NavLink key={item.text}>
                    {item.text}
                </NavLink>
            ))}
        </>
    )
}

export default Navigation;