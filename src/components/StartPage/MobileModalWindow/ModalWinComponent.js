import { useState, useEffect } from "react";

import "./ModalWinStyle.css";

import "../../../index.css";

import image from "../../../pictures/logos/logo-black-fotor-bg-remover-2023060722554.png";

// width setter
import { getCurrentDimension } from "../NavBar/utilities/ScrollDetect";
import { Link, NavLink } from "react-router-dom";
//

export default function ModalMobWindow({ openStatus }) {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [modalBtnsStyle, setModalBtnsStyle] = useState(false);

  // hide modal window to different types of width handler
  function ModalHiderHandler() {
    if (screenSize.width > 1300) {
      return "hide-modal-win-for-pc";
    } else if (screenSize.width < 1300) {
      if (openStatus) {
        return "modal-window-wrapper";
      } else {
        return "modal-window-wrapper hide-modal-win";
      }
    }
  }
  //

  //
  useEffect(() => {
    const upDateDemension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", upDateDemension);

    if (screenSize.width > 960 && openStatus) {
      document.querySelector(".toggler").click();
    }

    if (screenSize.width > 600 && screenSize.width < 900) {
      setModalBtnsStyle(true);
    } else {
      setModalBtnsStyle(false);
    }

    return () => {
      window.removeEventListener("resize", upDateDemension);
    };
  }, [screenSize, openStatus]);
  //

  function ModalBtnClickHandler() {
    // console.log(document.getElementsByClassName("toggler")[0].click());
    document.querySelector(".toggler").click();
  }

  return (
    <div className={ModalHiderHandler()}>
      {openStatus
        ? document.querySelector("body").classList.add("body-fixer")
        : document.querySelector("body").classList.remove("body-fixer")}
      <div className="modal-window">
        <div className={modalBtnsStyle ? "btns-wrapper" : ""}>
          <NavLink to="." end onClick={ModalBtnClickHandler}>
            <div
              className={
                openStatus
                  ? "modal-window-btn modal-window-btn-remover"
                  : "modal-window-btn"
              }
            >
              Home
            </div>
          </NavLink>

          <NavLink to="about" onClick={ModalBtnClickHandler}>
            <div
              className={
                openStatus
                  ? "modal-window-btn modal-window-btn-remover"
                  : "modal-window-btn"
              }
            >
              About me
            </div>
          </NavLink>
        </div>
        <div className="nav-bar-logo-modal-win">
          <Link to="." onClick={ModalBtnClickHandler}>
            <img src={image} alt="modal-logo"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
