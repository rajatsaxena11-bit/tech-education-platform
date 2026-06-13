// AddPayment.jsx

import React, { useState } from "react";

import {
  FaMoneyBillWave,
  FaUserGraduate,
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaSave,
  FaArrowLeft,
  FaUpload,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/payment/addpayment.css";

import { useNavigate } from "react-router-dom";

export default function AddPayment() {
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
    course: "",
    totalfees: "",
    paidAmount: "",
    due: "",
    paymentMode: "",
    transactionId: "",
    installment: "",
    status: "",
    paymentDate: "",
    nextDueDate: "",
    notes: "",
    receipt: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    let updatedData = {
      ...formData,
      [name]: value,
    };

    // AUTO DUE CALCULATION

    if (
      name === "totalfees" ||
      name === "paidAmount"
    ) {

      const total =
        name === "totalfees"
          ? Number(value)
          : Number(formData.totalfees);

      const paid =
        name === "paidAmount"
          ? Number(value)
          : Number(formData.paidAmount);

      updatedData.due = total - paid;

    }

    setFormData(updatedData);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const payload = {
      ...formData,
      progress:
        formData.totalfees > 0
          ? Math.round(
            (formData.paidAmount /
              formData.totalfees) *
            100
          )
          : 0,
    };

    fetch("https://server-5-n0c3.onrender.com/Payement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {

        alert("Payment Added Successfully");

        navigate("/studentpayments");

      })
      .catch((err) => console.log(err));

  };

  return (

    <div
      className={`add-payment-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="payment-topbar">

        <div>

          <h2 style={{ fontSize: "25px" }}>Add New Payment</h2>

          <p>
            Manage student fee collection & installments.
          </p>

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
        className="payment-form"
        onSubmit={handleSubmit}
      >

        <div className="form-grid">

          {/* STUDENT */}

          <div className="input-box">

            <label>

              <FaUserGraduate />

              Student Name

            </label>

            <input
              type="text"
              name="name"

              placeholder="Enter student name"
              onChange={handleChange}
              required
            />

          </div>

          {/* COURSE */}

          <div className="input-box">

            <label>

              <FaWallet />

              Course Name

            </label>

            <input
              type="text"
              name="course"
              placeholder="Enter course"
              onChange={handleChange}
              required
            />

          </div>

          {/* TOTAL FEES */}

          <div className="input-box">

            <label>

              <FaMoneyBillWave />

              Total Fees

            </label>

            <input
              type="number"
              name="totalfees"
              placeholder="Enter total fees"
              onChange={handleChange}
              required
            />

          </div>

          {/* PAID */}

          <div className="input-box">

            <label>

              <FaCreditCard />

              Paid Amount

            </label>

            <input
              type="number"
              name="paidAmount"
              placeholder="Enter paid amount"
              onChange={handleChange}
              required
            />

          </div>

          {/* DUE */}

          <div className="input-box">

            <label>
              Due Amount
            </label>

            <input
              type="number"
              name="due"
              value={formData.due}
              readOnly
            />

          </div>

          {/* PAYMENT MODE */}

          <div className="input-box">

            <label>

              <FaUniversity />

              Payment Mode

            </label>

            <select
              name="paymentMode"
              onChange={handleChange}
              required
            >

              <option value="">
                Select Payment Mode
              </option>

              <option>UPI</option>
              <option>Cash</option>
              <option>Card</option>
              <option>Net Banking</option>

            </select>

          </div>

          {/* TRANSACTION */}

          <div className="input-box">

            <label>
              Transaction ID
            </label>

            <input
              type="text"
              name="transactionId"
              placeholder="Enter transaction ID"
              onChange={handleChange}
            />

          </div>

          {/* INSTALLMENT */}

          <div className="input-box">

            <label>
              Installment
            </label>

            <select
              name="installment"
              onChange={handleChange}
            >

              <option value="">
                Select Installment
              </option>

              <option>1st Installment</option>
              <option>2nd Installment</option>
              <option>3rd Installment</option>

            </select>

          </div>

          {/* STATUS */}

          <div className="input-box">

            <label>
              Payment Status
            </label>

            <select
              name="status"
              onChange={handleChange}
              required
            >

              <option value="">
                Select Status
              </option>

              <option>Paid</option>
              <option>Partial Paid</option>
              <option>Unpaid</option>

            </select>

          </div>

          {/* PAYMENT DATE */}

          <div className="input-box">

            <label>
              Payment Date
            </label>

            <input
              type="date"
              name="paymentDate"
              onChange={handleChange}
            />

          </div>

          {/* NEXT DUE DATE */}

          <div className="input-box">

            <label>
              Next Due Date
            </label>

            <input
              type="date"
              name="nextDueDate"
              onChange={handleChange}
            />

          </div>

          {/* RECEIPT */}

          <div className="input-box">

            <label>

              <FaUpload />

              Upload Receipt

            </label>

            <input
              type="file"
              name="receipt"
            />

          </div>

        </div>

        {/* NOTES */}

        <div className="textarea-box">

          <label>
            Notes
          </label>

          <textarea
            rows="5"
            name="notes"
            placeholder="Write payment notes..."
            onChange={handleChange}
          ></textarea>

        </div>

        {/* BUTTONS */}

        <div className="button-group">

          <button
            type="submit"
            className="career-primary-btn save-btn"
          >

            <FaSave />

            Save Payment

          </button>

          <button
            type="button"
            className="career-primary-btn cancel-btn"
            onClick={handleClose}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}