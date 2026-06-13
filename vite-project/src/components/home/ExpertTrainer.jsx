


import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper/modules"
import 'swiper/css'
import { Link } from 'react-router-dom'
import '../../assets/mycss/home/experttrainner.css'

const trainers = [
  {
    name: "Shreya Jostlay",
    role: "Frontend Developer",
    exp: "10+ Years",
    courses: "10+ Courses",
    students: "200+ Students",
    img: "https://www.credosystemz.com/wp-content/uploads/2024/06/Homepage-Banner-2.webp"
  },
  {
    name: "Akriti Pandey",
    role: "Backend Developer",
    exp: "7+ Years",
    courses: "10+ Courses",
    students: "300+ Students",
    img: "https://www.teacherstrainingcollege.com/images/courses/Virtual-Teaching.jpg"
  },
  {
    name: "Yash Jostlay",
    role: "MERN Stack Developer",
    exp: "10+ Years",
    courses: "15+ Courses",
    students: "500+ Students",
    img: "https://media.istockphoto.com/id/1329104242/photo/teacher-working-on-laptop.jpg?s=612x612&w=0&k=20&c=lkz59cGYUZHzVa3UzmbtdRYMKaoB1c6kekDJCDlFi0s="
  },
  {
    name: "Gina Martin",
    role: "QA Engineer",
    exp: "7+ Years",
    courses: "25+ Courses",
    students: "200+ Students",
    img: "https://leadschool.in/wp-content/uploads/2022/07/Teacher-Training.jpg"
  }
]

export default function Trainers() {
  return (
   

      <div className="container">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">


          <h3 className="text-center text-2xl font-bold heading-line m-0">
            👨‍🏫 Meet Our <span className="text-yellow-500"> Expert Trainers</span>
          </h3>

        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >

          {trainers.map((t, i) => (
            <SwiperSlide key={i}>

              <div className="trainer-card text-center">

                {/* IMAGE */}
                <div className="img-box position-relative">
                  <img src={t.img} alt="" />

                  {/* SOCIAL HOVER */}
                  <div className="overlay">
                    <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-3">
                  <h5 className="fw-bold">{t.name}</h5>
                  <p className="text-primary small mb-1">{t.role}</p>
                  <p className="text-muted small mb-2 fw-bold">{t.exp}</p>

                  <div className="d-flex justify-content-between small text-muted">
                    <span className='fw-bold'>{t.courses}</span>
                    <span className='fw-bold'>{t.students}</span>
                  </div>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
   
  )
}