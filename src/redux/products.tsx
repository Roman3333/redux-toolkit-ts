import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IProduct, IRootObject, Status, ProductSliceState } from '../types/product';

const initialState: ProductSliceState = {
  products: [],
  isLoading: Status.LOADING,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const products = await axios.get('https://dummyjson.com/products?limit=10');

  return products.data.products;
});

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = Status.LOADING;
      state.products = [];
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = Status.SUCCESS;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = Status.ERROR;
      state.products = [];
    });
  },
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.isLoading = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.isLoading = 'ok';
  //     state.items = action.payload;
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.isLoading = 'error';
  //     state.items = [];
  //   },
  // },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
