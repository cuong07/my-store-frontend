import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productType: null,
    productId: null,
    oproductTypePath: "mens",
    products: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        getProductType: (state, action) => {
            state.productType = action.payload
        },
        getProductId: (state, action) => {
            state.productId = action.payload
        },
        getProductTypePath: (state, action) => {
            state.oproductTypePath = action.payload
        },
        getProducts: (state, action) => {
            state.products = action.payload
        }
    }

})

export default productsSlice;