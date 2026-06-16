// CareerOpportunities.jsx

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import {
    FaSearch,
    FaMapMarkerAlt,
    FaArrowRight,
    FaBriefcase,
} from "react-icons/fa";

import "../../assets/mycss/notification/viewallnotification.css";

export default function CareerOpportunities() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, []);



    // useEffect(() => {
    //     fetch("https://server-5-n0c3.onrender.com/carreropportunity")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(
                    "https://server-5-n0c3.onrender.com/carreropportunity"
                );

                const result = await response.json();

                setData(result);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobs = data.filter((job) =>
        job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="frontend-loader">
                <div className="spinner"></div>
                <h3>Loading...</h3>
            </div>
        );
    }

    return (

        <div className="careerhub-wrapper">

            {/* HERO */}

            <div className="careerhub-hero">

                <h1>
                    Explore Career Opportunities
                </h1>

                <p>
                    Discover hiring drives, internships,
                    remote jobs & placement opportunities.
                </p>

            </div>

            {/* SEARCH */}

            <div className="careerhub-search-box">

                <FaSearch className="careerhub-search-icon" />

                <input
                    type="text"
                    placeholder="Search company or role..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />

            </div>

            {/* FILTERS */}

            <div className="careerhub-filter-area">

                <button>All Jobs</button>
                <button>Internships</button>
                <button>Remote</button>
                <button>Fresher</button>
                <button>AI Jobs</button>

            </div>

            {/* JOB GRID */}

            <div className="careerhub-grid">

                {filteredJobs.length > 0 ? (
                    filteredJobs.map((data, index) => (

                        <div
                            className="careerhub-card"
                            key={data.id}
                        >

                            <div className="careerhub-card-top">

                                <div className="careerhub-company-icon">
                                    <FaBriefcase />
                                </div>

                                <span className="careerhub-badge explore-course-btn2" style={{ background: "#032128" }}>

                                    {data.type}
                                    <div className="btn-shine-effect2"></div>

                                </span>

                            </div>

                            <h3>

                                {data.role}

                            </h3>


                            <h5>

                                {data.company}

                            </h5>

                            <p>

                                {data.skills}

                            </p>


                            <div className="careerhub-footer">

                                <span>

                                    <FaMapMarkerAlt />

                                    {data.location}

                                </span>
                                <span className="careerhub-badge explore-course-btn2 text-light">

                                    {data.package}
                                    <div className="btn-shine-effect2"></div>

                                </span>

                                <Link to={`/jobapply/${data.id}`}>
                                    <button className="explore-course-btn2">

                                        Apply Now

                                        <FaArrowRight />
                                        <div className="btn-shine-effect2"></div>

                                    </button>
                                </Link>

                            </div>

                        </div>
                    ))
                ) : (

                    <tr>

                        <td
                            colSpan="6"
                            className="text-center py-4"
                        >
                            No Course Found
                        </td>

                    </tr>

                )}



            </div>

        </div>

    );
}