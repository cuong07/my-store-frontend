import React, { useEffect } from 'react'
import { Slider } from '../../component';
import publicSlice from '../../store/publicSlice';
import * as apis from "../../apis"
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchPublic = async () => {
            const response = await apis.getPublic();
            console.log(response);
            dispatch(publicSlice.actions.getPublic(response?.data?.data))
        }
        fetchPublic()
    }, [dispatch])

    return (
        <>
            <div className='h-[90%] overflow-hidden relative'>
                <Slider />
            </div>
        </>
    )
}

export default Home;