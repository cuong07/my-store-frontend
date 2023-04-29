import React, { useEffect, useMemo } from 'react'
import icons from '../../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../apis';
import productsSlice from '../../store/productsSlice';
import { clearCart, getCartTotal, removeFromCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router';
import { orderProducts } from '../../apis/order';
import Swal from 'sweetalert2';
import { createAxios } from '../../utils/createIntance';
import authslice from '../../store/authSlice';

const { AiOutlineClose, AiFillDelete } = icons;

const Cart = ({ onClickToggle, pathHome }) => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products.getProducts)
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const { currenPath } = useSelector((state) => state.products.getProducts)
    const { currentUser } = useSelector((state) => state.auth.login)
    let requestJWT = createAxios(currentUser, dispatch, authslice.actions.loginSuccess);

    const navigate = useNavigate();

    const cartProductsWithDetails = useMemo(() => {
        return cartProducts?.map(cartProduct => {
            // eslint-disable-next-line eqeqeq
            const product = products.find(product => product.id == cartProduct.id);
            return { ...cartProduct, ...product };
        });
    }, [cartProducts, products]);

    const handleGetProductId = async (prodId) => {
        let path = `/${currenPath}/${prodId}`;
        navigate(path);
    }

    const handlerClearCart = () => {
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn sẽ không thể hoàn nguyên điều này!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCart())
                dispatch(getCartTotal(0))
                Swal.fire(
                    'Đã xóa!',
                    'Giỏ hàng của bạn đã được xóa.',
                    'success'
                )
            }
        })

    }

    const handleAddOrder = (e) => {
        e.preventDefault();
        let total = 0;
        cartProductsWithDetails.forEach(product => total += product.price * product.quantity);
        const cartOrder = {
            userId: currentUser.user.id,
            total,
            products: cartProducts
        }
        if (cartProducts.length > 0) {
            Swal.fire({
                title: 'Bạn có chắc không?',
                text: "Bạn sẽ không thể hoàn nguyên điều này!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    orderProducts(cartOrder, dispatch, currentUser.token, requestJWT);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order thành công!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Giỏ hàng trống!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };

    const handlerRevomeFromCart = (e, id) => {
        e.stopPropagation()
        Swal.fire({
            title: 'Bạn có chắc không?',
            text: "Bạn sẽ không thể hoàn nguyên điều này!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Vâng, xóa nó!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFromCart(id))
                Swal.fire(
                    'Đã xóa!',
                    'Sản phẩm của bạn đã bị xóa.',
                    'success'
                )
            }
        })
    }


    return (
        <div className='w-full bg-[#ccc] h-full relative'>
            <span className='top-3 flex justify-end cursor-pointer font-bold hover:opacity-80 p-3'
                onClick={() => onClickToggle()}
            >
                <AiOutlineClose size={24} />
            </span>
            <div className='px-4'>
                <h2 className='font-bold text-xl'>Thông tin giỏ hàng : </h2>
                <hr className='border-[#333] border-1' />
            </div>
            <div className='flex flex-col gap-2 mt-5 h-5/6 overflow-auto'>
                {cartProductsWithDetails?.map((product) =>
                    <div className='flex gap-4 cursor-pointer hover:bg-[#b9b9b9] p-4 duration-200 justify-between' key={product.id}
                        onClick={() => handleGetProductId(product.id)}
                    >
                        <div className='flex gap-2'>
                            <div className='w-20 rounded-md overflow-hidden'>
                                <img src={product.image && JSON.parse(product.image)?.[0].url} alt="thumnail" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='font-bold'>{product.title}</h2>
                                <p className='text-[#00000070]'>Số lượng: <span className='font-bold'>{product.quantity}</span></p>
                            </div>
                        </div>
                        <button onClick={(e) => handlerRevomeFromCart(e, product.id)} className=''>
                            <AiFillDelete size={20} title='Remove Product' className='hover:opacity-70 cursor-pointer' />
                        </button>
                    </div>
                )}
                {currentUser && cartProducts.length === 0 && <h1 className='m-4 text-xl font-semibold'>Bạn chưa thêm bất kì sản phẩm nào!</h1>}
                {!currentUser && cartProducts.length === 0 && <h1 className='m-4 text-xl font-semibold'>Bạn chưa đăng nhâp!</h1>}
            </div>
            <div className='flex justify-around gap-4 absolute bottom-0 w-full m-4'>
                <button className='flex-1 bg-black text-white py-3'
                    onClick={(e) => handleAddOrder(e)}
                >Order</button>
                <button className='flex-1 bg-black text-white py-3'
                    onClick={handlerClearCart}
                >Clear Cart</button>
            </div>
        </div >
    )
}

export default Cart;