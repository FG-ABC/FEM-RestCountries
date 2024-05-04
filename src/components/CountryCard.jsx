import React from "react";

const CountryCard = ({ details, darkMode }) => {
  return (
    <div
      className={`${darkMode ? "bg-DarkBlueElement text-white" : "text-LightText bg-white"} flex w-full flex-col justify-between rounded-md shadow-md md:w-56`}
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
