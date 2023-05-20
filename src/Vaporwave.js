import VaporwaveImg from './images/VaporwaveImg.png';


//I COPIED THIS PAGE TEMPLATE FROM GETREADYFORECAST>JS - may still need to change some things

function Vaporwave() {
  return (
    <div className="Vaporwave">
      <a
        href="https://famous-pasca-19c020.netlify.app/" // <--need to change
        alt="Vaporwave Webpage"
      >
        <img
          src={VaporwaveImg}
          alt="Vaporwave Webpage"
          className="img-fluid rounded"
        />
      </a>
    </div>
  );
}

export default Vaporwave;
