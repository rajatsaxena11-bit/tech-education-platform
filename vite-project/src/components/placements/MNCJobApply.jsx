// MNCJobApply.jsx

import React, { useEffect, useState } from "react";

import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaClock,
    FaUsers,
    FaUpload,
    FaCheckCircle,
    FaArrowLeft,
    FaLaptopCode,


    FaRocket,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import "../../assets/mycss/placements/mncjobapply.css";

export default function MNCJobApply() {
    const [jobData, setJobData] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        portfolio: "",
        linkedin: "",
        github: "",
        coverLetter: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

        setSubmitted(true);

    };
    const { id } = useParams()

    useEffect(() => {

        fetch(`https://server-4-rtp3.onrender.com/MNCCommpany/${id}`)

            .then((res) => {

                if (!res.ok) {

                    throw new Error("Failed to fetch job data");

                }

                return res.json();

            })

            .then((data) => {

                console.log(data);

                setJobData(data);

            })

            .catch((err) => {

                console.log(err);

            });

    }, [id]);

    if (!jobData) {

        return (

            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "28px",
                    fontWeight: "700",
                }}
            >
                Loading...
            </div>

        );

    }

    return (

        <div className="corporateapply-page mt-5">

            {/* HERO */}

            <div className="corporateapply-hero">



                <div className="corporateapply-company-area">

                    <div className="corporateapply-logo-box">

                        <FaLaptopCode />

                    </div>

                    <div>

                        <h1 style={{ fontSize: "25px", color: "darkgray", letterSpacing: "1px" }}>

                            {jobData.role}

                        </h1>

                        <h4 style={{ fontSize: "22px", fontWeight: "bold" }}>

                            {jobData.icon} India


                        </h4>

                        <div className="salary-stats">

                            <div>
                                <span className="fw-bold">Job Type</span>
                                <strong className="text-light">Full Time</strong>
                            </div>

                            <div>
                                <span className="fw-bold">Work Mode</span>
                                <strong className="text-light">Remote</strong>
                            </div>
                           

                        </div>
                    </div>

                </div>

                <div>
                    <div className="corporateapply-badge">

                        Actively Hiring

                    </div>
                    <div className="corporateapply-badge mt-3">

                       <i className="fa fa-briefcase"></i> {jobData.experience}

                    </div>
                </div>

            </div>

            {/* QUICK INFO */}

            <div className="corporateapply-info-grid">

                <div className="corporateapply-info-card">

                    <FaMapMarkerAlt />

                    <span>{jobData.location}</span>

                </div>

                <div className="corporateapply-info-card">

                    <FaClock />

                    <span>{jobData.type}</span>

                </div>

                <div className="corporateapply-info-card">

                    <FaMoneyBillWave />

                    <span>₹{jobData.package}</span>

                </div>

                <div className="corporateapply-info-card">

                    <FaUsers />

                    <span>{jobData.experience}</span>

                </div>

            </div>

            {/* JOB DESCRIPTION */}

            <div className="corporateapply-description-box">

                <h2 style={{ fontSize: "25px" }}>

                    Job Description

                </h2>

                <p>

                    We are looking for passionate Frontend Developers
                    who can build scalable and responsive applications
                    using React.js and modern frontend technologies.

                    Candidates should have strong knowledge of
                    JavaScript, APIs, GitHub, and UI development.

                </p>

            </div>

            {/* SKILLS */}

            <div className="corporateapply-skills-section">

                <h2 style={{ fontSize: "25px" }}>

                    Required Skills

                </h2>

                <div className="corporateapply-skills-wrapper">

                    <span className="corporateapply-skill-chip">
                        React.js
                    </span>

                    <span className="corporateapply-skill-chip">
                        JavaScript
                    </span>

                    <span className="corporateapply-skill-chip">
                        HTML5
                    </span>

                    <span className="corporateapply-skill-chip">
                        CSS3
                    </span>

                    <span className="corporateapply-skill-chip">
                        REST APIs
                    </span>

                    <span className="corporateapply-skill-chip">
                        GitHub
                    </span>

                    <span className="corporateapply-skill-chip">
                        Responsive Design
                    </span>

                </div>
                <section className="ventureapply-card">

                    <h2 style={{ fontSize: "25px" }}>Benefits & Perks</h2>

                    <div className="ventureapply-benefits">

                        <div className="benefit-card">
                            <FaLaptopCode />
                            <h4>Remote Friendly</h4>
                        </div>

                        <div className="benefit-card">
                            <FaRocket />
                            <h4>Career Growth</h4>
                        </div>

                        <div className="benefit-card">
                            <FaUsers />
                            <h4>MNC Culture</h4>
                        </div>

                        <div className="benefit-card">
                            <FaMoneyBillWave />
                            <h4>Performance Bonus</h4>
                        </div>

                    </div>

                </section>

                <section className="ventureapply-card">

                    <h2 style={{ fontSize: "25px" }}>Hiring Process</h2>

                    <div className="ventureapply-process">

                        <div className="process-step">
                            <span>1</span>
                            Resume Screening
                        </div>

                        <div className="process-step">
                            <span>2</span>
                            Technical Interview
                        </div>

                        <div className="process-step">
                            <span>3</span>
                            Founder Discussion
                        </div>

                        <div className="process-step">
                            <span>4</span>
                            Offer Letter
                        </div>

                    </div>

                </section>

            </div>

            {/* APPLICATION FORM */}

            <div className="corporateapply-form-box">

                <h2 style={{ fontSize: "25px" }}>

                    Apply For This Job

                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="corporateapply-input-grid">

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="college"
                            placeholder="College Name"
                            required
                            onChange={handleChange}
                        />

                        <input
                            type="url"
                            name="portfolio"
                            placeholder="Portfolio URL"
                            onChange={handleChange}
                        />

                        <input
                            type="url"
                            name="linkedin"
                            placeholder="LinkedIn Profile"
                            onChange={handleChange}
                        />

                        <input
                            type="url"
                            name="github"
                            placeholder="GitHub Profile"
                            onChange={handleChange}
                        />

                    </div>

                    {/* RESUME */}

                    <div className="corporateapply-upload-zone">

                        <FaUpload />

                        <p>

                            Upload Resume

                        </p>

                        <input
                            type="file"
                            required
                        />

                    </div>

                    {/* COVER LETTER */}

                    <textarea
                        name="coverLetter"
                        placeholder="Write your cover letter..."
                        onChange={handleChange}
                    ></textarea>

                    {/* SUBMIT BUTTON */}

                    <button
                        type="submit"
                        className="corporateapply-submit-btn"
                    >

                        Submit Application

                    </button>

                </form>

            </div>

            {/* SUCCESS MODAL */}

            {submitted && (

                <div className="corporateapply-success-modal">

                    <div className="corporateapply-success-card">

                        <FaCheckCircle />

                        <h2>

                            Application Submitted!

                        </h2>

                        <p>

                            Your application has been submitted
                            successfully. Our recruitment team
                            will contact you soon.

                        </p>

                        <button
                            onClick={() =>
                                setSubmitted(false)
                            }
                        >

                            Close

                        </button>

                    </div>

                </div>

            )}

        </div>

    );

}