import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionData: {},
};

const AuthReducer = createSlice({
  name: "authreducer",
  initialState: initialState,
  reducers: {
    sessionStore: (state, action) => {
      state.sessionData = action.payload;
    },
    removeSession: (state, action) => {
      state.sessionData = {};
    },
  },
});

export const { sessionStore, removeSession } = AuthReducer.actions;
export default AuthReducer.reducer;
