import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logonByToken } from "../../redux/reducer/authSlice";
import { getSearchParamValue } from "../../utils/util";

export default function Login() {
  let location = useLocation();
  const dispatch = useAppDispatch();
  const navigage = useNavigate();
  const user = useAppSelector((state) => state.auth.user);
  const BASE = import.meta.env.VITE_BASE;

  // 通过token登录
  useEffect(() => {
    const token = getSearchParamValue(location.search, "token");
    if (token) {
      dispatch(logonByToken(token));
    }
  }, []);

  // 登录成功后跳转到首页
  useEffect(() => {
    if (user) {
      navigage(BASE);
    }
  }, [user]);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Loading />
    </Box>
  );
}
