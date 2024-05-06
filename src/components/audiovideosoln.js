import React, { useEffect, useState } from "react";
import AV from "../image/AVsolution.jpg";
import CR from "../image/classroomsoln.jpg";
import virtual from "../image/virtualsoln.jpg";
import hybrid from "../image/Hybridsoln.jpg";
import conference from "../image/conferencesoln.jpg";
import "../css/audio.css";
export default function Elearning() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img style={{ width: "100%" }} src={AV} alt="My Image" />
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

      <section className="about-section" >
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
      <section className="about-section" style={{marginTop:"70px"}}>
        <div className="container">
          <div className="row">
            <div className="imgcol col-lg-6 col-md-12 col-sm-12 img2 order-2 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px", position: "absolute" }}
                      src={virtual}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>Virtual Classroom</h2>
                </div>
                <div className="text">
                  Virtual Classrooms revolutionize the way education is
                  delivered by transcending physical boundaries. Through
                  powerful online platforms, students can attend live,
                  interactive lectures from anywhere in the world. These virtual
                  environments facilitate real-time collaboration, allowing
                  participants to share screens, exchange files, and engage in
                  discussions as if they were in a traditional classroom
                  setting. With recorded sessions available on-demand, virtual
                  classrooms offer unparalleled flexibility for learners with
                  busy schedules. Educational institutions can leverage this
                  technology to reach a global audience, expand course
                  offerings, and deliver high-quality instruction in a
                  cost-effective manner, making education more accessible than
                  ever before.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section" style={{marginTop:"70px"}}>
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
      <section className="about-section" style={{marginTop:"70px",marginBottom:"100px"}}>
        <div className="container">
          <div className="row">
            <div className="imgcol col-lg-6 col-md-12 col-sm-12 img2 order-2 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px", position: "absolute" }}
                      src={conference}
                      alt="My Image"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12 reveal fade-left ">
              <div className="inner-column ">
                <div className="sec-title">
                  <h2>High End Conference Room</h2>
                </div>
                <div className="text">
                  Elevate your meetings and presentations with our cutting-edge,
                  high-end conference room equipped with the innovative "look at
                  me" feature. This state-of-the-art technology uses advanced
                  facial recognition and camera tracking to automatically focus
                  all attention on the active speaker. As you present, the
                  camera seamlessly follows your movements, ensuring you remain
                  the center of attention for both in-room and remote
                  participants. This immersive experience enhances engagement,
                  improves communication, and fosters a more collaborative
                  environment. Whether hosting important client meetings,
                  executive briefings, or virtual conferences, our high-end
                  conference room with the "look at me" feature delivers a
                  professional, impactful, and memorable experience for all
                  attendees.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
