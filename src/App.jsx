import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";
import Card from "./components/card/card";
import Cardv2 from "./components/cardv2/Cardv2";
import Carousel from "./components/carousel/Carousel";
import dataWeb from "./data/projectsWeb";

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

      <Route 
        path="/test"
        element={<Carousel cards={dataWeb} cardsPerPage={3} setProject={setProject}/>} 
      />
    </Routes>
  );
}

// FALTA
// 4 Projects Apps

export default App;
