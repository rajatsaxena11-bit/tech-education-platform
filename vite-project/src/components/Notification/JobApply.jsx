// JobApply.jsx

import React, { useEffect, useState } from "react";

import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaClock,
    FaUsers,
    FaUpload,
    FaCheckCircle,
} from "react-icons/fa";

import "../../assets/mycss/notification/jobapply.css";

import { useNavigate, useParams } from "react-router-dom";

export default function JobApply() {

    const [jobData, setJobData] = useState(null);

    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams();

    // FETCH JOB DATA

    useEffect(() => {

        fetch(`http://localhost:4000/carreropportunity/${id}`)

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

    // LOADING

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

    // SUBMIT

    const handleSubmit = (e) => {

        e.preventDefault();

        setSubmitted(true);

    };

    return (

        <div className="jobapply-page">

            {/* HERO */}

            <div className="jobapply-hero-section">

                <div className="jobapply-company-badge">

                    <FaBriefcase />

                </div>

                <div>

                    <h1>

                        {jobData.role}

                    </h1>

                    <h4>

                        {jobData.company}

                    </h4>

                </div>

            </div>

            {/* DETAILS */}

            <div className="jobapply-detail-grid">

                <div className="jobapply-detail-card">

                    <FaMapMarkerAlt />

                    <span style={{fontSize:"15px"}}>

                        {jobData.location}

                    </span>

                </div>

                <div className="jobapply-detail-card">

                    <FaClock />

                    <span style={{fontSize:"15px"}}>

                        {jobData.type}

                    </span>

                </div>

                <div className="jobapply-detail-card">

                    <FaMoneyBillWave />

                    <span style={{fontSize:"15px"}}>

                        ₹6 - ₹12 LPA

                    </span>

                </div>

                <div className="jobapply-detail-card">

                    <FaUsers />

                    <span style={{fontSize:"15px"}}>

                        0-2 Years Experience

                    </span>

                </div>

            </div>

            {/* SKILLS */}

            <div className="jobapply-skills-section">

                <h3>

                    Required Skills

                </h3>

                <div className="jobapply-skills-stack">

                    {jobData.skills
                        ?.split(",")
                        .map((skill, index) => (

                            <span key={index}>

                                {skill.trim()}

                            </span>

                        ))}

                </div>

            </div>

            {/* DESCRIPTION */}

            <div className="jobapply-description-box">

                <h3>

                    Job Description

                </h3>

                <p>

                    We are looking for passionate and skilled developers
                    for this role. Candidates should have strong technical
                    knowledge, teamwork abilities, and problem-solving skills.
                    You will work on modern projects and real-world applications.

                </p>

            </div>

            {/* APPLICATION FORM */}

            <div className="jobapply-form-panel">

                <h2>

                    Apply For This Position

                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="jobapply-input-grid">

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

                        <input
                            type="text"
                            placeholder="College Name"
                            required
                        />

                        <input
                            type="url"
                            placeholder="Portfolio URL"
                        />

                        <input
                            type="text"
                            placeholder="LinkedIn Profile"
                        />

                    </div>

                    {/* RESUME */}

                    <div className="jobapply-upload-zone">

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
                        placeholder="Write a short cover letter..."
                    ></textarea>

                    {/* SUBMIT BUTTON */}

                    <button
                        type="submit"
                        className="jobapply-submit-action"
                    >

                        Submit Application

                    </button>

                </form>

            </div>

            {/* SUCCESS POPUP */}

            {submitted && (

                <div className="jobapply-success-popup">

                    <div className="jobapply-success-card">

                        <FaCheckCircle />

                        <h2>

                            Application Submitted!

                        </h2>

                        <p>

                            Your application has been successfully submitted.
                            Our recruitment team will contact you soon.

                        </p>

                        <button
                            onClick={() => {

                                setSubmitted(false);

                                navigate("/");

                            }}
                        >

                            Close

                        </button>

                    </div>

                </div>

            )}

        </div>

    );
}