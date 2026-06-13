// PaymentManagement.jsx

import React, { useEffect, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaMoneyBillWave,
  FaWallet,
  FaClock,
  FaChartLine,
  FaEye,
  FaEdit,
  FaTrash,
  FaFileInvoiceDollar,
  FaDownload,
  FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/payment/paymentcss.css";
import { Link, useNavigate } from "react-router-dom";

export default function PaymentManagement() {
  const [payment, setPayment] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      navigate("/admindashboard"); 
    }, 400);
  };

  let navigate = useNavigate()


  const handleDelete = (id) => {
    fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete Failed")
        setPayment((prev) => prev.filter((item) => item.id !== id))
      })
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    fetch("https://server-5-n0c3.onrender.com/Payement")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPayment(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredCourse = payment.filter((item) => {

    const matchesSearch =

      (item.title || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      (item.trainer || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());



    const matchesStatus =
      statusFilter === "All" ||
      item.status === statusFilter;

    return matchesSearch && matchesStatus;

  });

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <h4>Loading Students...</h4>
      </div>
    );
  }


  return (

    <div
      className={`payment-page ${closing ? "page-closing" : ""}`}
      style={{ marginTop: "100px" }}
    >

      {/* HEADER */}

      <div className="payment-header">

        <div className="explore-course-btn2">

          <h2 style={{ fontSize: "25px" }}>Welcomme To Payment Management</h2>

          <p className="text-light">
            Manage fees, invoices & student payments.
          </p>
          <div className="btn-shine-effect2"></div>

        </div>

        <div className="d-flex">
          <Link to="/studentaddpayments">
            <button className=" payment-back-btn mx-3 explore-course-btn">
              <FaPlus />
              Add Payment
              <div className="btn-shine-effect"></div>
            </button>
          </Link>
          <button
            className="payment-back-btn explore-course-btn"
            onClick={handleClose}
          >
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>
          </button>
        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stats-card explore-course-btn">

          <div className="stats-icon blue">
            <FaMoneyBillWave />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹25L</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Revenue</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon green">
            <FaWallet />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹18L</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Fees Collected</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon orange">
            <FaClock />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>₹4L</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Pending Fees</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

        <div className="stats-card explore-course-btn">

          <div className="stats-icon purple">
            <FaChartLine />
          </div>

          <div>

            <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>120+</h3>
            <p style={{ color: "#0b6586", fontSize: "20px" }}>Installments Active</p>
            <div className="btn-shine-effect"></div>

          </div>

        </div>

      </div>

      {/* TOOLBAR */}

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search student..."
          />

        </div>

        <select>

          <option>All Status</option>

          <option>Paid</option>

          <option>Partial Paid</option>

          <option>Unpaid</option>

        </select>

      </div>

      {/* TABLE */}

      <div className="table-wrapper">

        <table className="payment-table courses-table table table-striped table-hover table-bordered">

          <thead>

            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Total Fees</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Progress</th>
              <th>Payment Mode</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredCourse.length > 0 ? (
              filteredCourse.map((item) => (

                <tr key={item.id}>

                  {/* STUDENT */}

                  <td>

                    <div className="student-info">

                      {/* <img
                        src={item.image}
                        alt=""
                      /> */}

                      <div>

                        <h4 style={{ fontSize: "15px" }}>{item.name}</h4>

                        <p style={{ fontSize: "15px", fontWeight: "bold" }}>ID : #{item.studentId}</p>

                      </div>

                    </div>

                  </td>

                  <td style={{ fontSize: "15px", fontWeight: "bold" }}>{item.course}</td>

                  <td className="paid" style={{ fontSize: "15px" }}>{item?.totalfees?.toLocaleString("en-IN")}</td>

                  <td className="paid" style={{ fontSize: "15px" }}>
                    {item?.paid?.toLocaleString("en-IN")}
                  </td>

                  <td
                    style={{
                      color: "#111827",
                      fontWeight: "bold",
                      fontSize: "15px"
                    }}
                    className={item.due > 0 ? "text-danger" : "text-primary"}
                  >
                    {
                      item?.due > 0
                        ? `₹${Number(item.due).toLocaleString("en-IN")}`
                        : "No Due"
                    }
                  </td>

                  {/* PROGRESS */}

                  <td>

                    <div className="progress-box">

                      <div className="progress-bar">

                        <div
                          className="progress-fill"
                          style={{
                            width: `${item.progress}%`,
                          }}
                        ></div>

                      </div>

                      <span>{item.progress}%</span>

                    </div>

                  </td>

                  {/* MODE */}

                  <td>

                    <span className="mode" >
                      {item.paymentmode}
                    </span>

                  </td>

                  {/* STATUS */}

                  <td>

                    <span
                      className={`status ${item.status
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td>

                    <div className="action-buttons">

                      <Link to={`/studentviewpayments/${item.id}`}>
                        <button className="edit-btn">
                          <FaEye />
                        </button>
                      </Link>

                      <Link to={`/studentviewpaymentsreceipt/${item.id}`}>
                        <button className="invoice-btn">
                          <FaFileInvoiceDollar />
                        </button>
                      </Link>

                      <Link to={`/studenteditpaymentsreceipt/${item.id}`}>
                        <button className="edit-btn">
                          <FaDownload />
                        </button>
                      </Link>


                      <Link to={`/studenteditpayments/${item.id}`}>
                        <button className="edit-btn">
                          <FaEdit />
                        </button>
                      </Link>

                      <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  No Course Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}