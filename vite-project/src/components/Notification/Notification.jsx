// TechPulseNotification.jsx

import React from "react";

import { Link } from "react-router-dom";

import {
    FaBriefcase,
    FaArrowRight,
    FaBell,
} from "react-icons/fa";

import "../../assets/mycss/notification/notification.css";

export default function TechPulseNotification() {

    const alerts = [

        {
            id: 1,
            title: "TCS Mega Hiring Drive 2026 (Frontend, Backend, MERN Stack)",
            company: "TCS",
            tag: "HIRING",
        },

        {
            id: 2,
            title: "Infosys Off Campus Recruitment Frontend Developer",
            company: "Infosys",
            tag: "FRESHERS",
        },

        {
            id: 3,
            title: "Wipro Work From Home For Frontend & Backend Developer",
            company: "Wipro",
            tag: "REMOTE",
        },

        {
            id: 4,
            title: "Accenture AI Hiring Full Stack Developer",
            company: "Accenture",
            tag: "AI JOBS",
        },

        {
            id: 5,
            title: "Amazon SDE Hiring Challenge 2026",
            company: "Amazon",
            tag: "EVENT",
        },

        {
            id: 6,
            title: "Google Internship Applications Open",
            company: "Google",
            tag: "INTERNSHIP",
        },

    ];

    return (

     <div className="jobticker-wrapper partner-section-mobilerow" style={{cursor:"pointer"}}>

      {/* LEFT SECTION */}

      <div className="jobticker-left-section">

        <div className="jobticker-bell-box">
          <FaBell />
        </div>

        <span className="live-alert-text">
          Live Alerts
          <span className="live-dot"></span>
        </span>

      </div>

      {/* MARQUEE */}

      <div className="jobticker-marquee-container">

        <div className="jobticker-marquee-track">

          {[...alerts, ...alerts].map((item, index) => (
            <div
              className="jobticker-alert-card"
              key={index}
            >

              <div className="jobticker-job-icon">
                <FaBriefcase />
              </div>

              <div className="jobticker-alert-content">

                <h4>{item.title}</h4>

                <p>{item.company}</p>

              </div>

              <span className="jobticker-badge">
                {item.tag}
              </span>

            </div>
          ))}

        </div>

      </div>

      {/* RIGHT BUTTON */}

      <Link to="/viewallnotification">

        <button className="jobticker-view-btn">

          View All

          <FaArrowRight />

        </button>

      </Link>

    </div>

    );
}