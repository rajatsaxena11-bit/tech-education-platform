import React, { useEffect, useState } from "react";
import '../../assets/mycss/placements/highestpackage.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function HighestPackages() {
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
  const topPlacements = [
    {
      rank: 1,
      name: "Aman Sharma",
      company: "Google",
      role: "Frontend Engineer",
      package: "24 LPA",
    },
    {
      rank: 2,
      name: "Priya Singh",
      company: "Microsoft",
      role: "Software Engineer",
      package: "22 LPA",
    },
    {
      rank: 3,
      name: "Rahul Verma",
      company: "Amazon",
      role: "SDE-I",
      package: "21 LPA",
    },
    {
      rank: 4,
      name: "Anjali Gupta",
      company: "Adobe",
      role: "Frontend Developer",
      package: "19 LPA",
    },
    {
      rank: 5,
      name: "Vikas Mishra",
      company: "Oracle",
      role: "Associate Engineer",
      package: "18 LPA",
    },
    {
      rank: 6,
      name: "Sneha Patel",
      company: "Paytm",
      role: "React Developer",
      package: "17 LPA",
    },
    {
      rank: 7,
      name: "Aditya Jain",
      company: "Flipkart",
      role: "Software Engineer",
      package: "16 LPA",
    },
    {
      rank: 8,
      name: "Neha Yadav",
      company: "Myntra",
      role: "Frontend Engineer",
      package: "15 LPA",
    },
    {
      rank: 9,
      name: "Rohit Kumar",
      company: "Zoho",
      role: "Web Developer",
      package: "14 LPA",
    },
    {
      rank: 10,
      name: "Pooja Mishra",
      company: "IBM",
      role: "Software Developer",
      package: "13 LPA",
    },
    {
      rank: 11,
      name: "Karan Singh",
      company: "Deloitte",
      role: "Software Engineer",
      package: "12.5 LPA",
    },
    {
      rank: 12,
      name: "Simran Kaur",
      company: "Accenture",
      role: "Frontend Engineer",
      package: "12 LPA",
    },
    {
      rank: 13,
      name: "Ayush Gupta",
      company: "Capgemini",
      role: "React Developer",
      package: "11.5 LPA",
    },
    {
      rank: 14,
      name: "Nidhi Sharma",
      company: "Infosys",
      role: "Software Engineer",
      package: "11 LPA",
    },
    {
      rank: 15,
      name: "Harsh Agarwal",
      company: "TCS",
      role: "UI Developer",
      package: "10.5 LPA",
    },
    {
      rank: 16,
      name: "Ritika Jain",
      company: "Wipro",
      role: "Frontend Developer",
      package: "10 LPA",
    },
    {
      rank: 17,
      name: "Mohit Soni",
      company: "LTIMindtree",
      role: "Software Engineer",
      package: "9.8 LPA",
    },
    {
      rank: 18,
      name: "Sahil Verma",
      company: "HCL",
      role: "Web Developer",
      package: "9.5 LPA",
    },
    {
      rank: 19,
      name: "Kritika Sharma",
      company: "Cognizant",
      role: "Frontend Engineer",
      package: "9.2 LPA",
    },
    {
      rank: 20,
      name: "Arjun Tiwari",
      company: "Tech Mahindra",
      role: "Software Developer",
      package: "9 LPA",
    },
  ];

  return (
    <>
      <div className="highest-placement-section mt-5" style={{cursor:"pointer"}}>

        <h2 className="highest-title">
          🏆 Highest Package Placements
        </h2>

        <div className="gold-line"></div>

        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {topPlacements.map((student) => (
            <SwiperSlide key={student.rank}>
              <div className="top-card">

                <div className="rank-badge">
                  #{student.rank}
                </div>

                <div className="winner-ribbon">
                  TOP HIRE
                </div>

                <div className="avatar">
                  {student.name[0]}
                </div>

                <h3 style={{color:"#888",fontWeight:"bold", fontSize:"25px"}}>{student.name}</h3>

                <p style={{fontWeight:"bold"}}>{student.company}</p>

                <p>{student.role}</p>

                <div className="package-box" style={{fontSize:"12px"}}>
                  💰 {student.package}
                </div>

                <div className="placed-text">
                  🎉 Successfully Placed
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <section className="hp-marquee mt-3">
        <div className="marquee-track">
          {companies.concat(companies).map((c, i) => (
            <img key={i} src={c.logo} alt={c.name} />
          ))}
        </div>
      </section>
    </>
  );
}