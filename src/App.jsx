import { useState } from 'react'
import { Route, Routes } from "react-router";
import Landing from './views/landing/landing';
import AboutMe from './views/aboutMe/aboutMe';
import Projects from './views/projects/projects';
import Finish from './views/finish/Finish';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>  {/*1 Landing */}
      <Route path='/projects' element={<Projects/>}/> {/*2 projects Web */}
      <Route path='/finish' element={<Finish/>}/>     {/* 3 Finish */}
      <Route path='/aboutme' element={<AboutMe/>}/> {/*6 AboutMe */}
    </Routes>
  )
}

// FALTA
// 5 Detail
// 4 Projects Apps

export default App
