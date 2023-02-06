import React from "react";
import ReactDOM from "react-dom/client";
// import { GifExpertApp } from "./GifExpertAppMati";
import { GifExpertApp } from "./GifExpertApp";

import "./styles.css"; // de esta manera de importacion hace que estos estilos sean utilizados de forma global en la api

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
