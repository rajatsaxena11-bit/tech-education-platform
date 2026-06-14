import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaArrowRight
} from "react-icons/fa";

import "../assets/mycss/popupform.css";

export default function EnquiryModal() {

  const [popupVisible, setPopupVisible] = useState(true);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  

  const [leadFormData, setLeadFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    course: "",
    status: "",
    date: new Date().toLocaleDateString()
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setLeadFormData({
      ...leadFormData,
      [name]: value
    });

  };

  const handleLeadSubmit = async (e) => {

    e.preventDefault();

    setSubmitLoading(true);

    try {

      const response = await fetch(
        "http://localhost:4000/BookFreeCarrer",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(leadFormData)
        }
      );

      if (!response.ok) {

        throw new Error("Failed");

      }

      alert("Enquiry Submitted Successfully 🚀");

      setPopupVisible(false);

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Something went wrong ❌");

    } finally {

      setSubmitLoading(false);

    }

  };
  const handleClosePopup = () => {
    localStorage.setItem("enquiryPopupShown", "true");

    setIsClosing(true);

    setTimeout(() => {
      setPopupVisible(false);
      setIsClosing(false);
    }, 300); // animation duration
  };
  useEffect(() => {
    const popupShown = localStorage.getItem("enquiryPopupShown");

    if (!popupShown) {
      setPopupVisible(true);
    }
  }, []);

  return (
    <>
      {popupVisible && (

        <div
          className={`career-popup-overlay ${isClosing ? "popup-closing" : ""
            }`}
        >

          <div className="career-popup-container">

            {/* CLOSE BUTTON */}

            <button
              className="career-popup-close-btn"
              onClick={handleClosePopup}
            >
              ✕
            </button>

            {/* LEFT SIDE */}

            <div className="career-popup-left-panel">

              <div className="career-popup-tagline">
                🔥 Limited Seats Available
              </div>

              <p className="career-popup-heading" style={{ fontSize: "25px" }}>

                Learn Skills That
                Companies Actually Hire For.

              </p>

              <p className="career-popup-description">

                Join 10,000+ students who got
                trained and placed in top IT companies.

              </p>

              {/* FEATURES */}

              <div className="career-popup-feature-grid">

                <div className="career-popup-feature-card">
                  💼 100% Placement Support
                </div>

                <div className="career-popup-feature-card">
                  🚀 Live Projects
                </div>

                <div className="career-popup-feature-card">
                  🎯 Mock Interviews
                </div>

              </div>

              {/* SUCCESS CARD */}

              <div className="career-popup-placement-card">

                <img
                  src="https://i.ibb.co/jPswB57G/3.jpg"
                  alt=""
                />

                <div>

                  <h4>
                    Priya Selected in Infosys
                  </h4>

                  <span>
                    Package: 6.5 LPA 🎉
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="career-popup-right-panel">

              <div className="career-popup-form-wrapper">

                <div className="career-popup-form-header">

                  <h2>
                    Book Free Career.
                  </h2>

                  <p>

                    Fill details & our counselor
                    will contact you shortly.

                  </p>

                </div>

                <form onSubmit={handleLeadSubmit}>

                  <div className="career-popup-input-group">

                    <FaUser />

                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                  <div className="career-popup-input-group">

                    <FaEnvelope />

                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                  <div className="career-popup-input-group">

                    <FaPhoneAlt />

                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="number"
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                  <div className="career-popup-input-group">

                    <FaMapMarkerAlt />

                    <input
                      type="text"
                      placeholder="Your Location"
                      name="address"
                      onChange={handleInputChange}
                    />

                  </div>

                  <div className="career-popup-input-group">

                    <FaLaptopCode />

                    <select
                      name="course"
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        Select Course
                      </option>

                      <option value="">
                        Frontend Development
                      </option>

                      <option>
                        Backend Development
                      </option>

                      <option>
                        MERN Stack
                      </option>

                      <option>
                        Software Testing
                      </option>

                    </select>

                  </div>

                  <div className="career-popup-input-group">

                    <FaLaptopCode />

                    <select
                      name="status"
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        Status
                      </option>

                      <option>
                        Course Enquery
                      </option>

                      <option>
                        Admission Related
                      </option>

                      <option>
                        Placement Related
                      </option>



                    </select>

                  </div>

                  <button
                    type="submit"
                    className="career-popup-submit-btn"
                  >

                    {
                      submitLoading
                        ? "Submitting..."
                        : (
                          <>
                            Start Learning
                            <FaArrowRight />
                          </>
                        )
                    }

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
}