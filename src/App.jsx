import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";

import CardApp from "./components/cardApp/CardApp";
import dataMobil from "./data/projectsMobil";

const {image, repositorio, title, description } = dataMobil[0] 


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
      {/* 5 Detail Estoy haciendo una prueba*/}

      <Route 
        path="/test"
        element={<CardApp id={1} image={image} repositorio={repositorio} title={title} description={description}/>} 
      />
    </Routes>
  );
}

// FALTA
// 4 Projects Apps

export default App;
