import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api.js";
import organizationsReducer from "./features/organizations/organizationsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      organizationsReducer,
      [api.reducerPath]: api.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
