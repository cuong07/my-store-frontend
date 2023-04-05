import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authSlice";
import productsSlice from "./productsSlice";
import publicSlice from "./publicSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        public: publicSlice.reducer,
        products: productsSlice.reducer,
        auth: authslice.reducer,
        users: userSlice.reducer
    }
})
export default store;