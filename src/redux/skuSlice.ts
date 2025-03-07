
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SKU {
  id: number;
  name: string;
  price: number;
  cost: number;
}

interface SKUState {
  skus: SKU[];
}

const initialState: SKUState = {
  skus: [],
};

const skuSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSKU: (state, action: PayloadAction<SKU>) => {
      state.skus.push(action.payload);
    },
    removeSKU: (state, action: PayloadAction<number>) => {
      state.skus = state.skus.filter((sku) => sku.id !== action.payload);
    },
  },
});

export const { addSKU, removeSKU } = skuSlice.actions;
export default skuSlice.reducer;

