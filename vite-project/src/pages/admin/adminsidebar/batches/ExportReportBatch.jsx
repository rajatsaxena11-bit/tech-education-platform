import React, { useEffect, useState } from "react";

import {
    FaArrowLeft,
    FaDownload,
    FaPrint,
    FaUsers,
    FaCheckCircle,
    FaTimesCircle,
    FaChartLine,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/batches/exportreportbatch.css";

export default function ExportReportBatch() {
    const [viewAttendance, setViewAttendance] = useState([])
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/batchattendance")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setViewAttendance(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (

        <div
            className={`export-report-page ${closing ? "report-page-closing" : ""
                }`}
            style={{ marginTop: "100px" }}
        >

            {/* HEADER */}

            <div className="export-report-header">

                <div>

                    <h2 style={{ fontSize: "21px" }}>
                        Attendance Report
                    </h2>

                    <p>
                        Batch Attendance Summary & Student Records
                    </p>

                </div>

              <button
    type="button"
    className="closeBtn"
    onClick={handleClose}
>
    ✕
</button>

            </div>

            {/* REPORT TOP */}

            <div className="report-top-section">

                <div>

                    <h3 style={{ fontSize: "20px" }}>
                        MERN Stack Morning Batch
                    </h3>

                    <p>
                        Date :
                        20 May 2026
                    </p>

                </div>

                <div className="report-actions">

                    <button className="download-report-btn career-primary-btn">

                        <FaDownload />

                        Download PDF

                    </button>

                    <button className="download-report-btn career-primary-btn">

                        <FaPrint />

                        Print

                    </button>

                </div>

            </div>

            {/* STATS */}

            <div className="report-stats-grid">

                <div className="report-stat-card">

                    <div className="report-stat-icon blue-bg">

                        <FaUsers />

                    </div>

                    <div>

                        <h3>
                            48
                        </h3>

                        <p>
                            Total Students
                        </p>

                    </div>

                </div>

                <div className="report-stat-card">

                    <div className="report-stat-icon green-bg">

                        <FaCheckCircle />

                    </div>

                    <div>

                        <h3>
                            40
                        </h3>

                        <p>
                            Present
                        </p>

                    </div>

                </div>

                <div className="report-stat-card">

                    <div className="report-stat-icon red-bg">

                        <FaTimesCircle />

                    </div>

                    <div>

                        <h3>
                            8
                        </h3>

                        <p>
                            Absent
                        </p>

                    </div>

                </div>

                <div className="report-stat-card">

                    <div className="report-stat-icon purple-bg">

                        <FaChartLine />

                    </div>

                    <div>

                        <h3>
                            84%
                        </h3>

                        <p>
                            Attendance Rate
                        </p>

                    </div>

                </div>

            </div>

            {/* TABLE */}

            <div className="report-table-wrapper">

                <table className="table table-bordered table-hover" style={{ cursor: "pointer" }}>

                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Student Name</th>

                            <th>Roll No</th>

                            <th>Status</th>

                            <th>Attendance %</th>

                        </tr>

                    </thead>

                    <tbody>

                        {viewAttendance.map((item, index) => (

                            <tr key={item.id}>

                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    {item.name}
                                </td>

                                <td>
                                    {item.studentId}
                                </td>

                                <td>

                                    <span
                                        className={
                                            item.status === "Present"
                                                ? "report-present-badge"
                                                : "report-absent-badge"
                                        }
                                    >

                                        {item.status}

                                    </span>

                                </td>

                                <td>
                                    {item.attendance}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* FOOTER */}

            <div className="report-footer">

                <div>

                    <p>
                        Generated By :
                        Career Institute Admin Panel
                    </p>

                </div>

                <div className="signature-section">

                    <div className="signature-line"></div>

                    <span>
                        Authorized Signature
                    </span>

                </div>

            </div>

        </div>
    );
}