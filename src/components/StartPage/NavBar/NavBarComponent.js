// styles
import "./NavBarStyle.css";
//

// importing pictures
import profile_photo from "../../../pictures/author/profilePicture.png";
import { useTranslation } from "react-i18next";
//

function NavBar() {
  const [t] = useTranslation("global");

  return (
    <div className="banner-wrapper">
      <div className="container-lg">
        <div className="banner-info">
          <div className="banner-photo">
            <img src={profile_photo} alt="profile"></img>
          </div>
          <div className="banner-profile-text">
            <h1>{t("about.title_text")}</h1>
            <div className="banner-profile-text-border"></div>
            <h2>{t("about.programming_rank")}</h2>
            <a
              href="https://drive.google.com/drive/folders/1uaHlww8_urx3U3fO77iJSyR7OZRDi1eC?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {t("about.download")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
