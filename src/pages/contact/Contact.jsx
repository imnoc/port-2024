import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact data">
          <h3 className="contact__title">
            Don't be shy
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">nguyenhuuloc0610@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">0339163505</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="http://facebook.com" className="contact__social-link">
              <FaFacebook />
            </a>
            <a href="http://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="http://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="http://dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>
        <div className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder='Your Name' />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder='Your Email' />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder='Your Subject' />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder='Your Message'
              className='form__control textarea'></textarea>
          </div>
          <button className='button'>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
