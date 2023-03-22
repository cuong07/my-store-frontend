import { configureStore } from "@reduxjs/toolkit";
import publicSlice from "./publicSlice";

const store = configureStore({
    reducer: {
        public: publicSlice.reducer
    }
})
export default store;