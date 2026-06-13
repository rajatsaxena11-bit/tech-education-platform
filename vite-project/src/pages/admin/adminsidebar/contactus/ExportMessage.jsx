{/* EXPORT MODAL */ }

import React, { useState } from 'react'
import '../../../../assets/admincss/messageexport.css'
import { useNavigate } from 'react-router-dom'

export default function ExportMessage() {
    const[show, setShow] = useState(true)

    if(!show) return null

    const navigate = useNavigate()
    return (
        <>
            <div className="message-export-overlay mt-5">

                <div className="message-export-modal">

                    {/* HEADER */}

                    <div className="message-export-header">

                        <div>

                            <span className="message-export-badge">
                                📤 Export Center
                            </span>

                            <h2 style={{fontSize:"23px"}}>
                                Export Contact Messages
                            </h2>

                            <p>
                                Download inquiries, support tickets & student messages.
                            </p>

                        </div>

                        <button className="message-export-close" onClick={()=>navigate("/contactadmin")}>
                            ✕
                        </button>

                    </div>

                    {/* BODY */}

                    <div className="message-export-grid">

                        {/* FORMAT */}

                        <div className="message-export-card">

                            <h4>
                                Select File Format
                            </h4>

                            <div className="message-format-options">

                                <button className="message-format-btn active">

                                    📄 PDF Report

                                </button>

                                <button className="message-format-btn">

                                    📊 Excel Sheet

                                </button>

                                <button className="message-format-btn">

                                    🗂 CSV File

                                </button>

                            </div>

                        </div>

                        {/* FILTER */}

                        <div className="message-export-card">

                            <h4>
                                Filter Messages
                            </h4>

                            <div className="message-filter-grid">

                                <div className="message-input-group">

                                    <label>
                                        Status
                                    </label>

                                    <select>

                                        <option>
                                            All Messages
                                        </option>

                                        <option>
                                            Pending
                                        </option>

                                        <option>
                                            In Progress
                                        </option>

                                        <option>
                                            Resolved
                                        </option>

                                    </select>

                                </div>

                                <div className="message-input-group">

                                    <label>
                                        Priority
                                    </label>

                                    <select>

                                        <option>
                                            All Priority
                                        </option>

                                        <option>
                                            High
                                        </option>

                                        <option>
                                            Medium
                                        </option>

                                        <option>
                                            Low
                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        {/* DATE RANGE */}

                        <div className="message-export-card">

                            <h4>
                                Select Date Range
                            </h4>

                            <div className="message-filter-grid">

                                <div className="message-input-group">

                                    <label>
                                        From Date
                                    </label>

                                    <input type="date" />

                                </div>

                                <div className="message-input-group">

                                    <label>
                                        To Date
                                    </label>

                                    <input type="date" />

                                </div>

                            </div>

                        </div>

                        {/* SUMMARY */}

                        <div className="message-export-summary">

                            <div className="message-summary-box">

                                <h3>
                                    1,240
                                </h3>

                                <span>
                                    Total Messages
                                </span>

                            </div>

                            <div className="message-summary-box">

                                <h3>
                                    320
                                </h3>

                                <span>
                                    Pending
                                </span>

                            </div>

                            <div className="message-summary-box">

                                <h3>
                                    920
                                </h3>

                                <span>
                                    Resolved
                                </span>

                            </div>

                        </div>

                    </div>

                    {/* FOOTER */}

                    <div className="message-export-footer">

                        <button className="message-cancel-btn">

                            Cancel

                        </button>

                        <button className="message-download-btn">

                            Download Report

                        </button>

                    </div>

                </div>

            </div>
        </>
    )
}
