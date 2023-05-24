import { useRef, useState } from "react";
import HeroUrl from "../../components/HeroUrl/HeroUrl";
import "./Announcement.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Announcement() {
  const [online, setonline] = useState(true);
  const [legalPerson, setlegalPerson] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const close = () => {
    form.current.reset();
  };

  return (
    <div className="give">
      <div className="container">
        <HeroUrl title={"E’lon berish"} />
        <div className="give-wrapper">
          <h2 className="give-title">E’lon berish</h2>
          <form className="give-form" ref={form} onSubmit={handleSubmit}>
            <div className="give-form-item">
              <h3 className="give-form-title">Vaqt va yo’nalishni tanlang</h3>
              <label className="give-form-item-label">
                <span>O’tkaziladigan sanani kiriting</span>
                <div className="give-form-item-label give-form-item-time">
                  <input type="date" name="" id="" />
                  <input type="time" name="" id="" />
                </div>
              </label>
              <div className="give-form-item-box">
                <label className="give-form-item-label">
                  <span>Yo’nalishni belgilang</span>
                  <select name="" id="">
                    <option value="">Information Technologies</option>
                    <option value="">Biznes</option>
                    <option value="">IT</option>
                  </select>
                </label>
                <label className="give-form-item-label">
                  <span>Ichki yo’nalish</span>
                  <select name="" id="">
                    <option value="">Java developer</option>
                    <option value="">Mobile developer</option>
                    <option value="">Web developer</option>
                  </select>
                </label>
              </div>
              <div className="give-form-item-box">
                <label className="give-form-item-label">
                  <span>Yo’nalishni belgilang</span>
                  <div className="give-form-item-label-online">
                    <div
                      style={online ? null : { background: "#3333331f" }}
                      onClick={() => setonline(true)}
                    >
                      <span style={online ? { color: "#ffffff" } : null}>
                        Online
                      </span>
                    </div>
                    <div
                      style={online ? { background: "#3333331f" } : null}
                      onClick={() => setonline(false)}
                    >
                      <span style={online ? null : { color: "#ffffff" }}>
                        Offline
                      </span>
                    </div>
                  </div>
                </label>
                <label className="give-form-item-label">
                  <span>Link kiriting</span>
                  <input type="url" placeholder="Link kiriting" />
                </label>
              </div>
            </div>
            <div className="give-form-person">
              <h3 className="give-form-title">Tashkilotchi</h3>
              <div className="give-form-person-radioBtn">
                <label htmlFor="jismoniy-shaxs">
                  <span>Jismoniy shaxs</span>
                  <input
                    checked={!legalPerson}
                    onChange={() => setlegalPerson(false)}
                    type="radio"
                    name="person"
                    id="jismoniy-shaxs"
                  />
                </label>
                <label htmlFor="yuridik-shaxs">
                  <span>Yuridik shaxs</span>
                  <input
                    onChange={() => setlegalPerson(true)}
                    type="radio"
                    name="person"
                    id="yuridik-shaxs"
                  />
                </label>
              </div>
              <div className="give-form-item">
                <div className="give-form-item-box">
                  <label
                    className="give-form-item-label"
                    style={legalPerson ? null : { opacity: "0.4" }}
                  >
                    <span>Yuridik nomi</span>
                    <input
                      disabled={!legalPerson}
                      type="text"
                      placeholder="Yuridik nomi"
                    />
                  </label>
                  <label className="give-form-item-label">
                    <span>Ismi sharifi</span>
                    <input type="text" placeholder="Ismi sharifi" />
                  </label>
                </div>
                <div className="give-form-item-box">
                  <label className="give-form-item-label">
                    <span>Professiya</span>
                    <input type="text" placeholder="Professiya" />
                  </label>
                  <label className="give-form-item-label">
                    <span>Telefon raqami</span>
                    <input type="tel" placeholder="Telefon raqami" />
                  </label>
                </div>
                <label className="give-form-item-label">
                  <span>Telefon raqami</span>
                  <input type="tel" placeholder="Telefon raqami" />
                </label>
              </div>
            </div>
            <div className="give-form-item">
              <div className="give-form-item-title">
                <h3 className="give-form-title">Post</h3>
                <input type="text" placeholder="Mavzuni sarlavhasi" />
              </div>
              <label className="give-form-item-label give-form-item-desc">
                <span>Description</span>
                <input type="text" placeholder="Description" />
              </label>
              <div className="give-form-item-label">
                <span>Rasm yuklash</span>
                <div className="give-form-item-uploadBox">
                  <label
                    htmlFor="give-form-uploadImg"
                    className="give-form-item-upload"
                  >
                    <AiOutlineCloudUpload />
                    <span>Upload img</span>
                    <input
                      type="file"
                      accept=".jpeg, .png, .svg, .jpg"
                      name=""
                      id="give-form-uploadImg"
                    />
                  </label>
                  <div className="give-form-item-uploaded">
                    <p>img23784y2.jpg</p>
                    <span>Uploaded</span>
                  </div>
                </div>
              </div>
              <p className="give-form-item-uploaded-desc">
                Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin
              </p>
              <div className="give-form-item-textarea">
                <span>Mavzu matni</span>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Mavzu matni"
                ></textarea>
              </div>
              <div className="give-form-item-btns">
                <button
                  type="button"
                  className="give-form-item-btns-close"
                  onClick={close}
                >
                  Bekor qilish
                </button>
                <button className="give-form-item-btns-submit">
                  E’lonni yuborish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
