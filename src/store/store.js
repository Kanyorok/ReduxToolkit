import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {
        cartBag: cartSlice,
    }
});

export default store;
