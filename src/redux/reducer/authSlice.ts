import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../interface/User";
import api from "../../utils/api";

// Define a type for the slice state
interface AuthState {
  user: User | null;
  expired: boolean;
  uploadToken: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  expired: false,
  uploadToken: null,
};

export const logonByToken = createAsyncThunk(
  "auth/logonByToken",
  async (token: string) => {
    const response = await api.auth.loginByToken(token);
    return response;
  }
);

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.expired = false;
    },
    logout: (state) => {
      state.user = null;
      state.expired = true;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      logonByToken.fulfilled,
      (state, action: PayloadAction<any>) => {
        // Add user to the state array
        state.user = action.payload.result;
        state.expired = false;
        api.setToken(action.payload.result.token);
      }
    );
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
