import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./slices/dashboardSlice";
import PaymentReducer from "./slices/paymentSlice";

const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    payment: PaymentReducer,
  },
});

export { store };
