import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import '../assets/mycss/hiringnew.css'


import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CelebrationPopup from './ToastContainer';
import EnquiryModal from './PopUpForm';
import PlacementToast from './ToastContainer';

import {
    FaTimes,
    FaUser,
    FaEnvelope,
    FaPhoneAlt
} from "react-icons/fa";



export default function Header() {
    const [mobileNav, setMobileNav] = useState(false)
    // const [openModal, setOpenModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [closing, setClosing] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        course: "",
        message: "",
    });

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            navigate(-1);
        }, 400);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

   

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(
            "https://server-5-n0c3.onrender.com/EnquiriesLeads",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );

        if (!res.ok) throw new Error("Failed");

        // Modal Close Animation
        closeModal();

        // Form Reset
        setFormData({
            name: "",
            number: "",
            email: "",
            course: "",
            message: "",
        });

        toast.success("Enquiry Submitted Successfully");

        // Optional Redirect
        setTimeout(() => {
            navigate("/");
        }, 500);

    } catch (err) {
        console.error(err);
    }
};

    const openModal = () => {
        setShowModal(true);
        setClosing(false);
    };

    const closeModal = () => {
        setClosing(true);

        setTimeout(() => {
            setShowModal(false);
            setClosing(false);
        }, 400);
    };


    // const user = localStorage.getItem("user");

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        if (mobileNav) {
            document.body.classList.add("mobile-nav-active")
        } else {
            document.body.classList.remove("mobile-nav-active")
        }
    }, [mobileNav])
    return (
        <>



            <PlacementToast position="top-left" autoClose={1500} style={{
                // top: "75%",
                top: "20%",
                transform: "translateY(-50%)",
                left: "20px",

            }} />


            {/* <!-- Modal --> */}
            {showModal && (
                <div
                    className={`rzxenr-overlay ${closing ? "rzxenr-overlay-close" : ""
                        }`}
                    onClick={closeModal}
                >
                    <div
                        className={`rzxenr-modal ${closing ? "rzxenr-modal-close" : ""
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* CLOSE BUTTON */}

                        <button
                            className="rzxenr-close-btn"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>

                        {/* LEFT SIDE */}

                        <div className="rzxenr-left">
                            <span className="rzxenr-badge">
                                Admission Open 2026
                            </span>

                            <h2>
                                Build Your Future With
                                <span> Industry Ready Training</span>
                            </h2>

                            <p>
                                Join live classes, work on real projects,
                                receive placement support and become
                                job-ready with expert mentorship.
                            </p>

                            <ul>
                                <li>✓ Live Projects</li>
                                <li>✓ Internship Support</li>
                                <li>✓ Resume Building</li>
                                <li>✓ Mock Interviews</li>
                                <li>✓ Placement Assistance</li>
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}

                        <div className="rzxenr-right">
                            <h3>Enroll Now</h3>

                            <form onSubmit={handleSubmit}>
                                <div className="rzxenr-input">
                                    <FaUser />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="name"
                                        
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="rzxenr-input">
                                    <FaEnvelope />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="rzxenr-input">
                                    <FaPhoneAlt />
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="number"
                                      
                                        onChange={handleChange}
                                    />
                                </div>

                                <select className="rzxenr-select" name="course"
                                 
                                    onChange={handleChange}>
                                    <option>Select Course</option>
                                    <option>Frontend Development</option>
                                    <option>Backend Development</option>
                                    <option>Full Stack Development</option>
                                    <option>Digital Marketing</option>
                                    <option>Data Science</option>
                                </select>

                                <textarea  name="message"
                                   
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Message"
                                    className="rzxenr-textarea"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="rzxenr-submit-btn"
                                >
                                    Submit Enrollment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <a href="index.html" className="logo d-flex align-items-center me-auto">

                        <img src="/src/assets/img/logo.png" alt="" />
                        <h1 className="sitename">
                            {import.meta.env.VITE_APP_NAME}
                        </h1>
                    </a>


                    <nav
                        id="navmenu"
                        className={`navmenu ${mobileNav ? "mobile-nav-active" : ""}`}
                    >

                        <ul>

                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li class="dropdown"><a href="#"><span>Courses</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><NavLink to="/frontenddeveloper">FrontEnd Developer</NavLink></li>
                                    <li><NavLink to="/backenddeveloper">BackEnd Developer</NavLink></li>
                                    <li><NavLink to="/merndeveloper">Mern Stack Developer</NavLink></li>
                                    <li><NavLink to="/testingdeveloper">Testing Developer</NavLink></li>
                                </ul>
                            </li>


                            <li class="dropdown"><a href="#"><span>Placements</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    {/* <li><a href="/selectedstudent">Selected Student</a></li> */}

                                    <li><NavLink to="/studentplacementpage">Placed Students</NavLink></li>
                                    <li><NavLink to="/studenthighestpackage">Highest Packages</NavLink></li>
                                    <li><NavLink to="/hiringpartners">Hiring Partners</NavLink></li>
                                    <li><NavLink to="/placementprocess">Placement Process</NavLink></li>
                                    <li><NavLink to="/interviewpreparation">Interview Preparation</NavLink></li>
                                    <li><NavLink to="/studentsuccessstories">Success Stories</NavLink></li>
                                    <li><NavLink to="/mockinterview">Mock Interview</NavLink></li>
                                    <li><NavLink to="/startupopportunity">StartUp Companies</NavLink></li>
                                    <li><NavLink to="/mncopportunity">MNC Companies</NavLink></li>

                                </ul>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/gallery"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    Gallery
                                </NavLink>
                            </li>

                            <li class="dropdown"><a href="#"><span>Training</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    {/* <li><a href="/selectedstudent">Selected Student</a></li> */}

                                    <li><a href="/practicletraining">Practicle Training</a></li>
                                    <li><a href="/liveprojects">Live Project</a></li>
                                    <li><a href="/internshipfeatures">InternShip Program</a></li>
                                    <li><a href="/courses">Courses</a></li>
                                    <li><a href="/certification">Certification</a></li>
                                </ul>
                            </li>

                            <li>
                                <NavLink
                                    to="/contactus"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/hiringcompany"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    Hiring <sup className='hiringnew'>new</sup>
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink
                                    to="/admindashboard"
                                    onClick={() => {
                                        window.scrollTo(0, 0)
                                        setMobileNav(false)
                                    }}
                                >
                                    Admin
                                </NavLink>
                            </li> */}

                            {user?.role === "admin" && (
                                <li>
                                    <Link to="/admindashboard">Admin</Link>
                                </li>

                            )}
                        </ul>

                        {/* Mobile Toggle */}

                        <i
                            className={`mobile-nav-toggle d-xl-none bi ${mobileNav ? "bi-x" : "bi-list"
                                }`}
                            onClick={() => setMobileNav(!mobileNav)}
                        ></i>
                    </nav>
                    {/* <button onClick={() => setOpenModal(true)} type="button" class="explore-course-btn btn-getstarted flex-md-shrink-0 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Enroll Now
                         <div className="btn-shine-effect"></div>
                    </button> */}
                    <button type="button" className="rzxenr-open-btn btn-getstarted flex-md-shrink-0 btn btn-primary" onClick={openModal}>
                        Enroll Now
                    </button>





                </div>
            </header>
        </>

    )
}
