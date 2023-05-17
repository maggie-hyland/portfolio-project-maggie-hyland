import GetReadyForecast from './GetReadyForecast';
import ReactWeatherApp from './ReactWeatherApp';
import TicTacToe from './TicTacToe';

function Projects() {
  return (
    <div className="Projects container mb-2 pt-2" id="projects">
      <div className="row mt-3 d-flex">
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
      <div className="row mt-5 d-flex">
        <div className="col-md-6">
          <h2 className="mb-3">React Weather App</h2>
          <p className="fs-5 app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
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
      <div className="row mt-5 mb-5 d-flex">
        <div className="d-none d-md-block col-md-6">
          <img
            src="images/yogurt.png"
            alt="Yogurt Application"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Vaporwave Webpage</h2>
          <p className="fs-5 app-paragraphs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quia, dignissimos nam ratione veniam quibusdam porro omnis quam vel
            eos eveniet alias temporibus deserunt veritatis minima fugiat
            explicabo eum dolore.
          </p>
          <div className="d-none d-sm-block d-md-none"></div>
          <div className="launch-app-links">
            <a href="index.html" className="primary-link" target="_blank">
              Launch Yogurt App
            </a>
          </div>
        </div>
        <div className="row mt-5 d-flex">
          <div className="col-md-6">
            <h2 className="mb-3">Tic Tac Toe</h2>
            <p className="fs-5 app-paragraphs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quia, dignissimos nam ratione veniam quibusdam porro
              omnis quam vel eos eveniet alias temporibus deserunt veritatis
              minima fugiat explicabo eum dolore.
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
    </div>
  );
}

export default Projects;
