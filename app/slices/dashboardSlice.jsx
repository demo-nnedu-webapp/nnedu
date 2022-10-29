import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
};

const DashboardReducer = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    showSidebar: (state) => {
      state.sidebar = true;
    },
    hideSidebar: (state) => {
      state.sidebar = false;
    },
  },
});

export const { showSidebar, hideSidebar } = DashboardReducer.actions;
export default DashboardReducer.reducer;
