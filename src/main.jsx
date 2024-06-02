import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { createApi } from "./services/redux/reduxApi.js";
import { Provider } from "react-redux";
import { store } from "./services/redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
