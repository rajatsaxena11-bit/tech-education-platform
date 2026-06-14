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

                            <p style={{fontSize:"15px"}}>
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

                            <h3 style={{fontSize:"25px"}} className='mt-3'>
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
                <div className="mt-5">

                    <div className="text-center mb-5">

                        <h2 className="feature-heading" style={{ fontSize: "25px" }}>
                            Why Choose
                            <span> Our Institute?</span>
                        </h2>

                    </div>

                    <div className="row g-4">

                        <div
                            data-aos="fade-up"
                            className="col-lg-4"
                        >

                            <div className="feature-card career-primary-btn">

                                <div className="feature-icon">
                                    <i className="bi bi-code-slash"></i>
                                </div>

                                <h5 style={{fontSize:"19px"}}>Real Coding Practice</h5>

                                <p>
                                    Build projects & gain practical
                                    industry experience
                                </p>

                            </div>

                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className="col-lg-4"
                        >

                            <div className="feature-card career-primary-btn">

                                <div className="feature-icon">
                                    <i className="bi bi-people"></i>
                                </div>

                                <h5 style={{fontSize:"19px"}}>Expert Mentors</h5>

                                <p>
                                    Learn from professionals working
                                    in top tech companies
                                </p>

                            </div>

                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="col-lg-4"
                        >

                            <div className="feature-card career-primary-btn">

                                <div className="feature-icon">
                                    <i className="bi bi-briefcase"></i>
                                </div>

                                <h5 style={{fontSize:"19px"}}>Placement Support</h5>

                                <p>
                                    Resume building, mock interviews &
                                    job assistance
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