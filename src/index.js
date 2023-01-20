import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'

import store from "./redux/store";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// r21122005q
reportWebVitals();
