import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthSlice } from "./api/AuthSlice";
import { UserSlice } from "./api/UserSlice";
import { BooksSlice } from "./api/BooksSlice";

export const store = configureStore({
  reducer: {
    [AuthSlice.reducerPath]: AuthSlice.reducer,
    [UserSlice.reducerPath]: UserSlice.reducer,
    [BooksSlice.reducerPath]: BooksSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthSlice.middleware)
      .concat(UserSlice.middleware)
      .concat(BooksSlice.middleware),
});

setupListeners(store.dispatch);