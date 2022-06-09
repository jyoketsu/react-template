import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { logonByToken } from "../../redux/reducer/authSlice";
import reactLogo from "../../assets/react.svg";
import "./index.css";

export default function Home() {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  return (
    <Box>
      <Box sx={{ width: "100%", height: "50px" }}></Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "15px",
          boxSizing: "border-box",
        }}
      >
        <img src={reactLogo} className="reactLogo" alt="React logo" />
        <h1>React Example</h1>
        <span>
          Vite + React + TypeScript + React-Router + Redux-Toolkit + Material-UI
          + react-i18next
        </span>
      </Box>
      <Outlet />
    </Box>
  );
}
