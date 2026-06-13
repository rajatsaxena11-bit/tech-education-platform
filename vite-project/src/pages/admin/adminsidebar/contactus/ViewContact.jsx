import React, { useEffect, useState } from 'react'
import '../../../../assets/admincss/sidebarcss/contactus/viewcontact.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function ViewContact() {
    const [loading, setLoading] = useState(true);
    const[show, setShow] = useState(true)

    if(!show) return null

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
                navigate(-1)
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
                setLoading(false);
            })
             .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    }, [id])

     if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <h4>Loading Students...</h4>
      </div>
    );
  }

    return (
        <>
            {/* VIEW MESSAGE MODAL */}

            <div className="support-ticket-overlay">

                <div className="support-ticket-wrapper">

                    {/* CLOSE BUTTON */}

                    <button className="support-ticket-close" onClick={()=>navigate(-1)}>
                        ✕
                    </button>

                    {/* HEADER */}

                    <div className="support-ticket-header">

                        <div className="support-user-details">

                            <div className="support-user-avatar">
                                R
                            </div>

                            <div>

                                <h3 style={{fontSize:"20px"}}>
                                    {formData.name}
                                </h3>

                                <p>
                                    Student Inquiry • #MSG1025
                                </p>

                            </div>

                        </div>

                        <span className="support-priority-pill high-priority">
                            {formData.priority}
                        </span>

                    </div>

                    {/* CONTENT */}

                    <div className="support-ticket-layout">

                        {/* LEFT SECTION */}

                        <div className="support-ticket-main">

                            {/* INFO GRID */}

                            <div className="support-info-layout">

                                <div className="support-info-item">

                                    <span>Email Address</span>

                                    <h5>
                                        {formData.email}
                                    </h5>

                                </div>

                                <div className="support-info-item">

                                    <span>Phone Number</span>

                                    <h5>
                                        +91 {formData.number}
                                    </h5>

                                </div>

                                <div className="support-info-item">

                                    <span>Subject</span>

                                    <h5>
                                        {formData.subject}
                                    </h5>

                                </div>

                                <div className="support-info-item">

                                    <span>Status</span>

                                    <h5 className="pending-status-text">
                                       {formData.status}
                                    </h5>

                                </div>

                            </div>

                            {/* MESSAGE BOX */}

                            <div className="support-message-card">

                                <h4>
                                    Student Message
                                </h4>

                                <p>

                                    Hello sir, {formData.previous} course,
                                    placement support, fees structure,
                                    timings and live projects.
                                    Please contact me soon.

                                </p>

                            </div>

                            {/* REPLY BOX */}

                            <div className="support-reply-box">

                                <h4>
                                    Quick Reply
                                </h4>

                                <textarea
                                    placeholder="Write your reply here..."
                                ></textarea>

                                <button className="support-send-reply-btn">
                                    Send Reply
                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDEBAR */}

                        <div className="support-ticket-sidebar">

                            <div className="support-date-box">

                                <span>
                                    Inquiry Date
                                </span>

                                <h5>
                                    {formData.date}
                                </h5>

                                <small>
                                    10:45 AM
                                </small>

                            </div>

                            <div className="support-action-panel">

                                <button className="support-call-action">
                                    📞 Call Student
                                </button>

                                <button className="support-whatsapp-action">
                                    WhatsApp
                                </button>

                                <button className="support-email-action">
                                    Reply Email
                                </button>

                                <button className="support-resolve-action">
                                    Mark Resolved
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
