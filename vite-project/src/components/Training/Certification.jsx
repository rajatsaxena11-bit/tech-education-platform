import React, { useEffect, useState } from "react";
import {
  FaCertificate,
  FaAward,
  FaBriefcase,
  FaCheckCircle,
  FaUserGraduate,
  FaBuilding,
} from "react-icons/fa";

import "../../assets/mycss/training/certification.css";

export default function Certification() {
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
  const benefits = [
    {
      icon: <FaCertificate />,
      title: "Industry Recognized",
      desc: "Receive certificates that showcase your technical expertise.",
    },
    {
      icon: <FaAward />,
      title: "Skill Validation",
      desc: "Demonstrate your practical and technical knowledge to employers.",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Growth",
      desc: "Increase your chances of getting shortlisted by recruiters.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Project Based Learning",
      desc: "Certificates backed by practical assignments and live projects.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Achievement",
      desc: "Highlight your learning journey and accomplishments.",
    },
    {
      icon: <FaBuilding />,
      title: "Placement Support",
      desc: "Add credibility to your resume during placement drives.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="cert-hero">
        <div className="overlay"></div>

        <div className="container hero-content mt-5">
          <h1 className="text-primary mt-5 cert-main-heading" style={{fontSize:"30px"}}>
            Get Industry Recognized Certification
          </h1>

          <p>
            Build your career with professional certification programs and
            practical training experience.
          </p>

          <div className="hero-btns">
            <button className="primary-btn bg-primary text-light career-primary-btn">
              View Certificate
            </button>

            <button className="secondary-btn bg-primary career-primary-btn">
              Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="certification-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="cert-title" style={{fontSize:"25px"}}>Certification Program 🎓</h2>

            <div className="cert-line"></div>

            <p className="cert-subtitle">
              Earn industry-recognized certificates that validate your skills
              and enhance your career opportunities.
            </p>
          </div>

          {/* Benefits */}
          <div className="row g-4">
            {benefits.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="cert-card">
                  <div className="cert-icon">{item.icon}</div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Showcase */}
          <div className="row align-items-center cert-showcase">
            <div className="col-lg-6 mb-4">
              <div className="certificate-wrapper">
                <div className="certificate-sample">
                  <div className="certificate-header">
                    CERTIFICATE OF COMPLETION
                  </div>

                  <div className="certificate-logo">
                    <FaCertificate />
                  </div>

                  <p className="presented-text">
                    This Certificate is Proudly Presented To
                  </p>

                  <h2>Akriti Sharma</h2>

                  <p>
                    For successfully completing the professional training
                    program in
                  </p>

                  <h4>Full Stack Web Development</h4>

                  <p>
                    Demonstrating exceptional dedication, technical knowledge,
                    and project execution skills.
                  </p>

                  <div className="certificate-seal">VERIFIED</div>

                  <div className="certificate-footer">
                    <div>
                      <span>Trainer Signature</span>
                    </div>

                    <div>
                      <span>Authorized Signatory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="cert-content">
                <h2>Professional Certification Included</h2>

                <p>
                  Upon successful completion of the training program, students
                  receive a premium industry-recognized certificate that
                  validates their practical and technical expertise.
                </p>

                <ul className="cert-list">
                  <li>✔ Industry Recognized Certification</li>
                  <li>✔ Internship Completion Certificate</li>
                  <li>✔ Live Project Experience Proof</li>
                  <li>✔ QR Verification Enabled</li>
                  <li>✔ Resume Enhancement</li>
                  <li>✔ LinkedIn Profile Value</li>
                  <li>✔ Placement Support</li>
                </ul>

                <button className="btn btn-warning fw-bold px-4 py-2">
                  View Sample Certificate
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="row mt-5 text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="cert-stat">
                <h3>5000+</h3>
                <p>Certificates Issued</p>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <div className="cert-stat">
                <h3>100+</h3>
                <p>Training Batches</p>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <div className="cert-stat">
                <h3>95%</h3>
                <p>Placement Success</p>
              </div>
            </div>

            <div className="col-md-3 col-6 mb-4">
              <div className="cert-stat">
                <h3>200+</h3>
                <p>Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}