import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const application = (
  <BrowserRouter>
    <App title={"I am from props"} />
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));

serviceWorker.register();
