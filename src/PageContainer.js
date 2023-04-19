import Header from './Header';
import Footer from './Footer';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import React from 'react';

function PageContainer() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default PageContainer;
