// EliteHiringCompanies.jsx

import React, { useEffect, useState } from "react";

import {
    FaGoogle,
    FaAmazon,
    FaMicrosoft,
    FaInfoCircle,
    FaBuilding,
    FaReact,
    FaCloud,
    FaDatabase,
    FaPython,
    FaLaptopCode,
    FaArrowRight,
    FaMapMarkerAlt,
    FaBriefcase,
    FaTimes,
    FaMoneyBillWave,
    FaUpload,
} from "react-icons/fa";

import { MdOutlineDesignServices } from "react-icons/md";

import "../../assets/mycss/hiringcompany/hiringnow.css";
import { Link } from 'react-router-dom'

export default function EliteHiringNowCompanies() {

    const [selectedCompany, setSelectedCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400); // 2 second loading

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="frontend-loader">
                <div className="spinner"></div>
                <h3>Loading Frontend Course...</h3>
            </div>
        );
    }

    const companies = [

        {
            id: 1,
            name: "Google",
            role: "Frontend Developer",
            icon: <FaGoogle />,
            location: "Bangalore",
            openings: "24 Openings",
            hiring: "Actively Hiring",
            salary: "₹12 - ₹18 LPA",
            experience: "0-2 Years",
            theme: "elite-google",
        },

        {
            id: 2,
            name: "Amazon",
            role: "Software Engineer",
            icon: <FaAmazon />,
            location: "Hyderabad",
            openings: "18 Openings",
            hiring: "Urgent Hiring",
            salary: "₹10 - ₹16 LPA",
            experience: "1-3 Years",
            theme: "elite-amazon",
        },

        {
            id: 3,
            name: "Microsoft",
            role: "React Developer",
            icon: <FaMicrosoft />,
            location: "Pune",
            openings: "15 Openings",
            hiring: "Hiring Freshers",
            salary: "₹9 - ₹14 LPA",
            experience: "Fresher",
            theme: "elite-microsoft",
        },

        {
            id: 4,
            name: "Infosys",
            role: "MERN Stack Developer",
            icon: <FaInfoCircle />,
            location: "Noida",
            openings: "35 Openings",
            hiring: "Mass Hiring",
            salary: "₹5 - ₹8 LPA",
            experience: "0-1 Years",
            theme: "elite-infosys",
        },

        {
            id: 5,
            name: "TCS",
            role: "Backend Developer",
            icon: <FaBuilding />,
            location: "Mumbai",
            openings: "40 Openings",
            hiring: "Walk-In Drive",
            salary: "₹4 - ₹7 LPA",
            experience: "Fresher",
            theme: "elite-tcs",
        },

        {
            id: 6,
            name: "Wipro",
            role: "Cloud Engineer",
            icon: <FaCloud />,
            location: "Remote",
            openings: "20 Openings",
            hiring: "Remote Hiring",
            salary: "₹6 - ₹10 LPA",
            experience: "1+ Years",
            theme: "elite-wipro",
        },

        {
            id: 7,
            name: "Accenture",
            role: "AI Full Stack Developer",
            icon: <FaReact />,
            location: "Bangalore",
            openings: "28 Openings",
            hiring: "AI Hiring",
            salary: "₹8 - ₹14 LPA",
            experience: "0-2 Years",
            theme: "elite-accenture",
        },

        {
            id: 8,
            name: "Oracle",
            role: "Java Developer",
            icon: <FaDatabase />,
            location: "Chennai",
            openings: "16 Openings",
            hiring: "Hiring Now",
            salary: "₹7 - ₹12 LPA",
            experience: "1-2 Years",
            theme: "elite-oracle",
        },

    ];

    return (

        <section className="elitehub-section mt-5">

            {/* TOP */}

            <div className="elitehub-top-area">

                <span className="elitehub-mini-tag">

                    🚀 Top IT Companies

                </span>

                <h2>

                    Companies Hiring Developers & Freshers

                </h2>

                <p>

                    Explore opportunities from leading MNCs,
                    product-based companies, and startups.

                </p>

            </div>

            {/* GRID */}

            <div className="elitehub-grid-layout">

                {companies.map((item) => (

                    <div
                        className="elitehub-company-card"
                        key={item.id}
                    >

                        {/* TOP */}

                        <div className="elitehub-card-header">

                            <div className={`elitehub-logo-box ${item.theme}`}>

                                {item.icon}

                            </div>

                            <span className="elitehub-hiring-badge">

                                {item.hiring}

                            </span>

                        </div>

                        {/* CONTENT */}

                        <div className="elitehub-content-area">

                            <h3>

                                {item.role}

                            </h3>

                            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>

                                {item.name}

                            </h4>

                            <div className="elitehub-meta-info">

                                <span>

                                    <FaMapMarkerAlt />

                                    {item.location}

                                </span>

                                <span>

                                    <FaBriefcase />

                                    {item.openings}

                                </span>

                            </div>

                        </div>

                        {/* BUTTON */}

                        <button
                            className="elitehub-apply-btn"
                            onClick={() => setSelectedCompany(item)}
                        >

                            Hiring Now

                            <FaArrowRight />

                        </button>

                    </div>

                ))}

            </div>

            {/* MODAL */}

            {selectedCompany && (

                <div className="corporatex-modal-overlay">

                    <div className="corporatex-modal-card">

                        {/* CLOSE */}

                        <button
                            className="career-popup-close-btn"
                            onClick={() => setSelectedCompany(null)}
                        >
                            ✕
                        </button>


                        <div className="corporatex-company-top">

                            <div className={`corporatex-company-logo ${selectedCompany.theme}`}>

                                {selectedCompany.icon}

                            </div>

                            <div>

                                <h2>

                                    {selectedCompany.role}

                                </h2>

                                <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>

                                    {selectedCompany.name}

                                </h4>

                            </div>

                        </div>

                        {/* INFO */}

                        <div className="corporatex-info-grid">

                            <div className="corporatex-info-box">

                                <FaMapMarkerAlt />

                                <span style={{ fontSize: "15px" }}>

                                    {selectedCompany.location}

                                </span>

                            </div>

                            <div className="corporatex-info-box">

                                <FaBriefcase />

                                <span style={{ fontSize: "15px" }}>

                                    {selectedCompany.experience}

                                </span>

                            </div>

                            <div className="corporatex-info-box">

                                <FaMoneyBillWave />

                                <span style={{ fontSize: "15px" }}>

                                    {selectedCompany.salary}

                                </span>

                            </div>

                        </div>

                        {/* DESCRIPTION */}

                        <div className="corporatex-description-area">

                            <h3 style={{ fontSize: "20px" }}>

                                Job Description

                            </h3>

                            <p style={{ fontSize: "15px" }}>

                                We are looking for passionate developers
                                who can build scalable modern applications
                                using React.js, APIs, cloud technologies,
                                and modern frontend tools.

                            </p>

                        </div>

                        {/* SKILLS */}

                        <div className="corporatex-skills-wrapper">

                            <span>React.js</span>

                            <span>JavaScript</span>

                            <span>REST APIs</span>

                            <span>Node.js</span>

                            <span>GitHub</span>

                        </div>

                        {/* FORM */}

                        <form className="corporatex-apply-form">

                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                required
                            />

                            <div className="corporatex-upload-box">

                                <FaUpload />

                                <span>

                                    Upload Resume

                                </span>

                                <input type="file" />

                            </div>

                            <textarea
                                placeholder="Write Cover Letter..."
                            ></textarea>

                            <button
                                type="submit"
                                className="corporatex-submit-btn"
                            >

                                Submit Application

                            </button>

                        </form>

                    </div>

                </div>

            )}

        </section>

    );
}