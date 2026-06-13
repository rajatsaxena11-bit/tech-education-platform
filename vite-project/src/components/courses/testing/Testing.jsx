import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaStar,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaBug,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaClipboardCheck,
  FaTools,
  FaRobot,
  FaProjectDiagram,
  FaTasks,

  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCode,

  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../../assets/mycss/courses/testing/testing.css";
import Courses from "../../home/Courses";
import Testimonials from "../../home/Testimonial";


const concepts = [
  {
    icon: <FaClipboardCheck />,
    title: "Manual Testing",
    desc: "Learn SDLC, STLC, Test Cases & Defect Life Cycle."
  },
  {
    icon: <FaBug />,
    title: "Bug Reporting",
    desc: "Identify, track and report software defects."
  },
  {
    icon: <FaRobot />,
    title: "Automation Testing",
    desc: "Automate test cases using Selenium WebDriver."
  },
  {
    icon: <FaProjectDiagram />,
    title: "API Testing",
    desc: "Test REST APIs using Postman & Swagger."
  },
  {
    icon: <FaTasks />,
    title: "JIRA",
    desc: "Manage defects and project workflows."
  },
  {
    icon: <FaTools />,
    title: "Test Planning",
    desc: "Create test plans, strategies and reports."
  },
  {
    icon: <FaCode />,
    title: "Selenium Framework",
    desc: "Build reusable automation frameworks."
  },
  {
    icon: <FaCheckCircle />,
    title: "Live Projects",
    desc: "Work on real-world testing projects."
  }
];

const modules = [
  {
    title: "Introduction to Software Testing",
    content:
      "Learn software testing fundamentals, SDLC, STLC and different testing methodologies.",
  },
  {
    title: "Manual Testing",
    content:
      "Understand test cases, bug reporting, test scenarios and functional testing.",
  },
  {
    title: "Automation Testing",
    content:
      "Learn Selenium WebDriver, automation frameworks and automated test execution.",
  },
  {
    title: "API Testing",
    content:
      "Test REST APIs using Postman, validate requests, responses and authentication.",
  },
  {
    title: "Performance & Security Testing",
    content:
      "Learn load testing, security testing and application performance optimization.",
  },
];

const relatedCourses = [
  "Manual Testing",
  "Automation Testing",
  "Selenium",
  "API Testing",
  "Postman",
  "Java",
  "JMeter",
  "QA Testing",
];

const stats = [
  {
    title: "45000+",
    name: "Students Trained",
  },
  {
    title: "100+",
    name: "Industry Trainers",
  },
  {
    title: "100%",
    name: "Placement Support",
  },
  {
    title: "3000+",
    name: "Hiring Companies",
  },
];

export default function TestingDeveloper() {

  const [activeTab, setActiveTab] = useState("about");

  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <>

      <section className="testing-course-section py-5 mt-5">
        <div className="container">

          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="testing-title"
              >
                Become a Software Testing Expert 🧪
              </motion.h2>

              <div className="testing-breadcrumb mx-5">

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>Home</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>/</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>Software Testing</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>/</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>QA Testing</span>

              </div>

              <div className="mern-tag">
                #1 Software Testing Program
              </div>

              <p className="testing-subtitle">
                Learn Manual Testing, Automation Testing,
                Selenium, API Testing, JIRA and real-world QA practices.
              </p>
              <p className="testing-subtitle">

                Become a professional QA Engineer by mastering Manual Testing,
                Automation Testing, Selenium, API Testing and bug tracking
                with live projects and placement support.

              </p>
              <div className="testing-rating-box mt-3">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span style={{ color: "#333", fontWeight: "bold" }}>
                  4.9 Rating (15,000+ Reviews)
                </span>

              </div>

              <div className="testing-btn-group">

                <button className="testing-primary-btn" style={{ fontSize: "15px" }}>
                  Download Curriculum
                </button>

                <button className="testing-outline-btn" style={{ fontSize: "15px" }}>
                  Free Demo Class
                </button>

              </div>

              <div className="row mt-4" style={{ cursor: "pointer" }}>
                {concepts.map((item, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        scale: 1.05
                      }}
                      className="testing-card"
                    >
                      <div className="testing-icon">
                        {item.icon}
                      </div>

                      <h5 style={{ fontSize: "18px" }}>{item.title}</h5>

                      <p>{item.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>

              <div className="testing-tab-section">

                <div className="testing-tab-buttons">

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "about"
                        ? "testing-tab-btn active"
                        : "testing-tab-btn"
                    }
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "career"
                        ? "testing-tab-btn active"
                        : "testing-tab-btn"
                    }
                    onClick={() => setActiveTab("career")}
                  >
                    Career
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "certificate"
                        ? "testing-tab-btn active"
                        : "testing-tab-btn"
                    }
                    onClick={() => setActiveTab("certificate")}
                  >
                    Certificate
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "faqs"
                        ? "testing-tab-btn active"
                        : "testing-tab-btn"
                    }
                    onClick={() => setActiveTab("faqs")}
                  >
                    FAQs
                  </button>

                </div>

                <div className="testing-tab-content">

                  {activeTab === "about" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>What You Will Learn?</h3>

                      <ul>

                        <li>Manual Testing Concepts</li>

                        <li>Automation Testing with Selenium</li>

                        <li>API Testing with Postman</li>

                        <li>Bug Tracking Tools</li>

                        <li>Performance Testing</li>

                        <li>Real-Time Testing Projects</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "career" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Career Opportunities</h3>

                      <ul>

                        <li>QA Engineer</li>

                        <li>Automation Tester</li>

                        <li>Manual Tester</li>

                        <li>Software Test Engineer</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "certificate" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Industry Certificate</h3>

                      <p style={{fontSize:"15px"}}>

                        Get an industry-recognized Software Testing
                        certificate after course completion.

                      </p>

                    </div>

                  )}

                  {activeTab === "faqs" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Frequently Asked Questions</h3>

                      <p style={{fontSize:"15px"}}>
                        Placement assistance and interview preparation included.
                      </p>

                    </div>

                  )}

                </div>

              </div>

              {/* MODULES */}

              <div className="testing-module-wrapper">

                <h2 className="testing-section-title" style={{ fontSize: "20px" }}>
                  Explore Course Modules
                </h2>

                {modules.map((item, index) => (

                  <div className="testing-module-card" key={index}>

                    <div
                      className="testing-module-header"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >

                      <h5 style={{fontSize:"15px"}}>{item.title}</h5>

                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}

                    </div>

                    {openIndex === index && (

                      <div className="testing-module-body">

                        <p style={{ fontSize: "15px" }}>{item.content}</p>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center" style={{ marginTop: "-2rem" }}>

              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://www.thinktank.de/wp-content/uploads/2022/12/Tests-in-Softwareentwicklung.webp"
                alt="Software Testing"
                className="testing-image w-100"
              />

              <div className="testing-badge">
                QA & Automation Testing
              </div>

              <div className="testing-content-card">

                <h2 style={{ fontSize: "22px" }}>
                  What Is Software Testing?
                </h2>

                <p style={{ fontSize: "17px" }}>

                  Software Testing is the process of identifying bugs,
                  validating functionality and ensuring software quality
                  before deployment.

                </p>

                <p>

                  Testing helps improve application performance, security,
                  usability and reliability across web and mobile applications.

                </p>
              </div>

              <div className="backend-form-card mt-5">

                <div className="form-header">
                  <h3 style={{fontSize:"22px"}}>🚀 Enquire Now</h3>
                  <p>Start your Backend Developer journey today</p>
                </div>

                <form>

                  <div className="input-group-custom">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="backend-input"
                    />
                  </div>

                  <div className="input-group-custom">
                    <FaEnvelope className="input-icon" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="backend-input"
                    />
                  </div>

                  <div className="input-group-custom">
                    <FaPhoneAlt className="input-icon" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="backend-input"
                    />
                  </div>

                  <div className="input-group-custom">
                    <FaCode className="input-icon" />
                    <input
                      type="text"
                      value="SOFTWARE TESTING"
                      readOnly
                      className="backend-input text-dark"
                    />
                  </div>

                  <div className="input-group-custom">
                    <FaMapMarkerAlt className="input-icon" />

                    <select className="backend-select">
                      <option value="">Select Branch</option>
                      <option value="Online">Online</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida</option>
                    </select>
                  </div>

                  <button type="submit" className="backend-submit-btn">
                    Apply Now →
                  </button>

                </form>

              </div>

              <div className="testing-related-card mt-5">

                <h3 style={{ fontSize: "20px" }}>Related Courses</h3>

                {relatedCourses.map((course, index) => (

                  <div className="testing-related-item" key={index}>

                    <span>{course}</span>

                    <FaArrowRight />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
        <Courses/>
        <Testimonials/>
      </section>
         
    </>
  );
}