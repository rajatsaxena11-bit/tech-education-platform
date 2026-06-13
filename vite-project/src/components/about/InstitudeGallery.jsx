import React from 'react'
import '../../assets/mycss/about/institudegallery.css'

export default function InstitudeGallery() {
    return (
        <>
            <section className="institute-gallery section-padding">

                {/* BACKGROUND EFFECTS */}

                <div className="gallery-bg bg1"></div>
                <div className="gallery-bg bg2"></div>

                <div className="container">

                    {/* SECTION TITLE */}

                    <div className="section-title" style={{ marginTop: "-50px" }}>

                        <span>📸 Institute Gallery</span>
                        <br />

                        <h2 style={{ fontSize: "18px", marginTop:"-30px" }}>Explore Our Learning Environment</h2>

                        <p>
                            Discover our modern classrooms, practical labs,
                            live events, student activities, and success moments.
                        </p>

                    </div>

                    {/* TOP STATS */}

                    <div className="gallery-stats" style={{ marginTop: "-70px", cursor: "pointer" }}>

                        <div className="gallery-stat-card career-primary-btn">

                            <h3>5000+</h3>

                            <span>Students Trained</span>

                        </div>

                        <div className="gallery-stat-card career-primary-btn">

                            <h3>250+</h3>

                            <span>Live Projects</span>

                        </div>

                        <div className="gallery-stat-card career-primary-btn">

                            <h3>1200+</h3>

                            <span>Placements</span>

                        </div>

                        <div className="gallery-stat-card career-primary-btn">

                            <h3>50+</h3>

                            <span>Expert Trainers</span>

                        </div>

                    </div>

                    {/* GALLERY GRID */}

                    <div className="gallery-grid">

                        {/* CLASSROOM */}

                        <div className="gallery-card large-card">

                            <img
                                src="https://www.shutterstock.com/shutterstock/videos/1061315044/thumb/1.jpg?ip=x480"
                                alt=""
                            />

                            <div className="gallery-overlay">

                                <div className="gallery-badge career-primary-btn">
                                    🏫 Classroom
                                </div>

                                <h3 style={{fontSize:"30px"}}>Modern Smart Classrooms</h3>

                                <p>
                                    Interactive learning environment with
                                    practical coding sessions and mentor guidance.
                                </p>

                                <button className='career-primary-btn'>
                                    View More
                                </button>

                            </div>

                        </div>

                        {/* LAB */}

                        <div className="gallery-card">

                            <img
                                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                                alt=""
                            />

                            <div className="gallery-overlay">

                                <div className="gallery-badge career-primary-btn">
                                    💻 Lab
                                </div>

                                <h3 style={{fontSize:"25px"}}>Advanced Coding Labs</h3>

                            </div>

                        </div>

                        {/* STUDENTS */}

                        <div className="gallery-card mt-5">

                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                alt=""
                            />

                            <div className="gallery-overlay">

                                <div className="gallery-badge career-primary-btn">
                                    👨‍🎓 Students
                                </div>

                                <h3 style={{fontSize:"25px"}}>Hands-On Practical Training</h3>

                            </div>

                        </div>

                        {/* EVENTS */}

                        <div className="gallery-card wide-card">

                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865"
                                alt=""
                            />

                            <div className="gallery-overlay">

                                <div className="gallery-badge career-primary-btn">
                                    🎉 Events
                                </div>

                                <h3 style={{fontSize:"25px"}}>Workshops & Tech Events</h3>

                                <p>
                                    Hackathons, seminars, coding competitions,
                                    and placement drives with industry experts.
                                </p>

                            </div>

                        </div>

                        {/* CERTIFICATES */}

                        <div className="gallery-card">

                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
                                alt=""
                            />

                            <div className="gallery-overlay">

                                <div className="gallery-badge career-primary-btn">
                                    🏆 Certificates
                                </div>

                                <h3 style={{fontSize:"25px"}}>Certified Achievements</h3>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM CTA */}

                    <div className="gallery-cta">

                        <div className="gallery-cta-content">

                            <span style={{fontSize:"15px"}}>🚀 Join Our Institute</span>

                            <h3 style={{fontSize:"25px"}}>
                                Build Your Future With Practical Learning
                            </h3>

                            <p style={{fontSize:"15px"}}>
                                Learn from experts, work on live projects,
                                and get placement support for your dream career.
                            </p>

                        </div>

                        <div className="modern-gallery-actions">

                            <button className="explore-course-btn">

                                <span className="btn-text">
                                    Explore Courses
                                </span>

                                <span className="btn-arrow">
                                    →
                                </span>

                                <div className="btn-shine-effect"></div>

                            </button>

                            <button className="demo-session-btn explore-course-btn ">

                                <span>
                                    ▶ Free Demo
                                </span>
                                <div className="btn-shine-effect"></div>

                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
