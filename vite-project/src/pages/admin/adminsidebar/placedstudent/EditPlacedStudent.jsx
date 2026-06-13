// AddPlacement.jsx

import React, { useEffect, useState } from "react";

import {
    FaUserGraduate,
    FaBuilding,
    FaUpload,
    FaArrowLeft,
    FaBriefcase,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/placedstudent/addplacement.css";

export default function EditPlacement() {

    const navigate = useNavigate();
    const { id } = useParams()

    const [formData, setFormData] = useState({
        name: "",
        studentId: "",
        course: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        package: "",
        location: "",
        joiningDate: "",
        status: "",
        logo: "",
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch(`https://server-5-n0c3.onrender.com/PlacedStudent/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {
                navigate("/placedstudent");
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetch(`https://server-5-n0c3.onrender.com/PlacedStudent/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])

    return (

        <div className="addPlacementPage container" style={{marginTop:"100px"}}>

            {/* HEADER */}

            <div className="placementTopBar">

                <div>

                    <h2>
                        Edit Placement
                    </h2>

                    <p>
                        Edit newly placed student details
                    </p>

                </div>
                <button className="explore-course-btn add-btn" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                    Back
                    <div className="btn-shine-effect"></div>
                </button>



            </div>

            {/* FORM */}

            <form
                className="placementMainForm"
                onSubmit={handleSubmit}
            >

                {/* STUDENT CARD */}

                <div className="placementCard">

                    <div className="placementCardTitle">

                        <FaUserGraduate />

                        <h4>
                            Student Details
                        </h4>

                    </div>

                    <div className="placementGrid">

                        <div className="placementInputBox">

                            <label>
                                Student Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter student name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Student ID
                            </label>

                            <input
                                type="text"
                                name="studentId"
                                placeholder="STU-101"
                                value={formData.studentId}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Course
                            </label>

                            <input
                                type="text"
                                name="course"
                                placeholder="MERN Stack"
                                value={formData.course}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Phone
                            </label>

                            <input
                                type="text"
                                name="phone"
                                placeholder="+91 9876543210"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </div>

                {/* PLACEMENT CARD */}

                <div className="placementCard">

                    <div className="placementCardTitle">

                        <FaBuilding />

                        <h4>
                            Placement Details
                        </h4>

                    </div>

                    <div className="placementGrid">

                        <div className="placementInputBox">

                            <label>
                                Company Name
                            </label>

                            <input
                                type="text"
                                name="company"
                                placeholder="Infosys"
                                value={formData.company}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Job Role
                            </label>

                            <input
                                type="text"
                                name="role"
                                placeholder="Frontend Developer"
                                value={formData.role}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Package
                            </label>

                            <input
                                type="text"
                                name="package"
                                placeholder="₹6 LPA"
                                value={formData.package}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Location
                            </label>

                            <input
                                type="text"
                                name="location"
                                placeholder="Bangalore"
                                value={formData.location}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Joining Date
                            </label>

                            <input
                                type="date"
                                name="joiningDate"
                                value={formData.joiningDate}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="placementInputBox">

                            <label>
                                Status
                            </label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >

                                <option value="">
                                    Select Status
                                </option>

                                <option value="Joined">
                                    Joined
                                </option>

                                <option value="Offer Received">
                                    Offer Received
                                </option>

                                <option value="Interview Scheduled">
                                    Interview Scheduled
                                </option>

                            </select>

                        </div>

                        <div className="placementInputBox fullWidth">

                            <label>
                                Company Logo URL
                            </label>

                            <input
                                type="text"
                                name="logo"
                                placeholder="Paste company logo URL"
                                value={formData.logo}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </div>

                {/* BUTTONS */}

                <div className="placementActionBtns">

                    <button
                        type="button"
                        className="career-primary-btn placementCancelBtn"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="career-primary-btn placementSaveBtn"
                    >
                        <FaUpload />
                        Save Placement
                    </button>

                </div>

            </form>

        </div>
    );
}