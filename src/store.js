import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducers/CartReducer";

const store = configureStore({
  reducer: {
    cartReducer: CartReducer,
  },
});

export default store;
