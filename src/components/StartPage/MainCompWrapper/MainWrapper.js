import "../../../App.css";

import { useEffect, useState, createContext } from "react";

import { getCurrentDimension } from "../NavBar/utilities/ScrollDetect";

// components
import NavBar from "../NavBar/NavBarComponent";
import AboutComponent from "../AboutAuthor/AboutComponent";
import Offers from "../Offers/OffersComponent";
import SkillsComponent from "../Skills/SkillsComponent";
import Footer from "../../AboutPage/FooterComp/Footer";

//

export const ThemeContext = createContext(null);

export default function HomePage() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    function upDateDemension() {
      setScreenSize(getCurrentDimension());
    }

    window.addEventListener("resize", upDateDemension);

    return () => {
      window.removeEventListener("resize", upDateDemension);
    };
  }, [screenSize]);

  return (
    <div className={screenSize.width < 960 ? "App-mobile-scroller" : ""}>
      <NavBar></NavBar>
      <AboutComponent></AboutComponent>
      <Offers></Offers>
      <SkillsComponent></SkillsComponent>
      <Footer></Footer>
    </div>
  );
}
