// AddFaculty.jsx

import React, { useState } from "react";

import {
  FaArrowLeft,
  FaCamera,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaBookOpen,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/faculty/addfaculty.css";

export default function AddFaculty() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate(-1);
    }, 400);
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    course: "",
    experience: "",
    salary: "",
    joiningDate: "",
    status: "",
    bio: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch("https://server-5-n0c3.onrender.com/FacultyTrainers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Faculty Added Successfully");

        setClosing(true);

        setTimeout(() => {
          navigate(-1);
        }, 400);
      })
      .catch((err) => console.log(err));

  };

  return (

    <div
      className={`addFacultyPage ${closing ? "faculty-page-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      <div className="addFacultyContainer">

        {/* HEADER */}

        <div className="addFacultyHeader">

          <div>

            <h2 style={{ fontSize: "25px" }}>
              Add New Faculty
            </h2>

            <p>
              Add faculty details, specialization and salary.
            </p>

          </div>

          <button
            type="button"
            className="add-course-btn career-primary-btn"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
          </button>


        </div>

        {/* BODY */}

        <div className="facultyMainWrapper">

          {/* LEFT FORM */}

          <form
            className="facultyFormCard"
            onSubmit={handleSubmit}
          >

            <div className="facultyGrid">

              <div className="facultyInputBox">

                <label>

                  <FaUserTie />

                  Full Name

                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter faculty name"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  <FaEnvelope />

                  Email Address

                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  <FaPhone />

                  Phone Number

                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  <FaBriefcase />

                  Specialization

                </label>

                <input
                  type="text"
                  name="role"
                  placeholder="MERN Stack Trainer"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  <FaBookOpen />

                  Assigned Course

                </label>

                <input
                  type="text"
                  name="course"
                  placeholder="React JS"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  Experience

                </label>

                <input
                  type="text"
                  name="Experience"
                  placeholder="5 Years"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  <FaMoneyBillWave />

                  Salary

                </label>

                <input
                  type="text"
                  name="salary"
                  placeholder="₹55,000"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  Joining Date

                </label>

                <input
                  type="date"
                  name="joiningDate"
                  onChange={handleChange}
                />

              </div>

              <div className="facultyInputBox">

                <label>

                  Status

                </label>

                <select
                  name="status"
                  onChange={handleChange}
                >

                  <option>
                    Select Status
                  </option>

                  <option>
                    Active
                  </option>

                  <option>
                    On Leave
                  </option>

                </select>

              </div>

            </div>

            {/* BIO */}

            <div className="facultyInputBox facultyTextareaBox">

              <label>
                Faculty Bio
              </label>

              <textarea
                rows="5"
                name="bio"
                placeholder="Write short faculty bio..."
                onChange={handleChange}
              ></textarea>

            </div>

            <button
              type="submit"
              className="career-primary-btn facultySubmitBtn"
            >

              Add Faculty

            </button>

          </form>

          {/* RIGHT SIDE */}

          <div className="facultyPreviewCard">

            <div className="facultyProfileBox">

              <div className="facultyProfileCircle">

                <FaCamera />

              </div>

              <h4 style={{ color: "#fff" }}>
                Upload Profile
              </h4>

              <p style={{ color: "#fff" }}>
                PNG, JPG Supported
              </p>

            </div>

            <div className="facultyPreviewContent">

              <h3 style={{ fontSize: "23px", color: "#fff" }}>
                Faculty Preview
              </h3>

              <div className="facultyPreviewItem">

                <span>
                  Name
                </span>

                <h4 style={{ fontSize: "18px" }}>
                  {formData.name || "Faculty Name"}
                </h4>

              </div>

              <div className="facultyPreviewItem">

                <span>
                  Role
                </span>

                <h4 style={{ fontSize: "18px" }}>
                  {formData.role || "Trainer Role"}
                </h4>

              </div>

              <div className="facultyPreviewItem">

                <span>
                  Course
                </span>

                <h4 style={{ fontSize: "18px" }}>
                  {formData.course || "Assigned Course"}
                </h4>

              </div>

              <div className="facultyPreviewItem">

                <span>
                  Salary
                </span>

                <h4 style={{ fontSize: "18px" }}>
                  {formData.salary || "₹00,000"}
                </h4>

              </div>

              <div className="facultyPreviewItem">

                <span>
                  Experience
                </span>

                <h4 style={{ fontSize: "18px" }}>
                  {formData.experience || "0 Years"}
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}