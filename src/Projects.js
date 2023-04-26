import GetReadyForecast from './images/GetReadyForecast.png';
import ReactWeatherApp from './images/ReactWeatherApp.png';
import TicTacToe from './images/TicTacToe.png';

function Projects() {
  return (
    <div className="Projects container mb-2" id="projects">
      <div className="row mt-3 d-flex">
        <div className="d-none d-md-block col-md-6">
          <img
            src={GetReadyForecast}
            alt="Javascript Weather Application"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">JS Weather App</h2>
          <p className="app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="launch-app-links">
            <a
              href="index.html"
              className="primary-link center"
              target="_blank"
            >
              Launch JS Weather App
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex">
        <div className="col-md-6">
          <h2 className="mb-3">React Weather App</h2>
          <p className="app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch Weather App
            </a>
          </div>
        </div>
        <div className="d-none d-md-block col-md-6">
          <img
            src={ReactWeatherApp}
            alt="Weather Application"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex">
        <div className="d-none d-md-block col-md-6">
          <img
            src="images/yogurt.png"
            alt="Yogurt Application"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Yogurt app</h2>
          <p className="app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch Yogurt App
            </a>
          </div>
        </div>
        <div className="row mt-5 d-flex">
          <div className="col-md-6">
            <h2 className="mb-3">Tic Tac Toe</h2>
            <p className="app-paragraphs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, dignissimos nam ratione veniam quibusdam porro
              omnis quam vel eos eveniet alias temporibus deserunt veritatis
              minima fugiat explicabo eum dolore.
            </p>
            <div className="launch-app-links">
              <a href="index.html" className="primary-link" target="_blank">
                Launch TicTacToe
              </a>
            </div>
          </div>
          <div className="d-none d-md-block col-md-6">
            <img
              src={TicTacToe}
              alt="Weather Application"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
