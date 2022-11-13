import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBasket, BasketSliceState } from '../types/basket';

const initialState: BasketSliceState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemToBasket(state, action) {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addItemToBasket } = basketSlice.actions;

export default basketSlice.reducer;
