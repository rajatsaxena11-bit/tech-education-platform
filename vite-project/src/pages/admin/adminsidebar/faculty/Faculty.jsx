// FacultyAdmin.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUserTie,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaMoneyBillWave,
  FaEye,
  FaEdit,
  FaTrash,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/faculty/faculty.css";
import { Link, useNavigate } from "react-router-dom";

export default function FacultyAdmin() {
  const [faculty, setfaculty] = useState([]);
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
    fetch(`https://server-5-n0c3.onrender.com/FacultyTrainers/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setfaculty((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/FacultyTrainers")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfaculty(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredCourse = faculty.filter((item) => {

    const matchesSearch =

      (item.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.role || "")
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
     className={`faculty-content container-fluid ${closing ? "faculty-content-close" : ""}`} style={{ marginTop: "130px" }}>
      
    

      {/* HEADER */}

      <div className="faculty-header">

        <div className="explore-course-btn2">

          <h2 style={{ fontSize: "25px" }}>Welcome To Faculty Management</h2>

          <p className="text-light">
            Manage trainers, schedules & salary details.
          </p>
          <div className="btn-shine-effect2"></div>
        </div>

        <div className="d-flex">
          <Link to={`/addfaculty`}>
            <button className="explore-course-btn add-btn mx-3">
              <FaPlus />
              Add Faculty
              <div className="btn-shine-effect"></div>
            </button>
          </Link>

          <button
            type="button"
            className="add-course-btn explore-course-btn"
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
            <FaUserTie />
          </div>

          <div>

            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>45+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Faculty</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaCheckCircle />
          </div>

          <div>

            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>32</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Active Faculty</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaBookOpen />
          </div>

          <div>

            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>120+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Courses Assigned</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaMoneyBillWave />
          </div>

          <div>

            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹8.5L</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Monthly Salary</p>
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
            placeholder="Search faculty..."
          />

        </div>

        <select>

          <option>All Faculty</option>

          <option>Active</option>

          <option>On Leave</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="faculty-table courses-table table table-striped table-hover table-bordered">

          <thead>

            <tr>
              <th>Faculty</th>
              <th>Specialization</th>
              <th>Courses</th>
              <th>Experience</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Upcoming Batch</th>
              <th>Continue Batch</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredCourse.length > 0 ? (
              filteredCourse.map((item) => (

                <tr key={item.id}>

                  {/* FACULTY */}

                  <td>

                    <div className="faculty-info">

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

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.role}</td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.role}</td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.Experience}</td>

                  <td>

                    <span className="salary" style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {item.salary}
                    </span>

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
                  <td></td>
                  <td></td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/viewfaculty/${item.id}`}>
                        <button className="edit-btn bg-primary">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/editfaculty/${item.id}`}>
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

      {/* SCHEDULE SECTION */}

      <div className="schedule-section">

        <h4>Today's Faculty Schedule</h4>

        <div className="schedule-grid">

          <div className="schedule-card">

            <h4>Rajat Saxena</h4>

            <p>MERN Stack Batch</p>

            <span>10:00 AM - 12:00 PM</span>

          </div>

          <div className="schedule-card">

            <h4>Priya Sharma</h4>

            <p>React JS Batch</p>

            <span>1:00 PM - 3:00 PM</span>

          </div>

          <div className="schedule-card">

            <h4>Aman Verma</h4>

            <p>Python Batch</p>

            <span>4:00 PM - 6:00 PM</span>

          </div>

        </div>

      </div>

    </div>
  );
}