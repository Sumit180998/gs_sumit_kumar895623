import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Store {
  id: number;
  name: string;
  city: string;
  state: string;
}

interface StoreState {
  stores: Store[];
}

const initialState: StoreState = {
  stores: [],
};

const storeSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<Store>) => {
      state.stores.push(action.payload);
    },
    removeStore: (state, action: PayloadAction<number>) => {
      state.stores = state.stores.filter((store) => store.id !== action.payload);
    },
  },
});

export const { addStore, removeStore } = storeSlice.actions;
export default storeSlice.reducer;

