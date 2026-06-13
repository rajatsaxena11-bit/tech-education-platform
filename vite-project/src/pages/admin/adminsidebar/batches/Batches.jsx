// BatchManagement.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaVideo,
  FaEye,
  FaEdit,
  FaTrash,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/batches/batchescss.css";

import { Link, useNavigate } from "react-router-dom";

export default function BatchManagement() {
  const [closing, setClosing] = useState(false);

  const [batches, setBatches] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard");
    }, 400);
  };

  /* FETCH DATA */

  useEffect(() => {

    fetch("https://server-5-n0c3.onrender.com/ScheduleBatches")

      .then((res) => res.json())

      .then((data) => {

        console.log(data);
        setBatches(data);
        setLoading(false);

      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  /* DELETE */

  const handleDelete = (id) => {

    fetch(`https://server-5-n0c3.onrender.com/ScheduleBatches/${id}`, {

      method: "DELETE"

    })

      .then((res) => {

        if (!res.ok) {

          throw new Error("Delete Failed");

        }

        setBatches((prev) =>
          prev.filter((item) => item.id !== id)
        );

      })

      .catch((err) => console.log(err));

  };

  /* FILTER */

  const filteredCourse = batches.filter((item) => {

    const matchesSearch =

      (item.batch || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.course || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.faculty || "")
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
      className={`batch-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="batch-header">

        <div className="explore-course-btn2">

          <h2 style={{ fontSize: "25px" }}>
            Welcome To Batch Management
          </h2>

          <p className="text-light">
            Manage batches, schedules & trainers efficiently.
          </p>
          <div className="btn-shine-effect2"></div>

        </div>

        <div className="d-flex">

          <Link to="/addbatchesdetails">
            <button className="explore-course-btn add-btn mx-3">
              <FaPlus />
              Create Batch
              <div className="btn-shine-effect"></div>
            </button>

          </Link>
          <button
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
            <FaBookOpen />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>
              45+
            </h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>
              Total Batches
            </p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaUsers />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>
              1200+
            </h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>
              Students Assigned
            </p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaChalkboardTeacher />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>
              25+
            </h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>
              Trainers Assigned
            </p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaVideo />
          </div>

          <div>

            <h3 style={{ fontSize: "25px" }}>
              18
            </h3>

            <p style={{ fontSize: "15px", color: "#ffff" }}>
              Live Classes Running
            </p>
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
            placeholder="Search batch..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="All">
            All Status
          </option>

          <option value="Active">
            Active
          </option>

          <option value="Upcoming">
            Upcoming
          </option>

          <option value="Completed">
            Completed
          </option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="batch-table courses-table table table-striped table-hover table-bordered">

          <thead>

            <tr>

              <th>Batch</th>

              <th>Course</th>

              <th>Trainer</th>

              <th>Students</th>

              <th>Timing</th>

              <th>Mode</th>

              <th>Progress</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredCourse.length > 0 ? (

              filteredCourse.map((item) => (

                <tr key={item.id}>

                  {/* BATCH INFO */}

                  <td>

                    <div className="batch-info">

                      <div className="batch-avatar">

                        {item.batch?.charAt(0)}

                      </div>

                      <div>

                        <h4>
                          {item.batch}
                        </h4>

                        <p>
                          Batch ID : #{item.batchId}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* COURSE */}

                  <td>
                    {item.course}
                  </td>

                  {/* TRAINER */}

                  <td>
                    {item.faculty}
                  </td>

                  {/* STUDENTS */}

                  <td>
                    {item.students}
                  </td>

                  {/* TIMING */}

                  <td>
                    {item.time}
                  </td>

                  {/* MODE */}

                  <td>

                    <span className="mode">

                      {item.mode}

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

                      <span>
                        {item.progress}%
                      </span>

                    </div>

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status mode ${item.status
                        ?.toLowerCase()}`}
                    >

                      {item.status}

                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/viewbatchesdetails/${item.id}`}>
                        <button className="edit-btn">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/editbatchesdetails/${item.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                      >

                        <FaTrash />

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="9"
                  className="text-center py-4"
                >

                  No Batch Found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}