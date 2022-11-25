import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payingfees: {},
};

const PaymentReducer = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    feespaying: (state, action) => {
      state.payingfees = action.payload;
    },
  },
});

export const { feespaying } = PaymentReducer.actions;
export default PaymentReducer.reducer;
