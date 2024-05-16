import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import axios from "axios";

import Loader from "../components/Loader";
import Header from "../components/Header";

import lightArrow from "../assets/arrow-left-light.svg";
import darkArrow from "../assets/arrow-left-dark.svg";

const CountryPage = () => {
  const countryData = useLoaderData().data[0];
  const baseURL = "https://restcountries.com/v3.1/";

  const [darkMode, setDarkMode] = useState();
  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load datalist on page load and store in global variable
  useEffect(() => {
    setTimeout(async () => {
      const DarkMode = JSON.parse(localStorage.getItem("DarkMode"));
      setDarkMode(DarkMode);
      setLoading(false);
      if (countryData.borders) {
        countryData.borders.forEach(async (item) => {
          const countryData = await axios.get(`${baseURL}alpha/${item}`);
          setBorders((borders) => [
            ...borders,
            countryData.data[0].name.common,
          ]);
        });
      }
    }, 1000);
  }, []);

  return loading ? (
    <Loader darkMode={darkMode} />
  ) : (
    <div
      className={`flex min-h-screen w-full flex-col items-center ${darkMode ? "bg-DarkBackground" : "bg-LightBackground"}`}
    >
      {/* Header */}
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />

      {/* Main */}
      <div className="w-10/12 md:mx-1 md:flex md:w-full md:flex-col md:justify-between">
        {/* Back Button */}
        <div
          className={`mt-6 w-full max-w-[130px] shadow-md md:ml-14 md:w-full md:self-start`}
        >
          <a
            className={`flex h-full w-full items-center justify-center gap-x-3 rounded-md py-2 pr-3 ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightText"}`}
            href="/"
          >
            <img src={darkMode ? darkArrow : lightArrow} width={20} />
            <h1>Back </h1>
          </a>
        </div>

        {/* Content */}
        <div className="mt-7 flex flex-col md:mt-16 md:w-11/12 md:flex-row md:justify-evenly md:self-center">
          {/* Image */}
          <img
            className="h-full w-full object-cover md:w-5/12"
            src={countryData.flags.svg}
            alt={countryData.name.common}
          ></img>

          {/* Details */}
          <div
            className={`  flex w-full flex-col gap-y-4 py-5 md:mt-6 md:w-7/12 md:px-20 md:pt-0 ${darkMode ? "text-white" : " text-LightText"}`}
          >
            <h1 className="text-lg font-extrabold lg:text-2xl">
              {countryData.name.common}
            </h1>

            <div className="flex flex-col justify-between gap-y-8 md:flex-row">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-sm">
                  <strong>Native Name: </strong>
                  {countryData[Object.keys(countryData)[0]].official}
                </h2>
                <h2 className="text-sm">
                  <strong>Population: </strong>
                  {countryData.population}
                </h2>
                <h2 className="text-sm">
                  <strong>Region: </strong>
                  {countryData.subregion}
                </h2>
                <h2 className="text-sm">
                  <strong>Sub Region: </strong>
                  {countryData.region}
                </h2>
                <h2 className="text-sm">
                  <strong>Capital: </strong>
                  {countryData.capital}
                </h2>
              </div>

              <div className="flex flex-col gap-y-2">
                <h2 className="text-sm">
                  <strong>Top Level Domain: </strong>
                  {countryData.tld}
                </h2>
                <h2 className="flex gap-x-1 text-sm">
                  <strong>Currencies: </strong>
                  {Object.keys(countryData.currencies).join(", ")}
                </h2>
                <h2 className="text-sm">
                  <strong>Languages: </strong>
                  {Object.values(countryData.languages).join(", ")}
                </h2>
              </div>
            </div>

            <h2 className="text-md md:mt-4 lg:text-xl">
              <strong>Border Countries: </strong>
            </h2>
            <div className="flex w-full flex-col flex-wrap gap-y-2 md:flex-row md:gap-5">
              {borders.length > 0
                ? borders.map((item) => {
                    return (
                      <a
                        href={`/${item}`}
                        className={`w-full rounded-lg p-2 text-center text-sm shadow-md md:w-auto md:min-w-[150px] ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightText"}`}
                        key={item.id}
                      >
                        {item}
                      </a>
                    );
                  })
                : "None"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
