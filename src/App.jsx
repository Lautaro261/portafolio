import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./views/detail/detail";
import Home from "./views/home/Home";
import style from "./App.module.css";
import Card from "./components/card/card";
import Cardv2 from "./components/cardv2/Cardv2";

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
        element={<Cardv2 
          id='1'
          name='paby'
          image='https://res.cloudinary.com/dmusnfifn/image/upload/v1693926649/portafolio/wwetymnfw5e33z2c9k0y.png'
          repositorio='https://github.com/Lautaro261/paby-PF'
          deploy='https://github.com/Lautaro261/paby-PF'
          title='P A B Y'
          description='Plataforma para reservar tus espacios en parquimetros.'
          tecnology=''
          setProject= {setProject}/>} 
      />
    </Routes>
  );
}

// FALTA
// 4 Projects Apps

export default App;
