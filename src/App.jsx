import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll'; // Importa Element y Link desde react-scroll
import Landing from './views/landing/landing';
import AboutMe from './views/aboutMe/aboutMe';
import Projects from './views/projects/projects';
import Finish from './views/finish/Finish';
import Detail from './views/detail/detail';
import style from './App.module.css';

function App() {
  return (
    <div>
      <header>
        <nav className={style.navi}>
          <ul className={style.containerList}>
            <li className={style.item}>
              <ScrollLink to="landing" smooth={true} offset={100} duration={500}>
                Inicio
              </ScrollLink>
            </li>
            <li className={style.item}>
              <ScrollLink to="projects" smooth={true} offset={-310} duration={500}>
                Proyectos
              </ScrollLink>
            </li>
            <li className={style.item}>
              <ScrollLink to="aboutme" smooth={true} offset={-310} duration={500}>
                Sobre mi
              </ScrollLink>
            </li>
            <li className={style.item}>
              <ScrollLink to="finish" smooth={true} offset={-310} duration={500}>
                Contacto
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Element name="landing">
          <div className={style.content}>
            <Landing className={style.contentHeader} />
          </div>
        </Element>

        <Element name="projects">
          <div className={style.content}>
            <Projects className={style.contentHeader} />
          </div>
        </Element>

        <Element name="aboutme">
          <div className={style.content}>
            <AboutMe className={style.contentHeader} />
          </div>
        </Element>

        <Element name="finish">
          <div className={style.content}>
            <Finish className={style.contentHeader} />
          </div>
        </Element>
      </main>
    </div>
  );
}

export default App;



/* function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>  {/*1 Landing /}
      <Route path='/projects' element={<Projects/>}/> {/*2 projects Web /}
      <Route path='/finish' element={<Finish/>}/>     {/* 3 Finish /}
      <Route path='/projects/detail/:id' element={<Detail/>}/>  {/* 5 Detail /}
      <Route path='/aboutme' element={<AboutMe/>}/> {/*6 AboutMe /}
    </Routes>
  )
}

// FALTA
// 4 Projects Apps

export default App */
