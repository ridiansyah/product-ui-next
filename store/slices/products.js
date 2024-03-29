import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  datas: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.datas = action?.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

const productsReducer = productsSlice.reducer;
export default productsReducer;
