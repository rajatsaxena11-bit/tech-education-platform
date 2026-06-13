{/* CREATE BATCH MODAL */ }

import React, { useEffect, useState } from 'react'
import '../../../../assets/admincss/sidebarcss/batches/addbatches.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditBatch() {
    const [show, setShow] = useState(true)
    const [closing, setClosing] = useState(false);

    if (!show) return null

    const [formData, setFormData] = useState({
        batch: "",
        course: "",
        faculty: "",
        students: "",
        time: "",
        mode: "",
        status: "",
        progress: "",
    });

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        fetch(`https://server-5-n0c3.onrender.com/ScheduleBatches/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(() => {

                alert("Faculty Added Successfully");

                navigate("/ourbatchesdetails");

            })
            .catch((err) => console.log(err));

    };
    useEffect(() => {
        fetch(`https://server-5-n0c3.onrender.com/ScheduleBatches/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])


    return (
        <>
            <div
                className={`academy-batch-overlay mt-5 ${closing ? "overlay-closing" : ""
                    }`}
            >

                <div
                    className={`academy-batch-modal ${closing ? "modal-closing" : ""
                        }`}
                >

                    {/* HEADER */}

                    <div className="academy-batch-header">

                        <div>

                            <span className="academy-batch-tag">
                                🚀 Edit Batch Setup
                            </span>

                            <h2>
                                Edit Training Batch
                            </h2>

                            <p>
                                Create and manage new student batches with schedules & trainers.
                            </p>

                        </div>

                        <button
                            type="button"
                            className="academy-close-action"
                            onClick={handleClose}
                        >
                            ✕
                        </button>

                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit}>
                        <div className="academy-batch-form-grid">

                            {/* Batch Name */}


                            <div className="academy-input-group">

                                <label>
                                    Batch Name
                                </label>

                                <input
                                    type="text"
                                    name='batch'
                                    value={formData.batch}
                                    onChange={handleChange}
                                    placeholder="Enter batch name"
                                />

                            </div>

                            {/* Course */}

                            <div className="academy-input-group">

                                <label>
                                    Select Course
                                </label>

                                <select
                                    name='course'
                                    value={formData.course}
                                    onChange={handleChange}>

                                    <option>
                                        Choose Course
                                    </option>

                                    <option>
                                        MERN Stack
                                    </option>

                                    <option>
                                        FrontEnd Developer
                                    </option>

                                    <option>
                                        Backend Developer
                                    </option>

                                    <option>
                                        Testing
                                    </option>

                                </select>

                            </div>

                            {/* Faculty */}

                            <div className="academy-input-group">

                                <label>
                                    Faculty Name
                                </label>

                                <input
                                    type="text"
                                    name='faculty'
                                    value={formData.faculty}
                                    onChange={handleChange}
                                    placeholder="Assign trainer"
                                />

                            </div>

                            {/* Students */}

                            <div className="academy-input-group">

                                <label>
                                    Total Students
                                </label>

                                <input
                                    type="number"
                                    name='students'
                                    value={formData.students}
                                    onChange={handleChange}
                                    placeholder="Enter student count"
                                />

                            </div>

                            {/* Timing */}

                            <div className="academy-input-group">

                                <label>
                                    Batch Timing
                                </label>

                                <input
                                    type="text"
                                    name='time'
                                    value={formData.time}
                                    onChange={handleChange}
                                    placeholder="10:00 AM - 12:00 PM"
                                />

                            </div>

                            {/* Mode */}

                            <div className="academy-input-group">

                                <label>
                                    Learning Mode
                                </label>

                                <select
                                    name='mode'
                                    value={formData.mode}
                                    onChange={handleChange}
                                >

                                    <option>
                                        Online
                                    </option>

                                    <option>
                                        Offline
                                    </option>

                                    <option>
                                        Hybrid
                                    </option>

                                </select>

                            </div>

                            {/* Status */}

                            <div className="academy-input-group">

                                <label>
                                    Batch Status
                                </label>

                                <select
                                    name='status'
                                    value={formData.status}
                                    onChange={handleChange}
                                >

                                    <option>
                                        Active
                                    </option>

                                    <option>
                                        Upcoming
                                    </option>

                                    <option>
                                        Completed
                                    </option>

                                </select>

                            </div>

                            {/* Progress */}

                            <div className="academy-input-group">

                                <label>
                                    Batch Progress
                                </label>

                                <input
                                    type="number"
                                    name='progress'
                                    value={formData.progress}
                                    onChange={handleChange}
                                    placeholder="0 - 100%"
                                />

                            </div>

                        </div>

                        {/* FOOTER */}





                        <div className="academy-batch-footer">
                            <button type='submit' className="career-primary-btn academy-create-btn">

                                Update Batch

                            </button>
                            <button className="academy-cancel-btn career-primary-btn" onClick={() => navigate(-1)}>

                                Cancel

                            </button>
                        </div>
                    </form>
                </div>

            </div >
        </>
    )
}
