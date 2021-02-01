import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-left">
        <p>Engku Nazri</p>
        <small>Thank you for checkout my page</small>
      </div>
      <hr id="hr-line" />
      <div className="footer-right">
        <a href="www.twitter.com"><span><i className="fab fa-twitter"></i></span>Twitter</a>
        <a href="www.facebook.com"><span><i className="fab fa-facebook-square"></i></span>Facebook</a>
        <a href="github.com"><span><i className="fab fa-github"></i></span>GitHub</a>
        <a href="linkedin.com"><span><i className="fab fa-linkedin"></i></span>LinkedIn</a>
      </div>
    </div>
  );
}

export default Footer;