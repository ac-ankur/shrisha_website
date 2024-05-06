import React, { useEffect, useState } from "react";
import CR from "../image/conferenceroom.jpg";
import csoln from "../image/conferencesoln.jpg";
import "../css/audio.css";
export default function Conference() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img style={{     width: "100%",
    height: "440px",
    marginTop: "32px" }} src={CR} alt="My Image" />
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
      <section className="about-section" style={{marginTop:"70px",marginBottom:"100px"}}>
        <div className="container">
          <div className="row">
            <div className="imgcol col-lg-6 col-md-12 col-sm-12 img2 order-2 reveal fade-right">
              <div className="inner-column wow fadeInRight">
                <figure className="image-1">
                  <a href="#" className="lightbox-image" data-fancybox="images">
                    <img
                      style={{ height: "326px", position: "absolute" }}
                      src={csoln}
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
