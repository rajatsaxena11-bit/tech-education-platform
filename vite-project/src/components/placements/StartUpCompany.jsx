// StartupOpportunities.jsx

import React, { useEffect, useState } from "react";

import {
    FaRocket,
    FaArrowRight,
    FaMapMarkerAlt,
    FaBriefcase,
    FaLaptopCode,
} from "react-icons/fa";

import {
    SiFigma,
    SiNotion,
    SiUpwork,
    SiSlack,
    SiNetlify,
    SiVercel,
    SiDiscord,
    SiShopify,
} from "react-icons/si";

import "../../assets/mycss/placements/startup.css";
import { Link } from "react-router-dom";

const startupIcons = {
    Vercel: <SiVercel />,
    Notion: <SiNotion />,
    Figma: <SiFigma />,
    Slack: <SiSlack />,
    Netlify: <SiNetlify />,
    Discord: <SiDiscord />,
    Shopify: <SiShopify />,
    Upwork: <SiUpwork />,
};

export default function StartupOpportunities() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://server-5-n0c3.onrender.com/startupcompany")
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

    // const startups = [

    //     {
    //         id: 1,
    //         company: "Vercel",
    //         role: "Frontend Engineer",
    //         icon: <SiVercel />,
    //         location: "Remote",
    //         type: "Startup Hiring",
    //         experience: "0-2 Years",
    //         openings: "12 Openings",
    //         colorClass: "startup-vercel",
    //     },

    //     {
    //         id: 2,
    //         company: "Notion",
    //         role: "React Developer",
    //         icon: <SiNotion />,
    //         location: "Bangalore",
    //         type: "Product Based",
    //         experience: "Fresher",
    //         openings: "8 Openings",
    //         colorClass: "startup-notion",
    //     },

    //     {
    //         id: 3,
    //         company: "Figma",
    //         role: "UI Engineer",
    //         icon: <SiFigma />,
    //         location: "Remote",
    //         type: "Design Tech",
    //         experience: "1+ Years",
    //         openings: "6 Openings",
    //         colorClass: "startup-figma",
    //     },

    //     {
    //         id: 4,
    //         company: "Slack",
    //         role: "Full Stack Developer",
    //         icon: <SiSlack />,
    //         location: "Hyderabad",
    //         type: "Hybrid",
    //         experience: "0-1 Years",
    //         openings: "14 Openings",
    //         colorClass: "startup-slack",
    //     },

    //     {
    //         id: 5,
    //         company: "Netlify",
    //         role: "Frontend Developer",
    //         icon: <SiNetlify />,
    //         location: "Remote",
    //         type: "Remote",
    //         experience: "Fresher",
    //         openings: "10 Openings",
    //         colorClass: "startup-netlify",
    //     },

    //     {
    //         id: 6,
    //         company: "Discord",
    //         role: "Backend Engineer",
    //         icon: <SiDiscord />,
    //         location: "Pune",
    //         type: "Developer Tools",
    //         experience: "1-3 Years",
    //         openings: "9 Openings",
    //         colorClass: "startup-discord",
    //     },

    //     {
    //         id: 7,
    //         company: "Shopify",
    //         role: "MERN Stack Developer",
    //         icon: <SiShopify />,
    //         location: "Remote",
    //         type: "E-Commerce",
    //         experience: "0-2 Years",
    //         openings: "16 Openings",
    //         colorClass: "startup-shopify",
    //     },

    //     {
    //         id: 8,
    //         company: "Upwork",
    //         role: "Frontend Intern",
    //         icon: <SiUpwork />,
    //         location: "Remote",
    //         type: "Internship",
    //         experience: "Students",
    //         openings: "20 Openings",
    //         colorClass: "startup-upwork",
    //     },

    // ];

    return (

        <section className="startupzone-section mt-5">

            {/* TOP */}

            <div className="startupzone-top">

                <span className="startupzone-badge">

                    🚀 Startup Opportunities

                </span>

                <h2>

                    Fast Growing Startups Hiring Developers

                </h2>

                <p>

                    Work with innovative startups, build real-world products,
                    and accelerate your career with modern tech companies.

                </p>

            </div>

            {/* GRID */}

            <div className="startupzone-grid">

                {data.map((item) => (

                    <div
                        className="startupzone-card"
                        key={item.id}
                    >

                        {/* TOP */}

                        <div className="startupzone-card-top">

                            <div className={`startupzone-logo ${item.colorClass}`}>

                                {startupIcons[item.icon]}

                            </div>

                            <span className="startupzone-type">

                                {item.type}

                            </span>

                        </div>

                        {/* CONTENT */}

                        <div className="startupzone-content">

                            <h3>

                                {item.role}

                            </h3>

                            <h4>

                                {item.company}

                            </h4>

                            <div className="startupzone-meta">

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

                        {/* FOOTER */}

                        <Link to={`/startupjobapply/${item.id}`}>
                            <button className="startupzone-btn">

                                Apply Startup Job

                                <FaArrowRight />

                            </button>
                        </Link>

                    </div>

                ))}

            </div>

            {/* BOTTOM BANNER */}

            <div className="startupzone-bottom-banner">

                <div className="startupzone-banner-left">

                    <FaLaptopCode />

                    <div>

                        <h3>

                            Want Startup Experience?

                        </h3>

                        <p>

                            Join innovative teams & work on real products.

                        </p>

                    </div>

                </div>

                <button className="startupzone-banner-btn">

                    Explore More

                    <FaRocket />

                </button>

            </div>

        </section>

    );
}