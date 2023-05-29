import './scss/AboutMe.scss';

function AboutMe() {
  return (
    <div className="AboutMe container text-center mb-4" id="aboutMe">
      <div className="row">
        <div className="col-12 col-md-2">
          <div className="row">
            <div className="AboutMeTitle col-md-12 col-auto gx-1">
              <span className="About">About</span>{' '}
              <span className="Me">Me</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-10 gx-1 ">
          <p className="AboutMeParagraph fs-5 text-start">
            Hi, I'm Maggie! I have a passion for learning and a desire to take
            on new challenges. I've made the decision to transition my career
            from dental hygiene to front-end web development and I've found the
            process of learning to code to be quite enjoyable! In my personal
            life, I enjoy kayaking with my husband, exploring diverse culinary
            experiences, and listening to plenty of sci-fi audiobooks. I have a
            chunky black cat that I get to spoil, and I hope to potentially
            acquire more kitties in the future!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
