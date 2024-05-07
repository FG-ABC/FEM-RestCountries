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
    const searchQuery = e.target.value.toLowerCase();
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

  const filterHandler = (e) => {
    const filterValue = e.target.value;
    const filteredLIst = storedDataList.filter((item) => {
      if (item.region === filterValue) {
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

      {/* Query Bar */}
      <div className="w-10/12 md:mx-1 md:flex md:w-full md:justify-between">
        {/* Search Bar */}
        <div
          className={`mt-6 w-full max-w-[500px] shadow-md md:ml-14 md:w-full md:self-start`}
        >
          <div
            className={`flex h-full w-full items-center rounded-md ${darkMode ? "bg-DarkBlueElement" : "bg-white"}`}
          >
            <img
              src={darkMode ? searchDark : searchLight}
              className={`mx-5 h-4`}
            ></img>
            <input
              className={`h-full w-full rounded-md py-4 text-xs focus:outline-none ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightInput"}`}
              placeholder="Search for a country..."
              onChange={searchHandler}
            ></input>
          </div>
        </div>

        {/* Filter Dropdown */}
        <div
          className={`mt-6 w-10/12 max-w-[500px] md:mr-14 md:w-1/6 md:self-end`}
        >
          <div
            className={`flex h-full w-4/6 items-center rounded-md md:w-full ${darkMode ? "bg-DarkBlueElement" : "bg-white"}`}
          >
            <select
              defaultValue={""}
              className={`h-full w-full rounded-md border-x-8 border-transparent px-3 py-4 text-xs  shadow-md focus:outline-none ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightInput"}`}
              placeholder="Filter by Region"
              onChange={filterHandler}
            >
              <option value="" disabled selected hidden>
                Filter by region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
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
