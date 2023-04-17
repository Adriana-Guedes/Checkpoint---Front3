import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";

//paginas
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import { Routes } from "./Routes";
import { AuthProvider } from "./hooks/auth";

//navegação
const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
