// AddEnrollment.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaBookOpen,
  FaCalendarAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaPhone,
  FaSave,
  FaUserGraduate,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/enrollmentdetails/addnewenrollment.css";

export default function AddEnrollment() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/enrollviewstudent");
    }, 400);
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    batch: "",
    trainer: "",
    date: "",
    totalFees: "",
    paidFees: "",
    payment: "Pending",
    progress: 0,
    status: "Active",
    // image:
    //   "https://randomuser.me/api/portraits/men/32.jpg",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const dueFees =
    Number(formData.totalFees || 0) -
    Number(formData.paidFees || 0);

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch("https://server-5-n0c3.onrender.com/Enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        dueFees,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Enrollment Added Successfully");
        navigate("/enrollviewstudent");
      })
      .catch((err) => console.log(err));

  };

  return (

    <div
      className={`addEnrollmentPage mt-5 ${closing ? "enrollment-closing" : ""
        }`}
    >

      <div className="addEnrollmentWrapper">

        {/* HEADER */}

        <div className="addEnrollmentHeader">

          <div>

            <h2 style={{ fontSize: "25px" }}>Add New Enrollment</h2>

            <p>
              Add student enrollment & payment details
            </p>

          </div>

          <button
            className="explore-course-btn add-btn mx-3"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>

          </button>

        </div>

        {/* FORM */}

        <form
          className="addEnrollmentForm"
          onSubmit={handleSubmit}
        >

          <div className="enrollmentGrid">

            {/* LEFT */}

            <div className="enrollmentLeft">

              <div className="enrollmentCard">

                <h3>
                  <FaUserGraduate />
                  Student Information
                </h3>

                <div className="formGroup">
                  <label>Student Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter student name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="formGrid">

                  <div className="formGroup">
                    <label>Email</label>
                    <div className="inputIcon">
                      <FaEnvelope />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="formGroup">
                    <label>Phone</label>
                    <div className="inputIcon">
                      <FaPhone />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                </div>

              </div>

              {/* COURSE */}

              <div className="enrollmentCard">

                <h3>
                  <FaBookOpen />
                  Course Information
                </h3>

                <div className="formGrid">

                  <div className="formGroup">
                    <label>Course</label>

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >

                      <option value="">
                        Select Course
                      </option>

                      <option>MERN Stack</option>

                      <option>React JS</option>

                      <option>Python Full Stack</option>

                    </select>

                  </div>

                  <div className="formGroup">
                    <label>Batch</label>

                    <input
                      type="text"
                      name="batch"
                      placeholder="Enter batch"
                      value={formData.batch}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="formGrid">

                  <div className="formGroup">
                    <label>Trainer</label>

                    <input
                      type="text"
                      name="trainer"
                      placeholder="Trainer name"
                      value={formData.trainer}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="formGroup">
                    <label>Enrollment Date</label>

                    <div className="inputIcon">
                      <FaCalendarAlt />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                  </div>

                </div>

              </div>

              {/* PAYMENT */}

              <div className="enrollmentCard">

                <h3>
                  <FaMoneyBillWave />
                  Payment Details
                </h3>

                <div className="formGrid">

                  <div className="formGroup">
                    <label>Total Fees</label>

                    <input
                      type="number"
                      name="totalFees"
                      placeholder="Enter total fees"
                      value={formData.totalFees}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="formGroup">
                    <label>Paid Fees</label>

                    <input
                      type="number"
                      name="paidFees"
                      placeholder="Enter paid fees"
                      value={formData.paidFees}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="formGrid">

                  <div className="formGroup">
                    <label>Payment Status</label>

                    <select
                      name="payment"
                      value={formData.payment}
                      onChange={handleChange}
                    >

                      <option>Paid</option>

                      <option>Partial Paid</option>

                      <option>Pending</option>

                    </select>

                  </div>

                  <div className="formGroup">
                    <label>Due Fees</label>

                    <input
                      type="text"
                      value={`₹${dueFees}`}
                      disabled
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="enrollmentRight">

              <div className="summaryCard">

                <h3 style={{ color: "darkcyan" }}>Enrollment Summary</h3>

                <div className="summaryItem">
                  <span>Name</span>
                  <strong>{formData.name || "----"}</strong>
                </div>

                <div className="summaryItem">
                  <span>Course</span>
                  <strong>{formData.course || "----"}</strong>
                </div>

                <div className="summaryItem">
                  <span>Batch</span>
                  <strong>{formData.batch || "----"}</strong>
                </div>

                <div className="summaryItem">
                  <span>Trainer</span>
                  <strong>{formData.trainer || "----"}</strong>
                </div>

                <div className="summaryItem">
                  <span>Total Fees</span>
                  <strong>
                    ₹{formData.totalFees || 0}
                  </strong>
                </div>

                <div className="summaryItem">
                  <span>Paid Fees</span>
                  <strong>
                    ₹{formData.paidFees || 0}
                  </strong>
                </div>

                <div className="summaryItem">
                  <span>Due Fees</span>

                  <strong className="dueAmount">
                    ₹{dueFees}
                  </strong>

                </div>

                <button
                  type="submit"
                  className="career-primary-btn saveEnrollmentBtn"
                >

                  <FaSave />

                  Save Enrollment

                </button>

              </div>

            </div>

          </div>

        </form>

      </div>

    </div>
  );
}