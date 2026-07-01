import React from 'react';
import cambridgeLogo from '../assets/cambridge.png';
import lorLogo from '../assets/lor.svg.png';
import shigLogo from '../assets/shig.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <p>Solving the Construction Skills Crisis</p>
        <div className="footer-logos">
          <img src={cambridgeLogo} alt="Cambridge" className="footer-logo" />
          <img src={lorLogo} alt="LOR" className="footer-logo" />
          <img src={shigLogo} alt="Shig" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
