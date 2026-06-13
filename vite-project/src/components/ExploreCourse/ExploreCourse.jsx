import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

import "../../assets/mycss/explorecourse/explorecourse.css";

const courses = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    duration: "6 Months",
    students: "1200+ Students",
    color: "#61dafb",
    
  },
  {
    icon: <FaNodeJs />,
    title: "MERN Stack",
    duration: "8 Months",
    students: "950+ Students",
    color: "#68a063",
  },
  {
    icon: <FaPython />,
    title: "Backend Development",
    duration: "6 Months",
    students: "800+ Students",
    color: "#ffd43b",
  },
  {
    icon: <FaJava />,
    title: "Java Full Stack",
    duration: "8 Months",
    students: "1000+ Students",
    color: "#f89820",
  },
  {
    icon: <FaDatabase />,
    title: "Software Testing",
    duration: "6 Months",
    students: "600+ Students",
    color: "#4caf50",
  },
  {
    icon: <FaMobileAlt />,
    title: "UI/UX Development",
    duration: "6 Months",
    students: "500+ Students",
    color: "#ff5722",
  },
];

import {useNavigate} from 'react-router-dom'

export default function ExploreCourses() {

    const navigate = useNavigate()

    const CourseNavigate = (title) =>{
         switch(title){
            case  "Frontend Development":
            navigate("/frontenddeveloper")
            break;

            case  "MERN Stack":
            navigate("/merndeveloper")
            break;

             case  "Backend Development":
            navigate("/backenddeveloper")
            break;

             case  "Software Testing":
            navigate("/testingdeveloper")
            break;

             case  "UI/UX Development":
            navigate("/ui-ux developer")
            break;

            default:
                navigate("/")
         }
    } 
  return (
    <section className="sbkExploreSection mt-5">

      <div className="sbkExploreFloating">
        <span>🚀</span>
        <span>💻</span>
        <span>🎯</span>
        <span>🔥</span>
      </div>

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="sbkExploreHeading">
            Explore Our Courses
          </h2>

          <div className="sbkExploreLine"></div>

          <p className="sbkExploreSubheading">
            Industry-ready courses designed to help you get placed in top IT companies.
          </p>

        </div>

        <div className="row g-4">

          {courses.map((course, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
            >
              <div className="sbkExploreCard">

                <div
                  className="sbkExploreIcon"
                  style={{
                    color: course.color,
                  }}
                >
                  {course.icon}
                </div>

                <span className="sbkExploreBadge">
                  Trending
                </span>

                <h3 className="sbkExploreTitle">
                  {course.title}
                </h3>

                <p className="sbkExploreDuration">
                  ⏳ {course.duration}
                </p>

                <p className="sbkExploreStudents">
                  👨‍🎓 {course.students}
                </p>

                <button className="sbkExploreButton" onClick={()=>CourseNavigate(course.title)}>
                  Explore Course →
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}