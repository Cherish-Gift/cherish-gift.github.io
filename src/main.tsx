import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BottomNav from "./components/BottomNav";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset/>
      <App />
      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
