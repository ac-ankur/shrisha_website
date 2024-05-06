import React, { useEffect, useState } from "react";
import VC from "../image/virtualclassroom.png";
import CR from "../image/classroomsoln.jpg";
import virtual from "../image/virtualsoln.jpg";
import hybrid from "../image/Hybridsoln.jpg";
import conference from "../image/conferencesoln.jpg";
import "../css/audio.css";
export default function Virtualclassroom() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img style={{     width: "100%",
    height: "440px",
    marginTop: "32px" }} src={VC} alt="My Image" />
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

    
      <section className="about-section" style={{marginTop:"4px",marginBottom:"100px"}}>
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
            <div className="content-column col-lg-6 col-md-12 col-sm-12 reveal fade-left " style={{marginTop:"2px"}}>
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
   
    </div>
  );
}
