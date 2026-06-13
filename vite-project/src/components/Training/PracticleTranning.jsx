import React, { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaUserGraduate,
  FaCertificate,
} from "react-icons/fa";

import '../../assets/mycss/training/practicletranning1.css'

export default function PracticalTraining() {
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
  const trainingFeatures = [
    {
      icon: <FaLaptopCode />,
      title: "Hands-On Coding",
      description:
        "Learn by doing with daily coding practice and real-world exercises.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Live Projects",
      description:
        "Work on industry-level projects to gain practical development experience.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Expert Mentorship",
      description:
        "Get guidance from experienced trainers and industry professionals.",
    },
    {
      icon: <FaCertificate />,
      title: "Industry Ready Skills",
      description:
        "Build job-ready skills through practical assignments and assessments.",
    },
  ];

  return (
    <section className="practical-training py-5 mt-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="pt-title mt-5" style={{fontSize:"25px"}}>
            Practical Training Program 💻
          </h2>

          <div className="pt-line"></div>

          <p className="pt-subtitle">
            Gain real-world experience through hands-on learning,
            live projects and industry-oriented training.
          </p>
        </div>

        {/* Features */}
        <div className="row g-4">
          {trainingFeatures.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="pt-card">
                <div className="pt-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p style={{fontSize:"15px", color:"navy"}}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
              alt="Practical Training"
              className="img-fluid pt-image"
            />
          </div>

          <div className="col-lg-6">
            <div className="pt-content">
              <h3>
                Learn Through Practice, Not Just Theory
              </h3>

              <p style={{color:"navy"}} className="fw-bold"> 
                Our practical training approach ensures students work
                on real-world scenarios, coding assignments, case
                studies and live industry projects.
              </p>

              <ul className="mt-3 fw-bold">
                <li>✔ Daily Practical Sessions</li>
                <li>✔ Industry-Based Projects</li>
                <li>✔ Real Coding Environment</li>
                <li>✔ Weekly Assessments</li>
                <li>✔ One-to-One Mentorship</li>
                <li>✔ Placement-Oriented Training</li>
              </ul>

              <button className="btn btn-warning fw-bold px-4 py-2">
                Explore Training
              </button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="pt-stat">
              <h3>100+</h3>
              <p>Practical Assignments</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="pt-stat">
              <h3>50+</h3>
              <p>Live Projects</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="pt-stat">
              <h3>5000+</h3>
              <p>Students Trained</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="pt-stat">
              <h3>95%</h3>
              <p>Placement Success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}