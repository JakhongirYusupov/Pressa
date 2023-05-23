import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import man1 from "../../assets/images/man1.svg";
import man2 from "../../assets/images/man2.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <Hero />
      <div className="container">
        <h3 className="home-title">Oxirgi e’lonlar</h3>
        <section className="home-cardList">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <Link to={"/detail/" + el} key={el}>
              <Card />
            </Link>
          ))}
        </section>
        <section className="home-cardList-seeMore">
          <button type="button">Ko’proq ko’rish</button>
        </section>
        <section className="home-info">
          <div className="home-info-item">
            <p className="home-info-item-desc">
              E’LONLARINGIZNI BIZNI SAYTDA BERING
            </p>
            <img className="home-info-item-img" src={man1} alt="" />
          </div>
          <div className="home-info-item">
            <p className="home-info-item-desc">
              ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA
            </p>
            <img className="home-info-item-img" src={man2} alt="" />
          </div>
        </section>
      </div>
    </main>
  );
}
