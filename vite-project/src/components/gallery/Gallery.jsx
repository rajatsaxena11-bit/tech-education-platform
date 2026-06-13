import React, { useEffect, useState } from "react";
import '../../assets/mycss/gallery/institudeplacedgallery.css'
import HighestPackages from "../placements/highestpackage";

export default function Gallery() {
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
        <h3>Loading Frontend Course...</h3>
      </div>
    );
  }
    const placements = [
        {
            name: "Rahul Sharma",
            role: "MERN Stack Developer",
            company: "Infosys",
            package: "₹6.5 LPA",
            image: "https://img.freepik.com/premium-photo/handsome-indian-male-writer-sitting-desk-with-laptop-smiling_116547-57299.jpg",
            className: "big-card",
            icon: "🚀"
        },
        {
            name: "Priya Verma",
            role: "React Developer",
            company: "TCS",
            package: "₹5 LPA",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TnQY6yIGHa4VvRBRaOmD0tclNJ0WvwUARZ8cqEprarQy6n0-nXgTL3Gh&s=10",
            icon: "⭐"
        },
        {
            name: "Aman Gupta",
            role: "Python Developer",
            company: "Wipro",
            package: "₹5.8 LPA",
            image: "https://img.freepik.com/free-photo/young-fashion-smiling-hipster-man-city-cafe-lunch-time-with-notebook-suit_158538-8052.jpg?semt=ais_hybrid&w=740&q=80",
            icon: "🎯"
        },
        {
            name: "1200+ Students Placed",
            role: "Top Hiring Companies",
            company: "Infosys • TCS • Wipro • Accenture",
            package: "95% Success Rate",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
            className: "wide-card",
            icon: "🏆"
        },
        {
            name: "Neha Singh",
            role: "UI/UX Designer",
            company: "Accenture",
            package: "₹7 LPA",
            image: "https://www.shutterstock.com/image-photo/asian-woman-looking-intently-laptop-260nw-2594135995.jpg",
            icon: "💼"
        },
        {
            name: "Rohit Verma",
            role: "Software Engineer",
            company: "Cognizant",
            package: "₹6 LPA",
            image: "https://st.depositphotos.com/1743476/3119/i/450/depositphotos_31199575-stock-photo-smiling-man-working-on-laptop.jpg",
            icon: "🔥"
        }
    ]
    const galleryImages = [
        {
            title: "Coding Lab Session",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        },
        {
            title: "Practical Training",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        },
        {
            title: "Live Project Development",
            image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        },
        {
            title: "Placement Drive",
            image:
                "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800",
        },
        {
            title: "Interview Preparation",
            image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        },
        {
            title: "Technical Workshop",
            image:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
        },
        {
            title: "Industry Expert Session",
            image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
        },
        {
            title: "Certification Ceremony",
            image:
                "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
        },
    ];

    return (
        <>
            <section className="gallery-section py-5 mt-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="gallery-title mt-5">
                            Institute Gallery 📸
                        </h2>

                        <div className="gallery-line"></div>

                        <p className="gallery-subtitle">
                            Explore our classrooms, practical labs, placement drives and
                            student activities.
                        </p>
                    </div>

                    <div className="row g-4">
                        {galleryImages.map((item, index) => (
                            <div
                                className="col-lg-3 col-md-4 col-sm-6"
                                key={index}
                            >
                                <div className="gallery-card">

                                    <div className="gallery-image-wrapper">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="gallery-image"
                                        />

                                        <div className="gallery-overlay">
                                            <span>{item.title}</span>
                                        </div>
                                    </div>

                                    <div className="card-body text-center">
                                        <h6 className="gallery-card-title">
                                            {item.title}
                                        </h6>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery-cta mt-5">
                        <h3>
                            Experience Industry-Oriented Learning 🚀
                        </h3>

                        <p>
                            Join thousands of students building successful careers in the IT
                            industry.
                        </p>
                    </div>

                </div>
            </section>
            <section className="placement-gallery section-padding">

                {/* BACKGROUND EFFECTS */}

                <div className="gallery-bg bg1"></div>
                <div className="gallery-bg bg2"></div>

                <div className="container">
                    {/* STATS */}

                    <div className="placement-stats" style={{ marginTop: "-330px" }}>

                        <div className="stat-card career-primary-btn">
                            <h3>1200+</h3>
                            <span>Students Placed</span>
                        </div>

                        <div className="stat-card career-primary-btn">
                            <h3>350+</h3>
                            <span>Hiring Partners</span>
                        </div>

                        <div className="stat-card career-primary-btn">
                            <h3>95%</h3>
                            <span>Placement Success</span>
                        </div>

                        <div className="stat-card career-primary-btn">
                            <h3>8+</h3>
                            <span>Years Experience</span>
                        </div>

                    </div>

                    {/* GALLERY */}

                    <div className="gallery-grid">

                        {placements.map((item, index) => (

                            <div
                                className={`gallery-card ${item.className || ""}`}
                                key={index}
                            >

                                <img className='mt-3'
                                    src={item.image}
                                    alt={item.name}
                                />

                                <div className="gallery-overlay">

                                    <div className="overlay-top">
                                        <span>{item.icon}</span>
                                        <small className='career-primary-btn'>Placement Success</small>
                                    </div>

                                    <div className="overlay-content">

                                        <h3 style={{ fontSize: "18px" }}>{item.name}</h3>

                                        <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>{item.role}</h5>

                                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{item.company}</p>

                                        <div className="package-box career-primary-btn">
                                            {item.package}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="gallery-cta">

                        <div className="cta-content">

                            <h3 style={{ fontSize: "20px" }}>
                                Ready To Become Our Next Success Story? 🚀
                            </h3>

                            <p style={{ color: "darkgray" }}>
                                Start your learning journey today with
                                placement-focused practical training.
                            </p>

                        </div>

                        <div className="gallery-btns">

                            <button className="primary-btn career-primary-btn">
                                Join Now
                            </button>

                            <button className="success-btn career-primary-btn">
                                Free Demo
                            </button>

                        </div>

                    </div>

                </div>

            </section>
            <HighestPackages/>
        </>
    );
}