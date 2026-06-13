import React, { useEffect, useState } from 'react'
import '../../../../assets/admincss/replymessage.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function ReplyMessage() {
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

        fetch(`http://localhost:4000/contactus/${id}`, {
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
        fetch(`http://localhost:4000/contactus/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data)
            })
    }, [id])
  return (
  <>
   <div className="replydesk-overlay">

    <div className="replydesk-container">

        {/* HEADER */}

        <div className="replydesk-header">

            <div>
                <h2>Reply to Inquiry</h2>
                <p>Send professional response to student</p>
            </div>

            <button className="replydesk-close-btn" onClick={()=>navigate("/contactadmin")}>
                ✕
            </button>

        </div>

        {/* BODY */}

        <div className="replydesk-layout">

            {/* LEFT */}

            <div className="replydesk-user-card">

                <h4>Student Details</h4>

                <div className="replydesk-user-info">

                    <p>
                        <strong>Name :</strong> {formData.name}
                    </p>

                    <p>
                        <strong>Email :</strong> {formData.email}
                    </p>

                    <p>
                        <strong>Subject :</strong> {formData.subject}
                    </p>

                </div>

                <div className="replydesk-message-box">

                    <h5>Original Message</h5>

                    <p>
                        I want complete details about fees, and {formData.previous}
                       
                    </p>

                </div>

            </div>

            {/* RIGHT */}

            <div className="replydesk-editor-card">

                <h4>Write Reply</h4>

                <textarea
                    placeholder="Write your professional reply here..."
                ></textarea>

                <div className="replydesk-template-row">

                    <button>
                        Course Details
                    </button>

                    <button>
                        Placement Info
                    </button>

                    <button>
                        Fee Structure
                    </button>

                </div>

                <div className="replydesk-footer">

                    <label>

                        <input type="checkbox" />

                        Mark as Resolved

                    </label>

                    <button className="replydesk-send-btn">
                        Send Reply
                    </button>

                </div>

            </div>

        </div>

    </div>

</div>
  </>
  )
}
