import { Box, Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AccountDiaglog from "../../components/auth/AccountDiaglog";
import Sample from "../../components/common/Sample";
import { useAppSelector } from "../../redux/hooks";

export default function Welcome() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  const handleLogin = () => {
    if (user) {
      navigate("/");
    } else {
      setOpen(true);
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
      <Tooltip title="账号：1234567890 密码：123456" arrow>
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
