import React, { useEffect, useState } from 'react'
import '../../../../assets/admincss/sidebarcss/payment/viewpayment.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewPayements() {

    const [show, setShow] = useState(true);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate("/studentpayments");
            // ya navigate(-1)
        }, 400);
    };

    const { id } = useParams();

    const navigate = useNavigate();

    const [viewPayment, setViewPaymment] = useState({});

    useEffect(() => {

        fetch(`https://server-5-n0c3.onrender.com/Payement/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setViewPaymment(data);
            })
            .catch((err) => console.log(err));

    }, [id]);


    return (
        <>

            {show && (

                <div className="finance-view-overlay">

                    <div
                        className={`finance-view-container ${closing ? "finance-view-closing" : ""
                            }`}
                    >

                        {/* CLOSE BUTTON */}

                        <button
                            className="finance-close-btn"
                            onClick={handleClose}
                        >
                            ✕
                        </button>


                        {/* HEADER */}

                        <div className="finance-top-header">

                            <div className="finance-student-profile">

                                <div className="finance-student-avatar">
                                    R
                                </div>

                                <div>

                                    <h3 style={{ fontSize: "20px" }}>
                                        {viewPayment.name}
                                    </h3>

                                    <p>
                                        Student ID : {viewPayment.studentId}
                                    </p>

                                </div>

                            </div>

                            <span className="finance-payment-badge paid-badge">
                                Fully Paid
                            </span>

                        </div>

                        {/* BODY */}

                        <div className="finance-details-layout">

                            {/* LEFT SIDE */}

                            <div className="finance-main-card">

                                <h4 style={{ fontSize: "20px" }}>
                                    Payment Information
                                </h4>

                                <div className="finance-info-grid">

                                    <div className="finance-info-box">

                                        <span>
                                            Course
                                        </span>

                                        <h5 style={{ fontSize: "18px" }}>
                                            {viewPayment.course}
                                        </h5>

                                    </div>

                                    <div className="finance-info-box">

                                        <span>
                                            Total Fees
                                        </span>

                                        <h5 style={{ fontSize: "18px" }}>
                                            ₹{viewPayment?.totalfees?.toLocaleString("en-IN")}
                                        </h5>

                                    </div>

                                    <div className="finance-info-box">

                                        <span>
                                            Paid Amount
                                        </span>

                                        <h5 className="success-text" style={{ fontSize: "18px" }}>
                                            ₹{viewPayment?.paid?.toLocaleString("en-IN")}
                                        </h5>

                                    </div>

                                    <div className="finance-info-box">

                                        <span>
                                            Pending Amount
                                        </span>

                                        <h5 className="danger-text" style={{ fontSize: "18px" }}>
                                            ₹{viewPayment?.due?.toLocaleString("en-IN")}
                                        </h5>

                                    </div>

                                    <div className="finance-info-box">

                                        <span>
                                            Payment Mode
                                        </span>

                                        <h5 style={{ fontSize: "18px" }}>
                                            {viewPayment.paymentmode}
                                        </h5>

                                    </div>

                                    <div className="finance-info-box">

                                        <span>
                                            Transaction ID
                                        </span>

                                        <h5>
                                            {viewPayment.transitionId}
                                        </h5>

                                    </div>

                                </div>

                                {/* PROGRESS */}

                                <div className="finance-progress-wrapper">

                                    <div className="finance-progress-top">

                                        <span>
                                            Payment Completion
                                        </span>

                                        <strong>
                                            70%
                                        </strong>

                                    </div>

                                    <div className="finance-progress-track">

                                        <div
                                            className="finance-progress-fill"
                                            style={{ width: "70%" }}
                                        ></div>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}

                            <div className="finance-history-card">

                                <h4>
                                    Installment History
                                </h4>

                                <div className="finance-history-list">

                                    <div className="finance-history-item">

                                        <div>

                                            <h5>
                                                First Installment
                                            </h5>

                                            <span>
                                                12 May 2026
                                            </span>

                                        </div>

                                        <strong>
                                            ₹{viewPayment?.firstinstallment?.toLocaleString("en-IN")}
                                        </strong>


                                    </div>

                                    <div className="finance-history-item">

                                        <div>

                                            <h5>
                                                Second Installment
                                            </h5>

                                            <span>
                                                25 May 2026
                                            </span>

                                        </div>

                                        <strong>
                                            ₹{viewPayment?.secondinstallment?.toLocaleString("en-IN")}
                                        </strong>


                                    </div>

                                </div>

                                {/* ACTIONS */}

                                <div className="finance-action-buttons">

                                    <button className="career-primary-btn finance-download-btn">
                                        Download Receipt
                                    </button>

                                    <button className="career-primary-btn finance-reminder-btn">
                                        Send Reminder
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}