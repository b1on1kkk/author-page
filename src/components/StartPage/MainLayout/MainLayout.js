import { Outlet } from "react-router-dom";
import { useState } from "react";
import HeaderFunction from "../HeaderComponent/Header";

import ModalMobWindow from "../MobileModalWindow/ModalWinComponent";

export default function MainLayout({
  theme,
  setTheme,
  changeLanguage,
  setLanguageModeChanger
}) {
  const [initialModalClass, setOpenModalWin] = useState(false);

  return (
    <>
      <ModalMobWindow openStatus={initialModalClass} />
      <HeaderFunction
        setOpenStatus={setOpenModalWin}
        openStatus={initialModalClass}
        theme={theme}
        setTheme={setTheme}
        changeLanguage={changeLanguage}
        setLanguageModeChanger={setLanguageModeChanger}
      />
      <Outlet></Outlet>
    </>
  );
}
