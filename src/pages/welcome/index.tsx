import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AccountDiaglog from "../../components/auth/AccountDiaglog";
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
    <Box sx={{ width: "100%", height: "100%" }}>
      <Button variant="contained" onClick={handleLogin}>
        {t("login")}
      </Button>
      <AccountDiaglog open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
}
