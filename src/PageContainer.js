import Header from './Header';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import React from 'react';

function PageContainer() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default PageContainer;
