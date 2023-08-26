import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="subscription-form">
        <p className="subscribe-title">Subscribe Form</p>
        <br />
        <input type="text" placeholder="eg. yourmail@gmail.com" />
        <button>Join</button>
      </div>
      <div className="final-footer">
        <p className="footer-title">Freggies</p>
        <p className="contact-email">shishankrawxxxx@gmail.com</p>
        <p className="contact-email">dakshgoelsml@gmail.com</p>
        <p className="copyright">©2023 by <b> Freggies</b>. Proudly created by <a href="">Shishank</a>, <a href="">Kartikey</a> , <a href="">Daksh</a>, <a href="">Anushka</a> & <a href="">Nancy</a> </p>
      </div>
    </div>
  );
};

export default Footer;
