import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { is_mobile } from "../../utils/util";
import Webview from "../common/Webview";

export default function AccountDiaglog(props: {
  open: boolean;
  handleClose: () => void;
}) {
  const BASE = import.meta.env.VITE_BASE;
  const navigate = useNavigate();
  const { open, handleClose } = props;
  const redirect = `${BASE}login`;
  const logo = "https://notes.qingtime.cn/icons/logo2.svg";
  const APP = import.meta.env.VITE_APP;
  const APP_HIGH = import.meta.env.VITE_APP_HIGH;
  const url = `https://account.qingtime.cn?app=${APP}&apphigh=${APP_HIGH}&logo=${logo}&redirect=${redirect}&t=${new Date().getTime()}`;
  const isMobile = is_mobile();

  useEffect(() => {
    function handle(e: any) {
      if (e.data.eventName === "redirect") {
        navigate(e.data.data);
      }
    }
    window.addEventListener("message", handle, false);
    return () => {
      window.removeEventListener("message", handle);
    };
  }, []);

  return (
    <Dialog open={open} onClose={handleClose}>
      <Webview
        uri={url}
        style={{ width: isMobile ? "100%" : "360px", height: "680px" }}
      />
    </Dialog>
  );
}
