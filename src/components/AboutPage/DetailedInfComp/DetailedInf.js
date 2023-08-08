import "./DetailedStyle.css";

import personal_picture from "../../../pictures/author/photo_2023-07-10_11-24-25.jpg";

import { useTranslation } from "react-i18next";

export default function DetailedInf() {
  const [t] = useTranslation("global");

  return (
    <div className="about-wrapper" id="about">
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
            <h3 className="biography-bit-more">
              {t("more_about_block.more_about_title")}
            </h3>
            <p className="biography-text-about">
              {t("more_about_block.more_about_me")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
