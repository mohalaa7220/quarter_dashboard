import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/authSlice";
import products from "./slices/productSlice";
import pagination from "./slices/pagination";

export const store = configureStore({
  reducer: {
    auth,
    products,
    pagination,
  },
});
