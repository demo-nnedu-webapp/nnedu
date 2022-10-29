import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./slices/dashboardSlice";

const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
  },
});

export { store };
