import React from "react";
import virtualpic from "../image/virtualReality.jpg";
import virtualimg from "../image/Virtual.jpg";
import Augmented from "../image/AugmentedReality.jpg";
import Mixed from "../image/MixedReality.jpg";
import virtual1 from "../image/virtual1.jpg";
import "../css/virtual.css";
export default function virtual() {
  return (
    <div>
      <div className="container-fluid test img-responsive">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="text-center col-md-12 waben mt-5">
                    <img
                      className="bannerimg pull-left img-responsive"
                      id="wabeone"
                      src={virtualpic}
                      alt="Snow"
                      style={{ width: "100%" }}
                    />
                    <div className="firsttext">
                      <h1>Welcome to the era of the virtual world!</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row justify-content-evenly">
          <div className="col-md-5 reveal fade-left">
            {" "}
            <img
              className="vrimg"
              src={virtualimg}
              alt="Snow"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-5 reveal fade-right">
            <h2 style={{ marginBottom: "0px" }}>Virtual Reality</h2>
            <div className="borderline"></div>
            <p className="vrpara">
              {" "}
              Shrisha Technologies pioneers VR modules for adult education,
              revolutionizing learning with immersive experiences across diverse
              subjects. Their commitment to tech-enhanced learning reshapes how
              adults acquire skills, blending expertise in engineering, design,
              and education. With tailored modules spanning technical training
              to soft skills, Shrisha empowers learners with practical knowledge
              efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row justify-content-evenly">
          <div className="col-md-5 reveal fade-left">
            <h2 style={{ marginBottom: "0px" }}>Augmented Reality</h2>
            <div className="borderline"></div>
            <p className="vrpara">
              {" "}
              Shrisha Technologies leads adult education with innovative AR
              modules, merging real-world contexts with digital elements for
              immersive learning experiences. Their expert team crafts
              interactive modules spanning technical training to professional
              development, empowering learners with hands-on exploration.
              Through seamless AR integration, Shrisha enhances retention and
              application of knowledge, pushing the boundaries of educational
              technology.
            </p>
          </div>
          <div className="col-md-5 reveal fade-right">
            {" "}
            <img
              className="vrimg"
              src={Augmented}
              alt="Augmented Reality"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="container mt-5 ">
          <div className="row justify-content-evenly">
            <div className="col-md-5 reveal fade-left">
              {" "}
              <img
                className="vrimg"
                src={Mixed}
                alt="Mixed Reality"
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-5 reveal fade-right">
              <h2 style={{ marginBottom: "0px" }}>Mixed Reality</h2>
              <div className="borderline"></div>
              <p className="vrpara">
                {" "}
                Shrisha Technologies pioneers adult education with cutting-edge
                MR modules, seamlessly integrating VR and AR for immersive
                learning. Their interactive approach enables learners to engage
                with digital content in real-world settings, fostering deep
                understanding across diverse subjects. With a focus on
                interactivity, Shrisha ensures active participation, enhancing
                retention and practical application of knowledge. Their
                commitment to pushing MR boundaries promises dynamic and
                effective educational experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5 reveal fade-top mb-4"
        style={{ margin: "0 auto" }}
      >
        <div className="row justify-content-center">
          <div
            className="col-md-6"
            style={{ border: "2px solid #672c46", padding: "0px" }}
          >
            {" "}
            <img
              className="vrimg"
              src={virtual1}
              alt="img"
              style={{
                width: "100%",
                border: "none",
                borderRadius: "0px",
                height: "420px",
              }}
            />
          </div>
          <div className="col-md-6 " style={{ border: "2px solid #672c46",background: "#2d5685",color:"white"}}>
            <p className="vrpara" style={{fontSize:"17px",padding:"10px 14px"}}>
              {" "}
              Shrisha Technologies India Private Limited boasts exceptional
              capabilities in developing cutting-edge learning and gaming
              modules across multiple reality domains, including Virtual Reality
              (VR), Augmented Reality (AR), and Extreme Reality (XR). With a
              relentless commitment to innovation, their expert team of
              developers and designers has pushed the boundaries of immersive
              technologies to create transformative educational experiences and
              captivating gaming adventures. In the realm of VR, Shrisha
              Technologies brings life-like simulations that enable learners to
              engage in hands-on, experiential learning, breaking the barriers
              of traditional education. In AR, they seamlessly blend digital
              elements into the real world, fostering interactivity and
              providing practical insights for adult learners. With Extreme
              Reality, they explore the convergence of virtual and physical
              environments, delivering mind-blowing gaming experiences that blur
              the line between fantasy and reality. Through their unparalleled
              expertise and dedication to excellence, Shrisha Technologies is
              revolutionizing the way people learn and play, empowering them to
              unlock their potential and unleash their creativity in the world
              of mixed realities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
