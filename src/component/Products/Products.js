import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import * as apis from "../../apis"
import productsSlice from '../../store/productsSlice'
import ProductItem from './PorductItem/ProductItem'

const Products = () => {
    const { productType } = useSelector((state) => state.products)
    const [products, setProducts] = useState([])
    const location = useLocation();
    const dispatch = useDispatch()
    let path = location.pathname.slice(1)
    useEffect(() => {
        const fetchProducts = async () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const response = await apis.getProducts(productType);
            dispatch(productsSlice.actions.getProductTypePath(path))
            dispatch(productsSlice.actions.getProducts(response.data.data))
            setProducts(response.data.data)
        }
        fetchProducts();
    }, [productType, path, dispatch])
    return (
        <div className='w-full h-full flex-wrap flex mb-10 mt-20'>
            {products?.map(product =>
                <ProductItem
                    key={product.id}
                    image={product?.images}
                    price={product.price}
                    title={product.title}
                    id={product.id}
                />
            )}
        </div>
    )
}

export default Products