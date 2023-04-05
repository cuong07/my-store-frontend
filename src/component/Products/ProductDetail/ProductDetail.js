import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import * as apis from "../../../apis"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ProductItem from '../PorductItem/ProductItem';

const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { productType, id } = useParams();
    const [product, setProduct] = useState(null);
    const { products } = useSelector(state => state.products)
    useEffect(() => {
        const fetchDetailProduct = async () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const response = await apis.getProductDetail(productType, id);
            setProduct(response.data.data)
        }
        fetchDetailProduct()
    }, [productType, id]);
    let productsExtend = products?.filter(prod => prod.price === product?.price)
    return (
        <div className='w-full flex flex-col items-center my-6 gap-9 mt-20'>
            <div className='w-[70%] max-768:w-[90%] 768:flex max-768:flex-col gap-6'>
                <div className='768:w-1/2 flex flex-col items-center gap-4'>
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="h-[80%] w-full"
                    >
                        {product?.images.map((item) =>
                            <SwiperSlide key={item}>
                                <img src={item} alt="slider" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <span className='w-full h-[1px] bg-black'></span>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="h-[20%] w-full"
                    >
                        {product?.images.map((item) =>
                            <SwiperSlide key={item}>
                                <img src={item} alt="slider" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className='flex flex-col w-full gap-5'>
                    <h2 className='text-[28px] font-bold'>{product?.title}</h2>
                    <span className='w-1/5 h-[1px] bg-black my-4'></span>
                    <p className='text-[24px] font-bold'>
                        {product?.price}
                    </p>
                    <p className='text-[20px] font-bold'>please seclect size</p>
                    <div className='flex gap-2'>
                        <button className='w-[35px] h-[35px] border-2 rounded-md border-black font-bold focus:bg-[#ccc]'>S</button>
                        <button className='w-[35px] h-[35px] border-2 rounded-md border-black font-bold focus:bg-[#ccc]'>M</button>
                        <button className='w-[35px] h-[35px] border-2 rounded-md border-black font-bold focus:bg-[#ccc]'>L</button>
                        <button className='w-[35px] h-[35px] border-2 rounded-md border-black font-bold focus:bg-[#ccc]'>XL</button>
                    </div>
                    <div className='flex gap-4'>
                        <button className='min-w-[135px] bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black cursor-pointer' >add to cart</button>
                        <button className='min-w-[135px] bg-black text-white rounded-md border-2 border-black hover:bg-white hover:text-black cursor-pointer' >help me!</button>
                    </div>
                    <span className='w-full h-[1px] bg-black my-4'></span>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-[70%] justify-start  '>
                <h2 className='font-bold text-[24px]'>Các sản phẩm tương tự </h2>
                <div className='flex flex-wrap'>
                    {productsExtend?.map(prod =>
                        <ProductItem
                            key={prod.id}
                            image={prod.images}
                            title={prod.title}
                            price={prod.price}
                            id={prod.id}
                            styles="w-1/4 cursor-pointer " />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail