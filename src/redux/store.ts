
import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";
import skuReducer from "./skuSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    stores: storeReducer,
    skus: skuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


