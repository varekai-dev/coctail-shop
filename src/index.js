import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import CoctailProvider from "./components/Context/CoctailsContext";
import "./scss/app.scss";

ReactDOM.render(
  <CoctailProvider>
    <Router>
      <App />
    </Router>
  </CoctailProvider>,
  document.getElementById("root")
);
