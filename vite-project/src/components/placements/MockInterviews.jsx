import React, { useEffect, useState } from "react";
import {
  FaUserTie,
  FaLaptopCode,
  FaComments,
  FaClipboardCheck,
} from "react-icons/fa";

import '../../assets/mycss/placements/mockinterviews.css'
import HiringPartners from "../home/HiringPartners";
import PricePlan from "../home/PricingPlan";

export default function MockInterview() {
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
  const interviewSteps = [
    {
      icon: <FaUserTie />,
      title: "HR Interview",
      description:
        "Practice common HR questions, communication skills and confidence building.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technical Interview",
      description:
        "Face real-world technical questions on programming, projects and technologies.",
    },
    {
      icon: <FaComments />,
      title: "Group Discussion",
      description:
        "Improve communication, leadership and problem-solving skills through GD sessions.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Feedback & Improvement",
      description:
        "Get detailed feedback from experts and work on improvement areas.",
    },
  ];

  return (
    <>
       <section className="mock-interview-section py-5 mt-5" style={{cursor:"pointer"}}>
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="mock-title mt-5">
            Mock Interview Program 🎯
          </h2>

          <div className="mock-line"></div>

          <p className="mock-subtitle">
            Prepare for real company interviews with industry experts
            and boost your confidence before placement drives.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {interviewSteps.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="mock-card">
                <div className="mock-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="row mt-5 text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="mock-stat">
              <h3>500+</h3>
              <p>Mock Interviews</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="mock-stat">
              <h3>95%</h3>
              <p>Interview Success Rate</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="mock-stat">
              <h3>50+</h3>
              <p>Industry Mentors</p>
            </div>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <div className="mock-stat">
              <h3>200+</h3>
              <p>Hiring Partners</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mock-cta">
          <h3>Ready for Your Dream Job?</h3>
          <p>
            Gain confidence, improve communication skills and crack
            interviews with our expert-led mock interview sessions.
          </p>

          <button className="btn btn-warning px-4 py-2 fw-bold">
            Book Mock Interview
          </button>
        </div>
      </div>
    </section>
    <HiringPartners/>
    <PricePlan/>
    </>
  );
}