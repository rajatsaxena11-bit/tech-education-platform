// EnquiryManagement.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaUserFriends,
  FaCheckCircle,
  FaClock,
  FaWhatsapp,
  FaPhoneAlt,
  FaEye,
  FaEdit,
  FaTrash,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/enquery/enquirycss.css";
import { Link, useNavigate } from "react-router-dom";

export default function EnquiryManagement() {
  const [enroll, setEnroll] = useState([]);
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
    fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setEnroll((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/EnquiriesLeads")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEnroll(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredCourse = enroll.filter((item) => {

    const matchesSearch =

      (item.source || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.counselor || "")
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
      className={`enquiry-page ${closing ? "enquiry-page-closing" : ""
        }`} style={{marginTop:"100px"}}
    >

      {/* HEADER */}

      <div className="enquiry-header">

        <div>

          <h2 style={{ fontSize: "25px" }}>Welcome To Enquiry Management</h2>

          <p>
            Manage student leads & follow-ups efficiently.
          </p>

        </div>

        <div className="d-flex">

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
            <FaUserFriends />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>1200+</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Leads</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaCheckCircle />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>320</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Converted Leads</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaClock />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>95</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Follow-ups Pending</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaUserFriends />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>25</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>New Leads Today</p>
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
            placeholder="Search enquiries..."
          />

        </div>

        <select>

          <option>All Status</option>

          <option>Interested</option>

          <option>Follow-up</option>

          <option>Converted</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="enquiry-table">

          <thead>

            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Phone</th>
              <th>Source</th>
              <th>Counselor</th>
              <th>Status</th>
              <th>Follow-up</th>
              <th>Priority</th>
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

                        <h4 style={{ fontSize: "15px" }}>{item.name}</h4>

                        {/* <p>ID : #{item.}</p> */}

                      </div>

                    </div>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.course}</td>
                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.number}</td>

                  <td>

                    <span className="source">
                      {item.source}
                    </span>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.counselor}</td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status ${(item.status || "")
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* FOLLOWUP */}

                  <td>

                    <span className="followup" style={{ fontSize: "15px", fontWeight: "bold" }}>
                      {item.followup}
                    </span>

                  </td>

                  {/* PRIORITY */}

                  <td>

                    <span
                      className={`priority ${(item.priority || "")
                        .toLowerCase()}`}
                    >
                      {item.priority}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/studentcall/${item.id}`}>
                        <button className="edit-btn bg-primary">
                          <FaPhoneAlt />
                        </button>
                      </Link>

                      <Link to={`/studentwhatsupcontact/${item.id}`}>
                        <button className="edit-btn bg-success">
                          <FaWhatsapp />
                        </button>
                      </Link>

                      <Link to={`/studentviewenquery/${item.id}`}>
                        <button className="edit-btn bg-primary">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/studenteditenquery/${item.id}`}>
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