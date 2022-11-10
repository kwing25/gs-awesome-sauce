import './GlobalResources/Assets/Fonts/fonts.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {GlobalStyles} from 'tss-react'
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import globalStyles from './GlobalResources/Theme/globalStyles'


export const muiCache = createCache({
  key: "mui",
  prepend: true,
});

ReactDOM.render(
  <React.StrictMode>
    <CacheProvider value={muiCache}>
    <GlobalStyles styles={globalStyles}/>
      <App />
    </CacheProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
