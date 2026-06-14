import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaArrowRight,
  FaLock,
  FaGithub,
  FaProjectDiagram,
  FaCloudUploadAlt,

  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCode,

  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";

import '../../../assets/mycss/courses/mern/mernstack.css'

import Testimonials from "../../home/Testimonial";
import Courses from "../../home/Courses";

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
  return (
    <>
      <section className="mern-course-section py-5 mt-5" style={{ cursor: "pointer" }}>
        <div className="container">

          <div className="row">
            <div className="col-lg-6">
              <div className=" mb-5">
                <motion.h2 style={{ fontSize: "35px" }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="fw-bold display-5 mb-3"
                >
                  <h2 className="hero-title" style={{ marginTop: "80px" }}>
                    Master Mern Development &
                    <span> Launch Your Tech Career</span>
                  </h2>
                </motion.h2>

                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp"
                  alt="Frontend Developer"
                  className="img-fluid mt-4 frontend-image"
                />
                <h5 className="backend-main-heading">
                  MERN DEVELOPER
                </h5>
                {/* <h2 className="mern-title text-center">
                  Become a MERN Stack Developer 🚀
                </h2>
                 <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN.webp"
                alt="MERN Stack"
                className="mern-image mt-5 w-100"
              /> */}

                <div className="frontend-breadcrumb">

                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#1dc5ba" }}>Home</span>

                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#1dc5ba" }}>/</span>

                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#1dc5ba" }}>Frontend Development</span>

                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#1dc5ba" }}>/</span>

                  <span style={{ fontSize: "15px", fontWeight: "bold", color: "#1dc5ba" }}>Frontend Developer</span>

                </div>

                <div className="frontend-tag" style={{ fontSize: "15px", fontWeight: "bold", color: "darkgray" }}>
                  #1 MERN Stack Development Program
                </div>

                <p className="frontend-hero-para mt-3" style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>

                  Master MongoDB, Express.js, React.js & Node.js <br />
                  and build real-world full stack applications.

                </p>


              </div>
            </div>
          </div>

          <div className="mern-rating-box">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            <span style={{ color: "#333", fontSize: "15px" }}>
              4.9 Rating (18,500+ Reviews)
            </span>

          </div>

          <div className="mern-btn-group">

            <button className="mern-primary-btn" style={{ fontSize: "15px" }}>
              Download Curriculum
            </button>

            <button className="mern-outline-btn" style={{ fontSize: "15px" }}>
              Free Demo Class
            </button>

          </div>

          <div className="row align-items-center">

            {/* Left Side */}
            <div className="col-lg-6 mb-4">

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


              {/* MODULES */}

              <div className="mern-module-wrapper">

                <h2 className="mern-section-title">
                  Explore Course Modules
                </h2>

                {modules.map((item, index) => (

                  <div className="mern-module-card" key={index}>

                    <div
                      className="mern-module-header"
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

                      <div className="mern-module-body">

                        <p style={{ fontSize: "16px" }}>{item.content}</p>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

            {/* Right Side Image */}
            <div className="col-lg-6 text-center" style={{ marginTop: "-45rem" }}>



              <div className="mern-badge">
                MERN Stack Development
              </div>

              <div className="mern-content-card">

                <h2 style={{ fontSize: "20px" }}>
                  What Is MERN Stack Developer?
                </h2>

                <p style={{ fontSize: "15px" }}>

                  A MERN Stack Developer is a full stack developer who builds
                  complete web applications using MongoDB, Express JS, React JS
                  and Node JS.

                </p>

                <p style={{ fontSize: "15px" }}>

                  MERN Stack helps developers create modern frontend interfaces,
                  scalable backend APIs and powerful database-driven applications
                  using JavaScript.

                </p>

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

                  <button type="submit" className="backend-submit-btn">
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
              <div className="mern-tab-section" style={{marginTop:"20rem"}}>

                <div className="mern-tab-buttons">

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "about"
                        ? "mern-tab-btn active"
                        : "mern-tab-btn"
                    }
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "career"
                        ? "mern-tab-btn active"
                        : "mern-tab-btn"
                    }
                    onClick={() => setActiveTab("career")}
                  >
                    Career
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "certificate"
                        ? "mern-tab-btn active"
                        : "mern-tab-btn"
                    }
                    onClick={() => setActiveTab("certificate")}
                  >
                    Certificate
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "faqs"
                        ? "mern-tab-btn active"
                        : "mern-tab-btn"
                    }
                    onClick={() => setActiveTab("faqs")}
                  >
                    FAQs
                  </button>

                </div>

                <div className="mern-tab-content">

                  {activeTab === "about" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>What You Will Learn?</h3>

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

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Career Opportunities</h3>

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

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Industry Certificate</h3>

                      <p>

                        Get an industry-recognized MERN Stack Developer
                        certificate after course completion.

                      </p>

                    </div>

                  )}

                  {activeTab === "faqs" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>Frequently Asked Questions</h3>

                      <p>
                        100% placement support and interview preparation included.
                      </p>

                    </div>

                  )}

                </div>

              </div>
            </div>
          </div>

          <Courses />
        </div>
        <Testimonials />
      </section>




    </>
  );
}