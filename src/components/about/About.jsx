import React from 'react';
import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/John-Cv.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <span className='section__subtitle'>My Introduction</span>

      <div className='about__container container grid'>
        <img src={AboutImg} alt="A man's face" className='about__img' />
        <div className='about__data'>
            <Info />

            <p className="about__description">Frontend Developer, I creatae web pages with UI/UX user interface, I have 2 years of experience and many clients are happy with the projects carried out</p>
        </div>
      </div>
    </section>
  );
};

export default About;
