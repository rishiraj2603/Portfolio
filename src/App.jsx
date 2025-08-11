import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactPage from "./components/Contact/ContactPage";

const App = () => {
  return (
    <div className="font-style">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
