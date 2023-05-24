import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";
import AboutUs from "./pages/AboutUs/AboutUs";
import Announcement from "./pages/Accouncement/Announcement";

export const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/give-announcement" element={<Announcement />} />
        </Routes>
      </Layout>
    </>
  );
};
