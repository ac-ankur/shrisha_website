import React, { useEffect, useState } from "react";
import HL from "../image/hybird learning.png";
import hybrid from "../image/Hybridsoln.jpg";
import "../css/audio.css";
export default function Hybridclassroom() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img style={{     width: "100%",
    height: "440px",
    marginTop: "32px" }} src={HL} alt="My Image" />
          </div>
        </div>
      </div>

      <div
        className="reveal fade-top"
        style={{ textAlign: "center", marginTop: "30px", color: "#672c46" }}
      >
        <h2 style={{ fontSize: "32px" }}>
          {" "}
        </h2>
      </div>

    
      <section className="about-section" style={{marginTop:"70px",marginBottom:"40px"}}>
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>Hybrid Classroom</h2>
                </div>
                <div className="text">
                  Hybrid Classrooms seamlessly blend the best of traditional
                  in-person learning with the convenience of virtual
                  instruction. These flexible environments integrate advanced
                  technology to enable synchronous participation for both
                  physically present students and remote learners. Through
                  high-quality video conferencing, interactive whiteboards, and
                  real-time collaboration tools, hybrid classrooms facilitate
                  engaging discussions and hands-on activities regardless of
                  location. Instructors can deliver personalized instruction,
                  cater to diverse learning styles, and promote inclusivity by
                  accommodating students' varying needs and circumstances.
                  Hybrid Classrooms offer a modern, adaptable approach to
                  education, empowering institutions to provide rich,
                  interactive learning experiences while maximizing resources
                  and accessibility.
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12 img1 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px" }}
                      src={hybrid}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
