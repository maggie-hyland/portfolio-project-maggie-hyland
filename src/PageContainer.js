import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import React from 'react';

function PageContainer() {
  return (
    <div className='PageContainer'>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default PageContainer;
