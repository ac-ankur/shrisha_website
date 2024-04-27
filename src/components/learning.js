import React, { useEffect, useState } from "react";
import "../css/learning.css";
import learning from "../image/learning.jpg";
import elearning from "../image/E-learning.png";
import lms from "../image/LMS.png";
import "../css/learning.css";
export default function Elearning() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              style={{ width: "100%", height: "560px" }}
              src={learning}
              alt="My Image"
            />
          </div>
        </div>
      </div>

      <div
        className="reveal fade-top"
        style={{ textAlign: "center", marginTop: "30px", color: "#672c46" }}
      >
        <h2 style={{ fontSize: "32px" }}>
          {" "}
          Unlock Your Potential: Empower with E-Learning & Cutting-Edge LMS!
        </h2>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>Elearning Content Creation & Curation</h2>
                </div>
                <div className="text">
                  Toshanch stands out as a trailblazer in the Elearning content
                  creation and curation sphere, continually pushing the
                  boundaries of educational innovation. With a dedicated team of
                  experts and a fervent commitment to learning, they harness
                  technology's power to craft dynamic and engaging Elearning
                  materials tailored to diverse audiences. Their capabilities
                  range widely, from developing interactive multimedia modules
                  and gamified courses to curating extensive knowledge
                  repositories. Toshanch employs the latest instructional design
                  methodologies to ensure each piece of content meticulously
                  meets specific learning objectives. Whether in K-12 education
                  or corporate training, Toshanch excels in delivering solutions
                  that captivate learners, enhance knowledge retention, and
                  instill a lifelong passion for learning. Their unwavering
                  dedication to excellence and adaptability positions them as
                  the preferred partner for institutions and organizations
                  aiming to revolutionize their Elearning experiences.
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12 img1 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px" }}
                      src={elearning}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="imgcol col-lg-6 col-md-12 col-sm-12 img2 order-2 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px", position: "absolute" }}
                      src={lms}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>Learning Management System</h2>
                </div>
                <div className="text">
                  When venturing into the development of a high-quality online
                  learning program with a new Learning Management System (LMS),
                  starting with the fundamentals and carefully evaluating
                  available options is paramount. Each organization has its
                  unique requirements, including anticipated user numbers,
                  implementation schedules, and financial constraints. Taking
                  these factors into account, alongside others, will steer the
                  selection process towards the most appropriate solution.
                  Within this framework, we will explore the merits and demerits
                  of three distinct avenues and pinpoint the types of
                  organizations that are poised to derive the greatest benefits
                  from each. The three main options for LMS selection are as
                  follows:
                  <ul>
                    <li>Developing a custom LMS from scratch</li>
                    <li>Acquiring an "off-the-shelf" LMS solution</li>
                    <li>Employing a managed, open-source LMS solution</li>
                  </ul>
                  Opting for the correct approach at the outset of the eLearning
                  journey not only conserves valuable resources but also
                  mitigates potential challenges that may arise in the future.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
