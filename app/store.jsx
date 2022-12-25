import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from "./slices/dashboardSlice";
import PaymentReducer from "./slices/paymentSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, AuthReducer);

const store = configureStore({
  reducer: {
    dashboard: DashboardReducer,
    payment: PaymentReducer,
    auth: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
