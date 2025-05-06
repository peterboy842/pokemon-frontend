import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
