import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { THEME } from "../assets/themes/theme";
import img from "../assets/images/DH1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme =
      theme === THEME.darkMode ? THEME.lightMode : THEME.darkMode;
      theme === THEME.darkMode
      ? document.querySelector("body").classList.remove("dark")
      : document.querySelector("body").classList.add("dark");
    setTheme(newTheme);
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    if (showSidebar == true) {
      setShowSidebar(false);
    }
    setShowSidebar(false);
  };

  return (
    <>
      <nav id="desktop" className={theme === THEME.darkMode ? "dark" : ""}>
        <img src={img} alt="logo" />

        <div className="row">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/favs"}>Favs</Link>
        </div>

        <div className="toggle-container">
          <label className="toggle">
            <input onClick={toggleTheme} type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </nav>
      <nav id="mobile" className={theme === THEME.darkMode ? "dark" : ""}>
        <div className="row between-row">
          {!showSidebar ? (
            <button className="menuBtn" onClick={openSidebar}>
              <FontAwesomeIcon icon={faBars} className="text-[25px]" />
            </button>
          ) : (
            <button className="menuBtn" onClick={closeSidebar}>
              <FontAwesomeIcon icon={faXmark} className="text-[25px]" />
            </button>
          )}

          <label className="toggle">
            <span className="icon sun"></span>
            <span className="icon moon"></span>
            <input onClick={toggleTheme} type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        {showSidebar && (
          <div className="sideMenu">
            <div className="col col-start">
              <Link to={"/"} onClick={closeSidebar}>
                Home
              </Link>
              <Link to={"/contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <Link to={"/favs"} onClick={closeSidebar}>
                Favs
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
