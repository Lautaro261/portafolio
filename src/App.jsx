import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";

function App() {
  const [project, setProject] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Home setProject={setProject} />} />{" "}
      {/*1 Landing */}
      <Route
        path="/projects/detail/:id"
        element={<Detail project={project} />}
      />
      <Route
        path="/projectsmobil/detail/:id"
        element={<Detail project={project} />}
      />
      {/* 5 Detail */}
    </Routes>
  );
}

// FALTA
// 4 Projects Apps

export default App;
