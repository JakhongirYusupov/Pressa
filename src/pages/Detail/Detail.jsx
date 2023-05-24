import { HiOutlineLocationMarker, HiOutlineStatusOnline } from "react-icons/hi";
import HeroUrl from "../../components/HeroUrl/HeroUrl";
import "./Detail.scss";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import {
  FiFacebook,
  FiInstagram,
  FiShare2,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { TbBrandTelegram, TbBrandTumblr } from "react-icons/tb";
import { GoCommentDiscussion } from "react-icons/go";
import img from "../../assets/images/default.png";
import {
  FacebookShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";
import DetailSwiper from "../../components/DetailSwiper/DetailSwiper";

export default function Detail() {
  const url = window.location.href;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="detail">
      <div className="container">
        <HeroUrl title={"Alisher Isaevdan"} />
        <div className="detail-wrapper">
          <div className="detail-info">
            <h3 className="detail-info-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h3>
            <div className="detail-info-date">
              <div className="detail-info-date-item">
                <AiOutlineCalendar />
                <span>17 / 01 / 2022</span>
              </div>
              <div className="detail-info-date-item">
                <AiOutlineClockCircle />
                <span>15:00</span>
              </div>
              <div className="detail-info-date-item">
                <HiOutlineStatusOnline />
                <span>Online</span>
              </div>
            </div>
            <div className="detail-info-share">
              <FiShare2 />
              <span>Ulashing</span>
            </div>
            <div className="detail-info-socials">
              <FacebookShareButton url={url}>
                <FiFacebook />
              </FacebookShareButton>
              <TumblrShareButton url={url}>
                <TbBrandTumblr />
              </TumblrShareButton>
              <a href="https://www.instagram.com">
                <FiInstagram />
              </a>
              <TwitterShareButton url={url}>
                <FiTwitter />
              </TwitterShareButton>
              <TelegramShareButton url={url}>
                <TbBrandTelegram />
              </TelegramShareButton>
            </div>
          </div>
          <div className="detail-main">
            <h1 className="detail-main-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
            <p className="detail-main-desc">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <img className="detail-main-img" src={img} alt="error" />
            <p className="detail-main-info">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik. Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan
              iborat 8 ta guruh tashkil qilinib, ularga ikki hafta muddat ichida
              Toshkent shahridagi har qanday onlayn va oflayn tadbirlar
              to'g'risida e'lonli ma'lumot beruvchi uch bosqichli veb sahifa
              tayyorlash vazifasi topshirildi. Demak, roppa-rosa 2 haftadan
              keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar
              tomonidan xolis baholanib, dastlabki uchta o'rin egalari
              qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab
              qolamiz.
            </p>
            <div className="detail-main-information">
              <a
                href="https://www.google.com"
                className="detail-main-information-map"
              >
                <HiOutlineLocationMarker />
                <span>Kartadan aniqlash</span>
              </a>
              <a
                href="https://www.youtube.com"
                className="detail-main-information-youtube"
              >
                <FiYoutube />
                <span>Youtubedan tomosha qilish</span>
              </a>
              <div className="detail-main-information-date">
                <AiOutlineCalendar />
                <span>22 / 01 / 2022</span>
              </div>
              <div className="detail-main-information-date">
                <AiOutlineClockCircle />
                <span>14:00</span>
              </div>
            </div>
            <div className="detail-main-comments">
              <div className="detail-main-comments-title">
                <GoCommentDiscussion />
                <span>Izohlar</span>
              </div>
              <form
                className="detail-main-comments-form"
                onSubmit={handleSubmit}
              >
                <img
                  src={img}
                  alt="error"
                  className="detail-main-comments-form-img"
                />
                <div className="detail-main-comments-form-input">
                  <textarea
                    name=""
                    cols="50"
                    rows="10"
                    placeholder="Izoh yozing..."
                  ></textarea>
                  <div className="detail-main-comments-form-input-button">
                    <button type="submit">Yuborish</button>
                  </div>
                </div>
              </form>
              <ul className="detail-main-comments-list">
                <li className="detail-main-comments-list-item">
                  <img src={img} alt="error" />
                  <div className="detail-main-comments-list-item-desc">
                    <h4>Abella</h4>
                    <span>Bugun 15:00</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam etiam at nunc tempor ac.
                    </p>
                  </div>
                </li>
                <li className="detail-main-comments-list-item detail-main-comments-list-owncomment">
                  <img src={img} alt="error" />
                  <div className="detail-main-comments-list-item-desc">
                    <h4>Abella</h4>
                    <span>Bugun 15:00</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam etiam at nunc tempor ac.
                    </p>
                  </div>
                </li>
              </ul>
              <p className="detail-main-comments-seeMore">Ko’proq ko’rish...</p>
            </div>
          </div>
        </div>
      </div>
      <DetailSwiper />
    </div>
  );
}
