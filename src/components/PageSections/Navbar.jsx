// import React from 'react';
import logoAni from '../../images/qrlogo-anim.gif';
import { Button } from 'react-bootstrap'; 


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar border-bottom" 
      style={{zIndex: 1000, position: 'fixed', left: 0, right: 0, backgroundColor: '#fff'}}>
      <div className="container-fluid">
       
        <a className="navbar-brand ms-3" href="/"><img src={logoAni} alt="logo" style={{ width: '40px', height: 'auto' }} /> QRGen </a> 

        <button 
          className="navbar-toggler rounded-0 btn-focus" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon btn-focus"></span>
        </button>

        <div className="collapse navbar-collapse btn-focus" id="navbarNav">
          <ul className="navbar-nav my-3 ms-3">
            {/* Add your navbar items here */}

            {/* Render buttons here when navbar is collapsed */}
            <li className="nav-item d-lg-none"> {/* Show on small screens */}
              <Button variant="outline-secondary" className="navBtn me-2 rounded-0">Sign In</Button>
              <Button variant="secondary" className="rounded-0 navBtn signupBtn">Sign Up</Button>
            </li>
          </ul>
          
          {/* The buttons are hidden here on small screens */}
          <div className="d-none d-lg-flex ms-auto">
            <Button variant="outline-secondary" className="me-2 rounded-0">Sign In</Button>
            <Button variant="secondary" className="rounded-0 signupBtn">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
