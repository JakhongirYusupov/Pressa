import "./Home.scss";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <div className="home-cardList"></div>
      </div>
    </div>
  );
}
