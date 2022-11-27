import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Smith</h1>
        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Portfolio
            </a>
          </li>

          <li>
            <a href='#testimonials' className='footer__link'>
              Testimonials
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/dmitryvelichko/'
            rel='noreferrer'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-linkedin'></i>
          </a>

          <a
            href='https://www.youtube.com/channel/UCMoXZFDHxWvNQHYfTo2nyPA/videos'
            rel='noreferrer'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-youtube'></i>
          </a>

          <a
            href='https://github.com/DmitryVelichko'
            rel='noreferrer'
            className='footer__social-link'
            target='_blank'
          >
            <i className='bx bxl-github'></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Di Vi. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
