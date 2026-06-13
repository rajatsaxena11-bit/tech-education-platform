import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaTasks,
  FaFileAlt,
  FaUsers,
  FaComments,
  FaHandshake,
  FaTrophy,
} from "react-icons/fa";

import '../../assets/mycss/placements/placementprocess1.css'
import HighestPackages from "./highestpackage";


const processSteps = [
  {
    icon: <FaUserGraduate />,
    title: "Enrollment",
    desc: "Join the course and start your IT career journey.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technical Training",
    desc: "Learn Frontend, Backend, React, Java, Python and projects.",
  },
  {
    icon: <FaTasks />,
    title: "Live Projects",
    desc: "Work on industry-level real-world projects.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Building",
    desc: "Professional resume and LinkedIn profile optimization.",
  },
  {
    icon: <FaUsers />,
    title: "Mock Interviews",
    desc: "HR + Technical interview preparation sessions.",
  },
  {
    icon: <FaComments />,
    title: "Soft Skills Training",
    desc: "Communication and personality development.",
  },
  {
    icon: <FaHandshake />,
    title: "Interview Drives",
    desc: "Attend hiring partner interview drives.",
  },
  {
    icon: <FaTrophy />,
    title: "Get Placed",
    desc: "Receive offer letter and start your dream job.",
  },
];

export default function PlacementProcess() {
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
    <section className="placement-process mt-5" style={{ cursor: "pointer" }}>

      <div className="floating-icons">
        <span>🎉</span>
        <span>🏆</span>
        <span>🚀</span>
        <span>💼</span>
        <span>✨</span>
      </div>

      <h2 className="process-title">
        Our Placement Process
      </h2>

      <div className="gold-line"></div>

      <div className="timeline">

        {processSteps.map((step, index) => (
          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>
        ))}

      </div>
      <HighestPackages />
    </section>
  );
}