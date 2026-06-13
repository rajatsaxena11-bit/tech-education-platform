import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
    FaClock
} from "react-icons/fa";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../assets/mycss/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-overlay"></div>

            <div className="container">
                <div className="row">

                    {/* Company Info */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="footer-logo">
                                {import.meta.env.VITE_APP_NAME}<span>Master</span>
                            </h2>

                            <p className="footer-about">
                                Learn industry-ready skills with live projects,
                                internships, certifications and placement support.
                                Build your career with expert mentors.
                            </p>

                            <div className="footer-socials">
                                <a href={import.meta.env.VITE_APP_SITE_FACEBOOK} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href={import.meta.env.VITE_APP_SITE_INSTAGRAM} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href={import.meta.env.VITE_APP_SITE_LINKEDIN} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href={import.meta.env.VITE_APP_SITE_YOUTUBE} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h4 className="footer-title">Quick Links</h4>

                        <ul className="footer-links mt-4">
                            <li><a href="#"><FaArrowRight /> Home</a></li>
                            <li><a href="#"><FaArrowRight /> About</a></li>
                            <li><a href="#"><FaArrowRight /> Courses</a></li>
                            <li><a href="#"><FaArrowRight /> Placement</a></li>
                            <NavLink to="/login"
                                onClick={() => {
                                    window.scrollTo(0, 0)

                                }}
                            ><li><a href="#"><FaArrowRight /> Login</a></li></NavLink>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="col-lg-3 col-md-6 mb-4 ">
                        <h4 className="footer-title">Popular Courses</h4>

                        <ul className="footer-links mt-4">
                            <li><a href="#"><FaArrowRight /> Full Stack Development</a></li>
                            <li><a href="#"><FaArrowRight /> MERN Stack</a></li>
                            <li><a href="#"><FaArrowRight /> React JS</a></li>
                            <li><a href="#"><FaArrowRight /> Backend Development</a></li>
                            <li><a href="#"><FaArrowRight /> Software Testing/QA</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="footer-title">Contact Us</h4>

                        <div className="tr-footer-contact">

                            <div className="tr-contact-item mx-5">
                                <FaPhoneAlt className="tr-contact-icon" />
                                <span>{import.meta.env.VITE_APP_SITE_PHONE}</span>
                            </div>

                            <div className="tr-contact-item mx-5">
                                <FaEnvelope className="tr-contact-icon" />
                                <span>{import.meta.env.VITE_APP_SITE_EMAIL}</span>
                            </div>

                            <div className="tr-contact-item mx-5">
                                <FaClock className="tr-contact-icon" />
                                <span>{import.meta.env.VITE_APP_SITE_TIME}</span>
                            </div>

                            <div className="tr-contact-item tr-address-item mx-5">
                                <FaMapMarkerAlt className="tr-contact-icon" />
                                <div>
                                    <span>{import.meta.env.VITE_APP_SITE_ADDRESS}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © 2026 TechRise. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}