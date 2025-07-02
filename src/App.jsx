import React from "react";

import { useState } from 'react'
import Home from './Home'
import NavBar from './NavBar'
import Effects from './Effects'
import Education from './Education'
import './App.css'
import Projects from './projects'
import Contact from './contactus'
import Skills from './skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
      <Effects/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      {/* <div className='h-96 bg-amber-500'></div>
      <div className='h-96 bg-amber-600'></div>
      <div className='h-96 bg-amber-700'></div>
      <div className='h-96 bg-amber-800'></div> */}
      
    </>
  );
}

export default App
