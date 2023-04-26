import './scss/Hero.scss'

function Hero() {
  return (
    <div className="Hero container mt-4 mb-3">
      <h1>
        <div className='fs-3' id="hello">👋 Hello, I'm</div> 
        <div className='fs-1'>Maggie Hyland</div>
        <div className='fs-4'>Front-end Developer, based in Michigan</div>
      </h1>
    </div>
  );
}

export default Hero;
