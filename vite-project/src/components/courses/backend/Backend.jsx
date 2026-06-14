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
} from "react-icons/fa";




import { motion } from "framer-motion";

import { SiExpress, SiMongodb } from "react-icons/si";

import "../../../assets/mycss/courses/backend/backend.css";

import Testimonials from "../../home/Testimonial";
import Courses from "../../home/Courses";

const modules = [
  {
    title: "Introduction to Backend Development",
    content:
      "Learn backend architecture, server-side development, APIs and databases.",
  },
  {
    title: "Node JS Fundamentals",
    content:
      "Understand Node.js runtime, modules, file handling and asynchronous programming.",
  },
  {
    title: "Express JS Framework",
    content:
      "Build scalable REST APIs using Express JS, middleware and routing.",
  },
  {
    title: "MongoDB Database",
    content:
      "Learn CRUD operations, Mongoose schema design and database integration.",
  },
  {
    title: "Authentication & Deployment",
    content:
      "Implement JWT authentication, authorization and deploy backend applications.",
  },
];

const relatedCourses = [
  "Node JS",
  "Express JS",
  "MongoDB",
  "REST API",
  "JWT Auth",
  "Backend API",
  "Database",
  "Full Stack",
];

const stats = [
  {
    title: "40000+",
    name: "Students Trained",
  },
  {
    title: "100+",
    name: "Expert Trainers",
  },
  {
    title: "100%",
    name: "Placement Support",
  },
  {
    title: "2500+",
    name: "Hiring Partners",
  },
];

const concepts = [
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    desc: "Build fast and scalable server-side applications.",
  },
  {
    icon: <FaServer />,
    title: "Express.js",
    desc: "Create APIs and backend services efficiently.",
  },
  {
    icon: <FaDatabase />,
    title: "MongoDB",
    desc: "Store and manage application data effectively.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "REST APIs",
    desc: "Design and develop powerful RESTful APIs.",
  },
  {
    icon: <FaLock />,
    title: "Authentication",
    desc: "Implement JWT, Login, Signup & Security.",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    desc: "Version control and team collaboration.",
  },
  {
    icon: <FaCloud />,
    title: "Deployment",
    desc: "Deploy backend projects on cloud platforms.",
  },
  {
    icon: <FaCode />,
    title: "Live Projects",
    desc: "Work on real-world backend applications.",
  },
];

export default function BackendDeveloper() {
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
    }

  return (
    <>

      <section className="backend-course py-5" style={{ cursor: "pointer" }}>
        <div className="container">
          <div className="row align-items-center">

            

            {/* Image Section */}
            <div className="col-lg-6 text-center mb-4">
                  <h2 className="hero-title">
                  Master Backend Development &
                  <span> Launch Your Tech Career</span>
                </h2>
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="https://palcomtech.ac.id/wp-content/uploads/2023/11/nodejs_cover_photo_smaller_size.png"
                alt="Backend Developer"
                className="img-fluid mt-4 backend-image"
              />

              <h5 className="backend-main-heading">
                BACKEND DEVELOPER
              </h5>

               <div className="backend-breadcrumb mx-5">

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Home</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Backend Development</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>/</span>

                <span style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>Backend Developer</span>

              </div>

              <div className="backend-tag" style={{ color: "navy", fontSize: "15px", fontWeight: "bold" }}>
                #1 Backend Development Program
              </div>

              <div className="backend-content-card">

                <h2>
                  What Is Backend Development?
                </h2>

                <p>

                  Backend Development focuses on server-side logic,
                  database management and APIs that power modern web applications.

                </p>

                <p>

                  Backend Developers create secure, scalable and high-performance
                  applications using Node JS, Express JS and databases like MongoDB.

                </p>



              </div>


              <p className="backend-hero-para mt-3">

                Become a professional Backend Developer by mastering
                Node JS, Express JS, MongoDB and REST APIs with live projects
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

                  <button style={{ fontSize: "17px" }}
                    className={
                      activeTab === "about"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("about")}
                  >
                    About
                  </button>

                  <button style={{ fontSize: "17px" }}
                    className={
                      activeTab === "career"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("career")}
                  >
                    Career
                  </button>

                  <button style={{ fontSize: "17px" }}
                    className={
                      activeTab === "certificate"
                        ? "backend-tab-btn active"
                        : "backend-tab-btn"
                    }
                    onClick={() => setActiveTab("certificate")}
                  >
                    Certificate
                  </button>

                  <button style={{ fontSize: "17px" }}
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

                        <li>Backend Development using Node JS</li>

                        <li>REST API Development with Express JS</li>

                        <li>MongoDB Database Integration</li>

                        <li>Authentication using JWT</li>

                        <li>Server Deployment & Hosting</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "career" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Career Opportunities</h3>
                      <br />

                      <ul>

                        <li>Backend Developer</li>

                        <li>Node JS Developer</li>

                        <li>API Developer</li>

                        <li>Full Stack Developer</li>

                      </ul>

                    </div>

                  )}

                  {activeTab === "certificate" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Industry Certificate</h3>
                      <br />

                      <p>

                        Get an industry-recognized Backend Developer
                        certificate after course completion.

                      </p>

                    </div>

                  )}

                  {activeTab === "faqs" && (

                    <div>

                      <h3 style={{ fontSize: "25px" }}>Frequently Asked Questions</h3>
                      <br />

                      <p>
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
                Learn Node.js, Express.js, MongoDB, Authentication,
                APIs and Deployment to build powerful backend systems.
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
                      value="BACKEND DEVELOPER"
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

                    <span style={{ color: "navy", fontWeight: "bold",fontSize:"14px" }}>{course}</span>

                    <FaArrowRight />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>
      <Courses />
      <Testimonials />

    </>
  );
}
