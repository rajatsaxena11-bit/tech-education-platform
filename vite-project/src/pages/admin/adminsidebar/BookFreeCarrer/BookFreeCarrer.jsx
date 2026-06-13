

import React, { useEffect, useState } from "react";
// import { FaEye } from "react-icons/fa";

import {
  FaEye,
  FaEdit,
  FaTrash,
  FaCheckCircle,
  FaClock,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/student/studentcss.css";
import '../../../../assets/admincss/sidebarcss/bookfreecarrer/bookfreecarrer.css'
import { Link, useNavigate } from "react-router-dom";

export default function BookFreeCarrer() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard");
    }, 400);
  };

  const [students, setStudents] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setstatusFilter] = useState("All")


  const navigate = useNavigate()

  const filteredStudent = (students || []).filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  useEffect(() => {
    fetch("http://localhost:4000/BookFreeCarrer")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
      })
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/BookFreeCarrer/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setStudents((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }

  return (

    <div
      className={`students-table-card ${closing ? "page-closing" : ""
        }`}
    >

      {/* HEADER */}

      <div className="table-header">

        <div>


          <h2>
            Book Free Carrer
          </h2>

          <p>
            Manage recently book free carrer
          </p>
          <input type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            className="form-control border-3 mt-3"
            placeholder="Search........." />

        </div>

        <section className="d-flex" style={{ background: "none" }}>
          <button
            className="add-course-btn explore-course-btn mx-3 mt-5"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>
          </button>
          <button className="btn btn-primary explore-course-btn mt-5">
            View All
            <div className="btn-shine-effect"></div>
          </button>
        </section>


      </div>


      {/* TABLE */}



      <table className="courses-table table table-striped table-hover table-bordered" >

        <thead>

          <tr className="text-center">

            {/* <th>No.</th> */}

            <th>Student</th>

            <th>Phone</th>

            <th>Email</th>

            <th>Course</th>

            <th>Address</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {filteredStudent.length > 0 ? (
            filteredStudent.map((student, index) => (

              <tr key={index} className="text-center">

                {/* STUDENT */}

                {/* <td>
                    {student.id}
                  </td> */}

                <td style={{ fontSize: "15px", fontWeight: "bold" }}>

                  {student.name}

                </td>


                <td style={{ fontSize: "15px", fontWeight: "bold" }}>

                  {student.number}

                </td>

                {/* ID */}

                <td style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {student.email}
                </td>

                {/* COURSE */}

                <td style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {student.course}
                </td>

                <td style={{ fontSize: "15px", fontWeight: "bold" }}>
                  {student.address}
                </td>


                {/* STATUS */}

                <td>
                  <div
                    className={`status-badge1 ${student.status === "Placement Related"
                      ? "status-success"
                      : "status-pending"
                      }`}
                  >
                    <span className="status-icon">
                      {student.status === "Placement Related" ? (
                        <FaCheckCircle />
                      ) : (
                        <FaClock />
                      )}
                    </span>

                    <span className="status-text">
                      {student.status}
                    </span>
                  </div>
                </td>

                {/* ACTIONS */}

                <td>

                  <div className="action-buttons">

                    <Link to={`/eyestudent/${student.id}`}>
                      <button className="edit-btn text-light">
                        <FaEye />
                      </button>
                    </Link>

                    <Link to={`/editstudent/${student.id}`}>
                      <button className="edit-btn">
                        <FaEdit />
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

  );
}