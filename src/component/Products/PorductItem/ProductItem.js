import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import productsSlice from '../../../store/productsSlice';

const ProductItem = ({ image, title, price, id, styles, pathHome }) => {
    const { oproductTypePath } = useSelector((state) => state.products)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let path = pathHome ? `${pathHome}/${id}` : `/${oproductTypePath}/${id}`;
    const handleGetProductId = async (id) => {
        dispatch(productsSlice.actions.getProductId(id));
        navigate(path);
    }
    return (
        <div className={`${styles ? styles : " 768:w-1/4 w-1/2 pb-4 flex-col flex mt-5 bg-white rounded-lg overflow-hidden px-2 cursor-pointer hover:scale-110 duration-300 hover:z-10 hover:shadow-md "}`}
            onClick={() => { handleGetProductId(id) }}
        >
            <div className='relative duration-500'>
                <img src={image[0]} alt="thumbnail" />
                <img src={image[1]} alt="thumbnail" className='hover:opacity-100 opacity-0 absolute top-0 left-0 duration-500' />
            </div>
            <div className='flex justify-between'>
                <h2 className='768:text-[15px] text-[10px] font-bold '>{title}</h2>
                <span className='font-bold text-[10px] 768:text-[14px] pr-5'>{price}</span>
            </div>
        </div >
    )
}

export default ProductItem;