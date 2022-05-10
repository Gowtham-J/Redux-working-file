import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// createStore(reducer, [preloadedState], [enhancer]) Creates a Redux store that
// holds the complete state tree of your app. There should only be a single store in your app
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  // Provider React component that allows consuming components to subscribe to context changes. The Provider
  // component accepts a value prop to be passed to consuming components that are descendants of this Provider.
  <Provider store={store}>
    <App />
  </Provider>
);
