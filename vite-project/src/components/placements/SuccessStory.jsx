import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../../assets/mycss/placements/successstories.css";
import Testimonials from "../home/Testimonial";

const students = [
  {
    name: "Aman Sharma",
    company: "Google",
    role: "Frontend Engineer",
    package: "24 LPA",
    story:
      "The training and mock interviews helped me crack Google confidently.",
  },
  {
    name: "Priya Singh",
    company: "Microsoft",
    role: "Software Engineer",
    package: "22 LPA",
    story:
      "Live projects and placement support completely changed my career.",
  },
  {
    name: "Rahul Verma",
    company: "Amazon",
    role: "SDE-I",
    package: "21 LPA",
    story:
      "I improved my coding skills and got selected at Amazon.",
  },
  {
    name: "Anjali Gupta",
    company: "Adobe",
    role: "Frontend Developer",
    package: "19 LPA",
    story:
      "The mentors guided me through every interview round.",
  },
  {
    name: "Vikas Mishra",
    company: "Oracle",
    role: "Associate Engineer",
    package: "18 LPA",
    story:
      "Resume preparation and technical sessions were outstanding.",
  },
  {
    name: "Sneha Patel",
    company: "Paytm",
    role: "React Developer",
    package: "17 LPA",
    story:
      "The placement team constantly supported me till final selection.",
  },
  {
    name: "Aditya Jain",
    company: "Flipkart",
    role: "Software Engineer",
    package: "16 LPA",
    story:
      "Mock interviews helped me improve my confidence level.",
  },
  {
    name: "Neha Yadav",
    company: "Myntra",
    role: "Frontend Engineer",
    package: "15 LPA",
    story:
      "The project-based learning approach was extremely useful.",
  },
  {
    name: "Rohit Kumar",
    company: "Zoho",
    role: "Web Developer",
    package: "14 LPA",
    story:
      "Practical training made interview preparation much easier.",
  },
  {
    name: "Pooja Mishra",
    company: "IBM",
    role: "Software Developer",
    package: "13 LPA",
    story:
      "Excellent guidance from trainers and placement coordinators.",
  },

  {
    name: "Karan Singh",
    company: "Deloitte",
    role: "Software Engineer",
    package: "12 LPA",
    story:
      "Soft skills training helped me clear HR rounds easily.",
  },
  {
    name: "Simran Kaur",
    company: "Accenture",
    role: "Frontend Engineer",
    package: "11 LPA",
    story:
      "The learning environment was professional and motivating.",
  },
  {
    name: "Ayush Gupta",
    company: "Capgemini",
    role: "React Developer",
    package: "11 LPA",
    story:
      "I gained confidence through regular coding assessments.",
  },
  {
    name: "Nidhi Sharma",
    company: "Infosys",
    role: "Software Engineer",
    package: "10.5 LPA",
    story:
      "The placement process was smooth and well-organized.",
  },
  {
    name: "Harsh Agarwal",
    company: "TCS",
    role: "UI Developer",
    package: "10 LPA",
    story:
      "Industry-oriented projects made a huge difference.",
  },
  {
    name: "Ritika Jain",
    company: "Wipro",
    role: "Frontend Developer",
    package: "9.8 LPA",
    story:
      "The technical sessions were detailed and practical.",
  },
  {
    name: "Mohit Soni",
    company: "LTIMindtree",
    role: "Software Engineer",
    package: "9.5 LPA",
    story:
      "Mock interviews prepared me for real company interviews.",
  },
  {
    name: "Sahil Verma",
    company: "HCL",
    role: "Web Developer",
    package: "9.2 LPA",
    story:
      "Great mentors and strong placement support team.",
  },
  {
    name: "Kritika Sharma",
    company: "Cognizant",
    role: "Frontend Engineer",
    package: "9 LPA",
    story:
      "The career guidance sessions were extremely valuable.",
  },
  {
    name: "Arjun Tiwari",
    company: "Tech Mahindra",
    role: "Software Developer",
    package: "8.5 LPA",
    story:
      "The institute helped me become industry-ready.",
  },
];

export default function StudentSuccessStories() {
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
   <>
      <section className="success-section mt-5" style={{cursor:"poinet"}}>

      <div className="celebration">
        <span>🎉</span>
        <span>🏆</span>
        <span>🚀</span>
        <span>💼</span>
      </div>

      <h2 className="success-title">
        Student Success Stories
      </h2>

      <div className="gold-line"></div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={25}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <div className="success-card">

              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h3 className="mt-2" style={{fontSize:"25px",fontWeight:"bold", color:"#888"}}>{student.name}</h3>

              <div className="company fw-bold">
                {student.company}
              </div>

              <div className="role fw-bold">
                {student.role}
              </div>

              <div className="package">
                💰 {student.package}
              </div>

              <p className="story">
                "{student.story}"
              </p>

              <div className="badge">
                🎉 Successfully Placed
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
    <Testimonials/>
   </>
  );
}