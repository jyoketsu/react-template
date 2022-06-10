import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Page1 from "../pages/home/page1";
import Page2 from "../pages/home/page2";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "../redux/hooks";
const BASE = import.meta.env.VITE_BASE;

export default function Router() {
  const dark = useAppSelector((state) => state.common.dark);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
        },
      }),
    [dark]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={BASE} element={<Home />}>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
          <Route path={`${BASE}welcome`} element={<Welcome />} />
          <Route path={`${BASE}login`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
