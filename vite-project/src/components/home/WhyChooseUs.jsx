import React from "react";
import '../../assets/mycss/home/whychooseus.css'

export default function WhyChooseUs() {
  const features = [
    {
      icon: "bi-award-fill",
      title: "Industry Recognized Certificate",
      desc: "Get course completion certificates valued by top IT companies."
    },
    {
      icon: "bi-laptop",
      title: "Practical Training",
      desc: "Learn through hands-on coding sessions and real-world assignments."
    },
    {
      icon: "bi-code-slash",
      title: "Live Projects",
      desc: "Work on real industry projects to gain practical experience."
    },
    {
      icon: "bi-person-video3",
      title: "Mock Interviews",
      desc: "Prepare with technical and HR mock interviews conducted by experts."
    },
    {
      icon: "bi-briefcase-fill",
      title: "Placement Assistance",
      desc: "Dedicated placement support with interview scheduling and guidance."
    },
    {
      icon: "bi-building",
      title: "Internship Opportunities",
      desc: "Gain industry exposure through internship programs and projects."
    }
  ];

  return (
  <section className="why-choose-section">
  <div className="container">

    <div className="text-center mb-5 why-heading">
      <h6>Why Choose Us</h6>

      <h2>Build Your IT Career with Confidence</h2>

      <p>
        We provide industry-focused training, real projects,
        certifications, internships, and placement support
        to help students become job-ready.
      </p>

      <div className="why-divider"></div>
    </div>

    <div className="row g-4">
      {features.map((item, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div className="feature-card" style={{cursor:"pointer"}}>

            <div className="card-body text-center p-4">

              <div className="feature-icon">
                <i className={`bi ${item.icon}`}></i>
              </div>

              <h5 className="feature-title" style={{fontSize:"18px"}}>
                {item.title}
              </h5>

              <p className="feature-desc">
                {item.desc}
              </p>

            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}