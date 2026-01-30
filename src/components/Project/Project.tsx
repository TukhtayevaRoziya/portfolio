import { Image } from "antd";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { projectData } from "../../utilities/datas";

import style from "./Project.module.css";
import "antd/dist/antd.css";

const Project = () => {
  const { t } = useTranslation();

  const dataMap = projectData.map((d) => (
    <div className={style.project__block__box} key={d.id}>
      <Image src={d.image} />

      <div className={style.block_txt}>
        <h3>
          {d.title} {t("project")}
        </h3>
        <div>
          <p>{t("technology") + d.technologies}</p>
          {!d.close ? (
            <h5>{t("time") + d.time + " " + t("day")}</h5>
          ) : (
            <h5>Teamwork</h5>
          )}
        </div>

        <div className={style.project__block__box__as_btn}>
          {!d.close ? (
            <a href={d.link} target="_blank" rel="noopener noreferrer">
              {t("visit")}
            </a>
          ) : (
            <NavLink to="/project">{t("closedSite")}</NavLink>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className={style.project}>
      <h1 className={style.project_title + " project_title"}>{t("navbar1")}</h1>
      <div className={style.project__block}>{dataMap}</div>
    </div>
  );
};

export default Project;
