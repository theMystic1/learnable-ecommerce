// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./reduxApi";
import cartReducer from "./cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loadState, saveState } from "../../utils/localStorage";

// Load the persisted state
const preloadedState = {
  cart: loadState(),
};

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  preloadedState,
});

setupListeners(store.dispatch);

// Save the state whenever it changes
store.subscribe(() => {
  saveState(store.getState().cart);
});
