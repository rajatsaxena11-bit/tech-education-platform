import React from 'react'
import Sidebar from '../admin/AdminSideBar'


export default function AdminDashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
              <h3 className="fw-bold">Welcom to Admin Dashboard</h3>
            </div>
            <div className="row g-4">

              {/* Students */}
              <div className="col-md-3">
                <div className="kpi-card">
                  <div className="kpi-icon bg-primary">
                    <i className="bi bi-people"></i>
                  </div>

                  <div>
                    <h6 className="kpi-title">Students</h6>
                    <h3 className="kpi-value">2500+</h3>
                    <small className="kpi-growth text-success fw-bold">+120 this month</small>
                  </div>
                </div>
                {/* <div className="btn-shine-effect"></div> */}
              </div>

              <div className="col-md-3">
                <div className="kpi-card">
                  <div className="kpi-icon bg-primary">
                    <i className="bi bi-people"></i>
                  </div>

                  <div>
                    <h6 className="kpi-title">Placed Students</h6>
                    <h3 className="kpi-value">2000+</h3>
                    <small className="kpi-growth text-success fw-bold">+120 this month</small>
                  </div>
                </div>
              </div>

              {/* Batches */}
              <div className="col-md-3">
                <div className="kpi-card">
                  <div className="kpi-icon bg-success">
                    <i className="bi bi-calendar-check"></i>
                  </div>

                  <div>
                    <h6 className="kpi-title">Running Batches</h6>
                    <h3 className="kpi-value">12</h3>
                    <small className="text-muted fw-bold">5 upcoming</small>
                  </div>
                </div>
              </div>

              {/* Revenue */}
              <div className="col-md-3">
                <div className="kpi-card">
                  <div className="kpi-icon bg-danger">
                    <i className="bi bi-cash-stack"></i>
                  </div>

                  <div>
                    <h6 className="kpi-title">Revenue</h6>
                    <h3 className="kpi-value">₹70,000</h3>
                    <small className="text-success fw-bold">This month</small>
                  </div>
                </div>
              </div>

              {/* Pending */}
              <div className="col-md-3">
                <div className="kpi-card">
                  <div className="kpi-icon bg-warning">
                    <i className="bi bi-exclamation-circle"></i>
                  </div>

                  <div>
                    <h6 className="kpi-title">Pending Fees</h6>
                    <h3 className="kpi-value text-danger">₹25,000</h3>
                    <small className="text-danger fw-bold">12 students</small>
                  </div>
                </div>
              </div>

              <div className="col-12 mt-4">

                <div className="premium-alert-card explore-course-btn">

                  {/* LEFT SECTION */}

                  <div className="alert-left">

                    {/* ICON */}

                    <div className="alert-icon-wrapper">

                      <div className="alert-pulse"></div>

                      <div className="alert-icon">
                        <i className="bi bi-exclamation-circle-fill"></i>
                      </div>

                    </div>

                    {/* CONTENT */}

                    <div className="alert-content">

                      <div className="alert-badge">
                        URGENT NOTICE
                      </div>

                      <h5>
                        12 Students Have Pending Fee Payments
                      </h5>

                      <p className='text-dark'>
                        2 new batches are starting tomorrow.
                        Please verify payments before activation.
                      </p>

                      {/* ALERT META */}

                      <div className="alert-meta">

                        <span className='text-success' style={{fontSize:"13px"}}>
                          <i className="bi bi-clock-history"></i>
                          Updated 5 mins ago
                        </span>

                        <span className='text-success' style={{fontSize:"13px"}}>
                          <i className="bi bi-people-fill"></i>
                          12 Pending Students
                        </span>

                        <span className='text-success' style={{fontSize:"13px"}}>
                          <i className="bi bi-calendar-event-fill"></i>
                          Batch Starts Tomorrow
                        </span>
                         <div className="btn-shine-effect"></div>

                      </div>

                    </div>

                  </div>

                  {/* RIGHT SECTION */}

                  <div className="alert-actions">

                    <button className="details-btn explore-course-btn">
                      View Details
                      <div className="btn-shine-effect"></div>
                    </button>

                    <button className="remind-btn text-dark explore-course-btn">
                      Send Reminder
                      <div className="btn-shine-effect"></div>
                    </button>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
