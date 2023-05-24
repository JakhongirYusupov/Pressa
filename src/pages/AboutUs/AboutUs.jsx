import HeroUrl from "../../components/HeroUrl/HeroUrl";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <div className="about">
      <div className="container">
        <HeroUrl title={"Biz haqimizda"} />
        <h1 className="about-title">Biz haqimizda</h1>
        <p>
          Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
          musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
          uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
          dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
        </p>
        <br />
        <p>
          Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
          musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
          uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
          dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
        </p>
        <br />
        <p>
          Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh
          tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi
          har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot
          beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.
        </p>
        <br />
        <p>
          Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari
          chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta
          o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga
          omad tilab qolamiz.{" "}
        </p>
      </div>
    </div>
  );
}
