import React from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import NavMenu from './components/menu/NavMenu'
import Intro from './components/intro/Intro'
import Article from './components/firstArticle/Article'
import Impressions from './components/secondArticle/Article'
import Seasons from './components/thirdArticle/Seasons'
import Clients from './components/fourthArticle/Clients'
import Contact from './components/fifthArticle/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavMenu />
      <Intro />
      <Article />
      <Impressions />
      <Seasons />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;
