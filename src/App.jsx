import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Photo from './components/Photo/Photo'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Skills/>
      <Work/>
      <Photo/>
      <Contact/>
    </div>
  )
}

export default App