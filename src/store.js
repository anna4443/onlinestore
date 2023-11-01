import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '/src/redux/cartSlice'

export const store = configureStore({
    reducer:{
        cart:cartReducer
    },
});