import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems: [],
    amount: 0,
    total: 0
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) => {
            const item = action.payload;
            const index = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (index === -1) {
                state.cartItems.push({...item, amount:1});
            }
            else{
                state.cartItems[index].amount +=1;
            }
        },
        incrementQuantity:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrementQuantity:(state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        removeItem:(state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
        clearCart:(state) => {
            state.cartItems = [];
        },
        calculateTotalPrice:(state) =>{
            let amount= 0;
            let totalPrice = 0;

            state.cartItems.forEach((item) => {
                amount += item.amount;
                totalPrice += item.amount*item.price;
            })
            state.amount = amount;
            state.total = totalPrice;
        }
    }
});

export const {addItem, incrementQuantity, decrementQuantity, removeItem, clearCart, calculateTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;