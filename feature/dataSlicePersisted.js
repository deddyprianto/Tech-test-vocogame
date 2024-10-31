import { createSlice } from "@reduxjs/toolkit";

const dataSlicePersisted = createSlice({
  name: "dataSlicePersisted",
  initialState: {
    dataDetail: {},
    paymentMethod: {},
  },
  reducers: {
    setDataDetail: (state, action) => {
      state.dataDetail = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const { setDataDetail, setPaymentMethod } = dataSlicePersisted.actions;
export default dataSlicePersisted.reducer;
