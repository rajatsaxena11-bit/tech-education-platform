// ViewEnquiry.jsx

import React, { useEffect, useState } from "react";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaUserTie,
  FaBookOpen,
  FaCheckCircle,
  FaClock,
  FaArrowLeft,
  FaCalendarAlt,
  FaEdit,
} from "react-icons/fa";

import { Link, useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/enquery/viewenquiry.css";

export default function ViewEnquiry() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const { id } = useParams();
  const navigate = useNavigate()

  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.log(err));

  }, [id]);

  if (!data) {
    return (
      <div className="loading-box">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (

    <div
      className={`view-enquiry-page container ${closing ? "modal-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      {/* TOP HEADER */}

      <div className="view-top">

        <div>

          <h2 style={{ fontSize: "25px" }}>Enquiry Details</h2>

          <p>
            Complete student enquiry information
          </p>

        </div>

        <div className="top-actions">

          <button
            className="add-course-btn career-primary-btn"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
          </button>

          <Link to={`/editenquiry/${data.id}`}>

            <button className=" career-primary-btn edit-main-btn">

              <FaEdit />

              Edit Enquiry

            </button>

          </Link>

        </div>

      </div>

      {/* PROFILE CARD */}

      <div className="profile-card">

        <div className="profile-left">
          {/* 
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
          /> */}

          <div>

            <h3 style={{ fontSize: "20px" }}>{data.name}</h3>

            <p className="student-course">
              {data.course}
            </p>

            <span
              className={`status-badge ${(data.status || "")
                .toLowerCase()
                .replace(/ /g, "-")}`}
            >
              {data.status}
            </span>

          </div>

        </div>

        <div className="profile-actions">

          <button className="career-primary-btn call-btn">

            <FaPhoneAlt />

            Call

          </button>

          <button className="career-primary-btn whatsapp-btn">

            <FaWhatsapp />

            WhatsApp

          </button>

        </div>

      </div>

      {/* MAIN GRID */}

      <div className="info-grid">

        {/* LEFT CARD */}

        <div className="info-card">

          <h4>Student Information</h4>

          <div className="info-item">

            <FaPhoneAlt className="info-icon" />

            <div>

              <span>Phone Number</span>

              <p>{data.number}</p>

            </div>

          </div>

          <div className="info-item">

            <FaEnvelope className="info-icon" />

            <div>

              <span>Email Address</span>

              <p>{data.email}</p>

            </div>

          </div>

          <div className="info-item">

            <FaBookOpen className="info-icon" />

            <div>

              <span>Interested Course</span>

              <p>{data.course}</p>

            </div>

          </div>

          <div className="info-item">

            <FaUserTie className="info-icon" />

            <div>

              <span>Counselor Assigned</span>

              <p>{data.counselor}</p>

            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="info-card">

          <h4>Lead Information</h4>

          <div className="info-item">

            <FaCheckCircle className="info-icon" />

            <div>

              <span>Lead Source</span>

              <p>{data.source}</p>

            </div>

          </div>

          <div className="info-item">

            <FaClock className="info-icon" />

            <div>

              <span>Status</span>

              <p>{data.status}</p>

            </div>

          </div>

          <div className="info-item">

            <FaCalendarAlt className="info-icon" />

            <div>

              <span>Follow-up Schedule</span>

              <p>{data.followup}</p>

            </div>

          </div>

          <div className="info-item">

            <FaCheckCircle className="info-icon" />

            <div>

              <span>Priority</span>

              <p>{data.priority}</p>

            </div>

          </div>

        </div>

      </div>

      {/* NOTES */}

      <div className="notes-card">

        <h4 style={{ fontSize: "20px" }}>Counselor Notes</h4>

        <p>
          Student is interested in placement support,
          internship opportunities, certification,
          and weekend batches.
        </p>

      </div>

      {/* TIMELINE */}

      <div className="timeline-card">

        <h4>Activity Timeline</h4>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h5>Lead Created</h5>

            <p>Student submitted enquiry form from website.</p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h5>Call Scheduled</h5>

            <p>Counselor assigned for first interaction.</p>

          </div>

        </div>

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div>

            <h5>Follow-up Pending</h5>

            <p>Waiting for student confirmation.</p>

          </div>

        </div>

      </div>

    </div>
  );
}