import "./Login.scss";
import { Link, useLocation } from "react-router-dom";
import { RxPerson } from "react-icons/rx";
import { BiLockAlt } from "react-icons/bi";

export default function Login() {
  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="container">
        <Link to={"/"} className="login-logo">
          Pressa
        </Link>
        <div className="login-wrapper">
          <form className="login-main" onSubmit={handleSubmit}>
            <h3 className="login-main-title">
              {pathname === "/admin" ? "Tizimga kirish" : "Login"}
            </h3>
            <label htmlFor="login-email">
              <RxPerson />
              <input
                type="email"
                autoComplete="off"
                name=""
                id="login-email"
                placeholder="Login"
              />
            </label>
            <label htmlFor="login-password">
              <BiLockAlt />
              <input
                type="password"
                autoComplete="off"
                name=""
                id="login-password"
                placeholder="Parol"
              />
            </label>
            <Link className="login-main-forgetPassword">
              Parolni unutdingizmi?
            </Link>
            <div className="login-main-button">
              <button type="submit">Kirish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
