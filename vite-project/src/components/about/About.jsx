// import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPlay,
  FaUserGraduate,
  FaChartLine,
  FaBuilding
} from "react-icons/fa";



import "../../assets/mycss/about/about.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const placedStudents = [

  {
    id: 1,
    name: "Rahul Sharma",
    course: "MERN Stack Development",
    company: "TCS",
    package: "6.5 LPA",
    image: "https://apollo.olx.in/v1/files/9ohwzs9xmkn02-IN/image",
  },

  {
    id: 2,
    name: "Priya Verma",
    course: "UI/UX Designing",
    company: "Infosys",
    package: "5.2 LPA",
    image: "https://i.pinimg.com/736x/01/fd/92/01fd92de4dccd36074fbe7eb2ce4d523.jpg",
  },

  {
    id: 3,
    name: "Aman Gupta",
    course: "Python Full Stack",
    company: "Wipro",
    package: "7 LPA",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGEN2SM9fMVbQ/feedshare-shrink_800/feedshare-shrink_800/0/1712731482152?e=2147483647&v=beta&t=K307hSSEI_GTxFjsInINHSVVxNMt0bJNEovXz_Ui0JA",
  },

  {
    id: 4,
    name: "Sneha Patel",
    course: "FrontEnd Developer",
    company: "Capgemini",
    package: "8 LPA",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE1JtwEkb0BRg/feedshare-shrink_800/feedshare-shrink_800/0/1708693811305?e=2147483647&v=beta&t=B8GUsbKZzM01c5dc3uxoNYRxrtS2Mm3GS6Pn6Wt72Eg",
  },
   {
    id: 5,
    name: "Priya Verma",
    course: "UI/UX Designing",
    company: "Infosys",
    package: "5.2 LPA",
    image: "https://jobsbrij.com/Admin/asset/jobs/6871_WhatsApp_Image_2023-04-10_at_10_43_11_AM_(1).jpeg",
  },

];


export default function About() {
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

    <section className="about-hero-section" style={{  cursor: "pointer", marginTop:"-5rem" }}>

    

      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      <div className="container">

        <div className="row align-items-center">

          
          <div className="container">
            <div className="row align-items-center">

             
              <div className="col-lg-6">

                <div className="about-content">

                  <span className="hero-badge explore-course-btn" style={{ fontSize: "15px", cursor: "pointer", marginTop: "110px" }}>

                    🚀 Trusted By 5000+ Students
                    <div className="btn-shine-effect"></div>

                  </span>

                  <h1>

                    We Don’t Just Teach Courses,

                    <span>
                      We Build Careers.
                    </span>

                  </h1>

                  <p>

                    Our institute focuses on practical IT training,
                    live projects, interview preparation, and real
                    industry exposure so students become job-ready
                    developers, designers, and testers.

                  </p>

                  {/* FEATURES */}

                  <div className="hero-features">

                    <div className="feature-card">
                      <FaCheckCircle className="feature-icon" />
                      <span>Industry Based Training</span>
                    </div>

                    <div className="feature-card">
                      <FaCheckCircle className="feature-icon" />
                      <span>Real Client Projects</span>
                    </div>

                    <div className="feature-card">
                      <FaCheckCircle className="feature-icon" />
                      <span>Mock Interviews & Resume</span>
                    </div>

                    <div className="feature-card">
                      <FaCheckCircle className="feature-icon" />
                      <span>Placement Assistance</span>
                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="hero-buttons">

                    <button className="primary-btn explore-course-btn">

                      Explore Courses

                      <FaArrowRight />
                      <div className="btn-shine-effect"></div>

                    </button>

                    <button className="primary-btn explore-course-btn ">

                      <FaPlay />

                      Watch Success Stories
                      <div className="btn-shine-effect"></div>

                    </button>

                  </div>

                  {/* SMALL STATS */}

                  <div className="hero-mini-stats">

                    <div className="mini-stat-card">
                      <div className="mini-stat-icon">
                        <FaUserGraduate />
                      </div>

                      <h3>1200+</h3>

                      <span>Students Placed</span>
                    </div>

                    <div className="mini-stat-card">
                      <div className="mini-stat-icon">
                        <FaChartLine />
                      </div>

                      <h3>95%</h3>

                      <span>Placement Success</span>
                    </div>

                    <div className="mini-stat-card">
                      <div className="mini-stat-icon">
                        <FaBuilding />
                      </div>

                      <h3>50+</h3>

                      <span>Hiring Companies</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="col-lg-6" style={{marginTop:"-8rem"}}>

                <div className="slider-wrapper">

                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}

                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}

                    loop={true}

                    pagination={{
                      clickable: true,
                    }}

                    spaceBetween={20}

                    className="mySwiper"
                  >
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      slidesPerView={1}
                      spaceBetween={20}
                      loop={true}

                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}

                      pagination={{
                        clickable: true,
                      }}

                      className="placed-student-swiper"
                    >

                      {placedStudents.map((student) => (

                        <SwiperSlide key={student.id}>

                          <div className="placed-card w-100 mx-5">

                            <img
                              src={student.image}
                              alt=""
                              className="placed-img w-100 h-100 explore-course-btn2"

                            />
                            <div className="btn-shine-effect2"></div>

                          </div>

                        </SwiperSlide>

                      ))}

                    </Swiper>
                  </Swiper>

                </div>

              </div>

            </div>
          </div>



        </div>

      </div>

    </section>

  );
}