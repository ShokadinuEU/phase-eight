import React from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import NavMenu from './components/menu/NavMenu'
import Intro from './components/intro/Intro'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavMenu />
      <Intro />
    </div>
  );
}

export default App;
