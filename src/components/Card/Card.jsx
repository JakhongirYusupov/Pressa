import "./Card.scss";
import img from "../../assets/images/default.png";
import { MdOutlinePersonOutline } from "react-icons/md";
import {
  HiOutlinePresentationChartLine,
  HiOutlineStatusOnline,
} from "react-icons/hi";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineEye,
} from "react-icons/ai";

export default function Card({ data }) {
  return (
    <div className="card">
      <img src={img} alt="error" className="card-img" />
      <div className="card-main">
        <h3 className="card-main-title">
          Alisher Isaevdan biznes va IT bo’yicha master klass
        </h3>
        <div className="card-main-desc">
          <div className="card-main-desc-list">
            <div className="div card-main-desc-list-item">
              <MdOutlinePersonOutline />
              <span>Alisher Isaev</span>
            </div>
            <div className="div card-main-desc-list-item">
              <AiOutlineCalendar />
              <span>17 / 01 / 2022</span>
            </div>
            <div className="div card-main-desc-list-item">
              <HiOutlineStatusOnline />
              <span>Online</span>
            </div>
          </div>
          <div className="card-main-desc-list">
            <div className="div card-main-desc-list-item">
              <HiOutlinePresentationChartLine />
              <span>Tadbirkor</span>
            </div>
            <div className="div card-main-desc-list-item">
              <AiOutlineClockCircle />
              <span>15:00</span>
            </div>
            <div className="div card-main-desc-list-item">
              <AiOutlineEye />
              <span>2550</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
