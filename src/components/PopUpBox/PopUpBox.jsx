import "./PopUpBox.scss";
import { VscChromeClose } from "react-icons/vsc";

export default function PopUpBox({ setactivePopUp }) {
  return (
    <div className="popup">
      <div className="popup-overlay"></div>
      <div className="popup-box">
        <div
          className="popup-box-closeBtn"
          onClick={() => setactivePopUp(false)}
        >
          <VscChromeClose />
        </div>
        <h3>Sizning e’loningiz yuborildi</h3>
        <p>
          Yaqin soatlar ichda admin tomonidan tekshirib chiqladi va saytda e’lon
          qilinadi!
        </p>
        <div className="popup-box-button">
          <button onClick={() => setactivePopUp(false)}>OK</button>
        </div>
      </div>
    </div>
  );
}
