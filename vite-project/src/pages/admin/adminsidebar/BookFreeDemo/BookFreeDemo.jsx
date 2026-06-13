

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
import '../../../../assets/admincss/sidebarcss/bookfreedemo/bookfreecarrer.css'
import { Link, useNavigate } from "react-router-dom";

export default function BookFreeDemo() {

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
    fetch("https://server-5-n0c3.onrender.com/Bookdemo")
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

  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/Bookdemo/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setStudents((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }

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
      className={`students-table-card ${closing ? "page-closing" : ""}`}
    >

      {/* HEADER */}

      <div className="table-header">

        <div>


          <h2>
            Book Free Demo
          </h2>

          <p>
            Manage recently book free demo
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

            <th>Location</th>

            <th>Status</th>

            <th>Date</th>

            <th>Actions</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {filteredStudent.length > 0 ? (
            filteredStudent.map((student, index) => (

              <tr key={index} className="text-center">

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
                  {student.location}
                </td>


                {/* STATUS */}

                <td className="text-primary fw-bold" style={{ fontSize: "15px" }}>
                  {student.status}
                </td>

                <td>
                  <div className="premium-date-badge">
                    📅 {student.date}
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