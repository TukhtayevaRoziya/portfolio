import { useTranslation } from "react-i18next";
import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import coder from "../../assets/girl_coder.webp";

import style from "./Resume.module.css";
import { resumeData } from "../../utilities/datas";

const Resume = () => {
  const { t } = useTranslation();

  const dataMap = resumeData.map((d) => (
    <li key={d.id}>
      <a
        className={d.class}
        href={d.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {d.icon}
      </a>
    </li>
  ));

  return (
    <div className={style.Resume}>
      <img className={style.picture} src={coder} alt="" draggable={false} />
      <div className={style.block + " " + style.about_me}>
        <h3 className={style.title + " resumeTitle"}>{t("aboutMe")}</h3>
        <p className={style.text + " resumeText"}>
          {t("aboutMeText1")}
          <br />
          {t("aboutMeText2")}
        </p>
      </div>
      <div className={style.block + " " + style.extra}>
        <h3 className={style.title + " resumeTitle"}>{t("esucation")}</h3>
        <p className={style.text + " resumeText"}>{t("educationText")}</p>
      </div>
      <div className={style.My_skills}>
        <div className={style.block}>
          <h3 className={style.title1}>{t("mySkill")}</h3>
          <h3 className={style.title + " resumeTitle"}>Front-End</h3>
          <p className={style.text + " resumeText"}>
            HTML, CSS (SASS/SCSS/MODULE), JavaScript, JQuery, Bootstrap,
            ReactJs, Redux, Vite, AntD, Material UI, React Bootstrap,
            Typescript, NextJS, i18next
          </p>
        </div>
        <div className={style.block}>
          <h3 className={style.title + " resumeTitle"}>{t("additonal")}</h3>
          <p className={style.text + " resumeText"}>
            Git, Github, Axios, Rest API, Figma
          </p>
        </div>
      </div>
      <div className={style.mine}>
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title + " resumeTitle"}>{t("social")}</h3>
          <div className={style.socials + " resumeSocials"}>
            <ul>{dataMap}</ul>
          </div>
        </div>
        <div className={style.block + " " + style.extra}>
          <h3 className={style.title + " resumeTitle"}>{t("contact")}</h3>
          <div className={style.contact + " resumeContact"}>
            <a
              href="https://t.me/TukhtayevaRoziya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
              @TukhtayevaRoziya
            </a>
            <a href="tel:+998905280770">
              <FaPhoneAlt /> +998 905280770
            </a>
            <a
              href="mailto:roziyabegimtuxtayeva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              id={style.mail}
            >
              <FaEnvelope />
              roziyabegimtuxtayeva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
