import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCfQGtELomh8v_K_eL7RggnG3gQpGr09lU",
  authDomain: "tienda-coder-8f66b.firebaseapp.com",
  projectId: "tienda-coder-8f66b",
  storageBucket: "tienda-coder-8f66b.appspot.com",
  messagingSenderId: "374049862172",
  appId: "1:374049862172:web:7406c065b38496329625d9",
  measurementId: "G-GQ9NDYJNEJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
