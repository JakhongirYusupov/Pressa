import { Link } from "react-router-dom";
import "./Header.scss";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="container">
        <Link to={"/"} className="header-logo">
          Pressa
        </Link>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="" className="header-search">
            <button type="submit">
              <AiOutlineSearch />
            </button>
            <input
              type="text"
              placeholder="Izlash"
              required
              maxLength={50}
              minLength={3}
            />
          </label>
        </form>
        <div className="header-aboutus">
          <Link to={"/about-us"}>Biz haqimizda</Link>
          <Link to={"/questions"}>Savol va javoblar</Link>
        </div>
        <Link to={"/give-announcement"} className="header-giveAcc">
          <AiOutlinePlus />
          <span>E’lon berish</span>
        </Link>
      </div>
    </header>
  );
}
