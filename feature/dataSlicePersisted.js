import { createSlice } from "@reduxjs/toolkit";

const dataSlicePersisted = createSlice({
  name: "dataSlicePersisted",
  initialState: {
    dataDetail: {},
  },
  reducers: {
    setDataDetail: (state, action) => {
      state.dataDetail = action.payload;
    },
  },
});

export const { setDataDetail } = dataSlicePersisted.actions;
export default dataSlicePersisted.reducer;
