import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./module/reducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
