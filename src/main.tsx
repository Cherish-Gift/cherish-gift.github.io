import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BottomNav from "./components/BottomNav";

import "./assets/Button.scss";
import { BrowserRouter, resolvePath } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BottomNav />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
