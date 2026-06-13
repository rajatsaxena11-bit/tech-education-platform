
import React, { useEffect, useState } from "react";

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

import { useNavigate, useParams } from "react-router-dom";

export default function EditPayment() {
  const [closing, setClosing] = useState(false);


  const navigate = useNavigate();
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    totalfees: "",
    paid: "",
    due: "",
    paymentmode: "",
    transactionId: "",
    installment: "",
    status: "",
    paymentDate: "",
    nextDueDate: "",
    notes: "",
    receipt: "",
    transitionId: ""
  });

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/studentpayments");
    }, 400);
  };

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

    fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {

        alert("Payment Added Successfully");

        navigate("/payments");

      })
      .catch((err) => console.log(err));

  };

  useEffect(() => {
    fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (

    <div
      className={`add-payment-page ${closing ? "payment-form-closing" : ""
        }`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="payment-topbar">

        <div>

          <h2>Edit New Payment</h2>

          <p>
            Manage student fee collection & installments.
          </p>

        </div>

        <button
          type="button"
          className="career-primary-btn cancel-btn"
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
              value={formData.name}
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
              value={formData.course}
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
              type="text"
              name="totalfees"
              value={
                formData.totalfees
                  ? Number(formData.totalfees).toLocaleString("en-IN")
                  : ""
              }
              placeholder="Enter total fees"
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, "");

                if (!isNaN(rawValue)) {
                  setFormData({
                    ...formData,
                    totalfees: rawValue,
                  });
                }
              }}
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
              type="text"
              name="paid"
              value={
                formData.paid
                  ? Number(formData.paid).toLocaleString("en-IN")
                  : ""
              }
              placeholder="Enter paid fees"
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, "");

                if (!isNaN(rawValue)) {
                  setFormData({
                    ...formData,
                    paid: rawValue,
                  });
                }
              }}
              required
            />


          </div>

          {/* DUE */}

          <div className="input-box">

            <label>
              Due Amount
            </label>

            <input
              type="text"
              name="due"
              value={
                formData.due
                  ? Number(formData.due).toLocaleString("en-IN")
                  : ""
              }
              placeholder="Enter due fees"
              onChange={(e) => {
                const rawValue = e.target.value.replace(/,/g, "");

                if (!isNaN(rawValue)) {
                  setFormData({
                    ...formData,
                    due: rawValue,
                  });
                }
              }}
              required
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
              value={formData.paymentMode}
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
              value={formData.transitionId}
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
              value={formData.installment}
            >

              <option>
                Select Installment
              </option>

              <option value="1st Installment">1st Installment</option>
              <option value="2st Installment">2nd Installment</option>
              <option value="3st Installment">3rd Installment</option>

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
              value={formData.status}
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
              value={formData.date}
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
              value={formData.nextdate}
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
            onClick={() => navigate(-1)}
          >

            Cancel

          </button>

        </div>

      </form>

    </div>
  );
}