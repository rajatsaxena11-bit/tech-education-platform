import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import '../../assets/mycss/home/placementsuccessful.css'

const placement = [
  {
    name: "Aman Sharma",
    company: "TCS",
    role: "React Developer",
    package: "4.5 LPA",
    location: "Noida"
  },
  {
    name: "Priya Verma",
    company: "Infosys",
    role: "Frontend Developer",
    package: "5.2 LPA",
    location: "Pune"
  },
  {
    name: "Rahul Singh",
    company: "Wipro",
    role: "Software Engineer",
    package: "4.8 LPA",
    location: "Bangalore"
  },
  {
    name: "Neha Gupta",
    company: "HCL",
    role: "UI Developer",
    package: "5 LPA",
    location: "Noida"
  },
  {
    name: "Rohit Kumar",
    company: "Accenture",
    role: "Full Stack Developer",
    package: "6.5 LPA",
    location: "Gurugram"
  },
  {
    name: "Anjali Sharma",
    company: "Capgemini",
    role: "Software Developer",
    package: "4.6 LPA",
    location: "Mumbai"
  },
  {
    name: "Vikas Yadav",
    company: "Tech Mahindra",
    role: "Java Developer",
    package: "4.2 LPA",
    location: "Pune"
  },
  {
    name: "Karan Mehta",
    company: "Cognizant",
    role: "Frontend Developer",
    package: "5.4 LPA",
    location: "Chennai"
  },
  {
    name: "Sneha Kapoor",
    company: "IBM",
    role: "Web Developer",
    package: "6 LPA",
    location: "Bangalore"
  },
  {
    name: "Aditya Mishra",
    company: "Deloitte",
    role: "Software Analyst",
    package: "7 LPA",
    location: "Hyderabad"
  },
  {
    name: "Pooja Singh",
    company: "LTIMindtree",
    role: "React Developer",
    package: "5.5 LPA",
    location: "Mumbai"
  },
  {
    name: "Mohit Jain",
    company: "Persistent",
    role: "Full Stack Developer",
    package: "7.2 LPA",
    location: "Pune"
  },
  {
    name: "Nisha Gupta",
    company: "Hexaware",
    role: "Software Engineer",
    package: "4.8 LPA",
    location: "Noida"
  },
  {
    name: "Arjun Verma",
    company: "Mphasis",
    role: "Frontend Engineer",
    package: "5.8 LPA",
    location: "Bangalore"
  },
  {
    name: "Simran Kaur",
    company: "Birlasoft",
    role: "React Developer",
    package: "5.3 LPA",
    location: "Pune"
  }
];

export default function PlacementSlider() {
  return (
  <section className="placement-success-section">

      <div className="container">

        <div className="placement-header">

          <span className="placement-badge fs-5">
            🎯 Placement Success
          </span>

       

          <p className="placement-subtitle">
            Our students are getting placed in leading IT companies
            across India with attractive salary packages.
          </p>

        </div>

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
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="placement-swiper"
        >
          {placement.map((student, index) => (
            <SwiperSlide key={index}>

              <div className="placement-card">

                <div className="placement-avatar">

                  {student.name.charAt(0)}

                </div>

                <h3 className="placement-name">
                  {student.name}
                </h3>

                <p className="placement-role">
                  {student.role}
                </p>

                <div className="placement-package">
                  💰 {student.package}
                </div>

                <div className="placement-location">
                  📍 {student.location}
                </div>

                <div className="placement-company">
                  {student.company}
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}