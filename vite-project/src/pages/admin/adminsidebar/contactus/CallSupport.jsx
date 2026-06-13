import React, { useEffect, useState } from "react";

import {
    FaTimes,
    FaPhoneAlt,
    FaUserGraduate,
    FaClock,
    FaCheckCircle,
    FaPhoneSlash,
    FaStickyNote,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/contactus/contactcallsupport.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function CallSupportModal({ source }) {
    const [show, setShow] = useState(true)
    const [closing, setClosing] = useState(false);

    const location = useLocation();

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };
    if (!show) return null

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        level: "",
        trainer: "",
        student: "",
        duration: "",
        fees: "",
        status: "",
        description: ""

    })

    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://server-5-n0c3.onrender.com/contactus/${id}`, {
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
                navigate("/contactus")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetch(`https://server-5-n0c3.onrender.com/contactus/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])

    return (

        <div
            className={`call-support-overlay ${closing ? "modal-closing" : ""
                }`}
        >

            <div className="call-support-container">

                {/* CLOSE BTN */}
                <button
                    className="replydesk-close-btn call-support-close-btn"
                    onClick={handleClose}
                >
                    ✕
                </button>



                {/* HEADER */}

                <div className="call-support-header">

                    <div className="call-support-user">

                        <div className="call-support-avatar" style={{ fontSize: "20px" }}>
                            {formData?.name?.charAt(0)}
                        </div>

                        <div>

                            <h3 style={{ fontSize: "20px" }}>
                                {formData?.name}
                            </h3>

                            <p>
                                Student Support Call
                            </p>

                        </div>

                    </div>

                    <div className="call-live-badge">
                        Live Call Support
                    </div>

                </div>

                {/* BODY */}

                <div className="call-support-body">

                    {/* PHONE CARD */}

                    <div className="call-info-card">

                        <span>
                            <FaPhoneAlt />
                            Mobile Number
                        </span>

                        <h4>
                            +91 {formData?.number}
                        </h4>

                    </div>

                    {/* SUBJECT */}

                    <div className="call-info-card">

                        <span>
                            <FaUserGraduate />
                            Inquiry Subject
                        </span>

                        <h4>
                            {formData?.subject}
                        </h4>

                    </div>

                    {/* TIME */}

                    <div className="call-info-card">

                        <span>
                            <FaClock />
                            Call Duration
                        </span>

                        <h4>
                            00 : 12 : 45
                        </h4>

                    </div>

                    {/* NOTES */}

                    <div className="call-notes-box">

                        <label>
                            <FaStickyNote />
                            Admin Notes
                        </label>

                        <textarea
                            placeholder="Write call notes here..."
                        ></textarea>

                    </div>

                </div>

                {/* FOOTER */}

                <div className="call-support-footer">

                    <button className="call-start-btn">

                        <FaPhoneAlt />

                        Start Call

                    </button>

                    <button className="call-success-btn">

                        <FaCheckCircle />

                        Connected

                    </button>

                    <button
                        className="call-missed-btn"
                        onClick={handleClose}
                    >
                        <FaPhoneSlash />
                        Missed
                    </button>
                </div>

            </div>

        </div>
    );
}