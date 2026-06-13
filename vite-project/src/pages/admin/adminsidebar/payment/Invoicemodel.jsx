// InvoiceModal.jsx

import React, { useEffect, useState } from "react";

import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/payment/invoicemodel.css";
import { useNavigate, useParams } from "react-router-dom";

export default function InvoiceModal({ student }) {
  const [show, setShow] = useState(true)
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/studentpayments");
    }, 400);
  };

  if (!show) return null;
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    course: "",
    status: "",

    totalfees: "",
    paid: "",
    due: "",
    finalammount: ""
  })

  const navigate = useNavigate()
  const { id } = useParams()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add student")
        return res.json()
      })
      .then(() => {
        navigate("/viewcourse")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data)
      })
  }, [id])

  return (

    <div className="billing-overlay-screen mt-5">

      <div
        className={`billing-popup-wrapper ${closing ? "billing-popup-closing" : ""
          }`}
      >

        {/* CLOSE BUTTON */}

        <button
          className="billing-close-action"
          onClick={handleClose}
        
        >
          <FaTimes />
        </button>

        {/* HEADER */}

        <div className="billing-top-header">

          <div className="billing-brand-section">

            <div className="billing-brand-logo">
              <FaUniversity />
            </div>

            <div>

              <h2>
                {import.meta.env.VITE_APP_SITE_NAME} Institude
              </h2>

              <p>
                Professional Payment Invoice
              </p>

            </div>

          </div>

          <div className="billing-payment-badge">

            <FaCheckCircle />

            {formData?.paid?.toLocaleString("en-IN")}

          </div>

        </div>

        {/* TOP INFO */}

        <div className="billing-info-grid">

          <div className="billing-info-card">

            <span>
              {formData.transitionId}
            </span>

            <h5 style={{ fontSize: "16px" }}>
              #INV-{formData?.studentId}
            </h5>

          </div>

          <div className="billing-info-card">

            <span>
              Date
            </span>

            <h5 style={{ fontSize: "16px" }}>
              {formData.date}
            </h5>

          </div>

          <div className="billing-info-card">

            <span>
              Payment Mode
            </span>

            <h5 style={{ fontSize: "16px" }}>
              {formData?.paymentmode}
            </h5>

          </div>

        </div>

        {/* STUDENT DETAILS */}

        <div className="billing-student-section">

          <h4>
            Student Information
          </h4>

          <div className="billing-student-grid">

            <div className="billing-student-card">

              <span>
                Student Name
              </span>

              <h5 style={{ fontSize: "16px" }}>
                {formData?.name}
              </h5>

            </div>

            <div className="billing-student-card">

              <span>
                Student ID
              </span>

              <h5 style={{ fontSize: "16px" }}>
                #ST{formData?.studentId}
              </h5>

            </div>

            <div className="billing-student-card">

              <span>
                Course
              </span>

              <h5 style={{ fontSize: "16px" }}>
                {formData?.course}
              </h5>

            </div>

            <div className="billing-student-card">

              <span>
                Status
              </span>

              <h5>
                {formData?.status}
              </h5>

            </div>

          </div>

        </div>

        {/* PAYMENT SUMMARY */}

        <div className="billing-summary-section">

          <h4 style={{ fontSize: "20px" }}>
            Payment Summary
          </h4>

          <table className="billing-summary-table">

            <tbody>

              <tr>

                <td>
                  Total Fees
                </td>

                <td>
                  ₹{Number(formData?.totalfees || 0).toLocaleString("en-IN")}
                </td>

              </tr>

              <tr>

                <td>
                  Paid Amount
                </td>

                <td className="billing-success-text">

                  ₹{Number(formData?.paid || 0).toLocaleString("en-IN")}

                </td>

              </tr>

              <tr>

                <td>
                  Pending Amount
                </td>

                <td className="billing-danger-text">

                  ₹{Number(formData?.due || 0).toLocaleString("en-IN")}

                </td>

              </tr>

              <tr className="billing-total-row">

                <td style={{ fontSize: "12px" }}>
                  Final Amount
                </td>

                <td>

                  ₹{Number(formData?.paid || 0).toLocaleString("en-IN")}

                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* FOOTER */}

        <div className="billing-footer-actions">

          <button className="billing-download-button">

            <FaDownload />

            Download PDF

          </button>

          <button className="billing-print-button">

            <FaPrint />

            Print Invoice

          </button>

        </div>

      </div>

    </div>
  );
}