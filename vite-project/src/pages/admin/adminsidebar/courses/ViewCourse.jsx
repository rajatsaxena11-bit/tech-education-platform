// ViewCourse.jsx

import React, { useEffect, useState } from "react";

import {
  FaClock,
  FaUsers,
  FaStar,
  FaBookOpen,
  FaLaptopCode,
  FaPlayCircle,
  FaAward,
  FaArrowLeft,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

import { Link, useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/courses/viewcourse.css";

export default function ViewCourse() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/CoursesManagement/${id}`)

      .then((res) => res.json())

      .then((data) => {

        setCourse(data);

      })

      .catch((err) => console.log(err));

  }, [id]);

  if (!course) {

    return (

      <div className="loading-screen">

        Loading...

      </div>

    );

  }

  return (

    <div className="view-course-page container-fluid p-5 mt-5">

      {/* HEADER */}

      <div className="view-course-header">



      </div>

      {/* HERO */}

      <div className="course-hero">

        {/* LEFT */}

        <div className="hero-left">

          <span className="course-badge">

            {course.status}

          </span>

          <h1>

            {course.title}

          </h1>

          <p>

            Master modern development with
            real-world projects and placement
            support.

          </p>

          {/* STATS */}

          <div className="hero-stats">

            <div className="hero-stat-card">

              <FaUsers />

              <div>

                <h4 style={{ fontSize: "20px", color:"#fff" }}>
                  {course.student}
                </h4>

                <span style={{color:"#fff"}}>
                  Students
                </span>

              </div>

            </div>

            <div className="hero-stat-card">

              <FaClock />

              <div>

                <h4 style={{ fontSize: "20px",color:"#fff" }}>
                  6 Months
                </h4>

                <span style={{color:"#fff"}}>
                  Duration
                </span>

              </div>

            </div>

            <div className="hero-stat-card">

              <FaStar />

              <div>

                <h4 style={{ fontSize: "20px",color:"#fff" }}>
                  4.9
                </h4>

                <span style={{color:"#fff"}}>
                  Rating
                </span>

              </div>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <Link to={`/editcourse/${course.id}`}>
              <button className="add-course-btn career-primary-btn ">

                Edit Course

              </button>
            </Link>

            <button className="add-course-btn career-primary-btn">

              Share

            </button>
            <button className="add-course-btn career-primary-btn float-end" onClick={() => navigate(-1)}>
              {/* <FaBack /> */}
              Back
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <img
            src={course.image}
            alt=""
            className="w-100"
          />

        </div>

      </div>

      {/* ANALYTICS */}

      <div className="analytics-grid">

        <div className="analytics-card">

          <div className="analytics-icon blue">
            <FaBookOpen />
          </div>

          <div>

            <h3 style={{ fontSize: "20px", color:"#fff", fontWeight:"500" }}>
              120+
            </h3>

            <p>
              Lectures
            </p>

          </div>

        </div>

        <div className="analytics-card">

          <div className="analytics-icon green">
            <FaLaptopCode />
          </div>

          <div>

            <h3 style={{ fontSize: "20px", color:"#fff", fontWeight:"500" }}>
              15+
            </h3>

            <p>
              Live Projects
            </p>

          </div>

        </div>

        <div className="analytics-card">

          <div className="analytics-icon orange">
            <FaAward />
          </div>

          <div>

            <h3 style={{ fontSize: "20px", color:"#fff", fontWeight:"500" }}>
              Certificate
            </h3>

            <p>
              Included
            </p>

          </div>

        </div>

        <div className="analytics-card">

          <div className="analytics-icon purple">
            <FaChartLine />
          </div>

          <div>

            <h3 style={{ fontSize: "20px", color:"#fff", fontWeight:"500" }}>
              95%
            </h3>

            <p>
              Placement Rate
            </p>

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="course-content-grid">

        {/* LEFT */}

        <div className="course-main-content">

          {/* ABOUT */}

          <div className="content-card">

            <h3>

              About Course

            </h3>

            <p>

              {course.description ||
                "Learn complete frontend and backend development with real-world projects, API integration, authentication, deployment and placement preparation."}

            </p>

          </div>

          {/* SKILLS */}

          <div className="content-card">

            <h3>

              Skills You'll Learn

            </h3>

            <div className="skills-grid">

              <span>React JS</span>

              <span>Node JS</span>

              <span>MongoDB</span>

              <span>Express JS</span>

              <span>REST API</span>

              <span>JWT Auth</span>

              <span>Redux</span>

              <span>Bootstrap</span>

            </div>

          </div>

          {/* MODULES */}

          <div className="content-card">

            <h3>

              Course Modules

            </h3>

            <div className="module-list">

              <div className="module-item">

                <FaPlayCircle />

                <span>
                  Module 1 - HTML & CSS
                </span>

              </div>

              <div className="module-item">

                <FaPlayCircle />

                <span>
                  Module 2 - JavaScript
                </span>

              </div>

              <div className="module-item">

                <FaPlayCircle />

                <span>
                  Module 3 - React JS
                </span>

              </div>

              <div className="module-item">

                <FaPlayCircle />

                <span>
                  Module 4 - Backend API
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="course-sidebar">

          {/* TRAINER */}

          <div className="sidebar-card">

            <h3 style={{ fontSize: "21px", fontWeight: "500" }}>

              Trainer Details

            </h3>
            <hr />

            <div className="trainer-info">

              {/* <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              /> */}

              <div>

                <h4 >

                  {course.trainer}

                </h4>

                <p style={{color:"#fff"}}>

                  Senior Developer

                </p>

              </div>

            </div>

            <div className="trainer-stats">

              <div>

                <strong>
                  8+
                </strong>

                <span>
                  Years Exp.
                </span>

              </div>

              <div>

                <strong style={{color:"#fff"}}>
                  120+
                </strong>

                <span style={{color:"#fff"}}>
                  Courses
                </span>

              </div>

            </div>

          </div>

          {/* FEATURES */}

          <div className="sidebar-card">

            <h3>

              Course Features

            </h3>

            <div className="feature-list">

              <div>

                <FaCheckCircle />

                Live Classes

              </div>

              <div>

                <FaCheckCircle />

                Placement Support

              </div>

              <div>

                <FaCheckCircle />

                Certificate

              </div>

              <div>

                <FaCheckCircle />

                Projects Included

              </div>

            </div>

          </div>

          {/* PRICE */}

          <div className="sidebar-card price-card">

            <h3>

              Fees : ₹{course.fees ? "50,000" : ""}

            </h3>

            <button className="add-course-btn career-primary-btn text-center">

              Enrolled Students

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}