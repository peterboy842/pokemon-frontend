import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/home/home";
import Header from "./components/footer/header/header";
import Footer from "./components/footer/footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
