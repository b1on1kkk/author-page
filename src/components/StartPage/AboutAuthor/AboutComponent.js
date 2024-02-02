import "./AboutStyles.css";

import personal_picture from "../../../pictures/author/photo_2023-07-10_11-24-25.jpg";

import { useTranslation } from "react-i18next";

export default function AboutComponent() {
  const [t] = useTranslation("global");

  return (
    <div className="about-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 picture-wrapper">
            <img
              src={personal_picture}
              alt="personal"
              className="personal-picture"
            ></img>
          </div>
          <div className="col-lg-7 biography">
            <h6 className="biography-title">{t("about.about_me")}</h6>
            <h3 className="biography-bit-more">
              {t("more_about.about_title")}
            </h3>
            <p className="biography-text-about">{t("more_about.about_text")}</p>
            <div className="biography-about-data">
              <div className="biography-about-data-ditailed-info">
                <span>{t("more_about.name")}</span>
                <p>{t("more_about.name_name")}</p>
              </div>
              <div className="biography-about-data-ditailed-info">
                <span>{t("more_about.from")}</span>
                <p>{t("more_about.country")}</p>
              </div>
              <div className="biography-about-data-ditailed-info">
                <span>Mail:</span>
                <p>
                  <a
                    href="mailto: alex.sinyak.job@mail.ru"
                    style={{ fontWeight: 500 }}
                  >
                    alexsinyak05@gmail.com
                  </a>
                </p>
              </div>
              <div
                className="biography-about-data-ditailed-info"
                style={{ lineHeight: `15px` }}
              >
                <div>
                  <span>{t("more_about.phone_number")}</span>
                  <p>
                    <a href="tel:29-838-87-45" style={{ fontWeight: 500 }}>
                      +375 (29) 838-87-45
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="follow-social-wrapper">
              <ul>
                <li>
                  <h5>{t("more_about.follow")}</h5>
                </li>
                <li>
                  <a href="https://t.me/b1on1kkk">
                    <span className="fab fa-telegram-plane pc-version"></span>
                  </a>
                </li>
                <li>
                  <a href="https://vk.com/b1on1kkk">
                    <span className="fab fa-vk pc-version"></span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/b1on1kkk?igshid=OGQ5ZDc2ODk2ZA==">
                    <span className="fab fa-instagram pc-version"></span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/b1on1kkk">
                    <span className="fab fa-github pc-version"></span>
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/b1on1kkk/">
                    <span className="fab pc-version">
                      <i className="far fa-keyboard"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
