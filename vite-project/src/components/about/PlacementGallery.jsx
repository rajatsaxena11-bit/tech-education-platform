import React from 'react'
import '../../assets/mycss/about/placementgallery.css'

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

export default function PlacementGallery() {

  return (
    <>
      <section className="placement-gallery section-padding" >

        {/* BACKGROUND EFFECTS */}

        <div className="gallery-bg bg1"></div>
        <div className="gallery-bg bg2"></div>

        <div className="container" style={{marginTop:"-5rem"}}>

          {/* SECTION TITLE */}

          <div className="section-title" style={{  cursor: "pointer" }}>

            <span className='mt-5' style={{fontSize:"15px"}}>🏆 Success Gallery</span>
            <br />

            <h2 style={{ fontSize: "17px" }}>  Our Students Placed In Top Companies</h2>

            <p style={{fontSize:"15px", color:"navy"}}>
              Celebrating the achievements of students who transformed
              their careers with practical training and placement support.
            </p>

          </div>



          {/* STATS */}

          <div className="placement-stats" style={{ marginTop: "-100px", cursor: "pointer" }}>

            <div className="stat-card career-primary-btn">
              <h3 style={{fontSize:"25px"}}>1200+</h3>
              <span>Students Placed</span>
            </div>

            <div className="stat-card career-primary-btn">
              <h3 style={{fontSize:"25px"}}>350+</h3>
              <span>Hiring Partners</span>
            </div>

            <div className="stat-card career-primary-btn">
              <h3 style={{fontSize:"25px"}}>95%</h3>
              <span>Placement Success</span>
            </div>

            <div className="stat-card career-primary-btn">
              <h3 style={{fontSize:"25px"}}>8+</h3>
              <span>Years Experience</span>
            </div>

          </div>

          {/* GALLERY */}

          <div className="gallery-grid" style={{marginTop:"-50px"}}>

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
                    {/* <small className='career-primary-btn'>Placement Success</small> */}
                  </div>

                  <div className="overlay-content">

                    <h3 style={{fontSize:"20px"}} className='text-light'>{item.name}</h3>

                    <h5 style={{fontSize:"20px", fontWeight:"bold"}} className='text-light'>{item.role}</h5>

                    <p className='text-warning fw-bold'>{item.company}</p>

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

              <h3>
                Ready To Become Our Next Success Story? 🚀
              </h3>

              <p className='text-dark fw-bold'>
                Start your learning journey today with
                placement-focused practical training.
              </p>

            </div>

            <div className="career-action-buttons">

              <button className="career-join-btn">

                <span>
                  Join Now
                </span>

                <div className="btn-glow-effect"></div>

              </button>

              <button className=" career-join-btn">

                <span>
                  ▶ Free Demo
                </span>
                <div className="btn-glow-effect"></div>

              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}