// ContactUsManagement.jsx

import React, { useEffect, useState } from "react";

import {
    FaSearch,
    FaEnvelope,
    FaInbox,
    FaCheckCircle,
    FaPhoneAlt,
    FaWhatsapp,
    FaEye,
    FaReply,
    FaTrash,
    FaArrowLeft
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/contactus/contactuscss.css";
import { Link, useNavigate } from "react-router-dom";

export default function ContactUsManagement() {

    const [contactus, setContsctus] = useState([]);
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
        fetch(`https://server-5-n0c3.onrender.com/contactus/${id}`, {
            method: "DELETE"
        })
            .then((res) => {
                if (!res.ok) throw new Error("Delete Failed")
                setContsctus((prev) => prev.filter((item) => item.id !== id))
            })
            .catch((err) => console.log(err))
    }


    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/contactus")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setContsctus(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
       
    }, []);

    const filteredCourse = contactus.filter((item) => {

        const matchesSearch =

            (item.status || "")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||

            (item.priority || "")
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
    className={`contact-page ${closing ? "page-closing" : ""}`}
    style={{ marginTop: "100px" }}
>

            {/* HEADER */}

            <div className="contact-header">

                <div className="explore-course-btn2">

                    <h2 style={{ fontSize: "25px" }}>Welcome To Contact Us Management</h2>

                    <p className="text-light">
                        Manage support messages & student inquiries.
                    </p>
                    <div className="btn-shine-effect2"></div>

                </div>

                <div className="d-flex">
                    <Link to="/exportmessage">
                        <button className="export-btn explore-course-btn mx-3">
                            Export Messages
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

            <div className="stats-grid">

                <div className="stats-card explore-course-btn">

                    <div className="stats-icon blue">
                        <FaEnvelope />
                    </div>

                    <div>

                        <h3 style={{ fontSize: "25px" }}>1200+</h3>

                        <p style={{ fontSize: "15px", color: "#ffff" }}>Total Messages</p>
                        <div className="btn-shine-effect"></div>

                    </div>

                </div>

                <div className="stats-card explore-course-btn">

                    <div className="stats-icon orange">
                        <FaInbox />
                    </div>

                    <div>

                        <h3 style={{ fontSize: "25px" }}>85</h3>

                        <p style={{ fontSize: "15px", color: "#ffff" }}>Unread Messages</p>
                        <div className="btn-shine-effect"></div>

                    </div>

                </div>

                <div className="stats-card explore-course-btn">

                    <div className="stats-icon green">
                        <FaCheckCircle />
                    </div>

                    <div>

                        <h3 style={{ fontSize: "25px" }}>920</h3>

                        <p style={{ fontSize: "15px", color: "#ffff" }}>Resolved Tickets</p>
                        <div className="btn-shine-effect"></div>

                    </div>

                </div>

                <div className="stats-card explore-course-btn">

                    <div className="stats-icon purple">
                        <FaPhoneAlt />
                    </div>

                    <div>

                        <h3 style={{ fontSize: "25px" }}>120</h3>

                        <p style={{ fontSize: "15px", color: "#ffff" }}>Callback Requests</p>
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
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search messages..."
                    />

                </div>

                <select>

                    <option>All Status</option>

                    <option>Pending</option>

                    <option>In Progress</option>

                    <option>Resolved</option>

                </select>

            </div>

            {/* TABLE */}

            <div className="table-wrapper">

                <table className="contact-table courses-table table table-striped table-hover table-bordered">

                    <thead>

                        <tr>
                            <th>User</th>
                            <th>Subject</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Preview</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filteredCourse.length > 0 ? (
                            filteredCourse.map((item) => (

                                <tr key={item.id}>

                                    {/* USER */}

                                    <td>

                                        <div className="user-info">
                                            {/* 
                                            <img
                                                src={item.image}
                                                alt=""
                                            /> */}

                                            <div>

                                                <h4>{item.name}</h4>

                                            </div>

                                        </div>

                                    </td>

                                    <td>{item.subject}</td>

                                    <td className="student-email-cell">
                                        {item.email}
                                    </td>

                                    <td className="bg-dark">

                                        <div className="student-contact-chip">

                                            <span className="contact-country-code" style={{ fontSize: "14px" }}>
                                                +91
                                            </span>

                                            <span className="contact-mobile-number">
                                                {item.number}
                                            </span>

                                        </div>

                                    </td>

                                    <td className="bg-dark">

                                        <div className="student-contact-chip">

                                            <span className="contact-mobile-number">
                                                {item.date}
                                            </span>

                                        </div>

                                    </td>
                                    {/* PRIORITY */}

                                    <td>

                                        <span
                                            className={`priority ${item.priority.toLowerCase()}`}
                                        >
                                            {item.priority}
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

                                    {/* PREVIEW */}

                                    <td>

                                        <span className="preview">
                                            {item.previous}
                                        </span>

                                    </td>

                                    {/* ACTIONS */}

                                    <td>

                                        <div className="action-buttons">

                                            <Link to={`/studentcall/${item.id}`}>
                                                <button className="call-btn1">
                                                    <FaPhoneAlt />
                                                </button>

                                            </Link>
                                            <Link to={`/studentwhatsupcontact/${item.id}`}>
                                                <button className="whatsapp-btn1">
                                                    <FaWhatsapp />
                                                </button>
                                            </Link>

                                            <Link to={`/studentviewcontact/${item.id}`}>
                                                <button className="call-btn1">
                                                    <FaEye />
                                                </button>
                                            </Link>

                                            <Link to={`/replymessage/${item.id}`}>
                                                <button className="reply-btn">
                                                    <FaReply />
                                                </button>
                                            </Link>

                                            <button className="delete-btn">
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