import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">email@gmail.com</span>

                        <a href="mailto:email.gmail.com" className='contact__button'>Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">999-99-99</span>

                        <a href="https://api.whatsapp.com/send?phone=123123123&text=Hello!" className='contact__button'>Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>  

                    <div className="contact__card">
                        <i className="bx bx contact__card-icon"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">user.fb123</span>

                        <a href="https://m.me/crypticalcoder" className='contact__button'>Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>  
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact