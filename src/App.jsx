import { useState } from 'react'
import { Route, Routes } from "react-router";
import Landing from './views/landing/landing';
import AboutMe from './views/aboutMe/aboutMe';
import Projects from './views/projects/projects';
import Finish from './views/finish/Finish';
import Detail from './views/detail/detail';
import style from './App.module.css';
import { Link } from 'react-scroll';
import { navTitle } from './data/texts';



function App(){

  return(
    <div>
      <header>
        <nav className={style.navi}>
          {/* <h2>Coffe shopp</h2> */}
        <ul className={style.containerList}>
          {navTitle.map(menu=>{
            return(
            <li className={style.item}>
              {/* <a  href={`${menu.title}`}>{menu.title}</a> */}
              <Link className={style.link} to={menu.title} smooth={true} offset={-310} duration={500}>{menu.title}</Link>
            </li>

            )
          })}
        </ul>
        </nav>

      </header>

      <main>
        {navTitle.map(menu=>{
          return(

        <div className={style.content}>
          {/* <h1 className={style.contentHeader} id={menu.title}>{menu.title}</h1> */}
          <Landing className={style.contentHeader}/>
        </div>

          )
        })}
      </main>
    </div>
  )
}

export default App

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
