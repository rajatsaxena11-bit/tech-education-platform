// EditEnrollment.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaUserGraduate,
  FaBookOpen,
  FaMoneyBillWave,
  FaLayerGroup,
  FaChartLine,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/enrollmentdetails/editenrollment.css";

export default function EditEnrollment() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/enrollviewstudent");
    }, 400);
  };

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    batch: "",
    payment: "",
    progress: "",
    status: "",
    date: "",
    image: "",
  });

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/Enroll/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
      });

  }, [id]);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch(`https://server-5-n0c3.onrender.com/Enroll/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Enrollment Updated Successfully");

        setClosing(true);

        setTimeout(() => {
          navigate("/enrollmentdetails");
        }, 400);
      });

  };

  return (

    <div
      className={`edit-enrollment-page container ${closing ? "edit-enrollment-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="edit-header">

        <div>
          <h2>Edit Enrollment</h2>
          <p>Update enrolled student details.</p>
        </div>
        <button
          className="career-primary-btn add-btn"
          onClick={handleClose}
        >
          <FaArrowLeft />
          Back

        </button>

      </div>

      {/* FORM */}

      <form
        className="edit-form"
        onSubmit={handleSubmit}
      >

        <div className="form-grid">

          {/* STUDENT NAME */}

          <div className="form-group">

            <label>
              <FaUserGraduate />
              Student Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
            />

          </div>

          {/* COURSE */}

          <div className="form-group">

            <label>
              <FaBookOpen />
              Course
            </label>

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter course"
            />

          </div>

          {/* BATCH */}

          <div className="form-group">

            <label>
              <FaLayerGroup />
              Batch
            </label>

            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Batch"
            />

          </div>

          {/* PAYMENT */}

          <div className="form-group">

            <label>
              <FaMoneyBillWave />
              Payment Status
            </label>

            <select
              name="payment"
              value={formData.payment}
              onChange={handleChange}
            >
              <option value="">Select Payment</option>
              <option value="Paid">Paid</option>
              <option value="Partial Paid">Partial Paid</option>
              <option value="Pending">Pending</option>
            </select>

          </div>

          {/* PROGRESS */}

          <div className="form-group">

            <label>
              <FaChartLine />
              Progress (%)
            </label>

            <input
              type="number"
              name="progress"
              value={formData.progress}
              onChange={handleChange}
              placeholder="Progress"
            />

          </div>

          {/* STATUS */}

          <div className="form-group">

            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>

          </div>

          {/* DATE */}

          <div className="form-group">

            <label>Enroll Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

          </div>

          {/* IMAGE */}

          <div className="form-group">

            <label>Student Image URL</label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image url"
            />

          </div>

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="save-btn"
        >
          <FaSave />
          Save Changes
        </button>

      </form>

    </div>
  );
}