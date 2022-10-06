import React from "react";
import { Image } from "antd";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import oksyG from "../../assets/projects/oksyG.webp";
import hotel from "../../assets/projects/hotel.png";
import charismo from "../../assets/projects/charismo.png";
import hydroAdmin from "../../assets/projects/hydroAdmin.png";
import MService from "../../assets/projects/MService.png";
import youthCenter from "../../assets/projects/YouthCenter.png";
import aliExpress from "../../assets/projects/aliExpress.webp";
import build from "../../assets/projects/build.webp";
import ekabu from "../../assets/projects/ekabu.png";
import buildAdmin from "../../assets/projects/buildAdmin.webp";
import doctor from "../../assets/projects/doctor.png";
import las from "../../assets/projects/las.png";
import nura from "../../assets/projects/nuraElite.png";

import "antd/dist/antd.css";
import style from "./Project.module.css";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className={style.project}>
      <h1 className={style.project_title + ' project_title'}>{t("navbar1")}</h1>
      <div className={style.project__block}>
        
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={nura} />
          <h3>Nura Elite {t("project")}</h3>
          <p>{t("technology")} Css3, React, Yandex Map</p>
          <h5>{t("time")} 1  {t('day')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://nuraelite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={oksyG} />
          <h3>Oksy-G Milk {t("project")}</h3>
          <p>{t("technology")} HTML5, Css3, Bootsrap4, JavaScript, jQuery</p>
          <h5>{t("time")} 20  {t('day')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://tukhtayevaroziya.github.io/Oksy-G-Milk-Project/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={hotel} />
          <h3>Hotel {t("project")}</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            Redux-form
          </p>
          <h5>{t("time")} 2 {t('week')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://tukhtayevaroziya.github.io/hotel-project-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={youthCenter} />
          <h3>Raven {t("project")}</h3>
          <p>{t("technology")} HTML5, Css3, Bootsrap4, JavaScript, jQuery</p>
          <h5>{t("time")} 1 {t('week')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://robiyaxon.github.io/Robiya-coder-Markaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
       
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={aliExpress} />
          <h3>AliExpress Clone {t("project")}</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            Redux-form, Material Ui, Ant Design
          </p>
          <h5>{t("time")} 5  {t('day')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://robiyaxon.github.io/programmer-girls-React/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={las} />
          <h3>LAS {t("project")}</h3>
          <p>
            {t("technology")} Css, React, React-Router, NextJs,
             Ant Design
          </p>
          <h5>{t("time")} 5  {t('day')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://papaya-puffpuff-1aa409.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={doctor} />
          <h3>Doctor {t("project")}</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
             Ant design
          </p>
          <h5>{t("time")} 1,5  {t('day')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://diplomishi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={charismo} />
          <h3>Charismo {t("project")}</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            Redux-form, TypeScript, Aos, Ant design, Material Ui
          </p>
          <h5>{t("time")}  {t('active')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://tukhtayevaroziya.github.io/charismo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={ekabu} />
          <h3>Mebel Ekabu {t("project")}</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            Redux-form, Ant design, Material Ui, react-yandex-maps
          </p>
          <h5>{t("time")}  {t('active')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="https://robiyaxon.github.io/EkabuMebel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
       
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={MService} />
          <h3>Mers Shop {t("project")} ({t("real")} {t("project")})</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            React-query, Swiper, react-yandex-maps, axios, react-i18next,
            react-facebook-login, eact-google-login, Prop-types, Final-form,
            Redux-thunk, i18next
          </p>
          <h5>{t("time")} {t('active')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="http://178.128.85.100:6002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={build} />
          <h3>Build {t("project")} ({t("real")} {t("project")})</h3>
          <p>
            {t("technology")} Css, Bootstrap, React, Redux, React-Redux,
            React-Router, Redux-form, Ant design, Material Ui,
            react-yandex-maps, styled-component, react-i18next, react-bootstrap,
            aos, node-sass
          </p>
          <h5>{t("time")} {t('active')}</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <a
              href="http://buildmegaservice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("visit")}
            </a>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={hydroAdmin} />
          <h3>Hydro Admin {t("project")} ({t("real")} {t("project")})</h3>
          <p>
            {t("technology")} Css, Bootstrap, React, Redux, React-Redux,
            React-Router, Redux-form, Ant design, Material Ui, axios, React
            Bootstrap, Final-form, Redux-thunk, Reactstrap, NextJs
          </p>
          <h5>Teamwork</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <NavLink to="/project">{t("closedSite")}</NavLink>
          </div>
        </div>
        <div className={style.project__block__box + ' project__block__box'}>
          <Image src={buildAdmin} />
          <h3>Build Admin {t("project")} ({t("real")} {t("project")})</h3>
          <p>
            {t("technology")} Css, React, Redux, React-Redux, React-Router,
            Redux-thunk, Ant design, Material Ui, axios
          </p>
          <h5>Teamwork</h5>
          <div className={style.project__block__box__as_btn + ' project__block__box__as_btn'}>
            <NavLink to="/project">{t("closedSite")}</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project