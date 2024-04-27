import React, { useEffect, useState } from "react";
import "../css/about.css";
import aboutus1 from "../image/aboutus1.jpg";
import mission from "../image/mission.png";
import vision from "../image/vision.png";
import value from "../image/value.png";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div
              className={`content-column col-lg-6 col-md-12 col-sm-12  order-2 ${
                loaded ? "reveal fade-right active" : ""
              }`}
            >
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Toshanch</h2>
                </div>
                <div className="text">
                  At Toshanch, our team stands as the bedrock of our success,
                  serving as both the driving force and the source of
                  inspiration behind our innovative solutions. Comprising a
                  diverse array of backgrounds and expertise, our Directors and
                  Partners form the backbone of the company, infusing it with a
                  wealth of knowledge and perspective.
                </div>
                <div className="text">
                  With more than 15 years of combined experience, our directors
                  and staff bring a rich tapestry of skills and insights to the
                  table. This depth of expertise enables us to offer a
                  comprehensive suite of IT services, tailored to meet the
                  evolving needs of our clients. From virtual classrooms to
                  eLearning solutions, our team is committed to delivering
                  excellence in every endeavor, guided by a shared passion for
                  transformative technology and educational advancement.
                </div>
                <div className="btn-box">
                  <a href="#" className="theme-btn btn-style-one">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`image-column col-lg-6 col-md-12 col-sm-12 about1 ${
                loaded ? "reveal fade-left active" : ""
              }`}
            >
              <div className="inner-column wow fadeInLeft">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px" }}
                      src={aboutus1}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="sec-title">
            <h2>Our Mission, Vision and Values</h2>
          </div>
        </div>
      </section>
      <div
        className={`grid-container ${loaded ? "reveal fade-top active" : ""}`}
      >
        <div class="grid-item">
          <div class="circle-icon mission">
            <img src={mission} alt="My Image" />
          </div>
          <h3>Mission</h3>
          <p>
            To empower individuals and organizations through innovative
            technology solutions, fostering growth, efficiency, and excellence
            in every endeavor.
          </p>
        </div>
        <div class="grid-item">
          <div class="circle-icon vision">
            <img src={vision} alt="My Image" />
          </div>
          <h3>Vision</h3>
          <p>
            To be a pioneering leader in the IT industry, recognized for our
            commitment to delivering cutting-edge solutions that drive
            transformative change and shape the future of technology.
          </p>
        </div>
        <div class="grid-item">
          <div class="circle-icon values">
            <img src={value} alt="My Image" />
          </div>
          <h3>Values</h3>
          <p>
          Excellence, Innovation, Integrity, Collaboration, Customer-Centricity. These values are at
            the heart of everything Tuning Mania does, and the company strives
            to deliver exceptional after-sale services and a commitment to
            customer satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}
