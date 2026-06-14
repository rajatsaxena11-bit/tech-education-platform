import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaCertificate,
  FaUserTie,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

import '../../assets/mycss/training/internshipprogram.css'

export default function InternshipProgram() {
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
  const benefits = [
    {
      icon: <FaLaptopCode />,
      title: "Real-Time Development",
      desc: "Work on industry-standard projects and gain practical experience.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Live Projects",
      desc: "Participate in live client-based projects with mentor guidance.",
    },
    {
      icon: <FaUserTie />,
      title: "Industry Mentorship",
      desc: "Learn directly from experienced developers and IT professionals.",
    },
    {
      icon: <FaCertificate />,
      title: "Internship Certificate",
      desc: "Receive an industry-recognized internship completion certificate.",
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      desc: "Work in teams and experience real software development workflows.",
    },
    {
      icon: <FaBriefcase />,
      title: "Placement Assistance",
      desc: "Get career guidance and placement support after internship.",
    },
  ];

  return (
    <section className="internship-section py-5 mt-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="internship-title mt-5" style={{fontSize:"25px"}}>
            Internship Program 💼
          </h2>

          <div className="internship-line"></div>

          <p className="internship-subtitle">
            Gain hands-on industry experience through our structured
            internship program and become job-ready.
          </p>
        </div>

        {/* Benefits */}
        <div className="row g-4">
          {benefits.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="internship-card">
                <div className="internship-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Details */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
              alt="Internship Program"
              className="img-fluid internship-image"
            />
          </div>

          <div className="col-lg-6">
            <div className="internship-content">
              <h3>
                Build Real Industry Experience
              </h3>

              <p>
                Our internship program is designed to bridge the gap
                between classroom learning and real-world industry
                requirements. Students gain practical experience while
                working on real projects.
              </p>

              <ul className="mt-3 fw-bold">
                <li>✔ 1 Month / 3 Months / 6 Months Internship</li>
                <li>✔ Live Industry Projects</li>
                <li>✔ Daily Mentor Support</li>
                <li>✔ Agile Development Process</li>
                <li>✔ Internship Completion Certificate</li>
                <li>✔ Placement Support</li>
              </ul>

              <button className="btn btn-warning fw-bold px-4 py-2">
                Apply for Internship
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="internship-stat">
              <h3>1000+</h3>
              <p>Internships Completed</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="internship-stat">
              <h3>100+</h3>
              <p>Live Projects</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="internship-stat">
              <h3>50+</h3>
              <p>Industry Mentors</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="internship-stat">
              <h3>95%</h3>
              <p>Placement Success</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}