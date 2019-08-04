import React from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import NavMenu from './components/menu/NavMenu'
import Intro from './components/intro/Intro'
import Article from './components/firstArticle/Article'
import Impressions from './components/secondArticle/Article'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavMenu />
      <Intro />
      <Article />
      <Impressions />
    </div>
  );
}

export default App;
