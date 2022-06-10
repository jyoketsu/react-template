import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CommonState {
  dark: boolean;
  theme: string;
  loading: boolean;
}

// Define the initial state using that type
const initialState: CommonState = {
  dark: localStorage.getItem("DARK") ? true : false,
  theme: localStorage.getItem("THEME") || "#409eff",
  loading: false,
};

export const commonSlice = createSlice({
  name: "common",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setDark: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setDark, setTheme, setLoading } = commonSlice.actions;

export default commonSlice.reducer;
