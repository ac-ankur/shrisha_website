import React, { useState, useEffect } from "react";
import "../css/home.css";
import "../js/home";
import video from "../image/videoConference.jpg";
import classroom from "../image/smartClassroom.jpg";
import learning from "../image/ELearning.jpg";
import achievement from "../image/achievement.jpg";
import vr from "../image/VR.jpg";
export default function Home() {
  return (
    <div>
      <header className="headerContent">
        <div>
          <div classNameName="content">
            <div className="container">
              <div className="row">
                <div className="col-md-12 headercontent">
                  {" "}
                  <h3>
                    Welcome to{" "}
                    <span className="animate-character">Toshanch</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <p>
            Welcome to Shrisha Technologies India Private Limited, a leading
            Information Technology company headquartered in New Delhi, India.
            With a strong focus on innovation, quality, and customer
            satisfaction, we are committed to providing cutting-edge IT
            solutions that drive business growth and digital transformation. Our
            team of skilled professionals combines technical expertise with
            industry knowledge to deliver customized services and solutions
            tailored to meet the unique needs of our clients. From software
            development and web design to cloud computing, data analytics,
            cybersecurity, and more, we offer a comprehensive range of services
            to help businesses thrive in the digital era. With a
            customer-centric approach, we strive to build long-lasting
            partnerships, understanding your goals and challenges to deliver
            efficient and cost-effective solutions. Partner with Shrisha
            Technologies India Private Limited and experience the power of
            technology to accelerate your business and achieve new levels of
            success.
          </p>
        </div>
      </header>
      <div className="container-fluid">
        <h3 className="serviceBox reveal fade-top">
          Our <span>Services</span>
        </h3>
        <p className="servicePara reveal fade-top">
          Shrisha Technologies India Pvt. Ltd. is a leader in Smart Classrooms,
          Learning Management Systems, and E-Content Development. Their
          innovative solutions revolutionize online learning, offering
          interactive classrooms, efficient course management, and engaging
          multimedia content.
        </p>
        <div className="row mb-5" style={{ justifyContent: "center" }}>
          <div
            className="col-12 col-sm-6 col-md-3  reveal fade-left"
            style={{ width: "36%" }}
          >
            <div className="card shadow">
              <img style={{ height: "326px" }} src={video} alt="My Image" />
              <div className="card-body">
                <h3 className="text-center">Video Conferencing</h3>
                <button className="cardbtn">Learn More</button>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-3  reveal fade-right"
            style={{ width: "36%" }}
          >
            <div className="card shadow">
              <img style={{ height: "326px" }} src={classroom} alt="My Image" />
              <div className="card-body">
                <h3 className="text-center">Smart Classrooms</h3>
                <button className="cardbtn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="container-fluid">
      <div className="row mb-5" style={{ justifyContent: "center" }}>
      <div
            className="col-12 col-sm-6 col-md-3  reveal fade-left"
            style={{ width: "36%" }}
          >
            <div className="card shadow">
              <img style={{ height: "326px" }} src={learning} alt="My Image" />
              <div className="card-body">
                <h3 className="text-center">LMS/ELearning</h3>
                <button className="cardbtn">Learn More</button>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-md-3  reveal fade-right"
            style={{ width: "36%" }}
          >
            <div className="card shadow">
              <img style={{ height: "326px" }} src={vr} alt="My Image" />
              <div className="card-body">
                <h3 className="text-center">VR/AR/XR</h3>
                <button className="cardbtn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      <section class="bg-light py-3 py-md-5" style={{ position: "relative" }}>
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h3
                className="serviceBox reveal fade-top"
                style={{ marginBottom: "0px" }}
              >
                Our <span>Success</span>
              </h3>
              <h2
                class="mb-4 display-5 text-center"
                style={{ fontSize: "30px" }}
              >
                We are proud of our achievements.
              </h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row gy-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6">
              <img
                style={{ width: "100%" }}
                src={achievement}
                alt="My Image"
                className="reveal fade-left"
              />
            </div>
            <div class="col-12 col-lg-6 reveal fade-right">
              <div class="row justify-content-xl-end">
                <div class="col-12 col-xl-11">
                  <div class="row gy-4 gy-sm-0 overflow-hidden">
                    <div class="col-12 col-sm-6">
                      <div class="card border-0 border-bottom border-primary shadow-sm mb-4 successBox1">
                        <div class="card-body text-center p-4 p-xxl-5">
                          <h3 class="display-2 fw-bold mb-2">15</h3>
                          <p class="fs-5 mb-0 ">
                            Years of Experience
                          </p>
                        </div>
                      </div>
                      <div class="card border-0 border-bottom border-primary shadow-sm successBox3 ">
                        <div class="card-body text-center p-4 p-xxl-5">
                          <h3 class="display-2 fw-bold mb-2">10k</h3>
                          <p class="fs-5 mb-0 ">
                            Business Partners
                          </p>
                        </div>
                      </div>
                      <div class="card border-0 border-bottom border-primary shadow-sm mt-4 successBox2 ">
                        <div class="card-body text-center p-4 p-xxl-5">
                          <h3 class="display-2 fw-bold mb-2">25M</h3>
                          <p class="fs-5 mb-0 ">
                            Products Installed
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-sm-6">
                      <div class="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4 successBox5">
                        <div class="card-body text-center p-4 p-xxl-5">
                          <h3 class="display-2 fw-bold mb-2">22</h3>
                          <p class="fs-5 mb-0 ">
                            Countries World Wide
                          </p>
                        </div>
                      </div>
                      <div class="card border-0 border-bottom border-primary shadow-sm successBox4">
                        <div class="card-body text-center p-4 p-xxl-5">
                          <h3 class="display-2 fw-bold mb-2">5</h3>
                          <p class="fs-5 mb-0 ">
                            Industry Awards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
