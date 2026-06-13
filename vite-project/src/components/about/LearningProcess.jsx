import React from 'react'
import '../../assets/mycss/about/learningprocess.css'

export default function LearningProcess() {
  return (
    <>
      <section className="career-roadmap-section section-spacing">

        {/* BACKGROUND EFFECTS */}

        <div className="roadmap-glow-effect glow-left"></div>
        <div className="roadmap-glow-effect glow-right"></div>

        <div className="container">

          {/* SECTION TITLE */}

          <div className="career-roadmap-header">

            <span>📚 Learning Journey</span>
            <br />

            <h2>Step By Step Learning Process</h2>

            <p>
              A complete roadmap from beginner to professional
              developer with practical training and placement support.
            </p>

          </div>

          {/* TIMELINE */}

          <div className="career-path-wrapper">

            {/* CENTER LINE */}

            <div className="career-path-line"></div>

            {/* STEP 1 */}

            <div className="career-step-box left-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  🚀
                </div>

                <span className="career-step-number">
                  Step 01
                </span>

                <h3>Course Enrollment</h3>

                <p>
                  Choose your preferred course and start your
                  journey with structured learning modules.
                </p>

                <div className="career-step-tags">

                  <span>Registration</span>
                  <span>Guidance</span>

                </div>

              </div>

            </div>

            {/* STEP 2 */}

            <div className="career-step-box right-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  💻
                </div>

                <span className="career-step-number">
                  Step 02
                </span>

                <h3>Practical Training</h3>

                <p>
                  Learn through live coding sessions,
                  assignments, and hands-on practice.
                </p>

                <div className="career-step-tags">

                  <span>Live Classes</span>
                  <span>Projects</span>

                </div>

              </div>

            </div>

            {/* STEP 3 */}

            <div className="career-step-box left-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  🔥
                </div>

                <span className="career-step-number">
                  Step 03
                </span>

                <h3>Live Projects</h3>

                <p>
                  Work on industry-level real-time projects
                  to gain practical experience.
                </p>

                <div className="career-step-tags">

                  <span>Real Projects</span>
                  <span>Team Work</span>

                </div>

              </div>

            </div>

            {/* STEP 4 */}

            <div className="career-step-box right-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  🎯
                </div>

                <span className="career-step-number">
                  Step 04
                </span>

                <h3>Interview Preparation</h3>

                <p>
                  Mock interviews, resume building,
                  aptitude, and HR preparation sessions.
                </p>

                <div className="career-step-tags">

                  <span>Mock Interview</span>
                  <span>Resume</span>

                </div>

              </div>

            </div>

            {/* STEP 5 */}

            <div className="career-step-box left-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  🏆
                </div>

                <span className="career-step-number">
                  Step 05
                </span>

                <h3>Certification</h3>

                <p>
                  Receive industry-recognized certification
                  after successful course completion.
                </p>

                <div className="career-step-tags">

                  <span>Verified</span>
                  <span>Certificate</span>

                </div>

              </div>

            </div>

            {/* STEP 6 */}

            <div className="career-step-box right-side">

              <div className="career-step-card">

                <div className="career-step-icon">
                  💼
                </div>

                <span className="career-step-number">
                  Step 06
                </span>

                <h3>Placement Support</h3>

                <p>
                  Get placement assistance and connect
                  with top hiring companies.
                </p>

                <div className="career-step-tags">

                  <span>Job Support</span>
                  <span>Hiring</span>

                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM STATS */}

          <div className="career-roadmap-stats">

            <div className="career-stat-card">

              <h3 style={{fontSize:"30px"}}>5000+</h3>

              <span>Students Trained</span>

            </div>

            <div className="career-stat-card">

              <h3 style={{fontSize:"30px"}}>250+</h3>

              <span>Live Projects</span>

            </div>

            <div className="career-stat-card">

              <h3 style={{fontSize:"30px"}}>1200+</h3>

              <span>Placements</span>

            </div>

            <div className="career-stat-card">

              <h3 style={{fontSize:"30px"}}>95%</h3>

              <span>Success Rate</span>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}
