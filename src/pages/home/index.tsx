import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sample from "../../components/common/Sample";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { logonByToken, logout } from "../../redux/reducer/authSlice";

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  const expired = useAppSelector((state) => state.auth.expired);
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
      navigate("welcome");
    }
  }, []);

  useEffect(() => {
    // 登录过期，跳转到欢迎页
    if (expired) {
      navigate("welcome");
    }
  }, [expired]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    toggleDrawer();
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button onClick={toggleDrawer}>菜单</Button>
        <span style={{ flex: 1 }} />
        <Button onClick={handleLogout}>退出</Button>
      </Box>
      <Sample />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("page1")}>
                <ListItemText primary="page1" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => handleNavigate("page2")}>
                <ListItemText primary="page2" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
}
