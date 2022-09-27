import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/app";
import Page1 from "../pages/app/page1";
import Page2 from "../pages/app/page2";
import Welcome from "../pages/welcome";
import Login from "../pages/login";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useAppSelector } from "../redux/hooks";
const BASE = import.meta.env.VITE_BASE;

export default function Router() {
  const isDark = useAppSelector((state) => state.common.dark);

  // 配色
  // 默认颜色：https://mui.com/zh/material-ui/customization/default-theme/
  // 调色：https://mui.com/zh/material-ui/customization/color/#picking-colors
  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: red[800],
            },
            background: {
              default: grey[100],
              paper: "#FFF",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: red[700],
            },
            background: {
              default: grey[900],
              paper: grey[800],
            },
          }),
    },
  });

  const theme = useMemo(
    () =>
      createTheme({
        ...getDesignTokens(isDark ? "dark" : "light"),
        breakpoints: {
          values: {
            xs: 0,
            sm: 400,
            md: 600,
            lg: 900,
            xl: 1200,
          },
        },
      }),
    [isDark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={BASE} element={<App />}>
            <Route index element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
          </Route>
          <Route path={`${BASE}welcome`} element={<Welcome />} />
          <Route path={`${BASE}login`} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
