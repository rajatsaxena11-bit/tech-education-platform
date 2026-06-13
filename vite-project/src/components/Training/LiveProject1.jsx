import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaHospital,
  FaUniversity,
  FaMobileAlt,
  FaGlobe,
  FaArrowRight,
  FaPlayCircle,
  FaReact,
  FaNodeJs,
  FaPython,
  FaProjectDiagram
} from "react-icons/fa";

import '../../assets/mycss/training/liveproject.css'

import {
  SiMongodb,
  SiFirebase,
  SiJavascript,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function LiveProjects() {
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
  const projects = [
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Website",
      tech: "React, Node.js, MongoDB",
      description:
        "Build a complete online shopping platform with payment integration.",
    },
    {
      icon: <FaHospital />,
      title: "Hospital Management System",
      tech: "Java, MySQL",
      description:
        "Manage patients, appointments and medical records efficiently.",
    },
    {
      icon: <FaUniversity />,
      title: "College ERP System",
      tech: "PHP, Laravel",
      description:
        "Develop student, faculty and attendance management solutions.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Applications",
      tech: "React Native",
      description:
        "Create modern Android and iOS applications with real-world features.",
    },
    {
      icon: <FaGlobe />,
      title: "Business Website",
      tech: "HTML, CSS, React",
      description:
        "Design and deploy responsive websites for businesses and startups.",
    },
    {
      icon: <FaLaptopCode />,
      title: "CRM Software",
      tech: "MERN Stack",
      description:
        "Develop customer relationship management systems for enterprises.",
    },
  ];

  return (
  <>
      <section className="live-hero" >
  
          <div className="hero-overlay"></div>
  
          <div className="floating-circle one"></div>
          <div className="floating-circle two"></div>
  
          <div className="container hero-content">
  
            <span className="hero-badge career-primary-btn mt-5 text-warning" style={{fontSize:"14px"}}>
              🚀 Industry Based Training
            </span>
  
            <h1 style={{fontSize:"60px"}}>
              <span className="text-warning">Work on Real-Time</span>
              <span> Live Projects</span>
            </h1>
  
            <p>
              Build real industry-level applications with mentor guidance,
              teamwork, deployment & practical coding experience.
            </p>
  
            <div className="hero-btns">
  
              <button className="btn-primary-custom career-primary-btn">
                Explore Projects
                <FaArrowRight />
              </button>
  
              <button className="btn-secondary-custom career-primary-btn">
                <FaPlayCircle />
                Watch Demo
              </button>
  
            </div>
  
            {/* STATS */}
  
            <div className="hero-stats" style={{cursor:"pointer"}}>
  
              <div className="hero-stat-box">
                <h3 style={{ color: "darkgray"}}>100+</h3>
                <span>Live Projects</span>
              </div>
  
              <div className="hero-stat-box">
                <h3 style={{ color: "darkgray" }}>5000+</h3>
                <span>Students</span>
              </div>
  
              <div className="hero-stat-box">
                <h3 style={{ color: "darkgray" }}>95%</h3>
                <span>Placement Rate</span>
              </div>
  
            </div>
  
          </div>
  
      </section>
      <section className="live-projects-section py-5 mt-5" >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="lp-title">
            Live Projects Training 🚀
          </h2>

          <div className="lp-line"></div>

          <p className="lp-subtitle">
            Work on real-world industry projects and gain practical
            experience before entering the IT industry.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4" style={{cursor:"pointer"}}>
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="lp-card">

                <div className="lp-icon">
                  {project.icon}
                </div>

                <h4>{project.title}</h4>

                <span className="lp-tech">
                  {project.tech}
                </span>

                <p>{project.description}</p>

              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
              alt="Live Projects"
              className="img-fluid lp-image"
            />
          </div>

          <div className="col-lg-6">
            <div className="lp-content">
              <h3>
                Learn Through Real Industry Projects
              </h3>

              <p >
                Students work on live projects under the guidance of
                industry experts. This helps them understand actual
                development workflows, teamwork and client requirements.
              </p>

              <ul className="mt-3">
                <li>✔ Real Client-Based Projects</li>
                <li>✔ Agile Development Process</li>
                <li>✔ Industry Coding Standards</li>
                <li>✔ Team Collaboration Experience</li>
                <li>✔ Git & GitHub Workflow</li>
                <li>✔ Deployment & Hosting Practice</li>
              </ul>

              <button className="btn btn-warning fw-bold px-4 py-2">
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="lp-stat">
              <h3>100+</h3>
              <p>Live Projects</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="lp-stat">
              <h3>5000+</h3>
              <p>Students Trained</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="lp-stat">
              <h3>50+</h3>
              <p>Project Mentors</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="lp-stat">
              <h3>95%</h3>
              <p>Placement Success</p>
            </div>
          </div>
        </div>

      </div>
    </section>
       <div className="container">

          <section className="category-section" style={{cursor:"pointer"}}>

            <div className="category-header" style={{ marginTop: "-70px" }}>
              <h2 style={{fontSize:"30px"}}>Explore Our <span>Learning Paths</span></h2>
              <p>Choose skills that match your career goals</p>
            </div>

            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={20}
              slidesPerView={5}
              freeMode={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              <SwiperSlide>
                <div className="category-card">
                  <FaLaptopCode />
                  <h4 style={{fontSize:"25px"}}>Web Development</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="category-card">
                  <FaReact />
                  <h4 style={{fontSize:"25px"}}>React Projects</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="category-card">
                  <FaNodeJs />
                  <h4 style={{fontSize:"25px"}}>Full Stack</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="category-card">
                  <FaPython />
                  <h4 style={{fontSize:"25px"}}>Python</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="category-card">
                  <SiJavascript />
                  <h4 style={{fontSize:"25px"}}>JavaScript</h4>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="category-card">
                  <FaProjectDiagram />
                  <h4 style={{fontSize:"25px"}}>AI / ML</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>



        </div>
   </>
  );
}