// EnrollmentDetails.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUserGraduate,
  FaMoneyBillWave,
  FaCheckCircle,
  FaBookOpen,
  FaEye,
  FaEdit,
  FaTrash,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/enrollmentdetails/enrolldetails.css";
import { Link, useNavigate } from "react-router-dom";

export default function EnrollmentDetails() {
  const [enrollments, setEnrollments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard");
    }, 400);
  };

  let navigate = useNavigate()


  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/Enroll/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setEnrollments((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/Enroll")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnrollments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredCourse = enrollments.filter((item) => {

    const matchesSearch =

      (item.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.batch || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());



    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus;

  });
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <h4>Loading Students...</h4>
      </div>
    );
  }

  return (

    <div
      className={`enrollment-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="enrollment-header">

        <div className="explore-course-btn2">

          <h2 style={{ fontSize: "25px" }}>Welcome To Enrollment Details</h2>

          <p className="text-light">
            Manage enrolled students, batches & payments.
          </p>
          <div className="btn-shine-effect2"></div>

        </div>

        <div className="d-flex">
          <Link to="/addnewenrollment">
            <button className="explore-course-btn add-btn mx-3">
              <FaPlus />
              New Enrollment
              <div className="btn-shine-effect"></div>

            </button>
          </Link>

          <button
            className="explore-course-btn add-btn mx-3"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>

          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stats-card explore-course-btn">

          <div className="stats-icon blue">
            <FaUserGraduate />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>12K+</h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>Total Enrollments</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaCheckCircle />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>9.5K</h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>Active Students</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaBookOpen />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>5.2K</h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>Completed Courses</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaMoneyBillWave />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>₹15L</h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>Revenue Generated</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

      </div>

      {/* TOOLBAR */}

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search enrolled students..."
          />

        </div>

        <select>

          <option>All Courses</option>

          <option>MERN Stack</option>

          <option>React JS</option>

          <option>Python</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="enrollment-table table table-striped table-hover table-bordered ">

          <thead>

            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Enroll Date</th>
              <th>Payment</th>
              <th>Progress</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredCourse.length > 0 ? (
              filteredCourse.map((item) => (

                <tr key={item.id}>

                  {/* STUDENT */}

                  <td>

                    <div className="student-info">

                      {/* <img
                        src={item.image}
                        alt=""
                      /> */}

                      <div>

                        <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>{item.name}</h4>

                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>ID : #{item.studentId}</p>

                      </div>

                    </div>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.course}</td>

                  <td>

                    <span className="batch">
                      {item.batch}
                    </span>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.date}</td>

                  {/* PAYMENT */}

                  <td>

                    <span
                      className={`payment ${(item.payment || "")
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {item.payment}
                    </span>

                  </td>

                  {/* PROGRESS */}

                  <td>

                    <div className="progress-box">

                      <div className="progress-bar">

                        <div
                          className="progress-fill"
                          style={{
                            width: `${item.progress}%`,
                          }}
                        ></div>

                      </div>

                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>{item.progress}%</span>

                    </div>

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status ${item.status
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/viewenrollment/${item.id}`}>
                        <button className="edit-btn">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/editenrollment/${item.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  No Course Found
                </td>

              </tr>

            )}



          </tbody>

        </table>

      </div>

    </div>
  );
}