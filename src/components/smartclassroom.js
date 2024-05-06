import React, { useEffect, useState } from "react";
import SC from "../image/smartclassrooms.jpg";
import CR from "../image/classroomsoln.jpg";
import virtual from "../image/virtualsoln.jpg";
import hybrid from "../image/Hybridsoln.jpg";
import conference from "../image/conferencesoln.jpg";
import "../css/audio.css";
export default function Smartclassroom() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img style={{ width: "100%" }} src={SC} alt="My Image" />
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

      <section className="about-section" style={{marginBottom:"40px"}} >
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>Smart Class Room</h2>
                </div>
                <div className="text">
                  Smart Classrooms are technologically advanced learning
                  environments that integrate cutting-edge hardware and software
                  to create an immersive and interactive educational experience.
                  Equipped with interactive whiteboards, high-definition
                  displays, and robust connectivity, these classrooms facilitate
                  active learning and cater to diverse learning styles. Through
                  multimedia presentations, virtual simulations, and real-time
                  assessments, complex concepts become more engaging and easier
                  to grasp. Smart Classrooms also promote collaboration,
                  enabling students to connect with peers globally and preparing
                  them for the global workforce. By embracing this innovative
                  technology, educational institutions can unlock new
                  possibilities and provide students with a competitive edge in
                  our digital society.
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12 img1 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img style={{ height: "326px" }} src={CR} alt="My Image" />
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
