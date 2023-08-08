// styles
import "../NavBar/NavBarStyle.css";
//

// importing pictures
import image from "../../../pictures/logos/logo-black-fotor-bg-remover-2023060722554.png";
//

// utilities
import { useState } from "react";

import { ScrollDetectFunction } from "../NavBar/utilities/ScrollDetect";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
//

export default function HeaderFunction({
  setOpenStatus,
  openStatus,
  theme,
  setTheme,
  setLanguageModeChanger,
}) {
  const [t] = useTranslation("global");

  // states
  const [initalClassAdd, setClassAdd] = useState(false);
  const [scrollAmount, setScrollAmout] = useState(0);
  //

  window.addEventListener("scroll", () => {
    ScrollDetectFunction(setScrollAmout, setClassAdd);
  });

  const languageHandler = (e) => {
    if (e.target.checked === false) {
      setLanguageModeChanger("ru");
    } else {
      setLanguageModeChanger("en");
    }
  };

  return (
    <header className={initalClassAdd ? "header-fixed" : ""}>
      <div className="nav-bar-wrapper container-lg">
        <div className="humburger-wrapper">
          <input
            type="checkbox"
            className="toggler"
            onClick={
              openStatus
                ? () => setOpenStatus(false)
                : () => setOpenStatus(true)
            }
          />
          <div className="hamburger">
            <div></div>
          </div>
        </div>

        <div className="nav-bar-logo">
          <Link to=".">
            <img src={image} alt="logo"></img>
          </Link>
        </div>

        <div className="mobile-page-mode">
          <div
            className="mobile-modes-wrapper"
            onClick={
              theme === "light"
                ? () => setTheme("dark")
                : () => setTheme("light")
            }
          >
            {theme === "light" ? (
              <i className="gg-moon"></i>
            ) : (
              <i className="gg-sun"></i>
            )}
          </div>
        </div>
        <div className="list-wrapper">
          <ul className="nav-bar-list">
            <NavLink to="." end>
              <li>{t("header.main")}</li>
            </NavLink>

            <NavLink to="about">
              <li>{t("header.about_me")}</li>
            </NavLink>

            <div className="switcher-language-wrapper">
              <div className="ru">RU</div>
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked={navigator.language === "ru" ? false : true}
                  onChange={(e) => languageHandler(e)}
                ></input>
                <span className="slider round"></span>
              </label>
              <div className="eng">EN</div>
            </div>

            <div className="page-mode">
              <div
                className="picture-wrapper"
                onClick={
                  theme === "light"
                    ? () => setTheme("dark")
                    : () => setTheme("light")
                }
              >
                {theme === "light" ? (
                  <i className="gg-moon"></i>
                ) : (
                  <i className="gg-sun"></i>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div
        className="progress-line-wrapper"
        style={{ width: `${scrollAmount}%` }}
      ></div>
    </header>
  );
}
