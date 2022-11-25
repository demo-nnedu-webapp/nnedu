import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  modal: false,
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
    showModal: (state) => {
      state.modal = true;
    },
    hideModal: (state) => {
      state.modal = false;
    },
  },
});

export const { showSidebar, hideSidebar, showModal, hideModal } =
  DashboardReducer.actions;
export default DashboardReducer.reducer;
