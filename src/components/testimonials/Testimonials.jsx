import React from 'react';
import './testimonials.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className='testimonial container section'>
      <h2 className='section__title'>My clients say</h2>
      <span className='section__subtitle'>Testimonial</span>

      <Swiper
        className='testimonial__container'
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='Human face' className='testimonial__img' />

              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
