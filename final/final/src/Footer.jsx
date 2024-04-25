import './Footer.css';
import logo1 from './assets/images/linkedin.png';

function Footer() {


  return (
    <footer className="footer">
      <div className="footer-contact">
        <p className="footer-link">CONTACT US</p>
        <p className="footer-text">No.67, JinBao Street, Dongcheng Distrcit, Beijing, China</p>

      </div>
      <div className="footer-follow">
        <p className="footer-link">FOLLOW US</p>
        <div className="footer-image-container">
          <a href="https://www.linkedin.com/company/vaporstation/" target="_blank" rel="noopener noreferrer">
            <img className="footer-image" src={logo1} alt="linkedin logo" />
          </a>
          <p className="footer-image-text">Follow Our <br/> LinkedIn</p>
        </div>

      </div>
      <p className='footer-bottom'>© 2024 Vapor Station All rights reserved.</p>
    </footer>
  );
}

export default Footer;