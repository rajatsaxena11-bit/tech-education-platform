// BatchAttendance.jsx

import React, { useEffect, useState } from "react";

import {
    FaArrowLeft,
    FaUsers,
    FaCheckCircle,
    FaTimesCircle,
    FaChartLine,
    FaSearch,
    FaDownload,
    FaUserGraduate,
} from "react-icons/fa";

import { Link, useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/batches/viewattendance.css";

export default function BatchAttendance() {
    const[viewAttendance, setViewAttendance] = useState([])

    const navigate = useNavigate();

    const { id } = useParams();

    const [searchTerm, setSearchTerm] = useState("");

    // FILTER

    const filteredStudents = viewAttendance.filter((item) =>

        item.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

    );

    // MARK PRESENT

    const markPresent = (id) => {

        const updatedData = viewAttendance.map((item) =>

            item.id === id
                ? {
                    ...item,
                    status: "Present",
                    checkin: "10:00 AM",
                    checkout: "12:00 PM",
                }
                : item

        );

        setViewAttendance(updatedData);

    };

    // MARK ABSENT

    const markAbsent = (id) => {

        const updatedData = viewAttendance.map((item) =>

            item.id === id
                ? {
                    ...item,
                    status: "Absent",
                    checkin: "--",
                    checkout: "--",
                }
                : item

        );

        setViewAttendance(updatedData);

    };

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

        <div className="attendance-management-page mt-5">

            {/* HEADER */}

            <div className="attendance-page-header">

                <div>

                    <h2 style={{fontSize:"25px"}}>
                        Batch Attendance
                    </h2>

                    <p>
                        Manage daily attendance records of students
                    </p>

                </div>

                <button
                    className="add-course-btn career-primary-btn"
                    onClick={() => navigate("/ourbatchesdetails")}
                >

                    <FaArrowLeft />

                    Back

                </button>

            </div>

            {/* STATS */}

            <div className="attendance-stats-wrapper">

                <div className="attendance-stat-box">

                    <div className="attendance-stat-icon blue-icon">

                        <FaUsers />

                    </div>

                    <div>

                        <h3 style={{fontSize:"25px"}}>
                            48
                        </h3>

                        <p>
                            Total Students
                        </p>

                    </div>

                </div>

                <div className="attendance-stat-box">

                    <div className="attendance-stat-icon green-icon">

                        <FaCheckCircle />

                    </div>

                    <div>

                        <h3 style={{fontSize:"25px"}}>
                            40
                        </h3>

                        <p>
                            Present Today
                        </p>

                    </div>

                </div>

                <div className="attendance-stat-box">

                    <div className="attendance-stat-icon red-icon">

                        <FaTimesCircle />

                    </div>

                    <div>

                        <h3 style={{fontSize:"25px"}}>
                            8
                        </h3>

                        <p>
                            Absent Today
                        </p>

                    </div>

                </div>

                <div className="attendance-stat-box">

                    <div className="attendance-stat-icon purple-icon">

                        <FaChartLine />

                    </div>

                    <div>

                        <h3 style={{fontSize:"25px"}}>
                            84%
                        </h3>

                        <p>
                            Attendance Rate
                        </p>

                    </div>

                </div>

            </div>

            {/* TOOLBAR */}

            <div className="attendance-toolbar-box">

                <div className="attendance-search-wrapper">

                    <FaSearch />

                    <input
                        type="text"
                        placeholder="Search student..."
                        value={searchTerm}
                        onChange={(e) =>
                            setSearchTerm(e.target.value)
                        }
                    />

                </div>

                <div className="attendance-toolbar-actions">

                    <input type="date" />

                    <Link to = "/batchreport">
                      <button className="attendance-export-btn career-primary-btn">

                        <FaDownload />

                        Export Report

                    </button>
                    </Link>

                </div>

            </div>

            {/* TABLE */}

            <div className="attendance-table-container">

                <table className="table table-bordered table-hover align-middle">

                    <thead>

                        <tr>

                            <th>Student</th>

                            <th>Roll No</th>

                            <th>Status</th>

                            <th>Check In</th>

                            <th>Check Out</th>

                            <th>Attendance %</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredStudents.length > 0 ? (

                            filteredStudents.map((item) => (

                                <tr key={item.id}>

                                    {/* STUDENT */}

                                    <td>

                                        <div className="attendance-student-info">

                                            <div className="attendance-student-avatar">

                                                <FaUserGraduate />

                                            </div>

                                            <div>

                                                <h5>
                                                    {item.name}
                                                </h5>

                                                <p>
                                                    Student
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* ROLL */}

                                    <td>
                                        {item.studentId}
                                    </td>

                                    {/* STATUS */}

                                    <td>

                                        <span
                                            className={
                                                item.status === "Present"
                                                    ? "attendance-present-badge"
                                                    : "attendance-absent-badge"
                                            }
                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                    {/* CHECKIN */}

                                    <td>
                                        {item.checkin}
                                    </td>

                                    {/* CHECKOUT */}

                                    <td>
                                        {item.checkout}
                                    </td>

                                    {/* PERCENTAGE */}

                                    <td>
                                        {item.attendance}
                                    </td>

                                    {/* ACTIONS */}

                                    <td>

                                        <div className="attendance-action-buttons">

                                            <button
                                                className="mark-present-action"
                                                onClick={() =>
                                                    markPresent(item.id)
                                                }
                                            >

                                                Present

                                            </button>

                                            <button
                                                className="mark-absent-action"
                                                onClick={() =>
                                                    markAbsent(item.id)
                                                }
                                            >

                                                Absent

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        ) : (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="text-center py-4"
                                >

                                    No Student Found

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}