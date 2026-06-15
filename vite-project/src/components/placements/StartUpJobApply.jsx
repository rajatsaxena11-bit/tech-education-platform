import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaUpload,
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaBuilding,
  FaGraduationCap,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
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
      .then((data) => setStartup(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="ventureapply-page mt-5">

      {/* HERO SECTION */}
      <section className="ventureapply-hero">

        <div className="ventureapply-hero-left">

          <div className="ventureapply-company-header">

            <div className="ventureapply-company-logo">
              {startup.company?.charAt(0)}
            </div>

            <div>
              <span className="ventureapply-badge">
                🚀 Startup Opportunity
              </span>

              <h1 className="ventureapply-role" style={{color:"#0d9cb9"}}>
                {startup.role}
              </h1>

              <h3 className="ventureapply-company" style={{color:"#0d9cb9"}}>
                {startup.company}
              </h3>
            </div>

          </div>

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

        <div className="ventureapply-salary-card">

          <h2 style={{fontSize:"25px"}}>₹ {startup.package}</h2>

          <p>Annual Compensation</p>

          <button
            className="ventureapply-apply-btn"
            onClick={() =>
              document
                .getElementById("application-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Apply Now
            <FaArrowRight />
          </button>

        </div>

      </section>

      {/* JOB OVERVIEW */}

      <section className="ventureapply-overview">

        <div className="overview-card">
          <FaBriefcase />
          <h4>Experience</h4>
          <p>{startup.experience}</p>
        </div>

        <div className="overview-card">
          <FaMapMarkerAlt />
          <h4>Location</h4>
          <p>{startup.location}</p>
        </div>

        <div className="overview-card">
          <FaMoneyBillWave />
          <h4>Package</h4>
          <p>₹ {startup.package}</p>
        </div>

        <div className="overview-card">
          <FaBuilding />
          <h4>Company Type</h4>
          <p>{startup.type}</p>
        </div>

      </section>

      {/* ABOUT */}

      <section className="ventureapply-card">

        <h2>About Company</h2>

        <p>
          {startup.company} is a fast-growing startup focused on building
          innovative products that solve real-world problems. We are looking
          for passionate engineers who enjoy creating scalable applications,
          learning new technologies, and working in a high-growth environment.
        </p>

      </section>

      {/* RESPONSIBILITIES */}

      <section className="ventureapply-card">

        <h2>Key Responsibilities</h2>

        <ul className="ventureapply-list">
          <li>Build scalable and responsive web applications.</li>
          <li>Develop reusable React components.</li>
          <li>Integrate APIs and backend services.</li>
          <li>Write clean, maintainable code.</li>
          <li>Collaborate with designers and product teams.</li>
          <li>Participate in code reviews and testing.</li>
        </ul>

      </section>

      {/* REQUIREMENTS */}

      <section className="ventureapply-card">

        <h2>Requirements</h2>

        <ul className="ventureapply-list">
          <li>Strong JavaScript fundamentals.</li>
          <li>Experience with React.js.</li>
          <li>Basic Node.js understanding.</li>
          <li>Knowledge of REST APIs.</li>
          <li>Problem-solving mindset.</li>
          <li>Excellent communication skills.</li>
        </ul>

      </section>

      {/* SKILLS */}

      <section className="ventureapply-card">

        <h2>Required Skills</h2>

        <div className="ventureapply-skills-grid">

          <div className="skill-chip">
            <SiReact />
            React.js
          </div>

          <div className="skill-chip">
            <SiJavascript />
            JavaScript
          </div>

          <div className="skill-chip">
            <SiNodedotjs />
            Node.js
          </div>

          <div className="skill-chip">
            <SiMongodb />
            MongoDB
          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="ventureapply-card">

        <h2>Benefits & Perks</h2>

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
            <h4>Startup Culture</h4>
          </div>

          <div className="benefit-card">
            <FaMoneyBillWave />
            <h4>Performance Bonus</h4>
          </div>

        </div>

      </section>

      {/* HIRING PROCESS */}

      <section className="ventureapply-card">

        <h2>Hiring Process</h2>

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

      {/* APPLICATION FORM */}

      <section
        id="application-form"
        className="ventureapply-form-section"
      >

        <h2>Apply For This Position</h2>

        <form onSubmit={handleSubmit}>

          <div className="ventureapply-form-grid">

            <div className="field">
              <label>Full Name</label>
              <input type="text" required />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" required />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input type="tel" required />
            </div>

            <div className="field">
              <label>College / University</label>
              <input type="text" required />
            </div>

            <div className="field">
              <label>Github Profile</label>
              <input type="url" />
            </div>

            <div className="field">
              <label>Portfolio Website</label>
              <input type="url" />
            </div>

          </div>

          <div className="ventureapply-upload-box">

            <FaUpload />

            <h4>Upload Resume</h4>

            <input
              type="file"
              required
            />

          </div>

          <div className="field">
            <label>Why do you want to join us?</label>

            <textarea
              rows="5"
              placeholder="Tell us about yourself..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="ventureapply-submit-btn"
          >
            Submit Application
            <FaArrowRight />
          </button>

        </form>

      </section>

      {/* SUCCESS MODAL */}

      {submitted && (
        <div className="ventureapply-popup-overlay">

          <div className="ventureapply-popup-card">

            <FaCheckCircle className="success-icon" />

            <h2>
              Application Submitted 🎉
            </h2>

            <p>
              Thank you for applying. Our recruitment team
              will review your profile and contact you soon.
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