import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./slices/dashboardSlice";
import PaymentReducer from "./slices/paymentSlice";
import AuthReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    payment: PaymentReducer,
    auth: AuthReducer,
  },
});

export { store };
