import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import React from 'react';

function PageContainer() {
  return (
    <div className="PageContainer">
      <MainPage />
      <LinkedPage />
    </div>
  );
}

export default PageContainer;
