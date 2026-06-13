// NewAdmission.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUserGraduate,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaEdit,
  FaTrash,
  FaFileInvoice,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/newadmission/newadmission.css";
import { Link, useNavigate } from "react-router-dom";

export default function NewAdmission() {
  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setstatusFilter] = useState("All")
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard"); // ya navigate(-1)
    }, 400);
  };

  const navigate = useNavigate()

  const filteredStudent = students.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
    item.status === statusFilter;

    return matchesSearch && matchesStatus;
  })


  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/NewAdmission/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setStudents((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/NewAdmission")
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
      className={`admission-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}
      <div className="admission-header">

        <div className="explore-course-btn2">
          <h2 style={{ fontSize: "25px" }}>Welcome To New Admissions</h2>
          <p className="text-light">
            Manage all student admissions easily.
          </p>
          <div className="btn-shine-effect"></div>
        </div>

        <div className="d-flex">
          <Link to="/addnewadmissionstudent">
            <button className="explore-course-btn add-btn mx-3">
              <FaPlus />
              Add Admission
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
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>120+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>New Admissions</p>
            <div className="btn-shine-effect"></div>
          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaCheckCircle />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>98+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Approved</p>
            <div className="btn-shine-effect"></div>
          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaClock />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>22+</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Pending</p>
            <div className="btn-shine-effect"></div>
          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaMoneyBillWave />
          </div>

          <div>
            <h4 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹2.5L</h4>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Fees Collected</p>
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
            placeholder="Search student..."
          />

        </div>

        <select>

          <option>All Status</option>

          <option>Approved</option>

          <option>Pending</option>

          <option>Fees Pending</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="admission-table courses-table table table-striped table-hover table-bordered">

          <thead>

            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Fees</th>
              {/* <th>TotalFees</th> */}
              <th>DepositFees</th>
              <th>DueFees</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredStudent.length > 0 ? (
              filteredStudent.map((item) => (

                <tr key={item.id}>

                  <td>

                    <div className="student-info">

                      {/* <img
                      src={item.image}
                      alt=""
                    /> */}

                      <div>

                        <h4 style={{ fontSize: "15px", fontWeight: "bold" }}>{item.name}</h4>

                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>Student ID : #{item.studentId}</p>

                      </div>

                    </div>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.course}</td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.number}</td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.date}</td>

                  <td style={{ color: "#111827", fontWeight: "bold", fontSize: "15px" }}>&#8377;{item?.totalfees?.toLocaleString("en-IN")}</td>

                  <td style={{ color: "#111827", fontWeight: "bold", fontSize: "15px" }}>&#8377;{item?.depositfees?.toLocaleString("en-IN")}</td>

                  <td
                    style={{
                      color: "#111827",
                      fontWeight: "bold",
                      fontSize: "15px"
                    }}
                    className={item.duefees > 0 ? "text-danger" : "text-primary"}
                  >
                    {
                      item?.duefees > 0
                        ? `₹${Number(item.duefees).toLocaleString("en-IN")}`
                        : "No Due"
                    }
                  </td>



                  <td>

                    <span
                      className={`status ${item.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <Link to={`/viewadmissionstudent/${item.id}`}>
                        <button className="edit-btn bg-primary">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/editnewadmissionstudent/${item.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <Link to={`/studentfeesreciept/${item.id}`}>
                        <button className="receipt-btn">
                          <FaFileInvoice />
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