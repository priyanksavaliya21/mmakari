import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/shaka-player/dist/controls.css";
import "./index.css";
import App from "./App";
import "./responsive.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ScrollToTop from "./Components/LandingPage-Compo/ScrollToTop";
//  store.subscribe(() => {
//   console.log(store.getState());
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </Provider>
   </React.StrictMode>
);
reportWebVitals();
