import ReactDOM from "react-dom/client";
import Router from "./routes";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import i18n (needs to be bundled ;))
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
