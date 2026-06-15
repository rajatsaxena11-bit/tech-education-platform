import React, { useEffect, useState } from "react";

import {
  FaStar,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaArrowRight,
  FaLock,
  FaCode,
  FaGithub,
  FaCloud,
  FaProjectDiagram,




  FaClipboardCheck,
  FaBug,
  FaRobot,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaTasks,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";




import { motion } from "framer-motion";

import { SiExpress, SiMongodb } from "react-icons/si";

import "../../../assets/mycss/courses/backend/backend.css";

import Testimonials from "../../home/Testimonial";
import Courses from "../../home/Courses";
import { useLocation } from "react-router-dom";
import ModernCourseSlider from "../frontend/CourseSlider";

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

  const location = useLocation();



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="frontend-loader">
        <div className="spinner"></div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <>

      <section className="backend-course py-5" style={{ cursor: "pointer" }}>
        <div className="container">
          <div className="row align-items-center">



            {/* Image Section */}
            <div className="col-lg-6 text-center mb-4">
              <h2 className="hero-title">
                Master Software Testing &
                <span> Launch Your Tech Career</span>
              </h2>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://www.thinktank.de/wp-content/uploads/2022/12/Tests-in-Softwareentwicklung.webp"
                alt="Backend Developer"
                className="img-fluid mt-4 backend-image"
              />

              <h5 className="backend-main-heading">
                SOFTWARE TESTING
              </h5>

              <div className="backend-breadcrumb mx-5">

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Home</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Software Testing</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Software Testing</span>

              </div>

              <div className="backend-tag" style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>
                #1 Software Testing Program
              </div>

              <div className="backend-content-card">

                <h2>
                  What Is Software Testing?
                </h2>

                <p>

                  Software Testing is the process of identifying bugs,
                  validating functionality and ensuring software quality
                  before deployment.

                </p>

                <p>
                  Testing helps improve application performance, security,
                  usability and reliability across web and mobile applications.

                </p>



              </div>


              <p className="backend-hero-para mt-3">

                Become a Professional Software Testing Engineer by mastering
                Manual Testing, Automation Testing, Selenium WebDriver, API Testing,
                Test Case Design, and Quality Assurance Practices with live projects
                and placement support.

              </p>

              <div className="backend-rating-box">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span>
                  4.9 Rating (15,000+ Reviews)
                </span>

              </div>

              <div className="backend-btn-group">

                <button className="backend-primary-btn" style={{ fontSize: "15px" }}>
                  Download Curriculum
                </button>

                <button className="backend-outline-btn bg-success" style={{ fontSize: "15px" }}>
                  Free Demo Class
                </button>

              </div>
              <div className="backend-tab-section">

                <div className="backend-tab-buttons">

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "about"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "career"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("career")}
                  >
                    Career
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "certificate"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("certificate")}
                  >
                    Certificate
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "faqs"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("faqs")}
                  >
                    FAQs
                  </button>

                </div>

                <div className="backend-tab-content">

                  {activeTab === "about" && (

                    <div>

                      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>What You Will Learn?</h3>
                      <br />

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

                      <h3 style={{ fontSize: "25px" }}>Career Opportunities</h3>
                      <br />

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

                      <h3 style={{ fontSize: "25px" }}>Industry Certificate</h3>
                      <br />

                      <p style={{ color: "darkgray" }}>

                        Get an industry-recognized Software Testing
                        certificate after course completion.

                      </p>

                    </div>

                  )}

                  {activeTab === "faqs" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Frequently Asked Questions</h3>
                      <br />

                      <p style={{ color: "darkgray" }}>
                        100% placement support and interview preparation included.
                      </p>

                    </div>

                  )}

                </div>

              </div>
              {/* <div className="frontend-content-card mt-5">

                <h2>
                  What Is Backend Development?
                </h2>

                <p>
                  Backend Development focuses on building the server-side logic,
                  databases, APIs, and application architecture that power websites
                  and web applications behind the scenes.
                </p>

                <p className="text-dark">
                  Backend Developers work with technologies like Node.js, Express.js,
                  MongoDB, MySQL, and REST APIs to create secure, scalable, and
                  high-performance applications.
                </p>

              </div> */}
              <div className="backend-module-wrapper">

                <h2 className="backend-section-title">
                  Explore Course Modules
                </h2>

                {modules.map((item, index) => (

                  <div className="backend-module-card" key={index}>

                    <div
                      className="backend-module-header"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >

                      <h5>{item.title}</h5>

                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}

                    </div>

                    {openIndex === index && (

                      <div className="backend-module-body">

                        <p>{item.content}</p>

                      </div>

                    )}

                  </div>

                ))}

              </div>
            </div>


            {/* Content Section */}
            <div className="col-lg-6" style={{ marginTop: "50px" }}>

              <p className="text-muted mt-5" style={{ fontSize: "15px" }}>
                Learn Manual Testing, Automation Testing, Selenium, API Testing,
                Test Case Design, Defect Tracking, and QA Methodologies to become
                a skilled Software Testing Engineer.
              </p>

              <div className="row mt-4">
                {concepts.map((item, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.04,
                      }}
                      className="backend-card p-3"
                    >
                      <div className="backend-icon">
                        {item.icon}
                      </div>

                      <h5>{item.title}</h5>
                      <p className="text-dark fw-bold">{item.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="backend-form-card mt-5">

                <div className="form-header">
                  <h3 style={{ fontSize: "22px" }}>🚀 Enquire Now</h3>
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

                  <button type="submit" className="backend-submit-btn mt-3">
                    Apply Now →
                  </button>

                </form>

              </div>

              <div className="backend-related-card">

                <h3>Related Courses</h3>

                {relatedCourses.map((course, index) => (

                  <div className="backend-related-item" key={index}>

                    <span style={{ color: "navy", fontWeight: "bold", fontSize: "14px" }}>{course}</span>

                    <FaArrowRight />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
      <ModernCourseSlider/>
      <div
        style={{
          marginTop: location.pathname.includes("testingdeveloper")
            ? "-5rem"
            : "0px",
        }}
      >
        <Courses />
      </div>
      <Testimonials />

    </>
  );
}
