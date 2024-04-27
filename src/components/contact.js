import React from "react";
import "../css/contact.css";
import contactimg from "../image/contactus.jpg";
import email from "../image/email.png";
import phone from "../image/telephone.png";
import address from "../image/location.png";
export default function Contact() {
  return (
    <div>
      <img
        style={{ width: "100%", height: "350px" }}
        src={contactimg}
        alt="My Image"
      />
      <main>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="row row-cols-md-2 g-4">
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="aos-item__inner">
                    <div className=" hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <img
                          style={{ width: "12%", marginRight: "6px" }}
                          src={email}
                          alt="My Image"
                        />
                        <span
                          className="h5"
                          style={{
                            color: "#702747",
                            fontWeight: "700",
                            marginTop: "4px",
                          }}
                        >
                          Email
                        </span>
                      </div>
                      <span style={{ color: "#375581", fontWeight: "700" }}>
                        info@shrishatechnologies.com
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="aos-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="aos-item__inner">
                    <div
                      className=" hvr-shutter-out-horizontal d-block p-3"
                      style={{ height: "92px" }}
                    >
                      <div className="d-flex justify-content-start">
                        <img
                          style={{ width: "12%", marginRight: "6px" }}
                          src={phone}
                          alt="My Image"
                        />
                        <span
                          className="h5"
                          style={{ color: "#702747", fontWeight: "700" }}
                        >
                          Phone
                        </span>
                      </div>
                      <span
                        style={{
                          color: "#375581",
                          fontWeight: "700",
                          marginTop: "6px",
                          display: "block",
                        }}
                      >
                        123-456-7890
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="aos-item mt-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="aos-item__inner">
                  <div className=" hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <img
                        style={{ width: "5%", marginRight: "6px" }}
                        src={address}
                        alt="My Image"
                      />
                      <span
                        className="h5"
                        style={{ color: "#702747", fontWeight: "700" }}
                      >
                        Office location
                      </span>
                    </div>
                    <span style={{ color: "#375581", fontWeight: "700" }}>
                      3rd floor 7/26, Kirti Nagar Industrial Area, New
                      Delhi-110015
                    </span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                <div className="mt-4 w-100 aos-item__inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.313045421036!2d77.14352567536992!3d28.650343983271952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031d2f15d521%3A0xff07aa098c8ec5d7!2s3rd%20floor%20plot%20no%2C%207%2F23%2C%20Block%207%2C%20Kirti%20Nagar%20Industrial%20Area%2C%20new%20delhi%2C%20New%20Delhi%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1712844054179!5m2!1sen!2sin"
                    width="620"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form Block */}
            <div className="col-xl-6">
              <div className="sec-title">
                <h2
                  className="pb-4"
                  style={{ color: "#702747", fontWeight: "700" }}
                >
                  Leave a message
                </h2>
              </div>
              <div className="row g-4">
                <div className="col-6 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="xyz"
                  />
                </div>
                <div className="col-6 mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="xyz"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="xyz@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="1234567890"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="button" className="contactbtn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
