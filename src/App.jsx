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
      <Route path='/' element={<Landing/>}/>
      <Route path='/aboutme' element={<AboutMe/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/finish' element={<Finish/>}/>
    </Routes>
  )
}

export default App
