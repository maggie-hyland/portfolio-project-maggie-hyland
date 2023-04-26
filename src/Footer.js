import Contact from './Contact';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer mt-2 position-relative">
      <div className="container position-sticky">
        <Contact />
      </div>
    </footer>
  );
}

export default Footer;
