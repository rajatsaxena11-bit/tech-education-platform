// FeesReceipt.jsx

import React, { useEffect, useState } from "react";

import {
  FaArrowLeft,
  FaDownload,
  FaPrint,
  FaFileInvoice,
  FaUserGraduate,
  FaPhone,
  FaBookOpen,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/newadmission/feesreceipt.css";

export default function FeesReceipt() {

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

    <div className="feesReceiptPage" style={{marginTop:"100px"}}>

      <div className="feesReceiptCard">

        {/* HEADER */}

        <div className="feesReceiptHeader">

          <div className="feesReceiptLeft">

            <div className="receiptLogo">
              <FaFileInvoice />
            </div>

            <div>

              <h1 style={{ fontSize: "25px" }}>
                Payment Receipt
              </h1>

              <p style={{ fontSize: "15px" }}>
                Receipt No : REC-{student.id}
              </p>

            </div>

          </div>

          <button className="explore-course-btn add-btn mx-3" onClick={() => navigate(-1)}>
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>
          </button>

        </div>

        {/* INSTITUTE INFO */}

        <div className="instituteInfoBox">

          <h3>
            Tech Institute Pvt Ltd
          </h3>

          <p>
            Sector 16, Noida, Uttar Pradesh
          </p>

          <span>
            support@techinstitute.com | +91 9876543210
          </span>

        </div>

        {/* STUDENT DETAILS */}

        <div className="receiptSection">

          <h2 style={{ fontSize: "22px" }}>
            Student Details
          </h2>

          <div className="receiptGrid">

            <div className="receiptInfoCard">

              <FaUserGraduate />

              <div>

                <span>Student Name</span>

                <h4 style={{ fontSize: "17px", fontWeight: "800" }}>
                  {student.name}
                </h4>

              </div>

            </div>

            <div className="receiptInfoCard">

              <FaBookOpen />

              <div>

                <span>Course</span>

                <h4 style={{ fontSize: "17px", fontWeight: "800" }}>
                  {student.course}
                </h4>

              </div>

            </div>

            <div className="receiptInfoCard">

              <FaPhone />

              <div>

                <span>Phone</span>

                <h4 style={{ fontSize: "17px", fontWeight: "800" }}>
                  {student.number}
                </h4>

              </div>

            </div>

            <div className="receiptInfoCard">

              <FaClock />

              <div>

                <span>Admission Date</span>

                <h4 style={{ fontSize: "17px", fontWeight: "800" }}>
                  {student.date}
                </h4>

              </div>

            </div>

          </div>

        </div>

        {/* PAYMENT DETAILS */}

        <div className="receiptSection">

          <h2 style={{ fontSize: "22px" }}>
            Payment Summary
          </h2>

          <div className="paymentGrid">

            <div className="paymentCard total">

              <FaMoneyBillWave />

              <h4 style={{ fontSize: "20px", color: "darkcyan" }}>
                Total Fees
              </h4>

              <p style={{ fontSize: "18px" }}>
                ₹{student?.totalfees?.toLocaleString("en-IN")}
              </p>

            </div>

            <div className="paymentCard paid">

              <FaCheckCircle />

              <h4 style={{ fontSize: "20px", color: "darkcyan" }}>
                Deposit Fees
              </h4>

              <p style={{ fontSize: "18px" }}>
                ₹{student?.depositfees?.toLocaleString("en-IN")}
              </p>

            </div>

            <div className="paymentCard due">

              <FaClock />

              <h4 style={{ fontSize: "20px", color: "darkcyan" }}>
                Due Fees
              </h4>

              <p style={{ fontSize: "18px" }}>
                ₹{Number(student.duefees || 0).toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>

        {/* PAYMENT STATUS */}

        <div className="receiptStatusBox">

          <h3>
            Payment Status
          </h3>

          <span
            className={`receiptStatusBadge ${student.duefees > 0
              ? "pending"
              : "paidStatus"
              }`}
          >

            {
              student.duefees > 0
                ? `Fees Pending ₹${Number(student.duefees).toLocaleString("en-IN")}`
                : "Fees Paid"
            }

          </span>

        </div>

        {/* NOTE */}

        <div className="receiptNoteBox">

          <h4>
            Important Note
          </h4>

          <p>
            This is a computer-generated receipt and does not
            require a physical signature. Please keep this
            receipt for future reference.
          </p>

        </div>

        {/* FOOTER */}

        <div className="receiptFooter">

          <button className="downloadReceiptBtn career-primary-btn">

            <FaDownload />

            Download PDF

          </button>

          <button
            className="downloadReceiptBtn career-primary-btn"
            onClick={() => window.print()}
          >

            <FaPrint />

            Print Receipt

          </button>

        </div>

      </div>

    </div>
  );
}