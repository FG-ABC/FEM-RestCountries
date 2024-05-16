import React from "react";

const Loader = () => {
  const darkMode = JSON.parse(localStorage.getItem("DarkMode"));
  return (
    <div
      className={`flex h-screen items-center justify-center  ${darkMode ? "bg-DarkBackground" : "bg-LightBackground"}`}
    >
      <div
        className={`h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-transparent  ${darkMode ? "border-DarkBlueElement" : "border-LightInput"}`}
      ></div>
    </div>
  );
};

export default Loader;
