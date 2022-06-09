import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Page1 from "../pages/home/page1";
import Page2 from "../pages/home/page2";
import Welcome from "../pages/welcome";
import Login from "../pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
        <Route path="welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
