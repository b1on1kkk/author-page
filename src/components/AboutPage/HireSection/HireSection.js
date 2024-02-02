import "./HireSectionStyle.css";

import { useTranslation } from "react-i18next";

export default function HireSection() {
  const [t] = useTranslation("global");

  return (
    <div className="hire-section-wrapper">
      <div className="container">
        <div className="hire-section">
          <div className="row">
            <div className="col-lg-7 main-text-hire">
              <div className="text-wrapper">
                <h3 className="title-main-text">
                  {t("get_in_touch_block.get_in_touch_title")}
                </h3>
              </div>
            </div>
            <div className="col-lg-5 buttons-to-hire">
              <div className="hire-buttons-wrapper">
                <a
                  href="https://drive.google.com/drive/folders/1uaHlww8_urx3U3fO77iJSyR7OZRDi1eC?usp=sharing"
                  className="hire-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span style={{ color: "white" }}>{t("about.download")}</span>
                </a>

                <a href="https://t.me/b1on1kkk" className="contact-btn-wrapper">
                  <span className="contact-btn">{t("about.contact")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
