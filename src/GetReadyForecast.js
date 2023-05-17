import GetReadyForecastImg from './images/GetReadyForecastImg.png';

function GetReadyForecast() {
  return (
    <div className="GetReadyForecast">
      <a
        href="https://famous-pasca-19c020.netlify.app/"
        alt="Get Ready Fortecast Weather Application"
      >
        <img
          src={GetReadyForecastImg}
          alt="Get Ready Fortecast Weather Application"
          className="img-fluid rounded"
        />
      </a>
    </div>
  );
}

export default GetReadyForecast;
