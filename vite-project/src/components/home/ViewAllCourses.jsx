import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBug,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../assets/mycss/home/viewallcourses.css";
import OurPlacedStudents from "../placements/PlacedStudents";

export default function ViewAllCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Master HTML, CSS, JavaScript, React JS and modern UI development.",
      students: "1200+ Students",
      price: "25,000",
      path: "/frontenddeveloper",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Learn Node.js, Express.js, MongoDB, APIs and authentication.",
      students: "900+ Students",
      price: "35,000",
      path: "/backenddeveloper",
    },
    {
      icon: <FaLayerGroup />,
      title: "MERN Stack Development",
      desc: "Become a Full Stack Developer using MongoDB, Express, React and Node.",
      students: "1500+ Students",
      price: "50,000",
      path: "/merndeveloper",
    },
    {
      icon: <FaBug />,
      title: "Software Testing",
      desc: "Master Manual Testing, Automation Testing, Selenium and API Testing.",
      students: "700+ Students",
      price: "28,000",
      path: "/softwaretestingdeveloper",
    },
  ];

  return (
  <>
      <section className="vac-section mt-5">
      <div className="container">
        <motion.div
          className="vac-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="vac-course-price1 text-light" style={{fontSize:"12px"}}>Explore Programs</span>
          <br />
          <h2 >View All Courses</h2>
          <p>
            Industry-focused training programs designed to help you become
            job-ready with practical projects and expert mentorship.
          </p>
        </motion.div>

        <div className="vac-grid" style={{cursor:"pointer"}}>
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="vac-course-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <div className="vac-card-badge">
                Most Popular
              </div>

              <div className="vac-course-icon">
                {course.icon}
              </div>

              <div className="vac-course-content">
                <h3>{course.title}</h3>

                <p>{course.desc}</p>

                <div className="vac-course-meta">
                  <span>⭐ 4.9 Rating</span>
                  <span>👨‍🎓 {course.students}</span>
                </div>
              </div>

              <h4 className="vac-course-price">
                ₹{course.price}
              </h4>
              <div className="vac-course-footer">

                <button
                  className="vac-course-btn vac-course-price1 text-light"
                  onClick={() => navigate(course.path)}
                >
                  Explore Course
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <OurPlacedStudents/>
  </>
  );
}