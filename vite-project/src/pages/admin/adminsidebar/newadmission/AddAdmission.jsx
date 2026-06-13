// AddAdmission.jsx

import React, { useState } from "react";

import {
  FaArrowLeft,
  FaUserGraduate,
  FaBookOpen,
  FaMoneyBillWave,
  FaUpload,
  FaSave,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/newadmission/addnewadmissioncss.css";

export default function AddAdmission() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/viewnewadmissionstudent");
    }, 400);
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    email: "",
    number: "",
    gender: "",
    dob: "",
    address: "",

    course: "",
    batch: "",
    trainer: "",
    date: "",

    totalfees: "",
    depositfees: "",
    duefees: "",
    paymentmode: "",

    status: "",
  });



  const handleChange = (e) => {

    const { name, value } = e.target;

    let updatedData = {
      ...formData,
      [name]: value,
    };

    // AUTO DUE FEES CALCULATION

    if (name === "totalfees" || name === "depositfees") {

      const total =
        name === "totalfees"
          ? Number(value)
          : Number(formData.totalfees);

      const deposit =
        name === "depositfees"
          ? Number(value)
          : Number(formData.depositfees);

      updatedData.duefees = total - deposit;
    }

    setFormData(updatedData);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch("https://server-5-n0c3.onrender.com/NewAdmission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/viewnewadmissionstudent");
      })
      .catch((err) => console.log(err));
  };

  return (

    <div
      className={`addAdmissionPage container-fluid ${closing ? "page-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      <div className="addAdmissionCard">

        {/* HEADER */}

        <div className="addAdmissionHeader">

          <div>

            <h2>
              Add New Admission
            </h2>

            <p>
              Fill all student admission details
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

        <form onSubmit={handleSubmit}>

          {/* STUDENT DETAILS */}

          <div className="admissionSectionCard">

            <div className="sectionTitle">

              <FaUserGraduate />

              <h4>
                Student Details
              </h4>

            </div>

            <div className="admissionGrid">

              <div className="inputBox">

                <label>
                  Student Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter student name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Father Name
                </label>

                <input
                  type="text"
                  name="fathername"
                  placeholder="Enter father name"
                  value={formData.fathername}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Mother Name
                </label>

                <input
                  type="text"
                  name="mothername"
                  placeholder="Enter mother name"
                  value={formData.mothername}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Phone Number
                </label>

                <input
                  type="text"
                  name="number"
                  placeholder="+91 9876543210"
                  value={formData.number}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                </select>

              </div>

              <div className="inputBox">

                <label>
                  Date Of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox fullWidth">

                <label>
                  Address
                </label>

                <textarea
                  name="address"
                  rows="3"
                  placeholder="Enter address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>

              </div>

            </div>

          </div>

          {/* COURSE DETAILS */}

          <div className="admissionSectionCard">

            <div className="sectionTitle">

              <FaBookOpen />

              <h4>
                Course Details
              </h4>

            </div>

            <div className="admissionGrid">

              <div className="inputBox">

                <label>
                  Course Name
                </label>

                <input
                  type="text"
                  name="course"
                  placeholder="MERN Stack"
                  value={formData.course}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Batch Timing
                </label>

                <input
                  type="text"
                  name="batch"
                  placeholder="10 AM - 12 PM"
                  value={formData.batch}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Trainer Name
                </label>

                <input
                  type="text"
                  name="trainer"
                  placeholder="Enter trainer name"
                  value={formData.trainer}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Admission Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />

              </div>

            </div>

          </div>

          {/* FEES DETAILS */}

          <div className="admissionSectionCard">

            <div className="sectionTitle">

              <FaMoneyBillWave />

              <h4>
                Fees Details
              </h4>

            </div>

            <div className="admissionGrid">

              <div className="inputBox">

                <label>
                  Total Fees
                </label>

                <input
                  type="number"
                  name="totalfees"
                  placeholder="50000"
                  value={formData.totalfees}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Deposit Fees
                </label>

                <input
                  type="number"
                  name="depositfees"
                  placeholder="10000"
                  value={formData.depositfees}
                  onChange={handleChange}
                />

              </div>

              <div className="inputBox">

                <label>
                  Due Fees
                </label>

                <input
                  type="number"
                  name="duefees"
                  value={formData.duefees}
                  readOnly
                />

              </div>

              <div className="inputBox">

                <label>
                  Payment Mode
                </label>

                <select
                  name="paymentmode"
                  value={formData.paymentmode}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Payment Mode
                  </option>

                  <option value="Cash">
                    Cash
                  </option>

                  <option value="UPI">
                    UPI
                  </option>

                  <option value="Card">
                    Card
                  </option>

                </select>

              </div>

              <div className="inputBox">

                <label>
                  Admission Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >

                  <option value="">
                    Select Status
                  </option>

                  <option value="Approved">
                    Approved
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Fees Pending">
                    Fees Pending
                  </option>

                </select>

              </div>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="admissionBtns">

            <button
              type="button"
              className="career-primary-btn cancelBtn"
              onClick={handleClose}
            >

              Cancel

            </button>

            <button
              type="submit"
              className="career-primary-btn saveBtn"
            >

              <FaSave />

              Save Admission

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}