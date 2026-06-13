// OfferLetter.jsx

import React, { useEffect, useState } from "react";

import {
  FaBuilding,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowLeft,
  FaDownload,
  FaPrint,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaUserGraduate,
} from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import "../../../../assets/admincss/sidebarcss/placedstudent/offerletter.css";

export default function OfferLetter() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [student, setStudent] = useState({});

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {

    fetch(`http://localhost:4000/PlacedStudent/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.log(err));

  }, [id]);

  return (

    // <div className="offerLetterPage container-fluid">

    //   <div className="offerLetterCard">

    //     {/* HEADER */}

    //     <div className="offerLetterHeader">

    //       <div className="offerHeaderLeft">

    //         <img
    //           src={student.logo}
    //           alt=""
    //           className="offerCompanyLogo"
    //         />

    //         <div>

    //           <h1 style={{fontSize:"20px"}}>
    //             Offer Letter
    //           </h1>

    //           <p>
    //             Congratulations on your placement 🎉
    //           </p>

    //         </div>

    //       </div>
    //       <button className="add-course-btn career-primary-btn " onClick={() => navigate(-1)}>
    //         <FaArrowLeft />
    //         Back
    //       </button>



    //     </div>

    //     {/* BODY */}

    //     <div className="offerLetterBody">

    //       <div className="offerIntro">

    //         <h2 style={{fontSize:"20px", fontWeight:"800"}}>
    //           Dear {student.name},
    //         </h2>

    //         <p>
    //           We are delighted to offer you the position of
    //           <strong> {student.role} </strong>
    //           at
    //           <strong> {student.company}</strong>.
    //           Your skills and performance during the placement
    //           process impressed our hiring team.
    //         </p>

    //       </div>

    //       {/* DETAILS */}

    //       <div className="offerDetailsGrid">

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaUserGraduate />
    //           </div>

    //           <div>

    //             <span>Student ID</span>

    //             <h4>
    //               {student.studentId}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaEnvelope />
    //           </div>

    //           <div>

    //             <span>Email</span>

    //             <h4>
    //               {student.email}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaPhone />
    //           </div>

    //           <div>

    //             <span>Phone</span>

    //             <h4>
    //               {student.number}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaBriefcase />
    //           </div>

    //           <div>

    //             <span>Role</span>

    //             <h4>
    //               {student.role}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaBuilding />
    //           </div>

    //           <div>

    //             <span>Company</span>

    //             <h4>
    //               {student.company}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaMoneyBillWave />
    //           </div>

    //           <div>

    //             <span>Package</span>

    //             <h4>
    //               {student.package}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaMapMarkerAlt />
    //           </div>

    //           <div>

    //             <span>Location</span>

    //             <h4>
    //               {student.location}
    //             </h4>

    //           </div>

    //         </div>

    //         <div className="offerDetailCard">

    //           <div className="offerIcon">
    //             <FaCalendarAlt />
    //           </div>

    //           <div>

    //             <span>Joining Date</span>

    //             <h4>
    //               {student.joiningdate}
    //             </h4>

    //           </div>

    //         </div>

    //       </div>

    //       {/* MESSAGE */}

    //       <div className="offerMessageBox">

    //         <h3>
    //           Important Note
    //         </h3>

    //         <p>
    //           Please carry all necessary documents during
    //           your joining process. We wish you great success
    //           in your professional journey ahead.
    //         </p>

    //       </div>

    //     </div>

    //     {/* FOOTER */}

    //     <div className="offerLetterFooter">

    //       <button className="downloadBtn career-primary-btn">

    //         <FaDownload />

    //         Download PDF

    //       </button>

    //       <button
    //         className="downloadBtn career-primary-btn"
    //         onClick={() => window.print()}
    //       >

    //         <FaPrint />

    //         Print

    //       </button>

    //     </div>

    //   </div>

    // </div>

    <>
     <div className="offerLetterLayout" style={{marginTop:"200px"}}>

  {/* LEFT SIDE - Existing Offer Letter */}

  <div className="offerLetterMain">

    <div className="letterTopBar">
      <img
        src={student.logo}
        alt={student.company}
        className="offerCompanyLogo"
      />

      <div>
        <h1>{student.company}</h1>
        <p>Mumbai, India</p>
      </div>
    </div>

    <div className="letterRefSection">
      <p>Date : {today}</p>
      <p>Ref No : OL-{student.studentId}</p>
    </div>

    <div className="letterSubject">
      <h2>
        Subject : Appointment for {student.role}
      </h2>
    </div>

    <div className="letterContent">
      <p>Dear {student.name},</p>

      <p>
        We are pleased to offer you the position of
        <strong> {student.role}</strong> at
        <strong> {student.company}</strong>.
      </p>
    </div>

    <div className="offerTerms">
      <h3>Terms & Conditions</h3>

      <ul>
        <li>Submit all required documents.</li>
        <li>Follow company policies.</li>
        <li>Complete onboarding process.</li>
        <li>Employment subject to verification.</li>
      </ul>
    </div>

    <div className="signatureSection">
      <div>
        <h4>HR Department</h4>
        <p>{student.company}</p>
      </div>

      <div className="signatureBox">
        Authorized Signature
      </div>
    </div>

  </div>

  {/* RIGHT SIDE - Candidate Details */}

  <div className="candidateSidebar" style={{marginTop:"10px"}}>

    <div className="candidateCard">

      <div className="candidateAvatar">
        {student.name?.charAt(0)}
      </div>

      <h3>{student.name}</h3>

      <p className="candidateRole">
        {student.role}
      </p>

      <div className="candidateInfo">

        <div className="infoRow">
          <span>Student ID</span>
          <strong>{student.studentId}</strong>
        </div>

        <div className="infoRow">
          <span>Role</span>
          <strong>{student.role}</strong>
        </div>

        <div className="infoRow">
          <span>Location</span>
          <strong>{student.location}</strong>
        </div>

        <div className="infoRow">
          <span>Company</span>
          <strong>{student.company}</strong>
        </div>

      </div>

    </div>

  </div>

</div>
    </>
  );
}