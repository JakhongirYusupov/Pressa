import "./DetailSwiper.scss";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import "swiper/css";
import "swiper/css/pagination";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";

export default function DetailSwiper() {
  const [rightSwiperBtn, setrightSwiperBtn] = useState(false);
  const [leftSwiperBtn, setleftSwiperBtn] = useState(true);
  const handleChange = (swiper) => {
    setleftSwiperBtn(swiper.isBeginning);
    setrightSwiperBtn(swiper.isEnd);
  };

  return (
    <div className="swiper">
      <div className="container">
        <h4 className="swiper-title">Tavsiya etamiz</h4>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Navigation]}
          onSlideChange={handleChange}
          navigation={{
            prevEl: ".slider_controls__left",
            nextEl: ".slider_controls__right",
          }}
          breakpoints={{
            456: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            956: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1160: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
          className="swiper-list"
        >
          {[1, 2, 3, 4, 5, 67, 8, 9, 10].map((el) => (
            <SwiperSlide key={el}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-slideButtons">
          <button
            className="slider_controls__left"
            style={
              leftSwiperBtn ? { cursor: "auto" } : { background: "#006AFF" }
            }
          >
            <RiArrowLeftSLine
              style={leftSwiperBtn ? null : { color: "#FFFFFF" }}
            />
          </button>
          <button
            className="slider_controls__right"
            style={
              rightSwiperBtn ? { cursor: "auto" } : { background: "#006AFF" }
            }
          >
            <RiArrowRightSLine
              style={rightSwiperBtn ? null : { color: "#FFFFFF" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
