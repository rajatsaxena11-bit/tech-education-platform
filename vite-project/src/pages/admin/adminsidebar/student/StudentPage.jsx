

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
import { Link, useNavigate } from "react-router-dom";

export default function RecentStudents() {

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

  const filteredStudent = students.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus
  })

  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/Students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/Students/${id}`, {
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
      className={`students-table-card ${closing ? "page-closing" : ""
        }`}
    >

      <div className="table-header mt-5">

        <div>
          <div className="student-stats d-flex justify-content-between mt-5" style={{ cursor: "pointer" }}>

            <div className="stat-card placed" >
              <h3 >5,000+</h3>
              <p>Total Students</p>
            </div>

            <div className="stat-card placed">
              <h3>3,000+</h3>
              <p>Placed Students</p>
            </div>

            <div className="stat-card pending">
              <h3>1500+</h3>
              <p>Pending Students</p>
            </div>

            <div className="stat-card rate">
              <h3>100%</h3>
              <p>Placement Rate</p>
            </div>

          </div>

          <h2>
            Recent Placement Students
          </h2>

          <p>
            Manage recently enrolled students
          </p>
          <input type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}

            className="form-control border-3 mt-3"
            placeholder="Search........." />

        </div>

        <section className="d-flex" style={{ background: "none" }}>

        <button
  className="add-course-btn explore-course-btn mt-5"
  onClick={handleClose}
>
  <FaArrowLeft />
  Back
  <div className="btn-shine-effect"></div>
</button>

          <Link to="/addstudent">
            <button className="btn btn-primary  mt-5 mx-3 explore-course-btn">
              Add Student
              <div className="btn-shine-effect"></div>
            </button>
          </Link>

          <button className="btn btn-primary explore-course-btn mt-5">
            View All
            <div className="btn-shine-effect"></div>
          </button>
        </section>


      </div>


      {/* TABLE */}



      <table className="courses-table table table-striped table-hover table-bordered mt-5" >

        <thead>

          <tr className="text-center">

            {/* <th>No.</th> */}

            <th>Student</th>

            <th>Phone</th>

            <th>Email</th>

            <th>Student ID</th>

            <th>Course</th>

            <th>Company</th>

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

                <td style={{ fontSize: "14px", fontWeight: "bold" }}>

                  {student.name}

                </td>


                <td style={{ fontSize: "14px", fontWeight: "bold" }}>

                  {student.number}

                </td>

                {/* ID */}

                <td style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {student.email}
                </td>

                <td style={{ fontSize: "14px", fontWeight: "bold" }} className="text-success">
                  {student.studentId}
                </td>



                {/* COURSE */}

                <td style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {student.course}
                </td>

                {/* COMPANY */}

                <td style={{ fontSize: "14px", fontWeight: "bold", color: "navy" }} >
                  {student.company}
                </td>

                {/* STATUS */}

                <td >

                  <div
                    className={`status-badge ${student.status}`}
                  >

                    {
                      student.status === "Placed"
                        ? <FaCheckCircle />
                        : <FaClock />
                    }

                    {student.status}

                  </div>

                </td>

                {/* ACTIONS */}

                <td>

                  <div className="action-buttons">

                    <Link to={`/viewstudentdetails/${student.id}`}>
                      <button className="view-btn bg-primary text-light">
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