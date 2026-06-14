// PlacementToast.jsx

import React, { useEffect, useState } from "react";

import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaLaptopCode,
} from "react-icons/fa";

import "../assets/mycss/toastcontainer.css";

export default function PlacementToast() {
  

  const students = [

    {
      name: "Akshit Sharma",
      company: "TCS",
      role: "Frontend Developer",
      location: "Noida",
      package: "6.5 LPA",
      image:
        "https://img.magnific.com/free-photo/young-male-student-with-modern-laptop-color-background_231208-14335.jpg?semt=ais_hybrid&w=740&q=80",
    },

    {
      name: "Priya Verma",
      company: "Infosys",
      role: "React Developer",
      location: "Bangalore",
      package: "7.2 LPA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmayjF2apAiLp-arZVN6zmoYuQgsnWkDUCBp-I-pl1kimCbuFai-Qq94&s=10",
    },

    {
      name: "Rahul Singh",
      company: "Wipro",
      role: "Software Engineer",
      location: "Pune",
      package: "5.8 LPA",
      image:
        "https://eazypc.in/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-07-10-at-11.55.51-PM-1-r8l9ssk1zxnmvi60f7jcfibkic3zqy44ltei7czrmw.webp",
    },

    {
      name: "Sneha Kapoor",
      company: "Capgemini",
      role: "Full Stack Developer",
      location: "Hyderabad",
      package: "8 LPA",
      image:
        "https://img.magnific.com/free-photo/girl-student-with-laptop-standing-by-window-corridor_1303-20640.jpg",
    },

  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [closed, setClosed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  

  useEffect(() => {

    if (closed) return;

    const interval = setInterval(() => {

      setShow(false);

      setTimeout(() => {

        setIndex((prev) =>
          (prev + 1) % students.length
        );

        setShow(true);

      }, 500);

    }, 5000);

    return () => clearInterval(interval);

  }, [closed]);

  if (closed) return null;

  return (

  <div
  className={`premium-toast ${show ? "show" : ""} ${
    isClosing ? "toast-closing" : ""
  }`}
>

      {/* Close */}
     <button
  className="premium-close-btn academy-close-action1"
  onClick={() => {
    setIsClosing(true);

    setTimeout(() => {
      setClosed(true);
    }, 300);
  }}
>
  ✕
</button>

      {/* Left Image */}
      <div className="premium-image-wrapper">

        <img
          src={students[index].image}
          alt=""
        />

        <div className="online-dot"></div>

      </div>

      {/* Right Content */}
      <div className="premium-toast-content">

        {/* Heading */}
        <div className="top-line">

          <h4>
            {students[index].name}
          </h4>

          <span className="hired-badge">
            🎉 Hired
          </span>

           

        </div>

        {/* Company */}
      

        {/* Role */}
       <div className="d-flex justify-content-between">
         <div className="role-box">

          <span style={{fontSize:"12px", fontWeight:"bold"}}>{students[index].role}</span>

        </div>

          <p className="company-line mt-2">

          <FaLaptopCode />
           <span style={{fontSize:"15px"}}>
            
          Selected in
          <span className="text-warning fw-bold">
            {students[index].company}
          </span>
           </span>

        </p>
       </div>

        {/* Bottom */}
        <div className="bottom-details">

          <span className="text-primary fw-bold">
            <FaMapMarkerAlt />
            {students[index].location}
          </span>

           <span className="salary" style={{fontSize:"13px"}}>
            {students[index].package}
          </span>

        

        </div>

        {/* Progress Line */}
        <div className="progress-line">

          <div
            key={index}
            className="progress-fill"
          ></div>

        </div>

      </div>

    </div>
  );
}