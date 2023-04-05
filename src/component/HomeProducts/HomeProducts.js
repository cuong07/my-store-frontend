import React, { useState } from 'react'
import { useEffect } from 'react';
import productsSlice from '../../store/productsSlice';
import * as apis from "../../apis"
import { useDispatch } from 'react-redux';
import ProductItem from '../Products/PorductItem/ProductItem';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await apis.getProducts(1);
            dispatch(productsSlice.actions.getProducts(response.data.data))
            setProducts(response.data.data)
        }
        fetchProducts();
    }, [dispatch])
    const handlerSetProductType = (productType) => {
        dispatch(productsSlice.actions.getProductType(productType))
    }
    return (
        <div className='w-[80%] my-10'>
            <div className='flex flex-col items-center my-8'>
                <h2 className='text-[28px]'>new arrivals</h2>
                <span className='h-[1px] w-1/12 bg-[#333] '></span>
            </div>
            <div className='flex flex-wrap'>
                {products?.slice(0, 8).map(product =>
                    <ProductItem
                        key={product.id}
                        image={product.images}
                        price={product.price}
                        title={product.title}
                        id={product.id}
                        styles="768:w-1/4 w-1/2 mb-10 "
                        pathHome="/mens"
                    />
                )}
            </div>
            <div className='w-full flex justify-center my-5'>
                <Link
                    to="/mens"
                    onClick={() => { handlerSetProductType(1) }}
                    className="768:text-[16px] text-[12px] text-white rounded-md shadow-md duration-300 uppercase bg-black 768:px-4 768:py-2 px-2 py-1 hover:bg-white hover:text-black border-2 border-black animate-slide-right"
                >
                    View All Product
                </Link>
            </div>
        </div>
    )
}

export default HomeProducts;