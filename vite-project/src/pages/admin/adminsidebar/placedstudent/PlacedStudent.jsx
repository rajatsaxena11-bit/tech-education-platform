
import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUsers,
  FaBuilding,
  FaChartLine,
  FaTrophy,
  FaEye,
  FaEdit,
  FaTrash,
  FaFileInvoice,
  FaArrowLeft
} from "react-icons/fa";

import '../../../../assets/admincss/sidebarcss/placedstudent/placedstudent.css'
import { Link, useNavigate } from "react-router-dom";

export default function PlacedStudents() {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setstatusFilter] = useState("All")
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard");
    }, 400);
  };

  let navigate = useNavigate()

  const filteredstudent = students.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus
  })

  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/PlacedStudent/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setStudents((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/PlacedStudent")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [])

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
      className={`placed-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="placed-header">

        <div className="explore-course-btn2">
          <h2 style={{ fontSize: "25px" }}>Welcome To Hired Students</h2>
          <p className="text-light">
            Manage all placed student records.
          </p>
          <div className="btn-shine-effect2"></div>
        </div>

        <div className="d-flex">
          <Link to="/addhiredstudentlist">
            <button className="explore-course-btn add-btn mx-3">
              <FaPlus />
              Add Placement
              <div className="btn-shine-effect"></div>
            </button>
          </Link>
          <button
            className="explore-course-btn add-btn"
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
            <FaUsers />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>850+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Placements</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaTrophy />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹18 LPA</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Highest Package</p>
            <div className="btn-shine-effect"></div>
          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaBuilding />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>120+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Hiring Companies</p>
            <div className="btn-shine-effect"></div>
          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaChartLine />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>95%</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Placement Rate</p>
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
            placeholder="Search students..."
          />

        </div>

        <select>

          <option>All Companies</option>

          <option>TCS</option>

          <option>Infosys</option>

          <option>Wipro</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="placed-table table table-striped table-hover table-bordered">

          <thead>

            <tr>
              <th>Student</th>
              <th>Company</th>
              <th>Role</th>
              <th>Package</th>
              <th>Location</th>
              <th>Status</th>
              <th>Joining Date</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredstudent.length > 0 ? (
              filteredstudent.map((student) => (

                <tr key={student.id}>

                  {/* STUDENT */}

                  <td>

                    <div className="student-info">

                      {/* <img
                      src={student.image}
                      alt=""
                      className="student-img"
                    /> */}

                      <div>

                        <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>{student.name}</h4>

                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>ID : #{student.studentId}</p>

                      </div>

                    </div>

                  </td>

                  {/* COMPANY */}

                  <td>

                    <div className="company-info">

                      <img
                        src={student.logo}
                        alt=""
                        className="company-logo"
                      />

                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>{student.company}</span>

                    </div>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{student.role}</td>

                  <td>

                    <span className="package" style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {student.package}
                    </span>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{student.location}</td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status ${student.status
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {student.status}
                    </span>

                  </td>
                  <td></td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/viewhiredstudentlist/${student.id}`}>
                        <button className="edit-btn" >
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/edithiredstudentlist/${student.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <Link to={`/studentofferletter/${student.id}`}>
                        <button className="offer-btn">
                          <FaFileInvoice />
                        </button>
                      </Link>

                      <button className="delete-btn" onClick={() => handleDelete(student.id)}>
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