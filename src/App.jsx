import { React, useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import axios from "axios";
import solidMoon from "./assets/moon-solid.svg";
import regularMoon from "./assets/moon-regular.svg";

const baseURL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(baseURL);
      setDataList(response.data);
    }, 1000);
  }, []);

  return (
    <div
      className={`flex w-full flex-col items-center justify-center ${darkMode ? "bg-DarkBackground" : "bg-LightBackground"}`}
    >
      {/* Header */}
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
            className={`${darkMode ? "fill-white" : null} mr-2 h-5`}
          ></img>
          Dark Mode
        </button>
      </header>

      {/* Main Card List */}
      <div className="mt-12 w-full">
        <CountryList darkMode={darkMode} dataList={dataList} />
      </div>
    </div>
  );
};
export default App;
