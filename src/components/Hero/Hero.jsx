import "./Hero.scss";
import {
  HiOutlineStatusOffline,
  HiOutlineStatusOnline,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { filter } from "./filterData";
import { useState } from "react";

export default function Hero() {
  const [activeFilterBar, setActiveFilterBar] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveFilterBar(0);
  };

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-title">
          Eng so’ngi master klasslar va tadbirlar bizning saytda
        </h1>
        <form className="hero-filter" onSubmit={handleSubmit}>
          <label
            htmlFor="filter-date"
            className="hero-filter-item"
            onClick={() => setActiveFilterBar((prev) => (prev === 1 ? 0 : 1))}
          >
            <input type="date" name="" id="filter-date" />
          </label>
          <div className="hero-filter-item">
            <div
              className="hero-filter-item hero-filter-item-wrapper"
              onClick={() => setActiveFilterBar((prev) => (prev === 2 ? 0 : 2))}
            >
              <HiOutlineViewGrid />
              <span>Bo’lim tanlang</span>
              <IoIosArrowDown />
            </div>
            <div
              className="filterGrid"
              style={activeFilterBar !== 2 ? { display: "none" } : null}
            >
              {filter.map((el, index) => (
                <div className="filterGrid-item" key={index}>
                  <h4 className="filterGrid-item-title">{el.title}</h4>
                  <ul className="filterGrid-item-list">
                    {el.items.map((el, index) => (
                      <li className="filterGrid-item-list-el" key={index}>
                        <input type="checkbox" name="filterGrid" id="" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-filter-item">
            <div
              className="hero-filter-item hero-filter-item-wrapper"
              onClick={() => setActiveFilterBar((prev) => (prev === 3 ? 0 : 3))}
            >
              <HiOutlineStatusOnline />
              <span>Online / Offline</span>
              <IoIosArrowDown />
            </div>
            <div
              className="filterGrid filter-set"
              style={activeFilterBar !== 3 ? { display: "none" } : null}
            >
              <div className="filterGrid-item">
                <ul className="filterGrid-item-list">
                  <li className="filterGrid-item-list-el">
                    <HiOutlineStatusOnline />
                    <span>Online</span>
                    <input type="radio" name="filter-online" id="" />
                  </li>
                  <li className="filterGrid-item-list-el">
                    <HiOutlineStatusOffline />
                    <span>Offline</span>
                    <input type="radio" name="filter-online" id="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero-filter-item">
            <div
              className="hero-filter-item hero-filter-item-wrapper"
              onClick={() => setActiveFilterBar((prev) => (prev === 4 ? 0 : 4))}
            >
              <RiAccountCircleLine />
              <span>Ism familya</span>
              <IoIosArrowDown />
            </div>
            <div
              className="filterGrid filter-set"
              style={activeFilterBar !== 4 ? { display: "none" } : null}
            >
              <div className="filterGrid-item">
                <ul className="filterGrid-item-list">
                  <li className="filterGrid-item-list-el">
                    <input type="checkbox" name="" id="" />
                    <span>Abdulla Azizov</span>
                  </li>
                  <li className="filterGrid-item-list-el">
                    <input type="checkbox" name="" id="" />
                    <span>Dilmurod Alimbayev</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button type="submit" className="hero-filter-button">
            Izlash
          </button>
        </form>
      </div>
    </div>
  );
}
