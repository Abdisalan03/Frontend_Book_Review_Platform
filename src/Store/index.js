import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthSlice } from "./api/AuthSlice";
import { UserSlice } from "./api/UserSlice";
import { BooksSlice } from "./api/BooksSlice";
// import { ReviewSlice } from "./api/ReviewSlice";

export const store = configureStore({
  reducer: {
    [AuthSlice.reducerPath]: AuthSlice.reducer,
    [UserSlice.reducerPath]: UserSlice.reducer,
    [BooksSlice.reducerPath]: BooksSlice.reducer,
    // [ReviewSlice.reducerPath]: ReviewSlice.reducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(AuthSlice.middleware)
      .concat(UserSlice.middleware)
      .concat(BooksSlice.middleware)
      // .concat(ReviewSlice.middleware),
});

setupListeners(store.dispatch);