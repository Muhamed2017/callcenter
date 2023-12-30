// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
// import "primereact/resources/themes/vela-blue/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Query from "./pages/Query";
import SideNav from "./components/Sidenav";
import "./App.css";
import FormInquery from "./pages/FormInquery";
function App() {
  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquery" element={<Query />} />
        <Route path="/form" element={<FormInquery />} />
      </Routes>
    </>
  );
}

export default App;
