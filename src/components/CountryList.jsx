import React from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ dataList, darkMode }) => {
  return (
    <div className="mx-10 flex flex-wrap justify-evenly gap-8">
      {dataList.map((item) => {
        return <CountryCard darkMode={darkMode} details={item} />;
      })}
    </div>
  );
};

export default CountryList;
