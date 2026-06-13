import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/mycss/home/courses.css'

const courses = [
  {
    title: "Frontend Developer",
    desc: "Learn HTML, CSS, JavaScript & React with live projects",
    price: "₹ 25,000",
    img: "https://bunny-wp-pullzone-mjbllim8t8.b-cdn.net/wp-content/uploads/2025/12/Best-Full-stack-developer-course-in-pune-for-freshers-.webp",
    duration: "3 Months",
    lessons: "80 Lessons"
  },
  {
    title: "Backend Developer",
    desc: "Master Node.js, APIs & database management",
    price: "₹ 35,000",
    img: "https://www.skillwaala.com/storage/uploads/courses/landing/1778144870_6lhSTI_20.webp",
    duration: "6 Months",
    lessons: "90+ Lessons"
  },
  {
    title: "MERN Stack",
    desc: "Full stack development with MongoDB, React & Node",
    price: "₹ 50,000",
    img: "https://swavlambankendra.com/wp-content/uploads/2025/11/web-developer.jpg",
    duration: "8 Months",
    lessons: "250 Lessons"
  },
  {
    title: "Software Testing",
    desc: "Manual + Automation testing with real tools",
    price: "₹ 28,000",
    img: "https://app.softronix.in/uploads/courses/heroes/1770210307_69834403dbda7.png",
    duration: "6 Months",
    lessons: "85 Lessons"
  }
]

export default function Courses() {
  const [openModal, setOpenModal] = useState(false);

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

      <section className="courses-section py-5 mt-5">

        <div className="container">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">

            <div>

              <span className="course-badge">
                🚀 Popular Courses
              </span>

              <h2 className="course-heading mt-3" style={{ fontSize: "30px" }}>
                Explore Our
                <span> Top Programs</span>
              </h2>

              <p className="course-subtitle">
                Upgrade your skills with industry focused IT training
              </p>

            </div>

            <Link className="view-btn bg-primary text-light explore-course-btn" style={{fontSize:"15px", letterSpacing:"1px"}}>
              View All Courses →
              <div className="btn-shine-effect"></div>
            </Link>

          </div>

          {/* Course Cards */}
          <div className="row g-4">

            {courses.map((course, index) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={index}
              >

                <div className="course-card">

                  {/* Image */}
                  <div className="course-image">

                    <img
                      src={course.img}
                      alt=""
                    />

                    <span className="popular-tag">
                      Popular
                    </span>

                    <div className="price-box">
                      {course.price}
                    </div>

                  </div>

                  {/* Content */}
                  <div className="course-content">

                    <div className="course-rating">
                      ⭐⭐⭐⭐⭐
                      <span className='fw-bold' style={{fontSize:"15px"}}>5.0</span>
                    </div>

                    <h3 className='fw-bold'>
                      {course.title}
                    </h3>

                    <p>
                      {course.desc}
                    </p>

                    {/* Meta */}
                    <div className="course-meta">

                      <div>
                        📚 {course.lessons}
                      </div>

                      <div>
                        ⏳ {course.duration}
                      </div>

                    </div>

                    <button onClick={() => setOpenModal(true)} type="button" className="enroll-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Enroll Now →
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>

  )
}