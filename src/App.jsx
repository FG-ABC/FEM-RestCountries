import { React, useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import axios from "axios";
import solidMoon from "./assets/moon-solid.svg";
import regularMoon from "./assets/moon-regular.svg";
import searchLight from "./assets/search-light.svg";
import searchDark from "./assets/search-dark.svg";

const baseURL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [storedDataList, setStoredDataList] = useState([]);

  // Load datalist on page load and store in global variable
  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(baseURL);
      setDataList(response.data);
      setStoredDataList(response.data);
    }, 1000);
  }, []);

  const searchHandler = (e) => {
    const searchQuery = e.target.value;
    const filteredLIst = storedDataList.filter((item) => {
      if (
        item.name.common.toLowerCase().includes(searchQuery) ||
        item.name.official.toLowerCase().includes(searchQuery)
      ) {
        return true;
      } else {
        return false;
      }
    });
    setDataList(filteredLIst);
  };

  return (
    <div
      className={`flex min-h-screen w-full flex-col items-center ${darkMode ? "bg-DarkBackground" : "bg-LightBackground"}`}
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
            className={`mr-2 h-5`}
          ></img>
          Dark Mode
        </button>
      </header>

      {/* Search Bar */}
      <div
        className={`mt-6 w-10/12 max-w-[500px] md:ml-10 md:w-full md:self-start`}
      >
        <div
          className={`flex h-full w-full items-center rounded-md ${darkMode ? "bg-DarkBlueElement" : "bg-white"}`}
        >
          <img
            src={darkMode ? searchDark : searchLight}
            className={`mx-5 h-4`}
          ></img>
          <input
            className={`h-full w-full rounded-md py-4 text-xs ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightInput"}`}
            placeholder="Search for a country..."
            onChange={searchHandler}
          ></input>
        </div>
      </div>

      {/* Main Card List */}
      <div className="mt-12 w-full">
        <CountryList darkMode={darkMode} dataList={dataList} />
      </div>
    </div>
  );
};
export default App;
