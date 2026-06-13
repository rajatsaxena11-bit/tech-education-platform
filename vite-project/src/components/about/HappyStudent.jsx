import React from 'react'
import '../../assets/mycss/about/happystudent.css'

export default function HappyStudents() {

    return (

        <section className="happy-section py-5 position-relative overflow-hidden" style={{cursor:"pointer"}}>

            {/* BLUR BACKGROUND */}
            <div className="blur-circle blur-one"></div>
            <div className="blur-circle blur-two"></div>

            <div className="container">

                <div className="row align-items-center gy-5">

                    {/* LEFT SIDE */}
                    <div className="col-lg-6">

                        <span className="happy-tag career-primary-btn" style={{fontSize:"15px"}}>
                            🚀 Trusted By Students
                        </span>

                        <h2 className="happy-title">

                            Join <span>5000+</span> Students
                            Building Their Tech Career

                        </h2>

                        <p className="happy-desc">

                            Learn industry-ready skills through live projects,
                            mentorship, coding practice, and placement support.

                        </p>

                        {/* STATS */}
                        <div className="happy-stats">

                            <div className="stat-card">

                                <h3 style={{fontSize:"25px",marginBottom:0}}>5000+</h3>

                                <span style={{fontSize:"15px"}}>Students Trained</span>

                            </div>

                            <div className="stat-card">

                                <h3 style={{fontSize:"25px",marginBottom:0}}>1200+</h3>

                                <span style={{fontSize:"15px"}}>Placements</span>

                            </div>

                            <div className="stat-card">

                                <h3 style={{fontSize:"25px",marginBottom:0}}>250+</h3>

                                <span style={{fontSize:"15px"}}>Live Projects</span>

                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="happy-buttons">

                            <button className="primary-btn">
                                Enroll Now →
                            </button>

                            <button className="secondary-btn">
                                Free Demo
                            </button>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-lg-6" style={{cursor:"pointer"}}>
                        <div className="join-right">

                            <div className="student-circle">

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxV3nBZN_IKEgFrMwVk7oveuUY9I_4uY9vQ&s"
                                    alt=""
                                    className="student-img img1"
                                />

                                <img
                                    src="https://media.istockphoto.com/id/2150133163/photo/portrait-of-female-college-student-contemplating-while-reading-a-book.jpg?s=612x612&w=0&k=20&c=rk_QxJkNIlDhMsthngHfCBgZk8u_skWMa3eK7612Gg4="
                                    alt=""
                                    className="student-img img2"
                                />

                                <img
                                    src="https://png.pngtree.com/png-clipart/20240816/original/pngtree-cheerful-indian-student-smiling-and-pointing-side-ward-with-png-image_15786841.png"
                                    alt=""
                                    className="student-img img3"
                                />

                                <img
                                    src="https://www.shutterstock.com/image-photo/attractive-young-asian-female-college-600nw-2557619503.jpg"
                                    alt=""
                                    className="student-img img4"
                                />

                                

                                {/* CENTER CARD */}

                                <div className="center-card">

                                    <h3 className='text-primary'>5000+</h3>

                                    <span>Happy Students</span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}