import React from 'react'
import '../../assets/mycss/home/placementpartners.css'
import { Link } from 'react-router-dom'

export default function PlacementsParterns() {
    return (
        <>
            <section className="placement-partners" style={{marginTop:"-50px", cursor:"pointer"}}>

                {/* BACKGROUND EFFECTS */}

                <div className="partner-bg bg1"></div>
                <div className="partner-bg bg2"></div>

                <div className="container">

                    {/* SECTION TITLE */}

                    <div className="section-title" style={{marginTop:"-30px"}}>

                        <span style={{fontSize:"25px"}} className='bg-light'>🤝 Hiring Companies</span>

                        <p className='text-dark'>
                            We collaborate with top IT companies and startups
                            to provide students with excellent placement opportunities.
                        </p>

                    </div>

                    {/* TOP STATS */}

                    <div className="partner-stats" style={{marginTop:"-50px"}}>

                        <div className="partner-stat-card" style={{cursor:"pointer"}}>

                            <h3>50+</h3>

                            <span className='text-dark fw-bold'>Hiring Partners</span>

                        </div>

                        <div className="partner-stat-card">

                            <h3 >1200+</h3>

                            <span className='text-dark fw-bold'>Students Placed</span>

                        </div>

                        <div className="partner-stat-card">

                            <h3 >95%</h3>

                            <span className='text-dark fw-bold'>Placement Success</span>

                        </div>

                        <div className="partner-stat-card">

                            <h3 >₹12 LPA</h3>

                            <span className='text-dark fw-bold'>Highest Package</span>

                        </div>

                    </div>

                    {/* SLIDER */}

                    <div className="partners-slider">

                        <div className="slider-track">

                            {/* LOGO CARD */}

                            <div className="partner-card">
                                <img
                                    src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Accenture-logo.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvUsApXacqr01nDk5iLnnJUWHgjETwhn_EFBf4pM_EQ&s"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20k2S-ZoRl-A6ZIylwlJSnHE-SlfC2YdK4eNc_eFStQ&s=10"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://1000logos.net/wp-content/uploads/2020/07/Bajaj-logo.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://content.jdmagicbox.com/v2/comp/bangalore/57/080p5601457/catalogue/birla-soft-ltd-whitefield-bangalore-computer-software-developers-41cpr33.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D560BAQE5vsHkbFj0FA/company-logo_200_200/B56ZyeyLx_KQAI-/0/1772190482203/csc_e_governance_services_india_ltd__logo?e=2147483647&v=beta&t=IpjKZWYQTXAefUaYZTj6U6iT1UzzF5SnlZ_dnk-eVM8"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnJo-FA0PyBhzKuEDLLVj5Vi4-y9DC3DxgpQSwHPlfg&s=10"
                                    alt=""
                                />
                            </div>

                            {/* DUPLICATE FOR SMOOTH LOOP */}

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXgPL7zf4XGbmmVU7AXHLLMnZyefe_q0bfjMbqhUb4NoK3Q2SxlZMo1hH&s=10"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://1000logos.net/wp-content/uploads/2017/02/Color-IBM-Logo.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovJrDUz60t5VRaexHoo6Z3u9cgymxY191I5sKqCgR-MDvnSJnvCl6fWM&s=10"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv1F02Xa6D_lXdPWe2bCrwU7xb7GNwRA9uHe-Ge2QXZ5BUDyoJmJXC8to&s=10"
                                    alt=""
                                />
                            </div>

                             <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9FeCyIWa2EPIKlcZZL6sCUuAgDFJoO3Wq9xhlHUFig&s=10"
                                    alt=""
                                />
                            </div>
                             <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmH9zPLS9ruBb2HCnYFHoY0zMiFcB8wT1a-AMdmzGXbDghDAr4jW5pAE&s=10"
                                    alt=""
                                />
                            </div>
                             <div className="partner-card">
                                <img
                                    src="https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg"
                                    alt=""
                                />
                            </div>
                             <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67SX61qzCrqBz_Vp7veMyYD9PfbbgbakBwnZjvP0I-A&s=10"
                                    alt=""
                                />
                            </div>
                             <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC-YTmUI2dRQSJkbDK_UyoWfg7FYxXWC1WGAJB-vY_YEf-AyHBWaHJke9&s=10"
                                    alt=""
                                />
                            </div>
                             <div className="partner-card">
                                <img
                                    src="https://logowik.com/content/uploads/images/halodoc3588.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtGBGpqikcmbGoVh1aOQ2pccQyJTSRUC3L50tRm65FxW-iN15zlcBpw4K&s=10"
                                    alt=""
                                />
                            </div>
                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ik-BobGKW4BmFfeF5XCDrWDHdREYnZhb8joh4QE7ow&s=10"
                                    alt=""
                                />
                            </div>
                            <div className="partner-card">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Innova%E2%84%A2.jpg/1280px-Innova%E2%84%A2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_MUPexNR_MCntUevK4qGPJWbBsfN-zYOSUvB6bS0Ww&s=10"
                                    alt=""
                                />
                            </div>
                            <div className="partner-card">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpaxkX_o0N9H6QWV9z7fP5OBOY-EEJTUX8kx1uqcJfA&s"
                                    alt=""
                                />
                            </div>


                        </div>

                    </div>

                    {/* COMPANY HIGHLIGHTS */}

                    <div className="partner-highlight-grid">

                        <div className="highlight-card">

                            <div className="highlight-icon">
                                💼
                            </div>

                            <Link to = "/topmnc">
                              <h3>Top MNC Hiring</h3>
                            </Link>

                            <p className='text-dark fw-bold'>
                                Students placed in Infosys, TCS, Wipro,
                                Accenture, Cognizant & more.
                            </p>

                        </div>

                        <div className="highlight-card">

                            <div className="highlight-icon">
                                🚀
                            </div>

                            <Link to = "/startupcompany">
                              <h3>Startup Opportunities</h3>
                            </Link>

                            <p className='text-dark fw-bold'>
                                Work with modern startups and gain
                                real-world development experience.
                            </p>

                        </div>

                        <div className="highlight-card">

                            <div className="highlight-icon">
                                🎯
                            </div>

                            <Link to="/placementpreparation">
                               <h3>Placement Preparation</h3>
                            </Link>

                            <p className='text-dark fw-bold'>
                                Mock interviews, aptitude training,
                                and resume building sessions.
                            </p>

                        </div>

                    </div>

                    {/* CTA */}

                    <div className="partner-cta">

                        <h3 style={{fontSize:"25px"}}>
                            Start Your Career Journey Today 🚀
                        </h3>

                        <p >
                            Get trained by experts and connect with
                            top hiring companies for placements.
                        </p>

                        <div className="partner-btns">

                            <button className="primary-btn career-primary-btn">
                                Apply Now
                            </button>

                            <button className="success-btn career-primary-btn">
                                Free Demo
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
