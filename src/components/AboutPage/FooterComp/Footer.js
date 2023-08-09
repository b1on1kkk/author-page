import "./FooterStyle.css";

import my_logo from "../../../pictures/logos/logo-no-background.png";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation("global");

  return (
    <footer>
      <div className="footer-inf">
        <div className="container py-md-4 footer-container-wrapper">
          <div className="logo">
            <Link to="..">
              <img src={my_logo} alt="my-logo"></img>
            </Link>
          </div>
          <div className="footer-contact">
            <ul>
              <li>
                <span className="fas fa-phone me-2"></span>
                <span className="underneath-text">
                  <a href="tel:+375 29-838-87-45" style={{ fontWeight: 500 }}>
                    +375 (29) 838-87-45
                  </a>
                </span>
              </li>
              <li>
                <span className="fas fa-envelope me-2"></span>
                <span className="underneath-text">
                  <a href="mailto: alex.sinyak.job@mail.ru">
                    alex.sinyak.job@mail.ru
                  </a>
                </span>
              </li>
              <li>
                <span className="fas fa-map-marker me-2"></span>
                <span className="underneath-text">
                  {t("location_block.location")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="darker-container-wrapper">
          <div className="container py-4">
            <div className="row footer-grids">
              <div className="col-lg-6 rights">
                <p>
                  © 2023 Portfolio. All Rights Reserved | Design by b1on1kkk
                </p>
              </div>
              <div className="col-lg-6 social">
                <div className="social-wrapper">
                  <ul>
                    <li>
                      <a href="https://t.me/b1on1kkk">
                        <span className="fab fa-telegram-plane"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://vk.com/b1on1kkk">
                        <span className="fab fa-vk"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/b1on1kkk?igshid=OGQ5ZDc2ODk2ZA==">
                        <span className="fab fa-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/b1on1kkk">
                        <span className="fab fa-github"></span>
                      </a>
                    </li>
                    <li>
                      <a href="https://leetcode.com/b1on1kkk/">
                        <span className="fab">
                          <i
                            className="far fa-keyboard"
                            style={{ color: "rgba(255, 255, 255, 0.5)" }}
                          ></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
