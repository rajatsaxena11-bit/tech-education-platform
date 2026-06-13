import React from 'react'
import '../../assets/mycss/about/studenttestimonials.css'

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "MERN Stack Developer",
        company: "Infosys",
        image: "https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=",
        text: "The live projects and interview preparation helped me crack my first developer job. Mentors were extremely supportive throughout the journey.",
        tags: ["React", "Node.js", "Placement"],
        featured: true
    },
    {
        name: "Kajal Verma",
        role: "Frontend Developer",
        company: "TCS",
        image: "https://www.shutterstock.com/image-photo/cheerful-young-woman-uses-laptop-600nw-2757481985.jpg",
        text: "The practical training sessions improved my frontend skills and confidence. I loved the real-time projects experience.",
        tags: ["React", "UI/UX", "Projects"]
    },
    {
        name: "Aman Gupta",
        role: "Python Developer",
        company: "Wipro",
        image: "https://png.pngtree.com/background/20250418/original/pngtree-handsome-young-indian-man-wearing-glasses-smiling-while-sitting-at-his-picture-image_16330607.jpg",
        text: "Mock interviews and coding practice sessions prepared me really well for company interview rounds.",
        tags: ["Python", "Django", "Interview"]
    }
]

export default function StudentTestimonials() {

    return (
        <>
            <section className="student-testimonials-section section-padding mt-5">

                {/* BACKGROUND */}

                <div className="testimonial-bg bg1"></div>
                <div className="testimonial-bg bg2"></div>

                <div className="container">

                    {/* TITLE */}

                      <div className="section-title text-center">

                        <span className='mt-5 text-light fw-bold' style={{fontSize:"25px"}}>💬 Student Feedback</span>
                        {/* <br />

                        <h2 style={{fontSize:"20px", marginTop:"-30px"}} className='text-light'>Why Our Student Says</h2> */}

                        <p style={{fontSize:"15px"}}>
                            Hear from our successful students who transformed
                            their careers through practical training and placements.
                        </p>

                    </div>

                  

                    {/* TOP STATS */}

                    <div className="top-stats" style={{marginTop:"-5rem", cursor:"pointer"}}>

                        <div className="top-stat-card career-primary-btn">
                            <h3 style={{fontSize:"25px"}}>5000+</h3>
                            <span style={{fontSize:"15px"}}>Students Trained</span>
                        </div>

                        <div className="top-stat-card career-primary-btn">
                            <h3 style={{fontSize:"25px"}}>4.9/5</h3>
                            <span  style={{fontSize:"15px"}}>Average Rating</span>
                        </div>

                        <div className="top-stat-card career-primary-btn">
                            <h3 style={{fontSize:"25px"}}>1200+</h3>
                            <span style={{fontSize:"15px"}}>Placements</span>
                        </div>

                    </div>

                    {/* TESTIMONIAL GRID */}

                    <div className="testimonial-grid">

                        {testimonials.map((item, index) => (

                            <div
                                className={`testimonial-card  ${item.featured ? "featured-card" : ""}`}
                                key={index}
                            >

                                {/* TOP */}

                                <div className="testimonial-header ">

                                    <div className="user-info">

                                        <img 
                                            src={item.image}
                                            alt={item.name}
                                        />

                                        <div>

                                            <h3 className='text-light'>{item.name}</h3>

                                            <span>
                                                {item.role} • {item.company}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="quote-icon">
                                        ❝
                                    </div>

                                </div>

                                {/* RATING */}

                                <div className="rating">
                                    ⭐⭐⭐⭐⭐
                                </div>

                                {/* TEXT */}

                                <p className="testimonial-text">
                                    “{item.text}”
                                </p>

                                {/* TAGS */}

                                <div className="testimonial-tags">

                                    {item.tags.map((tag, i) => (

                                        <span key={i}>
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* VIDEO REVIEW */}

                    <div className="video-review-wrapper">

                        {/* LEFT */}

                        <div className="video-review-content">

                            <span className="video-tag career-primary-btn">
                                🎥 Video Testimonials
                            </span>

                            <h3>
                                Watch Real Student Success Stories
                            </h3>

                            <p>
                                Students sharing their learning experience,
                                placement journey, and career transformation.
                            </p>

                            <div className="review-features ">

                                <div className='career-primary-btn'>✔ Real Placement Reviews</div>
                                <div className='career-primary-btn'>✔ Live Student Experience</div>
                                <div className='career-primary-btn'>✔ Career Growth Journey</div>

                            </div>

                            <button className="watch-btn career-primary-btn">
                                Watch Reviews
                            </button>

                        </div>

                        {/* RIGHT */}

                        <div className="video-card">

                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsexgOGxFE5NGgC-p9xgeU9z2dFiNHzm2Q1q472GBbRSNaCf-gzBSH4gc&s=10"
                                alt=""
                            />

                            <div className="video-overlay"></div>

                            <div className="play-btn">
                                ▶
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}