import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  FaStar,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowRight,
  FaMobileAlt,
  FaJsSquare,
  FaBootstrap,
  FaGithub,

  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCode,

  FaMapMarkerAlt,
} from "react-icons/fa";

import "../../../assets/mycss/courses/frontend/frontend.css";

import Testimonials from "../../home/Testimonial";
import Courses from "../../home/Courses";
import ModernCourseSlider from "./CourseSlider";

const concepts = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    desc: "Learn semantic HTML structure and modern web page creation.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    desc: "Master Flexbox, Grid, Animations and Responsive Design.",
  },
  {
    icon: <FaJsSquare />,
    title: "JavaScript",
    desc: "Understand DOM, ES6, Functions, Events and APIs.",
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap",
    desc: "Build responsive and professional UI quickly.",
  },
  {
    icon: <FaReact />,
    title: "React JS",
    desc: "Create dynamic Single Page Applications with React.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Design websites that work perfectly on all devices.",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    desc: "Version control and project collaboration.",
  },
  {
    icon: <FaCode />,
    title: "Live Projects",
    desc: "Work on real-world frontend development projects.",
  },
];

const modules = [
  {
    title: "Introduction to Frontend Development",
    content:
      "Learn frontend architecture, responsive design and modern web development concepts.",
  },
  {
    title: "HTML5 & CSS3",
    content:
      "Build responsive webpage layouts using HTML5, CSS3, Flexbox and Grid.",
  },
  {
    title: "JavaScript Fundamentals",
    content:
      "Understand DOM manipulation, ES6 concepts, functions and events.",
  },
  {
    title: "React JS Development",
    content:
      "Create dynamic frontend applications using React JS, Hooks and Routing.",
  },
  {
    title: "Responsive UI & Deployment",
    content:
      "Build mobile responsive websites and deploy frontend applications.",
  },
];

const relatedCourses = [
  "React JS",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Frontend UI",
  "Responsive Design",
  "Web Development",
];

const stats = [
  {
    title: "45000+",
    name: "Students Trained",
  },
  {
    title: "90+",
    name: "Expert Trainers",
  },
  {
    title: "100%",
    name: "Placement Support",
  },
  {
    title: "3000+",
    name: "Hiring Partners",
  },
];

export default function FrontendDeveloper() {

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
      <section className="frontend-course py-5" >
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6 mb-4" style={{ marginTop: "-40rem" }}>
              <motion.h2 style={{ fontSize: "35px" }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="fw-bold display-5 mb-3"
              >
                Become a Professional Frontend Developer 🚀
              </motion.h2>

              <div className="frontend-breadcrumb">

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>Home</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>/</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>Frontend Development</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>/</span>

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>Frontend Developer</span>

              </div>

              <div className="frontend-tag" style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>
                #1 Frontend Development Program
              </div>

              <p className="frontend-hero-para" style={{ fontSize: "15px", fontWeight: "bold", color: "navy" }}>

                Become a professional Frontend Developer by mastering
                HTML5, CSS3, JavaScript and React JS with live projects
                and placement support.

              </p>

              <div className="frontend-rating-box" style={{ fontSize: "15px", fontWeight: "bold" }}>

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span style={{ fontSize: "15px", fontWeight: "bold", color: "black" }}>
                  4.9 Rating (16,000+ Reviews)
                </span>

              </div>

              <div className="frontend-btn-group">

                <button className="frontend-primary-btn" style={{ fontSize: "15px" }}>
                  Download Curriculum
                </button>

                <button className="frontend-outline-btn bg-dark" style={{ fontSize: "15px" }}>
                  Free Demo Class
                </button>

              </div>

              <h1 className="frontend-main-heading" style={{ fontSize: "25px", fontWeight: "bold", color: "black" }}>
                FRONTEND DEVELOPER
              </h1>

              <p className="text-muted" style={{ fontSize: "15px" }}>
                Learn everything from HTML, CSS, JavaScript to React JS and
                build modern, responsive and interactive websites.
              </p>

              <div className="row mt-4">
                {concepts.map((item, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                      }}
                      className="concept-card p-3"
                    >
                      <div className="icon text-dark">{item.icon}</div>
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>


              {/* TABS */}

              <div className="frontend-tab-section">

                <div className="frontend-tab-buttons">

                  <button style={{ fontSize: "17px" }}
                    className={
                      activeTab === "about"
                        ? "frontend-tab-btn active"
                        : "frontend-tab-btn"
                    }
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "career"
                        ? "frontend-tab-btn active"
                        : "frontend-tab-btn"
                    }
                    onClick={() => setActiveTab("career")}
                  >
                    Career
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "certificate"
                        ? "frontend-tab-btn active"
                        : "frontend-tab-btn"
                    }
                    onClick={() => setActiveTab("certificate")}
                  >
                    Certificate
                  </button>

                  <button style={{ fontSize: "15px" }}
                    className={
                      activeTab === "faqs"
                        ? "frontend-tab-btn active"
                        : "frontend-tab-btn"
                    }
                    onClick={() => setActiveTab("faqs")}
                  >
                    FAQs
                  </button>

                </div>

                <div className="frontend-tab-content">

                  {activeTab === "about" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>
                        What You Will Learn?
                      </h3>

                      <br />

                      <ul>

                        <li>Responsive Website Development</li>

                        <li>HTML5 & CSS3 Design</li>

                        <li>JavaScript & ES6 Concepts</li>

                        <li>Frontend Development using React JS</li>

                        <li>API Integration & Routing</li>

                        <li>Deployment & Hosting</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "career" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>
                        Career Opportunities
                      </h3>

                      <br />

                      <ul>

                        <li>Frontend Developer</li>

                        <li>React JS Developer</li>

                        <li>UI Developer</li>

                        <li>Web Designer</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "certificate" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>
                        Industry Certificate
                      </h3>

                      <br />

                      <p style={{ fontSize: "15px" }}>

                        Get an industry-recognized Frontend Developer
                        certificate after course completion.

                      </p>

                    </div>

                  )}

                  {activeTab === "faqs" && (

                    <div>

                      <h3 style={{ fontSize: "17px", fontWeight: "bold" }}>
                        Frequently Asked Questions
                      </h3>

                      <br />

                      <p style={{ fontSize: "15px" }}>
                        100% placement support and interview preparation included.
                      </p>

                    </div>

                  )}

                </div>
              </div>

              {/* MODULES */}


            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center" style={{ marginTop: "10rem" }}>
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://refine.ams3.cdn.digitaloceanspaces.com/blog-yearly/2023/2023-12-11-frameworks-2024/social-2.webp"
                alt="Frontend Developer"
                className="img-fluid frontend-image"
              />


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
                      value="FRONTEND DEVELOPER"
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

              <div className="frontend-related-card">

                <h3>Related Courses</h3>

                {relatedCourses.map((course, index) => (

                  <div className="frontend-related-item" key={index}>

                    <span>{course}</span>

                    <FaArrowRight />

                  </div>

                ))}

              </div>

              <div className="frontend-content-card mt-5">

                <h2>
                  What Is Frontend Development?
                </h2>

                <p>

                  Frontend Development focuses on building responsive,
                  interactive and user-friendly interfaces for websites
                  and web applications.

                </p>

                <p>

                  Frontend Developers create visually attractive websites
                  using HTML, CSS, JavaScript and modern frameworks like React JS.

                </p>



              </div>

              <div className="frontend-module-wrapper">

                <h2 className="frontend-section-title">
                  Explore Course Modules
                </h2>

                {modules.map((item, index) => (

                  <div className="frontend-module-card" key={index}>

                    <div
                      className="frontend-module-header"
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

                      <div className="frontend-module-body">

                        <p style={{ fontSize: "15px" }}>{item.content}</p>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>
            <ModernCourseSlider />
          </div>
        </div>
      </section>

      <Courses />
      <Testimonials />




    </>
  );
}