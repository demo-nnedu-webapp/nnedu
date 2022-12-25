import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  sessionData: {},
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
    sessionStore: (state, action) => {
      state.sessionData = action.payload;
    },
    removeSession: (state, action) => {
      state.sessionData = {};
    },
  },
});

export const { isLoggedin, loggedIn, sessionStore, removeSession } =
  AuthReducer.actions;
export default AuthReducer.reducer;
