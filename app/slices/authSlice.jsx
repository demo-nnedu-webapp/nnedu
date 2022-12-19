import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  loginData: {},
};

const AuthReducer = createSlice({
  name: "authreducer",
  initialState: initialState,
  reducers: {
    isLoggedin: (state, action) => {
      state.isLoggedin = true;
    },
    loggedIn: (state, action) => {
      state.loginData = {};
    },
  },
});

export const { isLoggedin, loggedIn } = AuthReducer.actions;
export default AuthReducer.reducer;
