import Beanstagram from './linkedpage/Beanstagram';
import MainPage from './MainPage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './scss/Navigation.scss';

function Navigation() {
  return (
    <Router>
      <div className="Navigation">
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                Maggie Hyland
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <div onClick={(e) => {e.preventDefault(); window.location.replace('/#aboutMe');}}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="index.html#aboutMe"
                    >
                      About Me
                    </a>
                    </div>
                  </li>
                  <li className="nav-item">
                  <div onClick={(e) => {e.preventDefault(); window.location.replace('/#projects');}}>
                    <a className="nav-link" href="index.html#projects">
                      Projects
                    </a>
                    </div>
                  </li>
                  <li className="nav-item">
                  <div onClick={(e) => {e.preventDefault(); window.location.replace('/#contact');}}>
                    <a className="nav-link" href="index.html#contact">
                      Contact
                    </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/linked" className="nav-link">
                      <i class="fa-solid fa-cat"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/linked" element={<Beanstagram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
