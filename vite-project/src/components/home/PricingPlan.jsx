import React from 'react'
import '../../assets/mycss/home/pricingplan.css'

export default function PricePlan() {
    return (
        <section className="pricing-section py-5">

            <div className="container">

                {/* TITLE */}
                <div className="text-center mb-5">

                    <h2 className="pricing-title" style={{fontSize:"32px"}}>
                        Choose Your <span>IT Training Plan</span>
                    </h2>

                    <p className="pricing-subtitle">
                        Flexible learning plans designed for every level
                    </p>

                </div>

                {/* CARDS */}
                <div className="row g-4 justify-content-center">

                    {/* BASIC */}
                    <div className="col-lg-4 col-md-6">

                        <div className="pricing-card">

                            <h3 style={{fontSize:"25px"}}>Basic Plan</h3>

                            <p  style={{fontSize:"15px"}}>Perfect for beginners starting their journey</p>

                            <h1  style={{fontSize:"30px"}}>₹20,000 <sub>/ course</sub></h1>

                            <ul>
                                <li  style={{fontSize:"15px"}}>✔ IT & Programming Basics</li>
                                <li  style={{fontSize:"15px"}}>✔ HTML, CSS Fundamentals</li>
                                <li  style={{fontSize:"15px"}}>✔ Basic Projects</li>
                                <li  style={{fontSize:"15px"}}>✔ Recorded Classes</li>
                                <li  style={{fontSize:"15px"}}>✔ Limited Support</li>
                            </ul>

                            <button className="pricing-btn">
                                Get Started →
                            </button>

                        </div>

                    </div>

                    {/* STANDARD (POPULAR) */}
                    <div className="col-lg-4 col-md-6">

                        <div className="pricing-card popular">

                            <div className="badge">🔥 Most Popular</div>

                            <h3  style={{fontSize:"25px"}}>Standard Plan</h3>

                            <p  style={{fontSize:"15px"}}>Best for practical IT skill development</p>

                            <h1  style={{fontSize:"30px"}}>₹40,000 <sub>/ course</sub></h1>

                            <ul>
                                <li  style={{fontSize:"15px"}}>✔ Full Stack Basics</li>
                                <li  style={{fontSize:"15px"}}>✔ Live Training</li>
                                <li  style={{fontSize:"15px"}}>✔ Real Projects</li>
                                <li  style={{fontSize:"15px"}}>✔ Mentorship</li>
                                <li  style={{fontSize:"15px"}}>✔ Certificate</li>
                            </ul>

                            <button className="pricing-btn active">
                                Enroll Now →
                            </button>

                        </div>

                    </div>

                    {/* PREMIUM */}
                    <div className="col-lg-4 col-md-6">

                        <div className="pricing-card">

                            <h3  style={{fontSize:"25px"}}>Premium Plan</h3>

                            <p  style={{fontSize:"15px"}}>Job-ready full stack program with placement</p>

                            <h1  style={{fontSize:"30px"}}>₹60,000 <sub>/ course</sub></h1>

                            <ul>
                                <li  style={{fontSize:"15px"}}>✔ MERN Stack Mastery</li>
                                <li  style={{fontSize:"15px"}}>✔ Advanced Projects</li>
                                <li  style={{fontSize:"15px"}}>✔ 1-on-1 Mentorship</li>
                                <li  style={{fontSize:"15px"}}>✔ Resume Prep</li>
                                <li  style={{fontSize:"15px"}}>✔ Placement Support</li>
                            </ul>

                            <button className="pricing-btn">
                                Join Now →
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}