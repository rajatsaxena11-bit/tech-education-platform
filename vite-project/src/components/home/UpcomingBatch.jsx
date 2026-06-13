import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
import '../../assets/mycss/home/upcomingbatch.css'

export default function UpComingBatch() {

    const [upcomingbatch, setUpcomingbatch] = useState([])
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:3000/upcomingcourse")
            .then(res => res.json())
            .then(data => setUpcomingbatch(data))
    }, [])

    return (

        <>

            <section>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >

                    <div className="modal-dialog modal-dialog-centered modal-xl">

                        <div className="modal-content border-0 bg-transparent">

                            <div className="relative w-full bg-white rounded-[30px] overflow-hidden shadow-2xl">

                                {/* CLOSE BUTTON */}

                                <button
                                    type="button"
                                    data-bs-dismiss="modal"
                                    className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 border-0"
                                >
                                    ✕
                                </button>

                                <div className="row g-0">

                                    {/* LEFT SIDE */}

                                    <div className="col-lg-6 bg-gradient-to-br from-blue-600 to-violet-600 text-white p-5 p-lg-5">

                                        <span className="px-4 py-2 rounded-full bg-white/20 text-sm">
                                            Limited Seats Available
                                        </span>

                                        <h2 className="display-5 fw-bold mt-4">
                                            Start Your
                                            <br />
                                            Tech Career 🚀
                                        </h2>

                                        <p className="mt-4 text-light">
                                            Learn with live projects, mentorship,
                                            internships and placement support.
                                        </p>

                                        {/* FEATURES */}

                                        <div className="mt-5 d-flex flex-column gap-3">

                                            <div className="bg-white bg-opacity-10 rounded-4 p-3">
                                                💻 Live Projects
                                            </div>

                                            <div className="bg-white bg-opacity-10 rounded-4 p-3">
                                                🎯 Placement Preparation
                                            </div>

                                            <div className="bg-white bg-opacity-10 rounded-4 p-3">
                                                🏆 Industry Certification
                                            </div>

                                        </div>

                                    </div>

                                    {/* RIGHT SIDE */}

                                    <div className="col-lg-6 p-4 p-lg-5 bg-white">

                                        <h2 className="fw-bold mb-2">
                                            Enroll Now
                                        </h2>

                                        <p className="text-muted mb-4">
                                            Fill the form to reserve your seat.
                                        </p>

                                        <form className="d-flex flex-column gap-4">

                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="form-control rounded-4 p-3"
                                            />

                                            <input
                                                type="text"
                                                placeholder="Mobile Number"
                                                className="form-control rounded-4 p-3"
                                            />

                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="form-control rounded-4 p-3"
                                            />

                                            <select className="form-select rounded-4 p-3">

                                                <option>Select Course</option>
                                                <option>MERN Stack</option>
                                                <option>Frontend Development</option>
                                                <option>Python Full Stack</option>

                                            </select>

                                            <textarea
                                                rows="4"
                                                placeholder="Tell us about your career goals"
                                                className="form-control rounded-4 p-3"
                                            ></textarea>

                                            <button
                                                type="submit"
                                                className="btn btn-primary rounded-4 py-3 fw-bold"
                                            >
                                                Submit Enrollment
                                            </button>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <div className="batch-section py-5">

                <div className="container-fluid">

                    {/* HEADER */}
                    {/* <div className="text-center mb-5">

                        <span className="batch-badge">
                            🚀 Upcoming Learning Batches
                        </span>

                        <h2 className="batch-title mt-3" style={{ fontSize: "30px" }}>
                            Join Our
                            <span> Next Batch</span>
                        </h2>

                        <p className="batch-subtitle">
                            Limited seats available — start your IT career journey today
                        </p>

                    </div> */}

                    {/* SWIPER */}
                    <section className="future-batch-zone" style={{marginTop:"-200px"}}>

                        <div className="future-batch-container">

                            {/* HEADER */}
                            <div className="future-batch-header text-center">

                                <span className="future-batch-tag ">
                                    🚀 New Career Opportunities
                                </span>

                                <h2 className="future-batch-heading" style={{fontSize:"25px"}}>
                                    Upcoming Job Ready Batches
                                </h2>

                                <p className="future-batch-text">
                                    Learn from industry experts and start your placement journey
                                    with our latest upcoming batches.
                                </p>

                            </div>

                            {/* BATCH CARDS */}
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                spaceBetween={25}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1400: {
                                        slidesPerView: 4,
                                    },
                                }}
                                className="upcoming-batch-slider"
                            >
                                {/* CARD 1 */}
                                <SwiperSlide>

                                    <div className="career-batch-card">

                                        <div className="career-batch-top">

                                            <span className="career-batch-mode online-mode">
                                                Online
                                            </span>

                                            <h3 className="career-course-name"  style={{fontSize:"23px"}}>
                                                FrontEnd Development
                                            </h3>

                                            <p className="career-course-desc">
                                                React/Angular, JavaScript, HTML, CSS,
                                                Tailwind CSS, Bootstrap & real projects.
                                            </p>

                                        </div>

                                        <div className="career-batch-info">

                                            <div className="batch-info-row">
                                                📅 Start Date : <strong>25 May 2026</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                ⏰ Duration : <strong>6 Months</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                👨‍🏫 Mentor : <strong>Industry Experts</strong>
                                            </div>

                                        </div>

                                        <button className="career-batch-btn">
                                            Enroll Now
                                        </button>

                                    </div>

                                </SwiperSlide>

                                {/* CARD 2 */}
                                <SwiperSlide>

                                    <div className="career-batch-card">

                                        <div className="career-batch-top">

                                            <span className="career-batch-mode offline-mode">
                                                Offline
                                            </span>

                                            <h3 className="career-course-name" style={{fontSize:"23px"}}>
                                                MERN Stack + DSA
                                            </h3>

                                            <p className="career-course-desc">
                                                React/Angular, JavaScript, HTML, CSS,
                                                Tailwind CSS, Bootstrap, Node.JS,
                                                Express.JS, MongoDB & real-world projects.
                                            </p>

                                        </div>

                                        <div className="career-batch-info">

                                            <div className="batch-info-row">
                                                📅 Start Date : <strong>5 June 2026</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                ⏰ Duration : <strong>8 Months</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                👨‍🏫 Mentor : <strong>Senior Developers</strong>
                                            </div>

                                        </div>

                                        <button className="career-batch-btn">
                                            Apply Today
                                        </button>

                                    </div>

                                </SwiperSlide>

                                {/* CARD 3 */}
                                <SwiperSlide>

                                    <div className="career-batch-card">

                                        <div className="career-batch-top">

                                            <span className="career-batch-mode hybrid-mode">
                                                Hybrid
                                            </span>

                                            <h3 className="career-course-name" style={{fontSize:"23px"}}>
                                                BackEnd Development
                                            </h3>

                                            <p className="career-course-desc">
                                                Node.JS, Express.JS, MongoDB,
                                                APIs & real-world projects.
                                            </p>

                                        </div>

                                        <div className="career-batch-info">

                                            <div className="batch-info-row">
                                                📅 Start Date : <strong>15 June 2026</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                ⏰ Duration : <strong>5 Months</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                👨‍🏫 Mentor : <strong>Backend Experts</strong>
                                            </div>

                                        </div>

                                        <button className="career-batch-btn">
                                            Join Batch
                                        </button>

                                    </div>

                                </SwiperSlide>

                                {/* CARD 4 */}
                                <SwiperSlide>

                                    <div className="career-batch-card">

                                        <div className="career-batch-top">

                                            <span className="career-batch-mode hybrid-mode">
                                                Hybrid
                                            </span>

                                            <h3 className="career-course-name" style={{fontSize:"23px"}}>
                                                Software Testing
                                            </h3>

                                            <p className="career-course-desc">
                                                Functional Testing, Regression Testing,
                                                Bug Reporting, JIRA Tool & real projects.
                                            </p>

                                        </div>

                                        <div className="career-batch-info">

                                            <div className="batch-info-row">
                                                📅 Start Date : <strong>15 June 2026</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                ⏰ Duration : <strong>5 Months</strong>
                                            </div>

                                            <div className="batch-info-row">
                                                👨‍🏫 Mentor : <strong>QA Professionals</strong>
                                            </div>

                                        </div>

                                        <button className="career-batch-btn">
                                            Join Batch
                                        </button>

                                    </div>

                                </SwiperSlide>

                            </Swiper>

                        </div>

                    </section>

                </div>

            </div>
        </>
    )
}