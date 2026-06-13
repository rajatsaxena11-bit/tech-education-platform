import React, { useEffect, useState } from "react";

import {
    FaTimes,
    FaWhatsapp,
    FaPaperPlane,
    FaUserGraduate,
} from "react-icons/fa";

import "../../../../assets/admincss/sidebarcss/enquery/whatsupmessage.css";
import { useNavigate, useParams } from "react-router-dom";

export default function WhatsappSupportModalEnquiry({

    item,
    onClose,
}) {

    const whatsappMessage =
        `Hello ${item?.name},
Thank you for contacting Tech Institute.
Our team will contact you shortly regarding ${item?.subject}.`;

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
    const [closing, setClosing] = useState(false);

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

        fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`, {
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
                navigate("/contactadmin")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetch(`https://server-5-n0c3.onrender.com/EnquiriesLeads/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])

    return (

        <div className="whatsapp-support-overlay mt-5">

            <div
                className={`whatsapp-support-container ${closing ? "modal-closing" : ""
                    }`}
            >

                {/* CLOSE BTN */}

                <button
                    className="replydesk-close-btn call-support-close-btn"
                    onClick={handleClose}
                >
                    ✕
                </button>


                {/* HEADER */}

                <div className="whatsapp-support-header">

                    <div className="whatsapp-user-profile">

                        <div className="whatsapp-user-avatar">
                            {formData?.name?.charAt(0)}
                        </div>

                        <div>

                            <h3>
                                {formData?.name}
                            </h3>

                            <p>
                                <FaWhatsapp />
                                Online on WhatsApp
                            </p>

                        </div>

                    </div>

                    <div className="whatsapp-live-status">
                        Active Chat
                    </div>

                </div>

                {/* CHAT AREA */}

                <div className="whatsapp-chat-section">

                    <div className="whatsapp-message-bubble">

                        <span className="chat-user-name">
                            {import.meta.env.VITE_APP_SITE_NAME} Institude
                        </span>

                        <p>
                            Hello {item?.name},
                            thank you for contacting us 👋
                        </p>

                        <small>
                            10:42 AM
                        </small>

                    </div>

                    <div className="whatsapp-message-bubble admin-message">

                        <span className="chat-user-name">
                            Admission Team
                        </span>

                        <p>
                            We received your inquiry regarding:
                            <br />
                            <strong>
                                {item?.subject}
                            </strong>
                        </p>

                        <small>
                            10:43 AM
                        </small>

                    </div>

                </div>

                {/* MESSAGE BOX */}

                <div className="whatsapp-input-section">

                    <label>
                        Quick Reply Message
                    </label>

                    <textarea
                        defaultValue={whatsappMessage}
                    ></textarea>

                    <button className="whatsapp-send-btn">

                        <FaPaperPlane />

                        Send on WhatsApp

                    </button>

                </div>

            </div>

        </div>
    );
}