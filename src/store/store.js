import { configureStore } from "@reduxjs/toolkit";
import blogData from "./rootReducers";

export const store = configureStore({
  reducer: {
    blogData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
