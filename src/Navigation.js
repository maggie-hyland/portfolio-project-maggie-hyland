import Beanstagram from './linkedpage/Beanstagram';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './scss/Navigation.scss';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <div className="Navigation">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/portfolio-project-maggie-hyland" className="navbar-brand">
                Maggie Hyland
              </Link>
              <button
                className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  isMenuOpen ? 'show' : ''
                }`}
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.replace('/portfolio-project-maggie-hyland/#aboutMe');
                      }}
                    >
                      <a className="nav-link" onClick={closeMenu} style={{cursor: "pointer"}}>
                        About Me
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.replace('/portfolio-project-maggie-hyland/#projects');
                      }}
                    >
                      <a className="nav-link" onClick={closeMenu} style={{cursor: "pointer"}}>
                        Projects
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.replace('/portfolio-project-maggie-hyland/#contact');
                      }}
                    >
                      <a className="nav-link" onClick={closeMenu} style={{cursor: "pointer"}}>
                        Contact
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/linked" className="nav-link" onClick={closeMenu}>
                      <i className="fa-solid fa-cat"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/portfolio-project-maggie-hyland" element={<MainPage />} />
          <Route path="/linked" element={<Beanstagram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
