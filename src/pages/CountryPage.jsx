import React from "react";
import { useLoaderData } from "react-router-dom";

const CountryPage = () => {
  const countryData = useLoaderData().data[0];
  const name = countryData.name.common;
  return <div>The country of {name}</div>;
};

export default CountryPage;
