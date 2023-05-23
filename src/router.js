import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Detail from "./pages/Detail/Detail";

export const Router = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </>
  );
};
