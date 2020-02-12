import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

const loggerMiddleWare = store => next => action => {
  const result = next(action);
  console.log("loggerMiddleWare", store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
