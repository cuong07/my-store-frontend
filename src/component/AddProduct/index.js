import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import * as ReactDOM from 'react-dom';
import "react-toastify/dist/ReactToastify.css";

import { addProduct } from '../../apis/products';
import Loading from '../../UI/Loading';


const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isFetching } = useSelector(state => state.products.addProduct)
    const { currentUser } = useSelector(state => state.auth.login)
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [total, setTotal] = useState("");
    const [category, setCategory] = useState("men");
    const handleAddProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('total', total);
        formData.append('category', category);
        formData.append('id', currentUser.user.id)
        const files = document.querySelector('#file').files;
        for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i]);
        }
        formData.append('image', files);
        addProduct(dispatch, formData, navigate);
    };
    return (
        <>
            <div className='w-full h-screen my-20 flex flex-col items-center'>
                <header>
                    <h2 className='text-2xl font-bold'>Add Product</h2>
                </header>
                <form method='POST' className='w-3/5 flex flex-col gap-4' onSubmit={handleAddProduct} encType="multipart/form-data" >
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg'>Title</label>
                        <input className='border p-1' type="text" name='title'
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg'>Price</label>
                        <input className='border p-1' type="number" name='price' step="0.01"
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg'>Image</label>
                        <input className='border p-1' type="file" id="file" name='image' multiple
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Description</label>
                        <textarea className='border p-1' type="text" name='description'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg'>Total</label>
                        <input className='border p-1' type="number" name='total'
                            onChange={(e) => setTotal(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Category</label>
                        <select name='category' className='border p-1'
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="men" key="men">men</option>
                            <option value="women" key="women">women</option>
                            <option value="top" key="top">top</option>
                            <option value="bottom" key="bottom">bottom</option>
                            <option value="outerwear" key="outerwear">outerwear</option>
                            <option value="accessorie" key="accessorie">accessorie</option>
                        </select>
                    </div>
                    <button type='submit' className='border p-3 bg-blue-500 text-white rounded-md'>Add Product</button>
                </form>
            </div>
            {isFetching && ReactDOM.createPortal(<Loading />, document.getElementById("loading"))}
        </>
    )
}

export default AddProduct