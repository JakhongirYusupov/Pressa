import "./HeroUrl.scss";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { BiHomeAlt } from "react-icons/bi";

export default function HeroUrl({ title }) {
  return (
    <div className="herourl">
      <BiHomeAlt className="herourl-home" />
      <Link to={"/"}>Asosiy</Link>
      <SlArrowRight className="herourl-arrow" />
      <span>{title}</span>
    </div>
  );
}
