import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./styles.scss";

const middleware = applyMiddleware(reduxThunk);

const store = createStore(
  rootReducer /* preloadedState, */,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
