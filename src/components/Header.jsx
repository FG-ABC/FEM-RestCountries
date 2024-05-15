import React from "react";
import solidMoon from "../assets/moon-solid.svg";
import regularMoon from "../assets/moon-regular.svg";

const Header = ({ setDarkMode, darkMode }) => {
  return (
    <header
      className={`flex w-full justify-between p-5 shadow-md ${darkMode ? "bg-DarkBlueElement" : "bg-white"}`}
    >
      <h1 className={`${darkMode ? "text-white" : "text-LightText"}`}>
        Where in the world?
      </h1>

      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className={`flex ${darkMode ? "text-white" : "text-LightText"}`}
      >
        <img
          src={darkMode ? solidMoon : regularMoon}
          className={`mr-2 h-5`}
        ></img>
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
