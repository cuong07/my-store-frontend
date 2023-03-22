import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    image: [],
    title: '',
    saleOff: 0,
}
const publicSlice = createSlice({
    name: 'public',
    initialState: initialState,
    reducers: {
        getPublic: (state, action) => {
            state.image = action.payload.image[0];
            state.title = action.payload.title;
            state.saleOff = action.payload.saleOff;
        }
    }
})
export default publicSlice;