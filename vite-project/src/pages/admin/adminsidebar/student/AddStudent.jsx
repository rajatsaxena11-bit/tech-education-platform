import React, { useState } from "react";
import "../../../../assets/admincss/sidebarcss/student/addstudent.css";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
    const [closing, setClosing] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        studentId: "",
        course: "",
        company: "",
        status: "Pending",
    });

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://server-5-n0c3.onrender.com/Students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to add student");
                return res.json();
            })
            .then(() => {
                navigate("/viewstudent");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="course-modal-overlay" style={{ marginTop: "80px" }}>
            <div
                className={`course-modal-container ${closing ? "modal-closing" : ""
                    }`}
            >

                {/* HEADER */}

                <div className="course-modal-header">
                    <div>
                        <span className="modal-badge">
                            STUDENT MANAGEMENT
                        </span>

                        <h2>Add New Student</h2>

                        <p>
                            Add and manage placement students.
                        </p>
                    </div>

                    <button
                        className="close-modal-btn"
                        onClick={handleClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="course-modal-body">

                        {/* LEFT SIDE */}

                        <div className="course-form-section">

                            <div className="premium-input-group">
                                <label>Student Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter Student Name"
                                    required
                                />
                            </div>

                            <div className="premium-input-group">
                                <label>Student ID</label>

                                <input
                                    type="text"
                                    name="studentId"
                                    value={formData.studentId}
                                    onChange={handleChange}
                                    placeholder="Enter Student ID"
                                    required
                                />
                            </div>

                            <div className="premium-grid">

                                <div className="premium-input-group">
                                    <label>Course</label>

                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Select Course
                                        </option>

                                        <option value="Frontend Developer">
                                            Frontend Developer
                                        </option>

                                        <option value="Backend Developer">
                                            Backend Developer
                                        </option>

                                        <option value="MERN Stack Developer">
                                            MERN Stack Developer
                                        </option>

                                        <option value="Software Testing">
                                            Software Testing / QA
                                        </option>
                                    </select>
                                </div>

                                <div className="premium-input-group">
                                    <label>Phone</label>

                                    <input
                                        type="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        placeholder="Enter Mobile Number"
                                    />
                                </div>

                                <div className="premium-input-group">
                                    <label>Email</label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter Email"
                                    />
                                </div>

                                <div className="premium-input-group">
                                    <label>Company</label>

                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Enter Company Name"
                                    />
                                </div>
                            </div>

                            <div className="premium-input-group">
                                <label>Status</label>

                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="Placed">
                                        Placed
                                    </option>

                                    <option value="Pending">
                                        Pending
                                    </option>

                                    <option value="Interview">
                                        Interview
                                    </option>
                                </select>
                            </div>

                            <div className="course-modal-footer">

                                <button
                                    type="button"
                                    className="cancel-btn"
                                    onClick={() => navigate(-1)}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="submit-btn"
                                >
                                    Add Student
                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="course-preview-section">

                            <div className="premium-preview-card">

                                <div className="floating-circle circle-1"></div>
                                <div className="floating-circle circle-2"></div>

                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000"
                                    alt=""
                                    className="preview-banner"
                                />

                                <div className="preview-content">

                                    <span className="live-badge">
                                        🚀 New Admission
                                    </span>

                                    <h2>
                                        {formData.course || "MERN Stack Development"}
                                    </h2>

                                    <p>
                                        Transform students into industry-ready developers
                                        with real projects, internship support and placement assistance.
                                    </p>

                                    <div className="preview-stats">

                                        <div className="stat-box">
                                            <h3>500+</h3>
                                            <span>Students</span>
                                        </div>

                                        <div className="stat-box">
                                            <h3>95%</h3>
                                            <span>Placement</span>
                                        </div>

                                        <div className="stat-box">
                                            <h3>4.9★</h3>
                                            <span>Rating</span>
                                        </div>

                                    </div>

                                    <div className="student-live-preview">

                                        <div className="avatar-box">
                                            {formData.name
                                                ? formData.name.charAt(0).toUpperCase()
                                                : "S"}
                                        </div>

                                        <div>
                                            <h5>
                                                {formData.name || "Student Name"}
                                            </h5>

                                            <p>
                                                {formData.email || "student@email.com"}
                                            </p>
                                        </div>

                                    </div>

                                    <button className="premium-action-btn">
                                        Ready For Enrollment
                                    </button>

                                </div>

                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}