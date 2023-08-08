import { useTranslation } from "react-i18next";

import "./OffersStyles.css";

import computer_icon from "../../../pictures/icons/8665571_laptop_code_icon.png";
import database_icon from "../../../pictures/icons/8665333_database_icon.png";
import help_icom from "../../../pictures/icons/8665382_child_kid_icon.png";

export default function Offers() {
  const [t] = useTranslation("global");

  return (
    <div className="offers-wrapper">
      <div className="container">
        <div className="offers-title">
          <h3>{t("offers.offers_title")}</h3>
        </div>

        <div className="row content-wrapper">
          <div className="col-md-6 col-lg-4 col-sm-6 offers-tab">
            <div className="offers-about-ser">
              <div className="tab-picture-wrapper">
                <img src={computer_icon} alt="computer-icon" width={40}></img>
              </div>

              <div className="offers-about-content">
                <h5>{t("offers.first_title")}</h5>
                <p>{t("offers.first_about")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-6 offers-tab">
            <div className="offers-about-ser">
              <div className="tab-picture-wrapper">
                <img src={database_icon} alt="computer-icon" width={40}></img>
              </div>

              <div className="offers-about-content">
                <h5>{t("offers.second_title")}</h5>
                <p>{t("offers.second_about")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-sm-12 offers-tab">
            <div className="offers-about-ser">
              <div className="tab-picture-wrapper">
                <img src={help_icom} alt="computer-icon" width={40}></img>
              </div>

              <div className="offers-about-content">
                <h5>{t("offers.third_title")}</h5>
                <p>{t("offers.third_about")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
