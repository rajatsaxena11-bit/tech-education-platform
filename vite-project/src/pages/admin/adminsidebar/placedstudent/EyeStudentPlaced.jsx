// ViewPlacement.jsx

import React, { useEffect, useState } from "react";

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaArrowLeft,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/placedstudent/viewplacement.css";

export default function ViewPlacement() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [student, setStudent] = useState({});

  useEffect(() => {

    fetch(`http://localhost:4000/PlacedStudent/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  return (

    <div className="viewPlacementPage container mt-5">

      <div className="viewPlacementWrapper">

        {/* HEADER */}

        <div className="viewPlacementHeader">

          <div className="studentProfileSection">

            <div className="studentAvatar">
              <FaUserGraduate />
            </div>

            <div>
              <h2 style={{fontSize:"25px"}}>{student.name}</h2>

              <p className="studentId">
                Student ID : #{student.studentId}
              </p>

              <div className="studentBadges">

                <span className="courseBadge">
                  {student.course}
                </span>

                <span
                  className={`placementStatus ${student?.status
                    ?.toLowerCase()
                    ?.replace(/ /g, "-")}`}
                >
                  {student.status}
                </span>

              </div>

            </div>

          </div>

          <button className="explore-course-btn add-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft />
            Back
            <div className="btn-shine-effect"></div>
          </button>

        </div>

        {/* BODY */}

        <div className="placementStatsGrid">

          <div className="placementStatCard">
            <FaBuilding />
            <h4 style={{fontSize:"25px"}}>Company</h4>
            <p>{student.company}</p>
          </div>

          <div className="placementStatCard">
            <FaMoneyBillWave />
            <h4 style={{fontSize:"25px"}}>Package</h4>
            <p>{student.package}</p>
          </div>

          <div className="placementStatCard">
            <FaMapMarkerAlt />
            <h4 style={{fontSize:"25px"}}>Location</h4>
            <p>{student.location}</p>
          </div>

          <div className="placementStatCard">
            <FaCalendarAlt />
            <h4 style={{fontSize:"25px"}}>Joining Date</h4>
            <p>{student.joiningdate}</p>
          </div>

        </div>

        {/* COMPANY LOGO */}

        <div className="companyLogoSection">

          <h3>Placed At</h3>

          <div className="companyCard">

            <img
              src={student.logo}
              alt={student.company}
              className="companyLogoImage"
            />

            <h4>{student.company}</h4>

            <p>{student.location}</p>

          </div>

        </div>

        <div className="placementSuccessBanner">

          <FaBriefcase />

          <div>
            <h4>Successfully Placed</h4>

            <p>
              Student has successfully secured a position at
              <strong> {student.company}</strong>
            </p>
          </div>

        </div>

        {/* FOOTER */}

        <div className="viewPlacementFooter">

          <button className="downloadBtn career-primary-btn">
            Download Offer Letter
          </button>

          <button
            className="editPlacementBtn career-primary-btn"
            onClick={() => navigate(`/editplaced/${student.id}`)}
          >
            Edit Placement
          </button>

        </div>

      </div>

    </div>
  );
}