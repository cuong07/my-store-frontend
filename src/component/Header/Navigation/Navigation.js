import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom"
import productsSlice from '../../../store/productsSlice';
import { navbarItems } from '../../../utils/nav';

const Navigation = () => {
    const dispatch = useDispatch();
    const handlerSetProductType = (productType) => {
        dispatch(productsSlice.actions.getProductType(productType))
    }
    return (
        <>
            {navbarItems?.map(item => (
                <NavLink
                    key={item.text}
                    to={item.path}
                    className={({ isActive }) => isActive ? "text-blue-400 text-[14px]" : "text-black text-[14px]"}
                    onClick={() => { handlerSetProductType(item.productType) }}
                >
                    {item.text}
                </NavLink>
            ))}
        </>
    )
}

export default Navigation;