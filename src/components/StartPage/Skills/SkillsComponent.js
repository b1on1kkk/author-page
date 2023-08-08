import { useTranslation } from "react-i18next";

import "./SkillsStyles.css";

import left_picture from "../../../pictures/banners/about1.jpg";

export default function SkillsComponent() {
  const [t] = useTranslation("global");

  return (
    <div className="skills-block-wrapper">
      <div className="container skills-block-customize">
        <div className="row">
          <div className="col-lg-5 col-md-5 skills-block-picture">
            <img src={left_picture} alt="left-side"></img>
          </div>
          <div className="col-lg-7 col-md-12 skills-block-text">
            <div className="skills-table">
              <div className="about-skills-wrapper">
                <div className="about-skills-title">
                  <h2>{t("skills.education")}</h2>
                </div>
                <div className="about-skills-inner-text">
                  <div className="about-skills-inner-title-text">itstep.by</div>
                  <div className="about-skills-inner-title-text text-opacity">
                    Frontend-developer/Backend-developer
                  </div>
                  <div className="about-skills-inner-title-text text-opacity">
                    2020-2023
                  </div>
                </div>
              </div>
              <div className="about-skills-delimiter"></div>
              <div className="about-skills-wrapper more-space">
                <div className="about-skills-title">
                  <h2>{t("skills.career")}</h2>
                </div>
                <div className="about-skills-inner-text">
                  <div className="about-skills-inner-title-text">
                    Trainee-developer A1 mobile service
                  </div>
                  <div className="about-skills-inner-title-text text-opacity">
                    Frontend-developer
                  </div>
                  <div className="about-skills-inner-title-text text-opacity">
                    2022-2023
                  </div>
                </div>
              </div>
              <div className="about-skills-delimiter"></div>
              <div className="about-skills-wrapper">
                <div className="about-skills-title">
                  <h2>{t("skills.skills")}</h2>
                </div>
                <div className="about-skills-inner-text">
                  <ul className="skills-ul-wrapper">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>C++</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg skills-block-mobile-version">
        <div className="skills-block-text-wrapper">
          <div className="skills-block-text-mobile featured-skills-wrapper">
            <div className="title-picture-wrapper">
              <h3 className="skills-main-title">My Featured Skills</h3>
            </div>

            <p className="skills-text">
              {t("mobile_skills.mobile_skills_text")}
            </p>
          </div>
        </div>
        <div className="skills-block-progress-info-wrapper">
          <div className="skills-block-text-mobile mobile-progress-bars">
            <div className="skills-progress-info-mobile">
              <h6 className="progress-title">UI/UX Design</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: "50%" }}></div>
              </div>
            </div>

            <div className="skills-progress-info-mobile">
              <h6 className="progress-title">JavaScript</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skills-progress-info-mobile">
              <h6 className="progress-title">TypeScript</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skills-progress-info-mobile">
              <h6 className="progress-title">React</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="skills-progress-info-mobile">
              <h6 className="progress-title">Responsive Web Sites</h6>
              <div className="progress">
                <div className="progress-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
