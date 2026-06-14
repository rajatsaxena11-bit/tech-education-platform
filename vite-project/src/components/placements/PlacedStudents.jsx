import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../../assets/mycss/placements/placedstudent1.css";

const students = [
  {
    name: "Aman Sharma",
    company: "TCS",
    role: "Frontend Developer",
    package: "5.2 LPA",
  },
  {
    name: "Rahul Verma",
    company: "Infosys",
    role: "React Developer",
    package: "6.0 LPA",
  },
  {
    name: "Priya Singh",
    company: "Wipro",
    role: "Software Engineer",
    package: "5.8 LPA",
  },
  {
    name: "Anjali Gupta",
    company: "Accenture",
    role: "Frontend Engineer",
    package: "7.1 LPA",
  },
  {
    name: "Rohit Kumar",
    company: "Cognizant",
    role: "UI Developer",
    package: "5.5 LPA",
  },
  {
    name: "Sneha Patel",
    company: "Capgemini",
    role: "Web Developer",
    package: "6.2 LPA",
  },
  {
    name: "Vikas Mishra",
    company: "HCL",
    role: "Software Developer",
    package: "6.5 LPA",
  },
  {
    name: "Neha Yadav",
    company: "Tech Mahindra",
    role: "React Developer",
    package: "5.9 LPA",
  },
  {
    name: "Aditya Jain",
    company: "IBM",
    role: "Frontend Engineer",
    package: "8.0 LPA",
  },
  {
    name: "Karan Singh",
    company: "Deloitte",
    role: "Software Engineer",
    package: "7.5 LPA",
  },
  {
    name: "Simran Kaur",
    company: "LTIMindtree",
    role: "UI/UX Developer",
    package: "6.4 LPA",
  },
  {
    name: "Arjun Tiwari",
    company: "Oracle",
    role: "Associate Engineer",
    package: "9.2 LPA",
  },
  {
    name: "Nidhi Sharma",
    company: "Google",
    role: "Frontend Developer",
    package: "18 LPA",
  },
  {
    name: "Mohit Soni",
    company: "Amazon",
    role: "SDE-1",
    package: "20 LPA",
  },
  {
    name: "Pooja Mishra",
    company: "Microsoft",
    role: "Software Engineer",
    package: "22 LPA",
  },
  {
    name: "Ayush Gupta",
    company: "Paytm",
    role: "Frontend Engineer",
    package: "12 LPA",
  },
  {
    name: "Ritika Jain",
    company: "Zoho",
    role: "Web Developer",
    package: "10 LPA",
  },
  {
    name: "Harsh Agarwal",
    company: "Flipkart",
    role: "Software Developer",
    package: "15 LPA",
  },
  {
    name: "Kritika Sharma",
    company: "Adobe",
    role: "Frontend Engineer",
    package: "17 LPA",
  },
  {
    name: "Sahil Verma",
    company: "Myntra",
    role: "React Developer",
    package: "13 LPA",
  },
];

export default function OurPlacedStudents() {
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
          <h3>Loading...</h3>
        </div>
      );
    }
  return (
    <section className="placement-section mt-5" style={{cursor:"pointer"}}>
      <div className="floating-icons">
        <span>🎉</span>
        <span>🏆</span>
        <span>💼</span>
        <span>🚀</span>
      </div>

      <h2 className="placement-title">
        Our Students Placed In Top IT Companies
      </h2>

      <div className="title-line"></div>

      <div className="stats-box">
        <div>
          <h3>500+</h3>
          <p>Students Placed</p>
        </div>

        <div>
          <h3>150+</h3>
          <p>Hiring Partners</p>
        </div>

        <div>
          <h3>22 LPA</h3>
          <p>Highest Package</p>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="student-card">
              <div className="shine"></div>

              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3 style={{color:"#999"}}>{student.name}</h3>

              <p>
                <strong>Company:</strong> {student.company}
              </p>

              <p>
                <strong>Role:</strong> {student.role}
              </p>

              <div className="package">
                💰 {student.package}
              </div>

              <div className="placed-badge">
                🎉 Successfully Placed
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}