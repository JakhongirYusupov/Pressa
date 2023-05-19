import "./Footer.scss";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <Link className="footer-logo" to={"/"}>
          Pressa
        </Link>
        <div className="footer-questions">
          <Link to={"/about-us"}>Biz haqimizda</Link>
          <Link to={"/questions"}>Savol va Javoblar</Link>
        </div>
        <a className="footer-tel" href="tel:+998999650318">
          <FiPhone />
          <span>+99 965 03 18</span>
        </a>
        <div className="footer-social">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/jakhongiryusupov58/?hl=en">
            <BsInstagram />
          </a>
          <a href="tg://resolve?domain=@jakhongiryusupov">
            <TbBrandTelegram />
          </a>
        </div>
      </div>
    </div>
  );
}
