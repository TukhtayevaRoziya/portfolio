import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";
import { skillsData } from "../../utilities/datas";

const Skills = () => {
  const { t } = useTranslation();

  const skillsDataMap = skillsData.map((e) => (
    <div className="box" key={e.id}>
      <div className="topic">{e.skill}</div>
      <div className="green">
        <div className="progress">
          <div className="inner">
            <div className="percent">
              <span>{e.percentage}</span>%
            </div>
            <div className="water"></div>
            <div className="glare"></div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="skills content">
      <span className="title">{t("mySkills")}</span>
      <div className="skills-details">
        <div className="text">
          <div className="topic">{t("knowledge")}</div>
          <p>{t("universe")}</p>
          <div className="experience">
            <div className="num">3 </div>
            <div className="exp">
              {t("year")} <br /> {t("experience")}
            </div>
          </div>
        </div>
        <div className="boxes">{skillsDataMap}</div>
      </div>
    </div>
  );
};

export default Skills;
