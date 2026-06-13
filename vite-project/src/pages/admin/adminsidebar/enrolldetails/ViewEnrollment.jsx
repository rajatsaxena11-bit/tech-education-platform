// ViewEnrollment.jsx

import React, { useEffect, useState } from "react";

import {
  FaUserGraduate,
  FaBookOpen,
  FaMoneyBillWave,
  FaCheckCircle,
  FaArrowLeft,
  FaDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/enrollmentdetails/viewenrollment.css";

export default function ViewEnrollment() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/Enroll/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  if (!student) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (

    <div
      className={`view-enrollment-page container ${closing ? "page-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="view-header">

        <div>

          <h2 style={{ fontSize: "25px" }}>Enrollment Details</h2>

          <p>
            View complete student enrollment information.
          </p>

        </div>

        <button
          className="explore-course-btn add-btn mx-3"
          onClick={handleClose}
        >
          <FaArrowLeft />
          Back
          <div className="btn-shine-effect"></div>
        </button>



      </div>

      {/* PROFILE CARD */}

      <div className="profile-card">

        <div className="profile-left">

          {/* <img
            src={
              student.image ||
              "https://randomuser.me/api/portraits/men/32.jpg"
            }
            alt=""
          /> */}

          <div>

            <h3 style={{ fontSize: "20px" }}>{student.name}</h3>

            <p>
              Student ID : #{student.studentId}
            </p>

            <span className="active-badge">
              {student.status}
            </span>

          </div>

        </div>

        <button className="career-primary-btn download-btn">

          <FaDownload />

          Download Receipt

        </button>

      </div>

      {/* DETAILS GRID */}

      <div className="details-grid">

        <div className="detail-card">

          <div className="detail-icon blue">
            <FaBookOpen />
          </div>

          <div>

            <p>Course</p>

            <h4>{student.course}</h4>

          </div>

        </div>

        <div className="detail-card">

          <div className="detail-icon green">
            <FaMoneyBillWave />
          </div>

          <div>

            <p>Payment</p>

            <h4>{student.payment}</h4>

          </div>

        </div>

        <div className="detail-card">

          <div className="detail-icon purple">
            <FaUserGraduate />
          </div>

          <div>

            <p>Batch</p>

            <h4>{student.batch}</h4>

          </div>

        </div>

        <div className="detail-card">

          <div className="detail-icon orange">
            <FaCalendarAlt />
          </div>

          <div>

            <p>Enrollment Date</p>

            <h4>{student.date}</h4>

          </div>

        </div>

      </div>

      {/* PROGRESS */}

      <div className="progress-section">

        <div className="section-title">

          <h3>Course Progress</h3>

        </div>

        <div className="progress-box-view" style={{ marginTop: "-100px" }}>

          <div className="progress-bar-view">

            <div
              className="progress-fill-view"
              style={{
                width: `${student.progress}%`,
              }}
            ></div>

          </div>

          <span>
            {student.progress}% Completed
          </span>

        </div>

      </div>

      {/* EXTRA DETAILS */}

      <div className="extra-details">

        {/* STUDENT INFO */}

        <div className="extra-card">

          <h4>Student Information</h4>

          <div className="info-row">

            <FaPhoneAlt className="info-icon" />

            <span>
              +91 9876543210
            </span>

          </div>

          <div className="info-row">

            <FaEnvelope className="info-icon" />

            <span>
              student@gmail.com
            </span>

          </div>

          <div className="info-row">

            <FaUserGraduate className="info-icon" />

            <span>
              Regular Student
            </span>

          </div>

        </div>

        {/* TRAINER INFO */}

        <div className="extra-card">

          <h4>Trainer Details</h4>

          <p>
            Trainer :
            <span> Rajat Saxena</span>
          </p>

          <p>
            Timing :
            <span> 10:00 AM - 12:00 PM</span>
          </p>

          <p>
            Mode :
            <span> Offline</span>
          </p>

        </div>

        {/* ATTENDANCE */}

        <div className="extra-card">

          <h4>Attendance</h4>

          <p>
            Total Classes :
            <span> 40</span>
          </p>

          <p>
            Attended :
            <span> 34</span>
          </p>

          <p>
            Attendance :
            <span> 85%</span>
          </p>

        </div>

        {/* PAYMENT */}

        <div className="extra-card">

          <h4>Payment Details</h4>

          <p>
            Total Fees :
            <span> ₹45,000</span>
          </p>

          <p>
            Paid :
            <span> ₹30,000</span>
          </p>

          <p>
            Due :  <span className="due-text">
              ₹15,000
            </span>

          </p>

        </div>

      </div>

    </div>
  );
}