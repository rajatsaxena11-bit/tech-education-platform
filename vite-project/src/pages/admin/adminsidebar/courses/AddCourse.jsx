import React, { useState } from 'react'
import '../../../../assets/admincss/sidebarcss/courses/addcoursecss.css'
import { useNavigate } from 'react-router-dom';

export default function AddCourse() {
    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        level: "",
        trainer: "",
        student: "",
        duration: "",
        fees: "",
        status: "",
        description: "",
        course:""

    })

     const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("https://server-5-n0c3.onrender.com/CoursesManagement", {
            method: "POST",
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
                navigate("/ourcoursespage")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>

            <div className="coursePage" style={{marginTop:"80px"}}>
                <div
                    className={`courseCard ${closing ? "modal-closing" : ""}`}
                >

                    <div className="courseHeader">
                        <span>COURSE MANAGEMENT</span>
                        <h2>Add New Course</h2>
                        <p>Create a professional course for students</p>
                    </div>

                     <button
                        type="button"
                        className="closeBtn"
                        onClick={handleClose}
                    >
                        ✕
                    </button>

                    <form onSubmit={handleSubmit}>

                        <div className="uploadSection">
                            <label>Course Thumbnail</label>
                            <input type="file" />
                        </div>

                        <div className="grid2">
                            <div className="field">
                                <label>Course Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="React JS Masterclass"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field">
                                <label>Category</label>
                                <select name="category" onChange={handleChange}>
                                    <option>Select Category</option>
                                    <option>Web Development</option>
                                    <option>Data Science</option>
                                    <option>Programming</option>
                                    <option>Cyber Security</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid3">
                            <div className="field">
                                <label>Instructor</label>
                                <input
                                    type="text"
                                    name="instructor"
                                    placeholder="John Doe"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field">
                                <label>Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    placeholder="3 Months"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field">
                                <label>Level</label>
                                <select name="level" onChange={handleChange}>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid2">
                            <div className="field">
                                <label>Course Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="4999"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="field">
                                <label>Discount Price</label>
                                <input
                                    type="number"
                                    name="discountPrice"
                                    placeholder="2999"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label>Description</label>
                            <textarea
                                rows="5"
                                name="description"
                                placeholder="Write course description..."
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>What Students Will Learn</label>
                            <textarea
                                rows="4"
                                name="outcomes"
                                placeholder="Learning outcomes..."
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>Requirements</label>
                            <textarea
                                rows="4"
                                name="requirements"
                                placeholder="Requirements..."
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>SEO Keywords</label>
                            <input
                                type="text"
                                name="seo"
                                placeholder="react, javascript, frontend"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="publishRow">
                            <label>Publish Course</label>
                            <input
                                type="checkbox"
                                name="publish"
                                checked={formData.publish}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="publishBtn">
                            Publish Course
                        </button>

                    </form>
                </div>
            </div>


        </>
    )
}
