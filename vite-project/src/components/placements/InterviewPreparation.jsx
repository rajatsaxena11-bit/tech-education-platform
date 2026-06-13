import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaUserTie,
  FaComments,
  FaLaptopCode,
  FaUsers,
  FaBrain,
  FaFileAlt,
  FaTrophy,
} from "react-icons/fa";

import "../../assets/mycss/placements/interviewpreparation1.css";
import PlacementSlider from "../home/PlacementSuccessful";

const interviewSteps = [
  {
    icon: <FaCode />,
    title: "Coding Round",
    description:
      "DSA, JavaScript, React, Java, Python and coding challenges.",
  },
  {
    icon: <FaBrain />,
    title: "Aptitude Training",
    description:
      "Logical reasoning, quantitative aptitude and verbal skills.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technical Interview",
    description:
      "Core programming concepts, projects and problem solving.",
  },
  {
    icon: <FaUserTie />,
    title: "HR Interview",
    description:
      "Self introduction, strengths, weaknesses and confidence building.",
  },
  {
    icon: <FaUsers />,
    title: "Group Discussion",
    description:
      "Communication skills and team collaboration practice.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Review",
    description:
      "Professional resume creation and LinkedIn optimization.",
  },
  {
    icon: <FaComments />,
    title: "Mock Interviews",
    description:
      "Live HR + Technical mock interview sessions.",
  },
  {
    icon: <FaTrophy />,
    title: "Placement Success",
    description:
      "Get ready for interviews with top hiring partners.",
  },
];

export default function InterviewPreparation1() {
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
      <section className="interview-section mt-5">

        <div className="celebration">
          <span>🎉</span>
          <span>🏆</span>
          <span>🚀</span>
          <span>💼</span>
          <span>✨</span>
        </div>

        <h2 className="interview-title" style={{ fontSize: "25px" }}>
          Interview Preparation Program
        </h2>

        <div className="gold-line"></div>

        <div className="interview-grid">
          {interviewSteps.map((item, index) => (
            <div className="interview-card" key={index}>

              <div className="step-badge">
                {index + 1}
              </div>

              <div className="interview-icon">
                {item.icon}
              </div>

              <h3 style={{ color: "#888" }}>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>
      </section>
      <PlacementSlider />
    </>
  );
}