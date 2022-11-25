import React from 'react';
import './testimonials.css';
import { Data } from './Data';

const Testimonials = () => {
  return (
    <section className='testimonial container section'>
      <h2 className='section__title'>My clients say</h2>
      <span className='section__subtitle'>Testimonial</span>

      <div className='testimonial__container'></div>
    </section>
  );
};

export default Testimonials;