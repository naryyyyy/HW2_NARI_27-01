import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { numbersReducer } from "./reducers/numbersReducer";
import NumbersPage from "./components/NumbersPage";

const store = createStore(numbersReducer);

ReactDOM.render(
  <Provider store={store}>
    <NumbersPage />
  </Provider>,
  document.getElementById("root")
);
