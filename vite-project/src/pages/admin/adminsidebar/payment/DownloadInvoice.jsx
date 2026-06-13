// PaymentReceipt.jsx

import React, { useEffect, useRef, useState } from "react";

import {
    FaDownload,
    FaPrint,
    FaCheckCircle,
    FaArrowLeft,
} from "react-icons/fa";

import html2pdf from "html2pdf.js";

import { useNavigate, useParams } from "react-router-dom";

import '../../../../assets/admincss/sidebarcss/payment/downloadinvoice.css'

export default function PaymentReceipt() {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate("/studentpayments");
        }, 400);
    };

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        level: "",
        trainer: "",
        student: "",
        duration: "",
        fees: "",
        status: "",
        description: ""

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

    const invoiceSheetRef = useRef();





    // const paymentData = {
    //     id: id,
    //     receiptNo: "PAY1025",
    //     name: "Rajat Saxena",
    //     course: "MERN Stack Development",
    //     totalFees: 80000,
    //     paid: 50000,
    //     due: 30000,
    //     paymentMode: "UPI",
    //     transactionId: "TXN928272726",
    //     paymentDate: "20 May 2026",
    //     email: "rajatsaxena@gmail.com",
    //     phone: "+91 9876543210",
    //     status: "Successful",
    // };

    // PDF DOWNLOAD

    const handleInvoiceDownload = () => {

        const element = invoiceSheetRef.current;

        const options = {
            margin: 0.5,
            filename: `Receipt-${paymentData.receiptNo}.pdf`,
            image: {
                type: "jpeg",
                quality: 1,
            },
            html2canvas: {
                scale: 2,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: "portrait",
            },
        };

        html2pdf()
            .set(options)
            .from(element)
            .save();

    };

    // PRINT

    const handleInvoicePrint = () => {
        window.print();
    };

    return (

        <div
            className={`invoice-shell-page ${closing ? "page-closing" : ""}`}
            style={{ marginTop: "100px" }}
        >

            <div
                className="invoice-main-wrapper"
                ref={invoiceSheetRef}
            >

                {/* TOP HEADER */}

                <div className="invoice-topbar-section">

                    <div>

                        <h2>
                            Career Institute
                        </h2>

                        <p>
                            Professional IT Training Institute
                        </p>

                    </div>

                    <div className="invoice-success-chip">

                        <FaCheckCircle />

                        Payment Successful

                    </div>
                    <button
                        className="add-course-btn career-primary-btn mx-3"
                        onClick={handleClose}
                    >
                        <FaArrowLeft />
                        Back
                    </button>

                </div>

                {/* RECEIPT TITLE */}

                <div className="invoice-heading-row">

                    <div>

                        <h3>
                            Payment Receipt
                        </h3>

                        <span>
                            Receipt No :
                            #{formData.receiptNo}
                        </span>

                    </div>

                    <div className="invoice-brand-circle">
                        CI
                    </div>

                </div>

                {/* DETAILS */}

                <div className="invoice-details-grid">

                    <div className="invoice-data-card">

                        <span>
                            Student Name
                        </span>

                        <h5>
                            {formData.name}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Course
                        </span>

                        <h5>
                            {formData.course}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Email Address
                        </span>

                        <h5>
                            {formData.email}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Phone Number
                        </span>

                        <h5>
                            {formData.number}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Total Fees
                        </span>

                        <h5>

                            ₹
                            {formData?.totalfees?.toLocaleString(
                                "en-IN"
                            )}

                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Paid Amount
                        </span>

                        <h5 className="invoice-paid-amount">

                            ₹
                            {formData?.paid?.toLocaleString(
                                "en-IN"
                            )}

                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Due Amount
                        </span>

                        <h5 className="invoice-due-amount">

                            <td
                                style={{
                                    color: "#111827",
                                    fontWeight: "bold",
                                    fontSize: "15px"
                                }}
                                className={formData.due > 0 ? "text-danger" : "text-primary"}
                            >
                                {
                                    formData?.due > 0
                                        ? `₹${Number(formData.due).toLocaleString("en-IN")}`
                                        : "No Due"
                                }
                            </td>

                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Payment Mode
                        </span>

                        <h5>
                            {formData.paymentmode}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Transaction ID
                        </span>

                        <h5>
                            {formData.transitionId}
                        </h5>

                    </div>

                    <div className="invoice-data-card">

                        <span>
                            Payment Date
                        </span>

                        <h5>
                            {formData.date}
                        </h5>

                    </div>

                </div>

                {/* STATUS */}

                <div className="invoice-status-banner">

                    <div className="invoice-status-left">

                        <FaCheckCircle />

                        <div>

                            <h4>
                                Payment Completed
                            </h4>

                            <p>
                                Student payment successfully received.
                            </p>

                        </div>

                    </div>

                    <div className="invoice-status-right">

                        <span>
                            STATUS
                        </span>

                        <h5 style={{ fontSize: "15px" }}>
                            {formData.status}
                        </h5>

                    </div>

                </div>

                {/* MESSAGE */}

                <div className="invoice-note-section">

                    <p>

                        This is a computer generated receipt.
                        Thank you for choosing Career Institute.

                    </p>

                </div>

                {/* SIGNATURE */}

                <div className="invoice-signature-area">

                    <div className="invoice-sign-holder">

                        <div className="invoice-sign-line"></div>

                        <span>
                            Authorized Signature
                        </span>

                    </div>

                </div>

            </div>

            {/* ACTIONS */}

            <div className="invoice-action-toolbar">
                <button className="add-course-btn career-primary-btn mx-3" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                    Back
                </button>

                <button
                    className=" career-primary-btn invoice-print-action"
                    onClick={handleInvoicePrint}
                >

                    <FaPrint />

                    Print

                </button>

                <button
                    className="career-primary-btn invoice-download-action"
                    onClick={handleInvoiceDownload}
                >

                    <FaDownload />

                    Download PDF

                </button>

            </div>

        </div>
    );
}