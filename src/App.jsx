import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/*1 Landing */}
      <Route path="/projects/detail/:id" element={<Detail />} />
      <Route path="/projectsmobil/detail/:id" element={<Detail />} />
      {/* 5 Detail */}
    </Routes>
  );
}

// FALTA
// 4 Projects Apps

export default App;
