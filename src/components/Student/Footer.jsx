import React from "react";

export default function Footer() {
  return (
    <div
      className=" border-top-2 mt-auto"
      style={{ backgroundColor: "#3B7EB9" }}
    >
      <div className="container page__container page-section d-flex flex-column">
        <div
          className="row justify-content-center"
          style={{ paddingTop: "5%", paddingBottom: "5%" }}
        >
          <div className="col-12 col-lg-3 col-md-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
            <img
              className="brand-icon"
              style={{ marginBottom: 30 }}
              src="images/logo-white.png"
              width="200"
              alt="Luma"
            />
            <p
              className="measure-lead-max mr-8pt"
              style={{
                width: "95%",
                color: "#fff",
                lineHeight: "30px",
                fontSize: 15,
              }}
            >
              True Lessons is a dedicated platform offering specialized courses
              in Clinical Research as well as in all-round communicative and
              language development training.
            </p>
            <div>
              <ul
                className="extra-small-icon"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  <a
                    href="https://www.facebook.com/avignaclinicalresearchinstitute"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff", display: "inline-block" }}
                  >
                    <i
                      style={{ fontWeight: "400" }}
                      class="fab fa-facebook-f"
                    ></i>
                  </a>
                </li>
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <a
                    href="https://www.instagram.com/acriindia/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff", display: "inline-block" }}
                  >
                    <i
                      style={{ fontWeight: "400" }}
                      class="fab fa-instagram"
                    ></i>
                  </a>
                </li>
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <a
                    href="https://twitter.com/ACRIIndia"
                    target="_blank"
                    style={{ color: "#fff", display: "inline-block" }}
                    rel="noreferrer"
                  >
                    <i style={{ fontWeight: "400" }} class="fab fa-twitter"></i>
                  </a>
                </li>
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/avignaclinicalresearch/?originalSubdomain=in"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#fff", display: "inline-block" }}
                  >
                    <i
                      style={{ fontWeight: "400" }}
                      class="fab fa-linkedin"
                    ></i>
                  </a>
                </li>
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <a
                    href="https://in.pinterest.com/avignaclinicalresearch/_created/"
                    target="_blank"
                    style={{ color: "#fff", display: "inline-block" }}
                    rel="noreferrer"
                  >
                    <i
                      style={{ fontWeight: "400" }}
                      class="fab fa-pinterest"
                    ></i>
                  </a>
                </li>
                <li
                  style={{
                    marginLeft: 0,
                    margin: "0 2px",
                    display: "inline-block",
                  }}
                >
                  {" "}
                  <a
                    href="https://www.youtube.com/channel/UCVD6JlUI5Hg1eN9Aoanp7fg"
                    target="_blank"
                    style={{ color: "#fff", display: "inline-block" }}
                    rel="noreferrer"
                  >
                    <i style={{ fontWeight: "400" }} class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-2 offset-lg-1 col-md-4 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
            <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom"></span>
            <ul
              style={{
                marginTop: 45,
                fontSize: 15,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li style={{ marginBottom: "7px" }}>
                <a href="/about" style={{ color: "#fff" }}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/clinical" style={{ color: "#fff" }}>
                  Clinical Research
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/career" style={{ color: "#fff" }}>
                  Career Development
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/about#team" style={{ color: "#fff" }}>
                  Team
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/contact" style={{ color: "#fff" }}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-2 col-md-4 col-sm-6 xs-margin-45px-bottom">
            <span
              class="d-block text-white"
              style={{
                marginBottom: "20px",
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              Featured Courses
            </span>
            <ul
              style={{
                fontSize: 15,
                padding: 0,
                listStyle: "none",
              }}
            >
              <li style={{ marginBottom: "7px" }}>
                <a href="/pgdcr" style={{ color: "#fff" }}>
                  PG Diploma in Clinical Research
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/oet" style={{ color: "#fff" }}>
                  OET
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/IELTS" style={{ color: "#fff" }}>
                  IELTS
                </a>
              </li>
              <li style={{ marginBottom: "7px" }}>
                <a href="/TOEFL" style={{ color: "#fff" }}>
                  TOEFL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "35px",
          paddingBottom: "35px",
          borderTop: "1px solid rgba(255, 255, 255, .1)",
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6 sm-margin-15px-bottom"></div>
            <div class="col-12 col-md-6 text-center text-md-right last-paragraph-no-margin">
              <p style={{ fontSize: 15, color: "#fff" }}>
                © 2021 True Lessons is Proudly Powered by{" "}
                <a
                  href="https://cognilements.com/"
                  target="_blank"
                  class="text-decoration-line-bottom text-white"
                  rel="noreferrer"
                >
                  Cognilements
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
