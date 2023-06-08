import GetReadyForecast from './GetReadyForecast';
import ReactWeatherApp from './ReactWeatherApp';
import TicTacToe from './TicTacToe';
import Vaporwave from './Vaporwave';
import './scss/Projects.scss';

function Projects() {
  return (
    <div className="Projects container mb-2 pt-2" id="projects">
      <div className="row mt-3 d-flex pt-3 pb-3" id='rowA'>
        <div className="d-none d-md-block col-md-6">
          <GetReadyForecast />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Get Ready Forecast</h2>
          <p className="fs-5 app-paragraphs">
            Five day weather forecast application made with Javascript... (add
            more detail?)
          </p>
          <div className="d-none d-sm-block d-md-none">
            <GetReadyForecast />
          </div>
          <div className="launch-app-links">
            <a
              href="https://famous-pasca-19c020.netlify.app/"
              className="primary-link center"
              target="_blank"
            >
              Launch Get Ready Forecast
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-2 d-flex pt-3 pb-3" id='rowB'>
        <div className="col-md-6">
          <h2 className="mb-3">React Weather App</h2>
          <p className="fs-5 app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione.
          </p>
          <div className="d-none d-sm-block d-md-none">
            <ReactWeatherApp />
          </div>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch Weather App
            </a>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6">
          <ReactWeatherApp />
        </div>
      </div>
      <div className="row mt-2 mb-2 d-flex pt-3 pb-3" id='rowA'>
        <div className="d-none d-md-block col-md-6">
          <Vaporwave />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Vaporwave Webpage</h2>
          <p className="fs-5 app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione.
          </p>
          <div className="d-none d-sm-block d-md-none">
            <Vaporwave />
          </div>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch Vaporwave Webpage
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-2 d-flex pt-3 pb-3" id='rowB'>
        <div className="col-md-6">
          <h2 className="mb-3">Tic Tac Toe</h2>
          <p className="fs-5 app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione.
          </p>
          <div className="d-none d-sm-block d-md-none">
            <TicTacToe />
          </div>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch TicTacToe
            </a>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6">
          <TicTacToe />
        </div>
      </div>
    </div>
  );
}

export default Projects;
