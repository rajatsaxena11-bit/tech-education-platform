// TopMNCHiring.jsx

import React, { useEffect, useState } from "react";

import {
    FaGoogle,
    FaAmazon,
    FaMicrosoft,
    FaApple,
} from "react-icons/fa";

import {
    SiInfosys,
    SiTcs,
    SiWipro,
    SiAccenture,
} from "react-icons/si";

import {
    FaArrowRight,
    FaMapMarkerAlt,
    FaBriefcase,
} from "react-icons/fa";

const iconMap = {

    google: <FaGoogle />,
    amazon: <FaAmazon />,
    microsoft: <FaMicrosoft />,
    apple: <FaApple />,
    infosys: <SiInfosys />,
    tcs: <SiTcs />,
    wipro: <SiWipro />,
    accenture: <SiAccenture />,

};

import "../../assets/mycss/placements/topmnc.css";
import { Link } from "react-router-dom";

export default function TopMNCHiring() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/MNCCommpany")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [])

    if (loading) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
                <h4>Loading Students...</h4>
            </div>
        );
    }


    return (

        <section className="mncworld-section mt-5">

            <div className="mncworld-top-area">

                <span className="mncworld-mini-title">

                    🔥 TOP MNC HIRING

                </span>

                <h2>

                    Top Companies Hiring Students & Developers

                </h2>

                <p>

                    Explore premium opportunities from leading
                    global companies and kickstart your IT career.

                </p>

            </div>

            {/* GRID */}

            <div className="mncworld-grid-layout">

                {data.map((item) => (

                    <div
                        className="mncworld-company-card"
                        key={item.id}
                    >

                        {/* TOP */}

                        <div className="mncworld-card-top">

                            <div className={`mncworld-logo-box ${item.logoClass}`}>

                                {iconMap[item.icon]}

                            </div>

                            <span className="mncworld-job-badge">

                                {item.type}

                            </span>

                        </div>

                        {/* CONTENT */}

                        <div className="mncworld-content-area">

                            <h3>

                                {item.role}

                            </h3>

                            <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>

                                {item.name}

                            </h4>


                            <div className="mncworld-job-meta">

                                <span>

                                    <FaMapMarkerAlt />

                                    {item.location}

                                </span>

                                <span>

                                    <FaBriefcase />

                                    {item.experience}

                                </span>

                            </div>

                            <p>

                                {item.openings}

                            </p>

                        </div>

                        {/* BUTTON */}

                        <Link to={`/mncjobapply/${item.id}`}>
                            <button className="mncworld-apply-btn">

                                Apply Now

                                <FaArrowRight />

                            </button>
                        </Link>

                    </div>

                ))}

            </div>

        </section>

    );
}