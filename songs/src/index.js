import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./components/App";
import reducers from "./reducer";
import { createStore } from "redux";
ReactDOM.render(
  // createStore
  // createStore(reducer, [preloadedState], [enhancer]) Creates a Redux store that
  // holds the complete state tree of your app. There should only be a single store in your app.

  // Provider
  //  React component that allows consuming components to subscribe to context changes. The Provider
  // component accepts a value prop to be passed to consuming components that are descendants of this Provider.

  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
