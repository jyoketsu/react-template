import Box from "@mui/material/Box";
import reactLogo from "../../assets/react.svg";
import "./sample.css";
export default function Sample() {
  return (
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
        Vite + React + TypeScript + React-Router + Redux-Toolkit + Material-UI +
        react-i18next
      </span>
    </Box>
  );
}
