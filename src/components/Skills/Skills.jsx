import React from "react";
import "./Skills.css";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="skills" id="skills">
        <div className="content">
          <div className="title">
            <span>{t("mySkills")}</span>
          </div>
          <div className="skills-details">
            <div className="text">
              <div className="topic">{t("knowledge")}</div>
              <p>
                {t('universe')}
              </p>
              <div className="experience">
                <div className="num">1 </div>
                <div className="exp">
                  {t("year")} <br />  {t("experience")}
                </div>
              </div>
            </div>
            <div className="boxes">
              <div className="box">
                <div className="topic">HTML</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>90</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic">CSS</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>85</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic">Bootstrap/SASS</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>85</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Javascript</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>80</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Jquery</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>80</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">React</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>70</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Redux/React-redux</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>70</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">React-router-dom</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>70</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Axios/Ajax</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>70</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="box">
                <div className="topic javascript">Ant/Material UI</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>85</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="topic javascript">Typescript</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>70</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Next Js</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>75</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">Figma</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>90</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="topic javascript">i18Next</div>
                <div className="green">
                  <div className="progress">
                    <div className="inner">
                      <div className="percent">
                        <span>95</span>%
                      </div>
                      <div className="water"></div>
                      <div className="glare"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills