import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.item) {
        state.cartItems.push(action.payload.item);
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      if (action.payload.item) {
        const indexToRemove = state.cartItems.findIndex(
          (cartItem) => cartItem.id == action.payload.item.id
        );
        state.cartItems.splice(indexToRemove, 1);
      } else {
        const indexToRemove = state.cartItems.findIndex(
          (cartItem) => cartItem.id == action.payload.id
        );
        state.cartItems.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartReducer.actions;

export default CartReducer.reducer;
