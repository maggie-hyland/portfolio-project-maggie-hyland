import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import React from 'react';
import './scss/Style.scss';

function App() {
   return (
      <div className="App" >
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
