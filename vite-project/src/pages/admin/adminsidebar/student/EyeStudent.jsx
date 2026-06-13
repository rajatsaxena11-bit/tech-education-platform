import React, { useEffect, useState } from 'react'
import '../../../../assets/admincss/sidebarcss/student/eyestudent.css'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EyeStudent() {
    const [show, setShow] = useState(true)
    const [students, setStudents] = useState([])
const [closing, setClosing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        studentId: "",
        course: "",
        comapny: "",
        status: "",
        category: "",
        joiningdate: ""

    })

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://server-5-n0c3.onrender.com/Students/${id}`, {
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
                navigate("/viewstudent")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetch(`https://server-5-n0c3.onrender.com/Students/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])

    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/Students")
            .then((res) => res.json())
            .then((data) => {
                setStudents(data)
            })
    }, [])


    return (
        <>
            {/* VIEW STUDENT MODAL */}



            <div className={`neoStudentViewOverlay ${closing ? "modal-closing" : ""
                    }`} style={{ marginTop: "80px" }}>

                <div className="neoStudentViewContainer">

                    {/* HEADER */}

                    <div className="neoStudentViewHeader">

                        <div className="neoStudentProfileWrap">

                            {/* <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt=""
                                className="neoStudentAvatar"
                            /> */}

                        </div>

                         <button
                        className="close-modal-btn"
                        onClick={handleClose}
                    >
                        ✕
                    </button>

                    </div>

                    {/* BODY */}

                    <div className="neoStudentViewBody">

                        {/* LEFT */}

                        <div className="neoStudentMainCard">

                            <div className="neoStudentTopBadge">

                                <span>
                                    🚀 Placement Ready
                                </span>

                                <span className="course-badge bg-success text-light">

                                    {formData.status}

                                </span>

                            </div>

                            <h3>
                                {formData.course}
                            </h3>

                            <p>

                                Student is currently enrolled in production-level
                                MERN Stack development training with live projects,
                                API integrations & placement preparation.

                            </p>

                            {/* SKILLS */}

                            <div className="neoSkillGrid">

                                {formData.category?.toLowerCase() === "frontend" && (
                                    <>
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JavaScript</span>
                                        <span>React.js</span>
                                    </>
                                )}

                                {formData.category?.toLowerCase() === "backend" && (
                                    <>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                    </>
                                )}

                                {formData.category?.toLowerCase() === "mern" && (
                                    <>
                                        <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>MongoDB</span>
                                        <span>Express</span>
                                    </>
                                )}

                                {formData.category?.toLowerCase() === "testing" && (
                                    <>
                                        <span>Selenium</span>
                                        <span>Postman</span>
                                        <span>Jira</span>
                                    </>
                                )}

                            </div>

                            {/* PROGRESS */}


                            <div className="neoProgressWrap">

                                <div className="neoProgressHead">

                                    <h5 style={{color:"#fff", fontSize:"18px"}}>
                                        Course Progress
                                    </h5>

                                    <span>
                                        85%
                                    </span>

                                </div>

                                <div className="neoProgressBar">

                                    <div className="neoProgressFill"></div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="neoStudentInfoPanel">

                            <h4 style={{fontSize:"22px"}}>
                                Student Information
                            </h4>

                            <div className="neoInfoList">

                                <div className="neoInfoItem">

                                    <h6>
                                         {formData.name} 
                                         <br />
                                         <br />
                                         {formData.studentId}
                                    </h6>

                                </div>

                                <div className="neoInfoItem">

                                    <span>
                                        Email
                                    </span>

                                    <h6>
                                        {formData.email}
                                    </h6>

                                </div>

                                <div className="neoInfoItem">

                                    <span>
                                        Phone
                                    </span>

                                    <h6>
                                        {formData.number}
                                    </h6>

                                </div>

                                <div className="neoInfoItem">

                                    <span>
                                        Company
                                    </span>

                                    <h6>
                                        {formData.company}
                                    </h6>

                                </div>

                                <div className="neoInfoItem">

                                    <span>
                                        Joining Date
                                    </span>

                                    <h6>
                                        {formData.joiningdate}
                                    </h6>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FOOTER */}

                    <div className="neoStudentFooter">

                        <button className="career-primary-btn neoPrimaryBtn">
                            Download Resume
                        </button>

                        <Link to={`/editstudent/${students.id}`}>
                            <button className="career-primary-btn neoPrimaryBtn">
                                Edit Student
                            </button>
                        </Link>

                    </div>

                </div>

            </div>
        </>
    )
}
