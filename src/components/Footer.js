import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { faPaperPlane, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

library.add(faInstagram,faFacebook,faLinkedinIn,faTwitter,faPaperPlane,faEnvelope,faPhone);
<FontAwesomeIcon icon="fa-solid fa-" />
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='container '>
        <div className='row'>
          <div className='col-md-6 col-lg-5 col-12 ft-1'>
            <h3><span>VAIBHAV</span>CODES</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, maxime.</p>
            <div className='footer-icons'>
              <FontAwesomeIcon icon={['fab', 'instagram']} className='icon' />
              <FontAwesomeIcon icon={['fab', 'twitter']} className='icon'/>
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} className='icon'/>
              <FontAwesomeIcon icon={['fab', 'facebook']}className='icon' />
            </div>
          </div>
          <div className='col-md-6 col-lg-3 col-12 ft-2'>
            <h5>Quick Links</h5>
            <ul>
            <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shopping">Shopping</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
            </ul>
          </div>
          <div className='col-md-6 col-lg-4 col-12 ft-3'>
            <h5>Quick Links</h5>
            <p> <FontAwesomeIcon icon="phone" className='icon1'/> 1234567890</p>
            <p> <FontAwesomeIcon icon="envelope" className='icon1' />email@gmail.com</p>
            <p> <FontAwesomeIcon icon="paper-plane" className='icon1'/>Raigad Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
    <div className="last-footer">
        <p style={{color:'white'}}> Copyright &copy; 2024</p>
    </div>
    </>
  )
}

export default Footer;
