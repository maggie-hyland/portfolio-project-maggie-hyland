import './scss/Contact.scss';

function Contact() {
  return (
    <div className="Contact" id='contact'>
      <div className="container icon-container">
        <div className="social-link-icons d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/maggie-hyland-51257025a/"
            target="_blank"
            title="Maggie's LinkedIn"
          >
            <i className="fa-brands fa-linkedin fa-l"></i>
          </a>
          <a
            href="https://github.com/maggie-hyland"
            target="_blank"
            title="Maggie's GitHub"
          >
            <i className="fa-brands fa-square-github fa-l"></i>
          </a>
          <a href="mailto:maggieahyland@gmail.com" title="Email Maggie">
            <i className="fa-solid fa-envelope fa-l"></i>
          </a>
        </div>
        <a href="mailto:maggieahyland@gmail.com" className="footer-email">
          maggieahyland@gmail.com
        </a>
        <p className="open-source">
          Coded by Maggie Hyland and{' '}
          <a
            href="https://github.com/maggie-hyland/portfolio-project-maggie-hyland"
            target="_blank"
            className="open-source-link"
          >
            open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
