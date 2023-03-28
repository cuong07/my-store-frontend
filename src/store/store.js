import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import publicSlice from "./publicSlice";

const store = configureStore({
    reducer: {
        public: publicSlice.reducer,
        products: productsSlice.reducer
    }
})
export default store;