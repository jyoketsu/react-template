import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import commonReducer from "./reducer/commonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
