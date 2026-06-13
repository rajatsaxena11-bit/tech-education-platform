
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/admincss/adminsidebar.css";
import { FaTachometerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
export default function Sidebar() {

     const [loading, setLoading] = useState(true);
       
         useEffect(() => {
           const timer = setTimeout(() => {
             setLoading(false);
           }, 400);
       
           return () => clearTimeout(timer);
         }, []);
       
       

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("user");
        toast.success("Logged out successfully");
        navigate("/");
    };

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

            <div className="  sidebar" >
                <ul className="list-group">
                    <h3 className="admintitle d-flex">
                        <FaTachometerAlt className="me-2" />
                        Dashboard Overview
                    </h3>
                    <hr />

                    <li className="">
                        <NavLink to="/admindashboard" className="sidebar-link fw-bold">
                            <i className="fa-solid fa-home me-2  fw-bold"></i> Dashboard
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to="/viewstudent" className="sidebar-link  fw-bold">
                            <i className="fa fa-user me-2  fw-bold"></i> Students
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/enrollviewstudent" className="sidebar-link fw-bold">
                            <i className="bi bi-folder me-2  fw-bold"></i> Student Enroll Details
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/viewnewadmissionstudent" className="sidebar-link  fw-bold">
                            <i className="fa fa-user-plus me-2  fw-bold"></i> New Admission
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/hiredstudentlist" className="sidebar-link  fw-bold">
                            <i className="fa fa-user me-2  fw-bold"></i> Hired Students
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/ourcoursespage" className="sidebar-link fw-bold">
                            <i className="bi bi-journal-text me-2  fw-bold"></i> Courses
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/ourbatchesdetails" className="sidebar-link  fw-bold">
                            <i className="bi bi-calendar-week me-2  fw-bold"></i> Batches
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to="/ourfaculty" className="sidebar-link  fw-bold">
                            <i className="bi bi-person-workspace me-2  fw-bold"></i> Faculty
                        </NavLink>
                    </li>



                    <li>
                        <NavLink to="/studentenquery" className="sidebar-link  fw-bold">
                            <i className="bi bi-envelope-open me-2  fw-bold"></i> Enquiries
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/studentpayments" className="sidebar-link  fw-bold">
                            <i className="bi bi-cash-coin me-2  fw-bold"></i> Payments
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/studentbookfreedemo" className="sidebar-link  fw-bold">
                            <i className="bi bi-calendar-week me-2  fw-bold"></i> Book Free Demo
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="/studentbookfreecarrer" className="sidebar-link  fw-bold">
                            <i className="bi bi-calendar-week me-2  fw-bold"></i> Book Free Carrer
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/enrollnow" className="sidebar-link  fw-bold">
                            <i className="bi bi-calendar-week me-2  fw-bold"></i> Enroll Now
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contactus" className="sidebar-link  fw-bold">
                            <i className="bi bi-calendar-week me-2  fw-bold"></i> Contact Us
                        </NavLink>
                    </li>

                    <li
                        className="sidebar-link fw-bold"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            handleLogout();
                        }}
                    >
                        <i className="bi bi-box-arrow-right me-2 fw-bold"></i>
                        Logout
                    </li>

                </ul>
                <div className="upgrade-box">
                    <h4 className="text-dark fw-bold">🚀 Upgrade</h4>
                    <p className="text-dark fw-bold">Get premium analytics & reports</p>
                    <button>Upgrade</button>
                </div>
            </div>
        </>
    );
}
