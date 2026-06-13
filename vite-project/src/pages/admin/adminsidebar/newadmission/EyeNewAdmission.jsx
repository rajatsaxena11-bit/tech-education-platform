// ViewAdmission.jsx

import React, { useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaUserGraduate,
  FaPhone,
  FaEnvelope,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBookOpen,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaDownload,
  FaPrint,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/newadmission/viewadmission.css";

export default function ViewAdmission() {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
  setClosing(true);

  setTimeout(() => {
    navigate("/viewnewadmissionstudent");
  }, 400);
};

  const navigate = useNavigate();

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {

    fetch(`https://server-5-n0c3.onrender.com/NewAdmission/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  return (

    <div
  className={`viewAdmissionPage ${
    closing ? "page-closing" : ""
  }`}
  style={{ marginTop: "100px" }}
>

      <div className="viewAdmissionCard">

        {/* HEADER */}

        <div className="viewAdmissionHeader">

          <div className="viewAdmissionLeft">

            <div className="viewStudentAvatar">
              <FaUserGraduate />
            </div>

            <div>

              <h2 style={{ fontSize: "20px" }}>
                {student.name}
              </h2>

              <p style={{ fontSize: "15px" }}>
                Student ID : #{student.studentId}
              </p>

            </div>

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

        {/* STATUS */}

        <div className="viewStatusSection">

          <span
            className={`viewStatusBadge ${student.status
              ?.toLowerCase()
              ?.replace(/ /g, "-")}`}
          >
            {student.status}
          </span>

        </div>

        {/* DETAILS GRID */}

        <div className="summaryGrid" style={{cursor:"pointer"}}>

          <div className="summaryCard">
            <FaBookOpen />
            <h4 style={{color:"#fff", fontSize:"21px", fontWeight:"bold"}}>Course</h4>
            <p className="text-warning">{student.course}</p>
          </div>

          <div className="summaryCard">
            <FaMoneyBillWave />
            <h4 style={{color:"#fff", fontSize:"21px", fontWeight:"bold"}}>Total Fees</h4>
            <p className="text-warning">₹{student?.totalfees?.toLocaleString("en-IN")}</p>
          </div>

          <div className="summaryCard">
            <FaCheckCircle />
            <h4 style={{color:"#fff", fontSize:"21px", fontWeight:"bold"}}>Paid</h4>
            <p className="text-warning">₹{student?.depositfees?.toLocaleString("en-IN")}</p>
          </div>

          <div className="summaryCard">
            <FaCalendarAlt />
            <h4 style={{color:"#fff", fontSize:"21px", fontWeight:"bold"}}>Admission Date</h4>
            <p className="text-warning">{student.date}</p>
          </div>

        </div>

        {/* FEES SECTION */}

        <div className="viewFeesSection">

          <h3>Fees Overview</h3>

          <div className="feeProgressBox">

            <div className="progressHeader">
              <span>Payment Progress</span>

              <span>
                {Math.round(
                  ((student.depositfees || 0) /
                    (student.totalfees || 1)) *
                  100
                )}
                %
              </span>
            </div>

            <div className="progressBar">

              <div
                className="progressFill"
                style={{
                  width: `${Math.round(
                    ((student.depositfees || 0) /
                      (student.totalfees || 1)) *
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* NOTE */}

        <div className="viewNoteBox">

          <h4>
            Important Note
          </h4>

          <p>
            Student admission has been successfully completed.
            Please verify all documents and fees records.
          </p>

        </div>

        {/* FOOTER */}

        <div className="viewAdmissionFooter">

          <button className="downloadAdmissionBtn career-primary-btn">

            <FaDownload />

            Download PDF

          </button>

          <button
            className="downloadAdmissionBtn career-primary-btn"
            onClick={() => window.print()}
          >

            <FaPrint />

            Print

          </button>

        </div>

      </div>

    </div>
  );
}