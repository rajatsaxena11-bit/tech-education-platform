import React, { useEffect, useState } from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBookOpen,
  FaUserTie,
  FaCalendarAlt,
  FaStickyNote,
  FaArrowLeft,
  FaSave,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/enquery/editenquiry.css";

export default function EditEnquiry() {

  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    course: "",
    source: "",
    counselor: "",
    followup: "",
    priority: "",
    status: "",
    notes: "",
  });

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`)
      .then((res) => res.json())
      .then((data) => {

        setFormData(data);

      })
      .catch((err) => console.log(err));

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleUpdate = (e) => {

    e.preventDefault();

    fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),

    })
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        navigate("/enquirymanagement");

      })
      .catch((err) => console.log(err));
  };

  return (

    <div
      className={`edit-enquiry-page container ${closing ? "modal-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="edit-header">

        <div>
          <h2 style={{ fontSize: "25px" }}>Edit Enquiry</h2>
          <p>Update student enquiry details & follow-up.</p>
        </div>

        <button
          className="add-course-btn career-primary-btn"
          onClick={handleClose}
        >
          <FaArrowLeft />
          Back
        </button>

      </div>

      {/* FORM */}

      <form
        className="edit-form"
        onSubmit={handleUpdate}
      >

        <div className="form-grid">

          {/* NAME */}

          <div className="form-group">

            <label>
              <FaUser />
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          {/* PHONE */}

          <div className="form-group">

            <label>
              <FaPhoneAlt />
              Phone Number
            </label>

            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />

          </div>

          {/* EMAIL */}

          <div className="form-group">

            <label>
              <FaEnvelope />
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          {/* COURSE */}

          <div className="form-group">

            <label>
              <FaBookOpen />
              Course
            </label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option>MERN Stack</option>
              <option>React JS</option>
              <option>Python Full Stack</option>
              <option>Java Full Stack</option>
            </select>

          </div>

          {/* SOURCE */}

          <div className="form-group">

            <label>
              Lead Source
            </label>

            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <option>Website</option>
              <option>Instagram</option>
              <option>Facebook Ads</option>
              <option>WhatsApp</option>
              <option>Referral</option>
            </select>

          </div>

          {/* COUNSELOR */}

          <div className="form-group">

            <label>
              <FaUserTie />
              Counselor
            </label>

            <select
              name="counselor"
              value={formData.counselor}
              onChange={handleChange}
            >
              <option>Priya Sharma</option>
              <option>Rohit Singh</option>
              <option>Neha Gupta</option>
            </select>

          </div>

          {/* FOLLOWUP */}

          <div className="form-group">

            <label>
              <FaCalendarAlt />
              Follow-up
            </label>

            <input
              type="datetime-local"
              name="followup"
              value={formData.followup}
              onChange={handleChange}
            />

          </div>

          {/* PRIORITY */}

          <div className="form-group">

            <label>
              Priority
            </label>

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          {/* STATUS */}

          <div className="form-group">

            <label>
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Interested</option>
              <option>Follow-up</option>
              <option>Converted</option>
              <option>Not Interested</option>
            </select>

          </div>

        </div>

        {/* NOTES */}

        <div className="form-group textarea-group">

          <label>
            <FaStickyNote />
            Notes
          </label>

          <textarea
            rows="5"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="career-primary-btn update-btn"
        >
          <FaSave />
          Update Enquiry
        </button>

      </form>

    </div>
  );
}