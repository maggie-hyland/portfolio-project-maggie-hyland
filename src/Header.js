import './scss/Header.scss';

function Header() {
  return (
    <div className="Header">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              Maggie Hyland
            </a>
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
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="index.html#aboutMe"
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="index.html#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="index.html#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="index.html#contact">
                    <i class="fa-solid fa-cat"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
