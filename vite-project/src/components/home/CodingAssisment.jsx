import React, { useEffect } from 'react'
// import AOS from "aos"
// import "aos/dist/aos.css"
import '../../assets/mycss/home/codingassisment.css'

export default function CodingAssetment() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })
    }, [])

    return (

        <section className="career-section py-5">

            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">

                    <span className="career-badge career-primary-btn">
                        🚀 Practical Learning
                    </span>

                    <h2 className="career-title mt-5">
                        Build Your
                        <span> IT Career</span>
                    </h2>

                    <p className="career-subtitle">
                        Learn through coding practice, mentorship,
                        projects & placement focused training
                    </p>

                </div>

                {/* Section 1 */}
                <div className="row align-items-center g-5 mb-5">

                    <div
                        data-aos="fade-right"
                        className="col-lg-6"
                    >

                        <div className="image-box">

                            <img
                                src="https://i.ibb.co/Rk81N3rC/true-false.png"
                                className="img-fluid"
                                alt=""
                            />

                        </div>

                    </div>

                    <div
                        data-aos="fade-left"
                        className="col-lg-6"
                    >

                        <div className="content-box">

                            <span className="small-tag ">
                                Coding Practice
                            </span>

                            <h3 className='mt-3' style={{ fontSize: "25px" }}>
                                Coding Assessments,
                                <span> Live Projects </span>
                                & Skill Tests
                            </h3>

                            <p style={{ fontSize: "15px" }}>
                                Improve your coding skills through
                                real-world challenges, assignments,
                                quizzes & practical projects.
                            </p>

                            <div className="feature-list">

                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Real-world Projects</div>
                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Weekly Coding Tests</div>
                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Interview Preparation</div>

                            </div>

                            <button className="career-btn career-primary-btn">
                                Start Practice →
                            </button>

                        </div>

                    </div>

                </div>

                {/* Section 2 */}
                <div className="row align-items-center g-5 flex-lg-row-reverse mb-5">

                    <div
                        data-aos="fade-left"
                        className="col-lg-6"
                    >

                        <div className="image-box">

                            <img
                                src="https://i.ibb.co/6cN1D9wJ/discussion.png"
                                className="img-fluid"
                                alt=""
                            />

                        </div>

                    </div>

                    <div
                        data-aos="fade-right"
                        className="col-lg-6"
                    >

                        <div className="content-box">

                            <span className="small-tag">
                                Expert Mentorship
                            </span>

                            <h3 style={{ fontSize: "25px" }} className='mt-3'>
                                One-on-One
                                <span> Mentorship </span>
                            </h3>

                            <p>
                                Learn directly from industry experts,
                                solve doubts faster & get career guidance
                                with dedicated mentorship sessions.
                            </p>

                            <div className="feature-list">

                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Personal Guidance</div>
                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Career Roadmap</div>
                                <div style={{ fontSize: "17px", color: "navy", fontWeight: "800" }}>✅ Resume Building</div>

                            </div>

                            <button className="career-btn career-primary-btn">
                                Book Free Session →
                            </button>

                        </div>

                    </div>

                </div>

                {/* Stats */}
                <div className="it-placement-stats-wrapper">

                    <div className="row text-center g-4">

                        <div
                            data-aos="zoom-in"
                            className="col-md-3 col-6 it-placement-stat-card"
                        >

                            <h2 className="it-placement-stat-number">5000+</h2>
                            <p className="it-placement-stat-title">
                                Students Trained
                            </p>

                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            className="col-md-3 col-6 it-placement-stat-card"
                        >

                            <h2 className="it-placement-stat-number">120+</h2>
                            <p className="it-placement-stat-title">
                                Hiring Partners
                            </p>

                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="col-md-3 col-6 it-placement-stat-card"
                        >

                            <h2 className="it-placement-stat-number">95%</h2>
                            <p className="it-placement-stat-title">
                                Placement Rate
                            </p>

                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className="col-md-3 col-6 it-placement-stat-card"
                        >

                            <h2 className="it-placement-stat-number">50+</h2>
                            <p className="it-placement-stat-title">
                                Courses
                            </p>

                        </div>

                    </div>

                </div>

                {/* Features */}
                <div className="mt-5 why-choose-section">

                    <div className="text-center mb-5">
                        <h2 className="feature-heading">
                            Why Choose <span>Our Institute?</span>
                        </h2>

                        <p className="feature-subtitle">
                            Learn from industry experts, build real-world projects,
                            and get career-ready with practical training.
                        </p>
                    </div>

                    <div className="row g-4" style={{cursor:"pointer"}}>

                        <div data-aos="zoom-in-up" className="col-lg-4 col-md-6">
                            <div className="feature-card-custom">

                                <div className="feature-icon-custom">
                                    <i className="bi bi-code-slash"></i>
                                </div>

                                <h5>Real Coding Practice</h5>

                                <p>
                                    Work on live projects, coding challenges and
                                    real-world applications used in the industry.
                                </p>

                            </div>
                        </div>

                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay="150"
                            className="col-lg-4 col-md-6"
                        >
                            <div className="feature-card-custom">

                                <div className="feature-icon-custom">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h5>Expert Mentors</h5>

                                <p>
                                    Learn directly from experienced developers and
                                    professionals working in top companies.
                                </p>

                            </div>
                        </div>

                        <div
                            data-aos="zoom-in-up"
                            data-aos-delay="300"
                            className="col-lg-4 col-md-6"
                        >
                            <div className="feature-card-custom">

                                <div className="feature-icon-custom">
                                    <i className="bi bi-briefcase"></i>
                                </div>

                                <h5>Placement Support</h5>

                                <p>
                                    Get resume reviews, mock interviews and complete
                                    job placement assistance.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

                {/* CTA */}
                <div className="text-center mt-5">

                    <button
                        data-aos="flip-up"
                        className="explore-btn "
                    >
                        Explore All Features 🚀
                    </button>

                </div>

            </div>

        </section>

    )
}