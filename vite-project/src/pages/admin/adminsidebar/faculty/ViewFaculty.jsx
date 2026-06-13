// ViewFaculty.jsx

import React, { useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaBookOpen,
  FaMoneyBillWave,
  FaClock,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/faculty/viewfaculty.css";

export default function ViewFaculty() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const [faculty, setFaculty] = useState({});

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/FacultyTrainers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFaculty(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  return (

    <div
      className={`viewFacultyPage container-fluid ${closing ? "view-faculty-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      <div className="viewFacultyCard">

        {/* HEADER */}

        <div className="viewFacultyHeader">

          <div className="viewFacultyLeft">

            <div className="facultyProfileImage">

              <FaUserTie />

            </div>

            <div>

              <h2 style={{ fontSize: "20px" }}>{faculty.name}</h2>

              <p>{faculty.role}</p>

            </div>

          </div>

          <button
            type="button"
            className="add-course-btn career-primary-btn"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
          </button>


        </div>

        {/* DETAILS */}

        <div className="facultyDetailsGrid">

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaEnvelope />

            </div>

            <div>

              <span>Email</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.email}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaPhone />

            </div>

            <div>

              <span>Phone</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.number}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaBookOpen />

            </div>

            <div>

              <span>Courses</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.role}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaClock />

            </div>

            <div>

              <span>Experience</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.Experience}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaMoneyBillWave />

            </div>

            <div>

              <span>Salary</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.salary}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaGraduationCap />

            </div>

            <div>

              <span>Qualification</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.qualification}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaCalendarAlt />

            </div>

            <div>

              <span>Joining Date</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.date}</h4>

            </div>

          </div>

          <div className="facultyInfoCard">

            <div className="facultyIconBox">

              <FaMapMarkerAlt />

            </div>

            <div>

              <span>Location</span>

              <h4 style={{ fontSize: "15px" }}>{faculty.location}</h4>

            </div>

          </div>

        </div>

        {/* STATUS */}

        <div className="facultyStatusSection">

          <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Faculty Status</h3>

          <span
            className={`facultyStatusBadge ${faculty.status
              ?.toLowerCase()
              .replace(/ /g, "-")}`}
          >

            <FaCheckCircle />

            {faculty.status}

          </span>

        </div>

        {/* ABOUT */}

        <div className="facultyAboutSection">

          <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>About Faculty</h3>

          <p>

            {faculty.name} is an experienced trainer specializing in{" "}
            {faculty.role}. Responsible for handling live classes,
            assignments, student mentoring and interview preparation.

          </p>

        </div>

      </div>

    </div>
  );
}