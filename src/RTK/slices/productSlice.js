import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (formData) => {
    const response = await axiosInstance.post(`product/`, formData);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async ({ name = "", state = "", amenities = "" }, { getState }) => {
    const { page } = getState().pagination;
    const response = await axiosInstance.get(
      `product/?page=${page}${name ? `&name=${name}` : ""}${
        state ? `&state=${state}` : ""
      }${amenities ? `&amenities=${amenities}` : ""}`
    );
    return response.data;
  }
);

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id) => {
    const response = await axiosInstance.get(`product/${id}`);
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    error: null,
    loading: false,
    message: null,
    allProducts: [],
    productDetails: [],
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    // addProduct
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // getProducts
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // Product Details
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default ProductSlice.reducer;
