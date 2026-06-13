import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import '../../assets/mycss/home/home.css'

import {
    FaUserGraduate,
    FaBookOpen,
    FaBriefcase,
} from "react-icons/fa";

const placedStudents = [

    {
        id: 1,
        name: "Rahul Sharma",
        course: "MERN Stack Development",
        company: "TCS",
        package: "6.5 LPA",
        image: "https://ibb.co/gMDMWw00",
    },

    {
        id: 2,
        name: "Priya Verma",
        course: "UI/UX Designing",
        company: "Infosys",
        package: "5.2 LPA",
        image: "https://ibb.co/F4FLdx63",
    },

    {
        id: 3,
        name: "Aman Gupta",
        course: "Python Full Stack",
        company: "Wipro",
        package: "7 LPA",
        image: "https://ibb.co/QFr7vZvb",
    },

    {
        id: 4,
        name: "Sneha Patel",
        course: "FrontEnd Developer",
        company: "Capgemini",
        package: "8 LPA",
        image: "https://ibb.co/b03mbZP",
    },
    {
        id: 5,
        name: "Sneha Patel",
        course: "FrontEnd Developer",
        company: "Capgemini",
        package: "8 LPA",
        image: "https://ibb.co/HpXDSFn0",
    },

];

export default function Home() {

    const [searchText, setSearchText] = useState("");
    const [showDemoModal, setShowDemoModal] = useState(false);
    const [closingDemo, setClosingDemo] = useState(false);

    const handleDemoClose = () => {
        setClosingDemo(true);

        setTimeout(() => {
            setShowDemoModal(false);
            setClosingDemo(false);
        }, 400); // animation duration
    };



    const navigate = useNavigate();

    const handleSearch = () => {

        const value = searchText.toLowerCase().trim();

        if (value.includes("frontend")) {
            navigate("/frontenddeveloper");
        }

        else if (value.includes("backend")) {
            navigate("/backenddeveloper");
        }

        else if (value.includes("mern")) {
            navigate("/merndeveloper");
        }

        else if (value.includes("react")) {
            navigate("/testingdeveloper");
        }
        else {
            alert("Course not found");
        }
    };
    const [submitLoading, setSubmitLoading] = useState(false);
    const [leadFormData, setLeadFormData] = useState({
        name: "",
        email: "",
        number: "",
        location: "",
        course: "",
        date: "",
        status: "",
        date: new Date().toLocaleDateString()
    });



    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setLeadFormData({
            ...leadFormData,
            [name]: value
        });

    };

    const handleLeadSubmit = async (e) => {

        e.preventDefault();

        setSubmitLoading(true);

        try {

            const response = await fetch(
                "https://server-5-n0c3.onrender.com/Bookdemo",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(leadFormData)
                }
            );

            if (!response.ok) {
                throw new Error("Failed");
            }

            alert("Enquiry Submitted Successfully 🚀");

            setShowDemoModal(false);

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Something went wrong ❌");

        } finally {

            setSubmitLoading(false);

        }

    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400); // 2 second loading

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="frontend-loader">
                <div className="spinner"></div>
                <h3>Loading Frontend Course...</h3>
            </div>
        );
    }
    return (
        <>

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" style={{ marginTop: "-50px" }}>

                {/* Background Blur */}
                <div className="absolute -top-25 -left-24 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-30"></div>

                <div className="absolute -bottom-0 left-80 top-80 w-60 h-60 bg-pink-400 rounded-full blur-3xl opacity-30"></div>

                <div className="container position-relative">

                    <div className="row align-items-center hero-wrapper">

                        {/* Left Content */}
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="home-hero-title fw-bold lh-sm mb-4">

                                Build Your Future With

                                <span className="text-primary d-block">
                                    Modern IT Courses
                                </span>

                            </h1>

                            <p className="text-secondary mb-4" style={{ fontSize: "16px" }}>
                                Learn <span className='fw-bold'>Frontend, </span> <span className='fw-bold'>Backend, </span> <span className='fw-bold'>MERN Stack, </span>
                                <span className='fw-bold'>UI/UX, </span>   <span className='fw-bold'>Software Testing </span> & Live Projects with Industry Experts.
                            </p>

                            {/* Search Box */}
                            <div className="bg-white shadow-lg rounded-4 p-1 d-flex align-items-center mb-4">

                                <input
                                    type="text"
                                    className="form-control border-0 shadow-none"
                                    placeholder="Search Courses..."
                                    value={searchText}
                                    onChange={(e) =>
                                        setSearchText(e.target.value)
                                    }

                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearch();
                                        }
                                    }}
                                />

                                <button
                                    style={{ fontSize: "15px" }}
                                    className="career-primary-btn btn btn-primary rounded-3 px-4 explore-course-btn"
                                    onClick={handleSearch}
                                >
                                    Search
                                    <div className="btn-shine-effect"></div>
                                </button>


                            </div>

                            {/* Popular Tags */}
                            <div className="d-flex flex-wrap gap-3 mb-5 " style={{ cursor: "pointer" }}>

                                <span className="hero-tag">Frontend</span>
                                <span className="hero-tag">Backend</span>
                                <span className="hero-tag">MERN Stack</span>
                                <span className="hero-tag">React JS</span>
                                <span className="hero-tag">Software Testing</span>

                            </div>

                            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">

                                <Link to="/explorecourse">
                                    <button style={{ fontSize: "15px" }} className="btn btn-primary hero-btn shadow career-primary-btn explore-course-btn">
                                        Explore Courses
                                        <div className="btn-shine-effect"></div>
                                    </button>
                                </Link>

                                <button style={{ fontSize: "15px" }} className="premium-demo-btn btn btn-outline-success hero-btn career-primary-btn explore-course-btn" onClick={() => setShowDemoModal(true)}>
                                    ✨ Free Demo
                                    <div className="btn-shine-effect"></div>
                                </button>

                            </div>
                            {/* Stats */}
                            <div className="homehero-stats-section" style={{ cursor: "pointer" }}>

                                <div className="homehero-stat-card">

                                    <div className="homehero-stat-icon">
                                        <FaUserGraduate />
                                    </div>

                                    <h3>500+</h3>

                                    <p>Students Trained</p>

                                </div>

                                <div className="homehero-stat-card">

                                    <div className="homehero-stat-icon">
                                        <FaBookOpen />
                                    </div>

                                    <h3>50+</h3>

                                    <p>Professional Courses</p>

                                </div>

                                <div className="homehero-stat-card">

                                    <div className="homehero-stat-icon">
                                        <FaBriefcase />
                                    </div>

                                    <h3>95%</h3>

                                    <p>Placement Success</p>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="slider-wrapper mt-5">

                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    spaceBetween={20}
                                    className="placed-student-swiper"
                                >

                                    {placedStudents.map((student) => (
                                        <SwiperSlide key={student.id}>
                                            <div className="placed-card mx-2" style={{ width: "22rem" }}>

                                                <img
                                                    src={student.image}
                                                    alt=""
                                                    className="placed-img w-100" style={{ height: "20%" }}
                                                />

                                            </div>
                                        </SwiperSlide>
                                    ))}

                                </Swiper>

                            </div>
                        </div>



                    </div>

                </div>

            </section>

            {showDemoModal && (
                <div className="premium-overlay">

                    <div
                        className={`premium-modal glass-effect ${closingDemo ? "premium-modal-closing" : ""
                            }`}
                    >

                        {/* LEFT SIDE */}
                        <div className="premium-left">

                            <div className="premium-badge">
                                🚀 Free Career Demo Session
                            </div>

                            <h2>
                                Upgrade Your <span>Career Journey</span>
                            </h2>

                            <p>
                                Join live demo classes with expert mentors,
                                work on real-world projects and get placement guidance.
                            </p>

                            <div className="premium-feature-box">

                                <div className="feature-item">
                                    <span>💻</span>
                                    <div>
                                        <h5 className='text-dark fw-bold'>Live Classes</h5>
                                        <p className='text-light'>Interactive sessions with experts</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <span>🎯</span>
                                    <div>
                                        <h5 className='text-dark fw-bold'>Placement Support</h5>
                                        <p className='text-light'>Resume + interview preparation</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <span>📂</span>
                                    <div>
                                        <h5 className='text-dark fw-bold'>Real Projects</h5>
                                        <p className='text-light'>Industry level hands-on training</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div className="premium-right">

                            <button
                                className="career-popup-close-btn"
                                onClick={handleDemoClose}
                            >
                                ✕
                            </button>

                            <div className="premium-form-header">
                                <h3>Book Free Demo</h3>
                                <p>Fill your details & our team will contact you.</p>
                            </div>

                            <form onSubmit={handleLeadSubmit}>

                                <div className="input-group-premium">
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="premium-input"
                                        required
                                    />
                                </div>

                                <div className="input-group-premium">
                                    <input
                                        type="number"
                                        name="number"
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="premium-input"
                                        required
                                    />
                                </div>

                                <div className="input-group-premium">
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        className="premium-input"
                                        required
                                    />
                                </div>

                                <div className="input-group-premium">
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={handleInputChange}
                                        placeholder="Your Location"
                                        className="premium-input"
                                    />
                                </div>

                                <div className="input-group-premium">
                                    <select
                                        className="premium-input"
                                        name="course"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Course</option>
                                        <option>Frontend Development</option>
                                        <option>Backend Development</option>
                                        <option>MERN Stack</option>
                                        <option>UI/UX Design</option>
                                        <option>Software Testing</option>
                                    </select>
                                </div>

                                <div className="input-group-premium">
                                    <input
                                        type="date"
                                        onChange={handleInputChange}
                                        name="date"
                                        className="premium-input"
                                    />
                                </div>

                                <div className="input-group-premium">
                                    <select
                                        className="premium-input"
                                        name="status"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Status</option>
                                        <option>Frontend Development</option>
                                        <option>Backend Development</option>
                                        <option>MERN Stack</option>
                                        <option>UI/UX Design</option>
                                        <option>Software Testing</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="premium-submit-btn"
                                >
                                    {
                                        submitLoading
                                            ? "Submitting..."
                                            : "🚀 Book Free Demo"
                                    }
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            )}


        </>
    )
}
