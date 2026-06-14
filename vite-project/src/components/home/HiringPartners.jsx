import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "../../assets/mycss/home/hiringpartners.css";
import { Link } from "react-router-dom";


import {
  FaBuilding,
  FaBullseye,
  FaStar,
  FaArrowRight
} from "react-icons/fa";

export default function HiringPartners({removeMargin }) {
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
          <h3>Loading...</h3>
        </div>
      );
    }
  const companies = [
    {
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Colors-Accenture-logo.jpg",
      name: "Accenture",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlvUsApXacqr01nDk5iLnnJUWHgjETwhn_EFBf4pM_EQ&s",
      name: "Aditya Birla Group",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20k2S-ZoRl-A6ZIylwlJSnHE-SlfC2YdK4eNc_eFStQ&s=10",
      name: "Algoscale",
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2020/07/Bajaj-logo.jpg",
      name: "Bajaj",
    },
    {
      logo: "https://content.jdmagicbox.com/v2/comp/bangalore/57/080p5601457/catalogue/birla-soft-ltd-whitefield-bangalore-computer-software-developers-41cpr33.jpg",
      name: "Birla Soft",
    },
    {
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE5vsHkbFj0FA/company-logo_200_200/B56ZyeyLx_KQAI-/0/1772190482203/csc_e_governance_services_india_ltd__logo?e=2147483647&v=beta&t=IpjKZWYQTXAefUaYZTj6U6iT1UzzF5SnlZ_dnk-eVM8",
      name: "CSC",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnJo-FA0PyBhzKuEDLLVj5Vi4-y9DC3DxgpQSwHPlfg&s=10",
      name: "Cognizant",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXgPL7zf4XGbmmVU7AXHLLMnZyefe_q0bfjMbqhUb4NoK3Q2SxlZMo1hH&s=10",
      name: "HelWitt",
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2017/02/Color-IBM-Logo.jpg",
      name: "IBM",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovJrDUz60t5VRaexHoo6Z3u9cgymxY191I5sKqCgR-MDvnSJnvCl6fWM&s=10",
      name: "Sopra Steria",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png",
      name: "TCS",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv1F02Xa6D_lXdPWe2bCrwU7xb7GNwRA9uHe-Ge2QXZ5BUDyoJmJXC8to&s=10",
      name: "InfoSys",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9FeCyIWa2EPIKlcZZL6sCUuAgDFJoO3Wq9xhlHUFig&s=10",
      name: "LG",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmH9zPLS9ruBb2HCnYFHoY0zMiFcB8wT1a-AMdmzGXbDghDAr4jW5pAE&s=10",
      name: "Zensar",
    },
    {
      logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/319/small/amazon-logo-amazon-icon-free-free-vector.jpg",
      name: "Amazon",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67SX61qzCrqBz_Vp7veMyYD9PfbbgbakBwnZjvP0I-A&s=10",
      name: "Flipkart",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC-YTmUI2dRQSJkbDK_UyoWfg7FYxXWC1WGAJB-vY_YEf-AyHBWaHJke9&s=10",
      name: "VerTex",
    },
    {
      logo: "https://logowik.com/content/uploads/images/halodoc3588.jpg",
      name: "Helodoc",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtGBGpqikcmbGoVh1aOQ2pccQyJTSRUC3L50tRm65FxW-iN15zlcBpw4K&s=10",
      name: "Oracle",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ik-BobGKW4BmFfeF5XCDrWDHdREYnZhb8joh4QE7ow&s=10",
      name: "Technosoft Solution",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Innova%E2%84%A2.jpg/1280px-Innova%E2%84%A2.jpg",
      name: "Innova",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_MUPexNR_MCntUevK4qGPJWbBsfN-zYOSUvB6bS0Ww&s=10",
      name: "Citibank",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpaxkX_o0N9H6QWV9z7fP5OBOY-EEJTUX8kx1uqcJfA&s",
      name: "Deloitte",
    },

  ];

  const students = [
    {
      name: "Rahul Sharma",
      company: "Amazon",
      role: "FrontEnd Developer",
      package: "7 LPA",
      location: "Bangalore",
      img: "https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.jpg?s=612x612&w=0&k=20&c=5Urz6DUqrMmg595KZVDXp86GvbRf5U8A55JG4ML4TG0=",
    },
    {
      name: "Priya Mehta",
      company: "Infosys",
      package: "8 LPA",
      location: "Pune",
      role: "Backend Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyiaAqdxkKI7xXr6zx94ZKKYPU1hlq9jnT-3jnDqA-_3WOscLdL5GpfUV&s=10",
    },
    {
      name: "Anjali Verma",
      company: "TCS",
      role: "Software Engineer",
      package: "10 LPA",
      location: "Mumbai",
      img: "https://png.pngtree.com/png-clipart/20250103/original/pngtree-young-girl-with-laptop-png-image_19496399.png",
    },

    {
      name: "Rahul Sharma",
      company: "Amazon",
      role: "SDE Intern",
      package: "5 LPA",
      location: "Hyderabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3l2qgrB0Skl9RfYF61Y_dczmEeZPygARkb0KTJ8ejgBin5PBmXVYQ4qYX&s=10",
    },
    {
      name: "Priya Mehta",
      company: "Infosys",
      role: "System Engineer",
      package: "10 LPA",
      location: "Bangalore",
      img: "https://img.freepik.com/free-photo/young-blonde-woman-teacher-using-laptop-standing-kindergarten_839833-9717.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Sakshi Verma",
      company: "TCS",
      role: "Software Engineer",
      package: "10 LPA",
      location: "Noida",
      img: "https://t3.ftcdn.net/jpg/03/96/52/20/360_F_396522059_JoaNQiKYe6o8qsUYwtWlmBQK2oNMW77f.jpg",
    },
  ];

  const partners = [
    { name: "Google", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s" },
    // { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    // { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    // { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    // { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    // { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    // { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    // { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    // { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    // { name: "Capgemini", logo: "https://logo.clearbit.com/capgemini.com" },
    // { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
    // { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "HCL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqg0KtMMH4RREUA6kPgf13HtwKENOL2O8MVQ&s" },
    { name: "Tech Mahindra", logo: "https://www.mahindra.com/sites/default/files/social-thumbnail/TM_Logo_Color_Pos_RGB.jpg" },
    { name: "Deloitte", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3jOlcCpBaxcVojG4xYz7T1asxM0lGt1a5A&s" },
    { name: "PwC", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKISiHDOaFkW7WM_LYmWtOyB_DhhkqCdWSbw&s" },
    { name: "EY", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33QdOQ6YqqQIbMXnn3jw-Q4uS2p_MZEcK3w&s" },
    { name: "KPMG", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGncmprKJx4GqdC2g3f0aEHkYSOB2T6aufLw&s" },
    { name: "Zoho", logo: "https://cdn.prod.website-files.com/60f55c92cd59a31bf96663ec/63d78de02fb1092ff89be32c_zoho-logo-512px.png" },
    { name: "Paytm", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6XcwjkBGR7Pzo5XjtSp5d2X3e0oGquajUg&s" },
    { name: "PhonePe", logo: "https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" },
    { name: "Razorpay", logo: "https://coralogix.com/wp-content/uploads/2024/09/Razorpay_logo.svg" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Flipkart_logo_%282026%29.svg" },
    { name: "Myntra", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBpDqU0TzJU-75F_6kuX5WzrMR8aanog5yA&s" },
    { name: "Freshworks", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRom7QFRDzStJ8Z14BJ3s3kh7chCYgyqgzkvA&s" },
    { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/3840px-SAP_2011_logo.svg.png" },
    { name: "Salesforce", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAx4OMNKDO78w1GtSY9IKw8zy3RPjRMbWyg&s" },
    { name: "Cisco", logo: "https://www.networkworld.com/wp-content/uploads/2026/05/3523958-0-36773700-1780070612-csico_logo.jpg?quality=50&strip=all" },
    { name: "Intel", logo: "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg" },
    { name: "Dell", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6j9ncPmKx_M7HFjWoRe5xp_IhRm4Fdyw7w&s" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Logo_HP.PNG" },
    { name: "Lenovo", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQBb5OQWBw5fjjsHYWBrrocqIpcbVV6ATXA&s" },
    { name: "VMware", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnN21h_IRbsYtHAtFi4CPUntIFlLdzPyDgsg&s" },
    { name: "Atlassian", logo: "https://www.logo.wine/a/logo/Atlassian/Atlassian-Blue-Logo.wine.svg" },
    { name: "ServiceNow", logo: "https://www.logicgate.com/wp-content/uploads/plt-servicenow-assets-01-hero-01.png" },
    { name: "Uber", logo: "https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" },
    { name: "Swiggy", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW91-cIAIp0c7Bne3kPYS3tAuFjsoqsVviAg&s" },
    { name: "Zomato", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFopnFlNFLKsRKLcwLXyUDnsxIfFQv3yz8g&s" },
    { name: "LTIMindtree", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudjvtMXDGbp8Bf_tStusNTfG3WU-FrRxLRA&s" },
    { name: "Persistent", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN_g-lcMpx4SlbD3fxWfULVKeY2Uil8JH2w&s" },
    { name: "Mphasis", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwc-jpaurB3QjOwYr0Fu-bUJ-hgtL_dvTBcA&s" },
    { name: "Hexaware", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgziPXQ9cKw42ho-ZX0J0ABPIZF-A0eHoLyg&s" },
    { name: "Birlasoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2zhBSOEz_lddE_rSXc-NnEkpYIqS6ee0oNg&s" },
    { name: "Nagarro", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyr0V4hVtEQzniAMpUqzrU0AX91UTLiAFRw&s" },
    { name: "NVIDIA", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSjNAzGMcsT1_8LvfeLZ7_IhfHDcDdhvtaA&s" },
    { name: "Qualcomm", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Dq7rJTmHEU8OP-dN8d3O9c6irMifMPMo3g&s" },
  ];

  return (
    <>

      <section className={`partner-section ${removeMargin ? "" : "mt-5"}`}>

        <div className="celebration-icons">
          <span>🎉</span>
          <span>🏆</span>
          <span>🚀</span>
          <span>💼</span>
          <span>✨</span>
        </div>

        <h2 className="partner-title">
          Our Hiring Partners
        </h2>

        <div className="partner-line"></div>

        <p className="partner-subtitle">
          Trusted by Top IT Companies Across India & Worldwide
        </p>

        <div className="partner-slider">

          <div className="partner-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner-card" key={index}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo w-50"
                />
                <h5>{partner.name}</h5>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="hp-page" style={{ cursor: "pointer" }}>

        {/* HERO SECTION */}
        <section className="corporatebridge-section">

          {/* BACKGROUND SHAPES */}

          <div className="corporatebridge-glow corporatebridge-glow-left"></div>
          <div className="corporatebridge-glow corporatebridge-glow-right"></div>


          <div className="corporatebridge-stats-grid" style={{ marginTop: "-5rem" }}>

            <div className="corporatebridge-stat-box">

              <div className="corporatebridge-stat-icon">
                <FaBuilding />
              </div>

              <h2 style={{ fontSize: "30px" }}>
                500<span>+</span>
              </h2>

              <p>Hiring Companies</p>

            </div>

            <div className="corporatebridge-stat-box">

              <div className="corporatebridge-stat-icon">
                <FaBullseye />
              </div>

              <h2 style={{ fontSize: "30px" }}>
                10<span>K+</span>
              </h2>

              <p>Successful Placements</p>

            </div>

            <div className="corporatebridge-stat-box">

              <div className="corporatebridge-stat-icon">
                <FaStar />
              </div>

              <h2 style={{ fontSize: "30px" }}>
                4.8<span>/5</span>
              </h2>

              <p>Student Satisfaction</p>

            </div>

            <div className="corporatebridge-action-box">

              <Link to="/hiringcompanylist">

                <button className="corporatebridge-view-btn">

                  View All Companies

                  <FaArrowRight />

                </button>

              </Link>

            </div>

          </div>

        </section>
        <section className="hp-marquee mt-3">
          <div className="marquee-track">
            {companies.concat(companies).map((c, i) => (
              <img key={i} src={c.logo} alt={c.name} />
            ))}
          </div>
        </section>

        <section className="recruitment-swiper-section">

          <div className="recruitment-swiper-header mt-3" >

            <span style={{ fontSize: "13px" }}>
              🤝 Hiring Partners
              {/* <div className="btn-shine-effect2"></div> */}
            </span>


            <h2 style={{ fontSize: "20px" }}>
              Top Recruiting Companies
            </h2>

            <p>
              Leading IT companies and startups actively hire
              trained students for development, testing,
              analyst, and internship roles.
            </p>


          </div>

          <Swiper
            className="recruitment-company-swiper"
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={4}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
            }}

            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              576: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 3,
              },

              1200: {
                slidesPerView: 4,
              },
            }}
          >

            {companies.map((c, i) => (

              <SwiperSlide key={i}>

                <div className="recruitment-company-card ">

                  <div className="recruitment-company-logo ">

                    <img
                      src={c.logo}
                      alt={c.name}
                    />

                  </div>

                  <h3>
                    {c.name}
                  </h3>

                  <p>
                    Hiring for SDE, Analyst & Internship roles
                  </p>

                  <div className="recruitment-company-badge ">

                    Active Hiring

                  </div>

                </div>


              </SwiperSlide>

            ))}

          </Swiper>


        </section>

        {/* STUDENT SLIDER */}
        <section className="placed-students-wrapper">

          <div className="placed-students-header">

            <h2 className="placed-students-title">
              Recently Placed Students
            </h2>

            <p className="placed-subtitle">
              Our students are getting placed in top companies
              across India with competitive salary packages.
            </p>

          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={25}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className="placed-students-slider"
          >

            {students.map((student, index) => (

              <SwiperSlide key={index}>

                <div className="placement-profile-card">

                  <div className="placement-image-wrapper">

                    <img
                      src={student.img}
                      alt={student.name}
                      className="placement-profile-image"
                    />

                  </div>

                  <h3 className="placement-student-name">
                    {student.name}
                  </h3>

                  <p className="placement-job-role">
                    {student.role}
                  </p>

                  <div className="placement-package">
                    💰 {student.package}
                  </div>

                  <div className="placement-location">
                    📍 {student.location}
                  </div>

                  <div className="placement-company-name">
                    {student.company}
                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </section>


        {/* CTA */}
        <section className="hp-cta">
          <h2 className="text-light">Want to get placed in top companies?</h2>
          <button className="career-primary-btn">Apply Now</button>
        </section>

      </div>
    </>
  );
}