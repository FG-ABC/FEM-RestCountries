import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CountryPage from "./pages/CountryPage";
import axios from "axios";

import "./index.css";
const baseURL = "https://restcountries.com/v3.1/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      return await axios.get(baseURL + "all");
    },
  },
  {
    path: ":CountryName",
    element: <CountryPage />,
    loader: async ({ params }) => {
      return await axios.get(
        `${baseURL}name/${params.CountryName}?fullText=true`,
      );
    },
    errorElement: <NoPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
