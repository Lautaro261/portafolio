import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";
import Card from "./components/card/card";
import Cardv2 from "./components/cardv2/Cardv2";
import Carousel from "./components/carousel/Carousel";
import dataWeb from "./data/projectsWeb";
import Finish from "./views/finish/Finish";
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
      {/* 5 Detail */}

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
