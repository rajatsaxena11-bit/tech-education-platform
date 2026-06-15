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

  FaUser,
  FaEnvelope,
  FaPhoneAlt,

  FaMapMarkerAlt,
  FaReact,
  FaCloudUploadAlt
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
    icon: <FaDatabase />,
    title: "MongoDB",
    desc: "Learn NoSQL database design and management."
  },
  {
    icon: <FaServer />,
    title: "Express JS",
    desc: "Build secure APIs and backend applications."
  },
  {
    icon: <FaReact />,
    title: "React JS",
    desc: "Create modern responsive user interfaces."
  },
  {
    icon: <FaNodeJs />,
    title: "Node JS",
    desc: "Develop scalable server-side applications."
  },
  {
    icon: <FaLock />,
    title: "Authentication",
    desc: "JWT, Login, Signup & Role Based Access."
  },
  {
    icon: <FaProjectDiagram />,
    title: "REST APIs",
    desc: "Develop industry-standard APIs."
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    desc: "Version control and team collaboration."
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment",
    desc: "Deploy full stack apps to production."
  }
];

const modules = [
  {
    title: "Introduction to MERN Stack",
    content:
      "Learn complete MERN Stack architecture including MongoDB, Express JS, React JS and Node JS.",
  },
  {
    title: "Frontend with React JS",
    content:
      "Build modern responsive user interfaces using React JS, hooks, routing and API integration.",
  },
  {
    title: "Backend with Node & Express",
    content:
      "Create REST APIs, authentication systems and server-side applications using Node JS & Express JS.",
  },
  {
    title: "MongoDB Database",
    content:
      "Learn MongoDB CRUD operations, schema design, Mongoose and database integration.",
  },
  {
    title: "Authentication & Deployment",
    content:
      "Implement JWT authentication, role-based access and deploy MERN applications.",
  },
];

const relatedCourses = [
  "React JS",
  "Node JS",
  "MongoDB",
  "Express JS",
  "JavaScript",
  "REST API",
  "JWT Auth",
  "Full Stack",
];

const stats = [
  {
    title: "50000+",
    name: "Students Trained",
  },
  {
    title: "120+",
    name: "Expert Trainers",
  },
  {
    title: "100%",
    name: "Placement Support",
  },
  {
    title: "3500+",
    name: "Hiring Partners",
  },
];
export default function MernStackDeveloper() {
  const [activeTab, setActiveTab] = useState("about");

  const [openIndex, setOpenIndex] = useState(null);

  const [loading, setLoading] = useState(true);

  const location = useLocation();

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
                Master Mern Stack Development &
                <span> Launch Your Tech Career</span>
              </h2>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp"
                alt="Backend Developer"
                className="img-fluid mt-4 backend-image"
              />

              <h5 className="backend-main-heading">
                MERN STACK DEVELOPER
              </h5>

              <div className="backend-breadcrumb mx-5">

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Home</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Backend Development</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Backend Developer</span>

              </div>

              <div className="backend-tag" style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>
                #1 Mern Stack Development Program
              </div>

              <div className="backend-content-card">
                <p style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>

                  Master MongoDB, Express.js, React.js & Node.js <br />
                  and build real-world full stack applications.

                </p>



              </div>


              <p className="backend-hero-para mt-3">

                Become a professional Mern Stack Developer by mastering
                React.JS, Javascript, Node JS, Express JS, MongoDB and REST APIs with live projects
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

                        <li>Frontend Development using React JS</li>

                        <li>Backend Development using Node JS</li>

                        <li>REST API Development with Express JS</li>

                        <li>MongoDB Database Integration</li>

                        <li>Authentication using JWT</li>

                        <li>Deployment & Hosting</li>

                      </ul>


                    </div>

                  )}

                  {activeTab === "career" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Career Opportunities</h3>
                      <br />

                      <ul>

                        <li>MERN Stack Developer</li>

                        <li>Frontend Developer</li>

                        <li>Backend Developer</li>

                        <li>Full Stack Developer</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "certificate" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Industry Certificate</h3>
                      <br />

                      <p style={{ color: "darkgray" }}>

                        Get an industry-recognized MERN Stack Developer
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
               Learn MongoDB, Express.js, React.js, Node.js, Authentication,
API Development, State Management, and Deployment to build
modern full-stack web applications.
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
                      value="MERN STACK DEVELOPER"
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
          marginTop: location.pathname.includes("merndeveloper")
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
