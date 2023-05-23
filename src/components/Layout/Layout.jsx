import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/admin" ? <Header /> : null}
      {children}
      {pathname !== "/admin" ? <Footer /> : null}
    </>
  );
}
