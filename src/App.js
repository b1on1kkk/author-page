import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

import HomePage from "./components/StartPage/MainCompWrapper/MainWrapper";
import MainLayout from "./components/StartPage/MainLayout/MainLayout";

import MainAboutWrapper from "./components/AboutPage/MainWrapperComp/MainAboutWrapper";

import global_en from "./locales/en/translation.json";
import global_ru from "./locales/ru/translation.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

export const ThemeContext = createContext(null);

function App() {
  const [languageModeChanger, setLanguageModeChanger] = useState(
    navigator.language
  );

  // multilanguage initializing
  i18next.init({
    interpolation: { escapeValue: false },
    lng: languageModeChanger,
    resources: {
      en: {
        global: global_en
      },
      ru: {
        global: global_ru
      }
    }
  });
  //

  // themes
  const [theme, setTheme] = useState("light");

  const ThemeToggler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  //

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeContext.Provider value={{ theme, ThemeToggler }}>
        <div className="main-app-wrapper" id={theme}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <MainLayout
                    theme={theme}
                    setTheme={setTheme}
                    setLanguageModeChanger={setLanguageModeChanger}
                  />
                }
              >
                <Route index element={<HomePage />} />
                <Route
                  path="about"
                  element={<MainAboutWrapper></MainAboutWrapper>}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </I18nextProvider>
  );
}

export default App;
