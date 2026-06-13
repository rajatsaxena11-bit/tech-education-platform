// ViewBatch.jsx

import React, { useEffect, useState } from "react";

import {
    FaArrowLeft,
    FaUsers,
    FaClock,
    FaVideo,
    FaBookOpen,
    FaChalkboardTeacher,
    FaCheckCircle,
    FaCalendarAlt,
    FaLaptopCode,
} from "react-icons/fa";

import { Link, useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/batches/viewbatch.css";

export default function ViewBatch() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [viewBatch, setViewBatch] = useState({});

    useEffect(() => {

        fetch(`https://server-5-n0c3.onrender.com/ScheduleBatches/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setViewBatch(data);
            })
            .catch((err) => console.log(err));

    }, [id]);

    // DUMMY DATA

    const batchData = {
        id: id,
        batchName: "MERN Morning Batch",
        batchId: "BATCH1025",
        course: "MERN Stack Development",
        trainer: "Rahul Sharma",
        students: 48,
        timing: "10:00 AM - 12:00 PM",
        duration: "6 Months",
        mode: "Online",
        progress: 72,
        startDate: "15 Jan 2026",
        endDate: "15 Jul 2026",
        status: "Active",
        liveClass: "Running",
        topicsCompleted: 28,
        pendingTopics: 10,
        description:
            "This batch is focused on full MERN Stack Development including MongoDB, Express.js, React.js and Node.js with real world projects and placement preparation.",
    };

    return (

        <div className="view-batch-page" style={{marginTop:"100px"}}>

            {/* HEADER */}

            <div className="view-batch-header">

                <div>

                    <h2>
                        Batch Details
                    </h2>

                    <p>
                        Complete batch information & performance overview
                    </p>

                </div>

                <button className="add-course-btn career-primary-btn mx-3" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                    Back
                </button>

            </div>

            {/* TOP CARD */}

            <div className="view-batch-top-card">

                <div className="view-batch-left">

                    <div className="view-batch-avatar">

                        {viewBatch?.batchname?.charAt(0)}

                    </div>

                    <div>

                        <h3 style={{fontSize:"20px"}}>
                            {viewBatch.batchname}
                        </h3>

                        <p>
                            Batch ID :
                            {viewBatch.batchId}
                        </p>

                    </div>

                </div>

                <span className="view-batch-status" style={{fontSize:"15px"}}>

                    <FaCheckCircle />

                    {viewBatch.status}

                </span>

            </div>

            {/* GRID */}

            <div className="view-batch-grid">

                {/* LEFT */}

                <div className="view-batch-main">

                    {/* INFO */}

                    <div className="view-batch-info-grid">

                        <div className="view-batch-info-card">

                            <FaBookOpen />

                            <div>

                                <span>
                                    Course
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.course}
                                </h5>

                            </div>

                        </div>

                        <div className="view-batch-info-card">

                            <FaChalkboardTeacher />

                            <div>

                                <span>
                                    Trainer
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.faculty}
                                </h5>

                            </div>

                        </div>

                        <div className="view-batch-info-card">

                            <FaUsers />

                            <div>

                                <span>
                                    Students
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.students} Students
                                </h5>

                            </div>

                        </div>

                        <div className="view-batch-info-card">

                            <FaClock />

                            <div>

                                <span>
                                    Timing
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.time}
                                </h5>

                            </div>

                        </div>

                        <div className="view-batch-info-card">

                            <FaCalendarAlt />

                            <div>

                                <span>
                                    Duration
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.duration}
                                </h5>

                            </div>

                        </div>

                        <div className="view-batch-info-card">

                            <FaVideo />

                            <div>

                                <span>
                                    Mode
                                </span>

                                <h5 style={{fontSize:"15px"}}>
                                    {viewBatch.mode}
                                </h5>

                            </div>

                        </div>

                    </div>

                    {/* DESCRIPTION */}

                    <div className="view-batch-description-card">

                        <h4>
                            Batch Description
                        </h4>

                        <p>
                            {viewBatch.description}
                        </p>

                    </div>

                    {/* PROGRESS */}

                    <div className="view-batch-progress-card">

                        <div className="view-progress-top">

                            <h4 style={{fontSize:"18px"}}>
                                Batch Progress
                            </h4>

                            <span style={{fontSize:"15px"}}>
                                {viewBatch.progress}%
                            </span>

                        </div>

                        <div className="view-progress-bar">

                            <div
                                className="view-progress-fill"
                                style={{
                                    width: `${viewBatch.progress}%`,
                                }}
                            ></div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="view-batch-sidebar">

                    {/* DATES */}

                    <div className="view-batch-side-card">

                        <h4>
                            Batch Schedule
                        </h4>

                        <div className="view-side-item">

                            <span>
                                Start Date
                            </span>

                            <h5 style={{fontSize:"15px"}}>
                                {viewBatch.start}
                                <span className="mx-5" style={{fontSize:"15px"}}>{viewBatch.time}</span>
                            </h5>

                        </div>

                        <div className="view-side-item">

                            <span>
                                End Date
                            </span>

                            <h5 style={{fontSize:"15px"}}>
                                {viewBatch.endDate}
                            </h5>

                        </div>

                    </div>

                    {/* LIVE STATUS */}

                    <div className="view-batch-side-card">

                        <h4>
                            Live Class
                        </h4>

                        <div className="live-class-status">

                            <FaLaptopCode />

                            <span style={{fontSize:"15px"}}>
                                {viewBatch.status}
                            </span>

                        </div>

                    </div>

                    {/* TOPICS */}

                    <div className="view-batch-side-card">

                        <h4>
                            Topics Overview
                        </h4>

                        <div className="topics-box">

                            <div className="topic-item completed-topic">

                                <h5 style={{fontSize:"15px"}}>
                                    {batchData.topicsCompleted}
                                </h5>

                                <span>
                                    Completed
                                </span>

                            </div>

                            <div className="topic-item pending-topic">

                                <h5 style={{fontSize:"15px"}}>
                                    {batchData.pendingTopics}
                                </h5>

                                <span>
                                    Pending
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* ACTIONS */}

                    <div className="view-batch-side-card">

                        <h4>
                            Quick Actions
                        </h4>

                        <div className="view-batch-actions">

                            <button className="join-live-btn career-primary-btn">
                                Join Live Class
                            </button>

                            <Link to={`/studentsattencedetails`}>
                               <button className="attendance-btn career-primary-btn w-100">
                                View Attendance
                            </button>
                            </Link>

                            <Link to = "/viewstudent">
                              <button className="students-btn career-primary-btn w-100">
                                Manage Students
                            </button>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}