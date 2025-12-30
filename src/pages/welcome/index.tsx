import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AccountDiaglog from "../../components/auth/AccountDiaglog";
import Sample from "../../components/common/Sample";
import { useAppSelector } from "../../redux/hooks";
import { is_mobile } from "../../utils/util";

export default function Welcome() {
  const BASE = import.meta.env.VITE_BASE;
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const handleLogin = () => {
    if (user) {
      navigate(BASE);
    } else {
      if (is_mobile()) {
        const BASE = import.meta.env.VITE_BASE;
        const redirect = encodeURIComponent(
          `${window.location.protocol}//${window.location.host}${BASE}login`
        );
        const logo = "https://notes.qingtime.cn/icons/logo2.svg";
        const APP = import.meta.env.VITE_APP;
        const APP_HIGH = import.meta.env.VITE_APP_HIGH;
        const url = `https://account.qingtime.cn?app=${APP}&apphigh=${APP_HIGH}&logo=${logo}&redirect=${redirect}&t=${new Date().getTime()}`;
        window.location.href = url;
      } else {
        setOpen(true);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sample />
      <Tooltip
        title={t("loginTooltip", { account: "1234567890", password: "123456" })}
        arrow
      >
        <Button
          variant="contained"
          size="large"
          sx={{ marginTop: "65px" }}
          onClick={handleLogin}
        >
          {t("login")}
        </Button>
      </Tooltip>

      <AccountDiaglog open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
