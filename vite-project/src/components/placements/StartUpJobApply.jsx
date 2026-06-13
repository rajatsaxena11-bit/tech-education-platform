// StartupCompanyApply.jsx

import React, { useEffect, useState } from "react";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRocket,
  FaMoneyBillWave,
  FaClock,
  FaUpload,
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { useParams } from "react-router-dom";

import "../../assets/mycss/placements/startupcompanyapply.css";

export default function StartupCompanyApply() {

  const { id } = useParams();

  const [startup, setStartup] = useState({});

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {

    fetch(`https://server-4-rtp3.onrender.com/startupcompany/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStartup(data);
      });

  }, [id]);

  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };

  return (

    <div className="ventureapply-page mt-5">

      {/* HERO */}

      <div className="ventureapply-hero">

        <div className="ventureapply-left">

          <span className="ventureapply-badge">

            🚀 {startup.type}

          </span>

          <h1 style={{fontSize:"30px", color:"darkgray", letterSpacing:"1px"}}>

            {startup.role}

          </h1>

          <h3>

            {startup.company}

          </h3>

          <div className="ventureapply-meta">

            <span>
              <FaMapMarkerAlt />
              {startup.location}
            </span>

            <span>
              <FaBriefcase />
              {startup.experience}
            </span>

            <span>
              <FaClock />
              Full Time
            </span>

          </div>

        </div>

        <div className="ventureapply-right">

          <div className="ventureapply-salary-card">

            <h2 style={{fontSize:"18px"}}>

              ₹{startup.package}

            </h2>

            <p className="text-dark" style={{fontSize:"15px", fontWeight:"bold"}}>
              Competitive Startup Salary
            </p>

          </div>

        </div>

      </div>

      {/* ABOUT */}

      <div className="ventureapply-about-card">

        <h2 style={{fontSize:"25px"}}>

          About Startup

        </h2>

        <p className="text-dark" style={{fontSize:"15px"}}>

          {startup.company} is a fast-growing startup building
          innovative digital products for modern developers and businesses.
          We are looking for passionate engineers who love building scalable
          applications and solving real-world problems.

        </p>

      </div>

      {/* SKILLS */}

      <div className="ventureapply-skills-section">

        <h2 style={{fontSize:"25px"}}>

          Required Skills

        </h2 >

        <div className="ventureapply-skills-grid">

          <span>
            <SiReact />
            React.js
          </span>

          <span>
            <SiJavascript />
            JavaScript
          </span>

          <span>
            <SiNodedotjs />
            Node.js
          </span>

          <span>
            <SiMongodb />
            MongoDB
          </span>

        </div>

      </div>

      {/* PERKS */}

      <div className="ventureapply-perks-section">

        <h2 style={{fontSize:"25px"}}>

          Startup Perks & Benefits

        </h2>

        <div className="ventureapply-perks-grid">

          <div className="ventureapply-perk-card">

            <FaLaptopCode />

            <h4 style={{fontSize:"20px", fontWeight:"bold"}}>
              Remote Work
            </h4>

          </div>

          <div className="ventureapply-perk-card">

            <FaRocket />

            <h4 style={{fontSize:"20px", fontWeight:"bold"}}>
              Fast Career Growth
            </h4>

          </div>

          <div className="ventureapply-perk-card">

            <FaUsers />

            <h4 style={{fontSize:"20px", fontWeight:"bold"}}>
              Small Creative Team
            </h4>

          </div>

          <div className="ventureapply-perk-card">

            <FaMoneyBillWave />

            <h4 style={{fontSize:"20px", fontWeight:"bold"}}>
              Performance Bonus
            </h4>

          </div>

        </div>

      </div>

      {/* HIRING PROCESS */}

      <div className="ventureapply-process-section">

        <h2 style={{fontSize:"25px"}}>

          Hiring Process

        </h2>

        <div className="ventureapply-process-grid">

          <div className="ventureapply-process-card">
            1. Resume Screening
          </div>

          <div className="ventureapply-process-card">
            2. Technical Round
          </div>

          <div className="ventureapply-process-card">
            3. Founder Discussion
          </div>

          <div className="ventureapply-process-card">
            4. Offer Letter
          </div>

        </div>

      </div>

      {/* FORM */}

      <div className="ventureapply-form-wrapper">

        <h2 style={{fontSize:"25px"}}>

          Apply For This Startup Role

        </h2>

        <form onSubmit={handleSubmit}>

          <div className="ventureapply-input-grid">

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
              placeholder="College / University"
              required
            />

            <input
              type="url"
              placeholder="Github Profile"
            />

            <input
              type="url"
              placeholder="Portfolio Website"
            />

          </div>

          {/* RESUME */}

          <div className="ventureapply-upload-box">

            <FaUpload />

            <p>

              Upload Resume

            </p>

            <input
              type="file"
              required
            />

          </div>

          {/* TEXTAREA */}

          <textarea
            placeholder="Why do you want to join this startup?"
          ></textarea>

          {/* BUTTON */}

          <button
            type="submit"
            className="ventureapply-submit-btn"
          >

            Submit Application

            <FaArrowRight />

          </button>

        </form>

      </div>

      {/* SUCCESS POPUP */}

      {submitted && (

        <div className="ventureapply-popup-overlay">

          <div className="ventureapply-popup-card">

            <FaCheckCircle />

            <h2>

              Application Submitted!

            </h2>

            <p>

              Your startup application has been submitted successfully.
              The hiring team will contact you shortly.

            </p>

            <button
              onClick={() => setSubmitted(false)}
            >

              Close

            </button>

          </div>

        </div>

      )}

    </div>

  );
}