import "./GreetingCompStyle.css";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function GreetingCommentBlock() {
  const [t] = useTranslation("global");

  return (
    <div className="about-picture-wrapper">
      <h1>{t("more_about_block.greeting_block")}</h1>
      <div className="about-path">
        <div className="path-wrappers">
          <Link to="/">{t("more_about_block.routing.home")}</Link>
        </div>
        <div className="path-wrappers path-bolder">
          <span className="fa fa-angle-right mx-2" aria-hidden="true"></span>
          {t("more_about_block.routing.about")}
        </div>
      </div>
    </div>
  );
}
