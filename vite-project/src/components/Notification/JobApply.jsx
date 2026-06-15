import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
  FaUpload,
  FaCheckCircle,
  FaBuilding,
  FaGraduationCap,
  FaLaptopHouse,
} from "react-icons/fa";

import "../../assets/mycss/notification/jobapply.css";
import { useNavigate, useParams } from "react-router-dom";

export default function JobApply() {
  const [jobData, setJobData] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/carreropportunity/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch job");
        return res.json();
      })
      .then((data) => setJobData(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!jobData) {
    return (
      <div className="jobapply-loader">
        Loading...
      </div>
    );
  }

  return (
    <div className="jobapply-page">

      {/* HERO SECTION */}

      <div className="jobapply-hero">
        <div className="jobapply-company-box">
          <div className="jobapply-company-logo">
            <FaBuilding />
          </div>

          <div>
            <h1 style={{color:"#0d9cb9"}}>{jobData.role}</h1>
            <h4 style={{color:"#0d9cb9"}}>{jobData.company || "Tech Company"}</h4>

            <p className="jobapply-posted fw-bold">
              Posted Recently • Actively Hiring
            </p>
          </div>
        </div>

        <button className="jobapply-top-btn">
          Apply Now
        </button>
      </div>

      {/* DETAILS */}

      <div className="jobapply-detail-grid">

        <div className="jobapply-detail-card">
          <FaMapMarkerAlt />
          <span>{jobData.location}</span>
        </div>

        <div className="jobapply-detail-card">
          <FaClock />
          <span>{jobData.type}</span>
        </div>

        <div className="jobapply-detail-card">
          <FaMoneyBillWave />
          <span>₹6 - ₹12 LPA</span>
        </div>

        <div className="jobapply-detail-card">
          <FaUsers />
          <span>0-2 Years</span>
        </div>

      </div>

      {/* JOB HIGHLIGHTS */}

      <div className="jobapply-highlights">

        <div>
          <FaUsers />
          <h5>Experience</h5>
          <p>0-2 Years</p>
        </div>

        <div>
          <FaGraduationCap />
          <h5>Education</h5>
          <p>BCA / MCA / B.Tech</p>
        </div>

        <div>
          <FaBriefcase />
          <h5>Openings</h5>
          <p>5 Positions</p>
        </div>

        <div>
          <FaLaptopHouse />
          <h5>Work Mode</h5>
          <p>Hybrid</p>
        </div>

      </div>

      {/* SKILLS */}

      <div className="jobapply-section">

        <h3>Required Skills</h3>

        <div className="jobapply-skills-stack">
          {jobData.skills?.split(",").map((skill, index) => (
            <span key={index}>{skill.trim()}</span>
          ))}
        </div>

      </div>

      {/* DESCRIPTION */}

      <div className="jobapply-section">

        <h3>Job Description</h3>

        <p>
          {jobData.description ||
            "We are looking for passionate candidates who are eager to learn, collaborate and work on real-world projects. The ideal candidate should have strong problem-solving abilities and excellent communication skills."}
        </p>

      </div>

      {/* RESPONSIBILITIES */}

      <div className="jobapply-section">

        <h3>Responsibilities</h3>

        <ul className="jobapply-list">
          <li>Develop and maintain web applications.</li>
          <li>Collaborate with UI/UX designers.</li>
          <li>Write clean and scalable code.</li>
          <li>Participate in code reviews.</li>
          <li>Work with modern technologies and frameworks.</li>
        </ul>

      </div>

      {/* BENEFITS */}

      <div className="jobapply-section">

        <h3>Perks & Benefits</h3>

        <div className="jobapply-benefits">
          <span>🏠 Work From Home</span>
          <span>💰 Performance Bonus</span>
          <span>📚 Learning Budget</span>
          <span>🏥 Health Insurance</span>
          <span>🎉 Team Events</span>
          <span>☕ Free Snacks</span>
        </div>

      </div>

      {/* APPLICATION FORM */}

      <div className="jobapply-form-panel">

        <h2>Apply For This Position</h2>

        <form onSubmit={handleSubmit}>

          <div className="jobapply-input-grid">

            <input type="text" placeholder="Full Name" required />

            <input type="email" placeholder="Email Address" required />

            <input type="tel" placeholder="Phone Number" required />

            <input type="text" placeholder="College Name" required />

            <input type="url" placeholder="Portfolio URL" />

            <input type="text" placeholder="LinkedIn Profile" />

          </div>

          {/* RESUME */}

          <label className="jobapply-upload-zone">

            <FaUpload />

            <h4>Upload Resume</h4>

            <p>PDF, DOC, DOCX (Max 5MB)</p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              required
            />

          </label>

          <textarea
            rows="5"
            placeholder="Write a short cover letter..."
          ></textarea>

          <button
            type="submit"
            className="jobapply-submit-action"
          >
            Submit Application
          </button>

        </form>

      </div>

      {/* SUCCESS MODAL */}

      {submitted && (
        <div className="jobapply-success-popup">

          <div className="jobapply-success-card">

            <FaCheckCircle className="success-icon" />

            <h2>Application Submitted 🎉</h2>

            <p>
              Thank you for applying. Our recruitment team
              will review your profile and contact you soon.
            </p>

            <div className="success-btns">

              <button
                onClick={() => {
                  setSubmitted(false);
                  navigate("/");
                }}
              >
                Back Home
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                View More Jobs
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}