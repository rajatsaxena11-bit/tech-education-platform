// CoursesAdmin.jsx

import React, { useEffect, useState } from "react";

import {
    FaSearch,
    FaPlus,
    FaEdit,
    FaTrash,
    FaEye,
    FaUsers,
    FaBookOpen,
    FaCheckCircle,
    FaClock,
    FaArrowLeft
    // FaBookOpen 
    // FaBack,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/courses/courseadmin.css";
import { Link, useNavigate } from "react-router-dom";

export default function CoursesAdmin() {
    const [course, setCourse] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate("/admindashboard");
        }, 400);
    };

    let navigate = useNavigate()

    const [statusFilter, setStatusFilter] = useState("All");

    const handleDelete = (id) => {
        fetch(`https://server-5-n0c3.onrender.com/CoursesManagement/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (!res.ok) throw new Error("Delete Failed")
                setCourse((prev) => prev.filter((item) => item.id !== id))
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/CoursesManagement")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCourse(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
                <h4>Loading Students...</h4>
            </div>
        );
    }

    const filteredCourse = course.filter((item) => {

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



    return (
        <div
            className={`placed-page ${closing ? "page-closing" : ""}`}
            style={{ marginTop: "100px" }}
        >

            {/* HEADER */}
            <div className="courses-header">

                <div className="explore-course-btn2">

                    <h2 style={{ fontSize: "25px" }}> Welcome To Courses Management</h2>
                    <p>Manage all institute courses easily.</p>
                    <div className="btn-shine-effect2"></div>

                </div>

                <div className="header-buttons">

                    <Link to="/addnewcoursespage" className="header-btn-link">
                        <button className="add-course-btn explore-course-btn">
                            <FaPlus />
                            Add Course
                            <div className="btn-shine-effect"></div>
                        </button>
                    </Link>

                    <button
                        className="add-course-btn explore-course-btn"
                        onClick={handleClose}
                    >
                        <FaArrowLeft />
                        Back
                        <div className="btn-shine-effect"></div>
                    </button>

                </div>



            </div>

            {/* STATS */}
            <div className="courses-stats">

                <div className="stats-card explore-course-btn2 ">
                    <div className="stats-icon blue">
                        <FaBookOpen />
                    </div>

                    <div>
                        <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>120+</h3>
                        <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Courses</p>
                        <div className="btn-shine-effect2"></div>
                    </div>
                </div>

                <div className="stats-card explore-course-btn">
                    <div className="stats-icon green">
                        <FaCheckCircle />
                    </div>

                    <div>
                        <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>95</h3>
                        <p style={{ color: "#0b6586", fontSize: "20px" }}>Active Courses</p>
                        <div className="btn-shine-effect"></div>
                    </div>
                </div>

                <div className="stats-card explore-course-btn">
                    <div className="stats-icon orange">
                        <FaClock />
                    </div>

                    <div>
                        <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>12</h3>
                        <p style={{ color: "#0b6586", fontSize: "20px" }}>Draft Courses</p>
                        <div className="btn-shine-effect"></div>
                    </div>
                </div>

                <div className="stats-card explore-course-btn">
                    <div className="stats-icon purple">
                        <FaUsers />
                    </div>

                    <div>
                        <h3 style={{ color: "#0b6586", fontSize: "25px", fontWeight: "bold" }}>12K+</h3>
                        <p style={{ color: "#0b6586", fontSize: "20px" }}>Total Students</p>
                        <div className="btn-shine-effect"></div>
                    </div>
                </div>

            </div>

            {/* SEARCH */}
            <div className="courses-toolbar">

                <div className="search-box">
                    <FaSearch />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search courses..."
                    />
                </div>

                <select value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                    <option value="All">All Courses</option>
                    <option value="Active">Active</option>
                    <option value="Draft">Draft</option>
                </select>

            </div>

            {/* TABLE */}
            <div className="table-responsive courses-table-wrapper">

                <table className="courses-table table-responsive table table-striped table-hover table-bordered ">

                    <thead>
                        <tr className="text-center" >
                            <th>Course</th>
                            <th>Trainer</th>
                            <th>Students</th>
                            <th>Course Fees</th>
                            <th>Upcoming Batch</th>
                            <th>Running Batch</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {filteredCourse.length > 0 ? (

                            filteredCourse.map((course) => (

                                <tr key={course.id}>

                                    {/* COURSE */}

                                    <td>

                                        <div className="course-info">

                                            <img
                                                src={course.image}
                                                alt=""
                                            />

                                            <div>

                                                <h4>{course.title}</h4>

                                                <p>
                                                    UI/UX + Development
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    {/* TRAINER */}

                                    <td className="fw-bold text-dark" style={{ fontSize: "15px" }}>{course.trainer}</td>

                                    {/* STUDENTS */}

                                    <td className="fw-bold text-dark" style={{ fontSize: "15px" }}>{course.student}</td>

                                    {/* FEES */}

                                    <td className="paid fw-bold" style={{ fontSize: "15px" }}>
                                        ₹{course.fees.toLocaleString("en-IN")}
                                    </td>
                                    <td></td>
                                    <td></td>

                                    {/* STATUS */}

                                    <td>
                                        <span
                                            className={
                                                course.status === "Active"
                                                    ? "course-status course-active"
                                                    : "course-status course-draft"
                                            }
                                        >
                                            {course.status}
                                        </span>
                                    </td>

                                    {/* <td>

                                        <span
                                            className={
                                                course.status === "Active"
                                                    ? "status active"
                                                    : "status draft"
                                            }
                                        >
                                            {course.status}
                                        </span>

                                    </td> */}

                                    {/* ACTIONS */}

                                    <td>

                                        <div className="action-buttons">

                                            <Link to={`/viewnewcoursespage/${course.id}`}>
                                                <button className="edit-btn1">
                                                    <FaEye />
                                                </button>
                                            </Link>

                                            <Link to={`/editnewcoursespage/${course.id}`}>
                                                <button className="edit-btn">
                                                    <FaEdit />
                                                </button>
                                            </Link>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    handleDelete(course.id)
                                                }
                                            >
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