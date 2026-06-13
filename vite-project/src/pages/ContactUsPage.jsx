import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import "../assets/mycss/contactuspage.css";

export default function ContactUsPage() {
  return (
    <div className="nxq-contact-wrapper">

      {/* HERO */}
      <section className="nxq-contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. Whether you have a question about
            courses, placements, admissions, or anything else.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="nxq-contact-cards-section" style={{cursor:"pointer"}}>
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-3 col-md-6" >
              <div className="nxq-contact-card">
                <FaPhoneAlt className="nxq-contact-icon" />
                <h4 style={{fontSize:"22px"}}>Call Us</h4>
                <p>{import.meta.env.VITE_APP_SITE_PHONE}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="nxq-contact-card">
                <FaEnvelope className="nxq-contact-icon" />
                <h4 style={{fontSize:"22px"}}>Email</h4>
                <p>{import.meta.env.VITE_APP_SITE_EMAIL}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="nxq-contact-card">
                <FaMapMarkerAlt className="nxq-contact-icon" />
                <h4 style={{fontSize:"22px"}}>Office</h4>
                <p>{import.meta.env.VITE_APP_SITE_ADDRESS}</p>
                <p>{import.meta.env.VITE_APP_SITE_ADDRESS_SHORT}</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="nxq-contact-card">
                <FaClock className="nxq-contact-icon" />
                <h4 style={{fontSize:"22px"}}>Working Hours</h4>
                <p>{import.meta.env.VITE_APP_SITE_TIME}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="nxq-contact-form-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="nxq-contact-left">
                <h2>Send Us A Message</h2>
                <p>
                  Fill out the form and our team will get back to you within
                  24 hours.
                </p>

                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <form className="nxq-contact-form-box">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="nxq-contact-input"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="nxq-contact-input"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="nxq-contact-input"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="nxq-contact-input"
                ></textarea>

                <button type="submit" className="nxq-contact-btn">
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="nxq-contact-map-section">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      {/* FAQ */}
      <section className="nxq-contact-faq-section">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>

          <div className="accordion" id="nxqFaq">

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                >
                  How quickly will I receive a response?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  Usually within 24 working hours.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                >
                  Do you provide placement assistance?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, we provide complete placement support.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}