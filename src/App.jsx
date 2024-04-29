import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navegacion from "./components/Navegacion";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contacto";
import NotFound from "./views/NotFound"


function App() {

  return (
    <div>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
