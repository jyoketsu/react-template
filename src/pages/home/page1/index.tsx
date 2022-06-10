import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export default function Page1() {
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: "center", marginTop: "20vh" }}>
      <Typography variant="h1" component="div" gutterBottom>
        {t("page.page1")}
      </Typography>
    </Box>
  );
}
