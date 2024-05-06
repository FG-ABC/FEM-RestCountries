import React from "react";

const CountryCard = ({ details, darkMode }) => {
  return (
    <div
      className={`flex w-full flex-col justify-between rounded-md shadow-md duration-150 ease-in-out md:w-56 hover:md:scale-110 ${darkMode ? "bg-DarkBlueElement text-white" : "bg-white text-LightText"}`}
    >
      <div className="h-32 overflow-hidden rounded-t-md">
        <img
          className="h-full w-full object-cover"
          src={details.flags.svg}
        ></img>
      </div>
      <div className="p-5">
        <h1 className="mb-4 text-lg font-extrabold">{details.name.common}</h1>
        <h2 className="text-sm">
          <strong>Population: </strong>
          {details.population}
        </h2>
        <h2 className="text-sm">
          <strong>Region: </strong>
          {details.region}
        </h2>
        <h2 className="text-sm">
          <strong>Capital: </strong>
          {details.capital}
        </h2>
      </div>
    </div>
  );
};

export default CountryCard;
