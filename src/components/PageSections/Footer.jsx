// import React from 'react';
import logoAni from '../../images/qrlogo-anim.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-lg-start">
      <div className="container p-4">
        <div className="row">
          {/* Section 1: About */}
          <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase"><img src={logoAni} alt="logo" style={{ width: '40px', height: 'auto' }} /> QRGen</h5>
       
            <p>
              Your reliable QR code generator for all your needs. Easily create, customize, and manage QR codes for various purposes.
            </p>
          </div>
          
          {/* Empty Column for spacing or future content */}
          <div className="col-lg-3 col-md-1 mb-4 mb-md-0"></div>
          
          {/* Section 3: Socials with Table */}
          <div className="col-lg-3 col-md-5 mb-4 mb-md-0">
            <table className="" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th className="text-uppercase" colSpan="4">
                    Follow Us
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td style={{  padding: '0', margin: '0', width: '50px' }}>
                    <div className='d-flex justify-content-between' >
                    <a href="#!" className="text-secondary hovering" style={{ fontSize: '1.5rem', margin: '0' }}>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#!" className="text-secondary hovering" style={{ fontSize: '1.5rem', margin: '0' }}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#!" className="text-secondary hovering" style={{ fontSize: '1.5rem', margin: '0' }}>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#!" className="text-secondary hovering" style={{ fontSize: '1.5rem', margin: '0' }}>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    </div>
                  </td>
                </tr>
                <tr>
                <td>
                    <div className='footer-link'>
                     <div className='footer-link-items'><a href="#">Privacy&nbsp;Policy</a></div>&nbsp;&nbsp;
                     <div className='footer-link-items'><a href="#">Terms</a></div>
                    </div>                    
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center p-3 bg-dark text-light">
        © 2024 QRGen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
