import React from 'react'
import './App.css'
import HeaderSection from './components/header/HeaderSection'
import Intro from './components/intro/Intro'
import Article from './components/firstArticle/Article'
import Impressions from './components/secondArticle/Article'
import Seasons from './components/thirdArticle/Seasons'
import Clients from './components/fourthArticle/Clients'
import Contact from './components/fifthArticle/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Intro />
      <Article />
      <Impressions />
      <Seasons />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
