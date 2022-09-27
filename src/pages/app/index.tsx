import {
  Box,
  Button,
  Drawer,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import Sample from "../../components/common/Sample";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { logonByToken, logout } from "../../redux/reducer/authSlice";
import { setDark } from "../../redux/reducer/commonSlice";

export default function App() {
  const { t, i18n } = useTranslation();
  const BASE = import.meta.env.VITE_BASE;
  const user = useAppSelector((state) => state.auth.user);
  const expired = useAppSelector((state) => state.auth.expired);
  const dark = useAppSelector((state) => state.common.dark);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    console.log("---检查登录状态---", user);
    if (user) {
      return;
    }
    const token = localStorage.getItem("auth_token");
    if (token) {
      dispatch(logonByToken(token));
    } else {
      navigate(`${BASE}welcome`);
    }
  }, []);

  useEffect(() => {
    // 登录过期，跳转到欢迎页
    if (expired) {
      navigate(`${BASE}welcome`);
    }
  }, [expired]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path: string) => {
    const BASE = import.meta.env.VITE_BASE;
    navigate(path || BASE);
    toggleDrawer();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const changeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMode = () => {
    dispatch(setDark(!dark));
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          padding: "0 15px",
          boxSizing: "border-box",
        }}
      >
        <Tooltip title={t("menu.menu")}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
        <span style={{ flex: 1 }} />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select value={i18n.language} onChange={changeLanguage}>
            <MenuItem value="zh-CN">简体字</MenuItem>
            <MenuItem value="zh-TW">繁體字</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ja">日本語</MenuItem>
          </Select>
        </FormControl>

        <Tooltip title={t(dark ? "menu.lightMode" : "menu.darkMode")}>
          <IconButton onClick={toggleMode}>
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title={t("menu.logout")}>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Sample />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("")}>
                <ListItemText primary={t("page.page1")} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("page2")}>
                <ListItemText primary={t("page.page2")} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
}
