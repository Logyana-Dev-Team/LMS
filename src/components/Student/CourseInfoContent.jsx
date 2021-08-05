import React from "react";

export default function CourseInfoContent() {
  return (
    <>
      <div className="container">
        <div className="d-flex container-fluid mt-5 mb-5 pb-5">
          <div>
            <h2 className="text-info m-0">Clinical Research</h2>
            <p className="text-muted fs-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              nam asperiores officia, amet eligendi possimus nihil quidem,
              libero iste aspernatur commodi ipsam dolores sapiente? Quibusdam
              possimus deserunt distinctio autem eum!
            </p>
          </div>
          <div>
            <h2 className="text-info">₹4990.00</h2>
          </div>
        </div>
        <div class="card">
          <div class="card-header" style={{ backgroundColor: "#CBE7FF66" }}>
            <h3 className="text-info">Faculties</h3>
          </div>
          <div class="card-body">
            <div className="row">
              <div className="col-2">
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="..."
                    width="120"
                    class="img-thumbnail rounded-circle"
                  ></img>
                  <h6 className="my-1 mb-4 text-info">Amrutha Babu</h6>
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="..."
                    width="120"
                    class="img-thumbnail rounded-circle"
                  ></img>
                  <h6 className="my-1 text-info">Dr. Smitha</h6>
                </div>
              </div>
              <div className="col-10">
                <div className="fs-6">
                  Welcome to English for Career Development! You’re joining
                  thousands of learners currently enrolled in the course. I'm
                  excited to have you in the class and look forward to your
                  contributions to the learning community. <br /> <br /> To
                  begin, I recommend taking a few minutes to explore the course
                  site. Review the material we’ll cover each week, and preview
                  the assignments you’ll need to complete to pass the course.
                  Click Discussions to see forums where you can discuss the
                  course material with fellow students taking the class. <br />{" "}
                  <br /> If you have questions about course content, please post
                  them in the forums to get help from others in the course
                  community. For technical problems with the Coursera platform,
                  visit the{" "}
                  <a href="#" className="text-info text-decoration-none">
                    Learner Help Center
                  </a>
                  . <br /> <br />
                  Good luck as you get started, and I hope you enjoy the course!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div class="card">
            <div class="card-body">
              <div className="row container-fluid">
                <div className="col-10">
                  <h3 className="text-info">Available in Multiple Languages</h3>
                  <div className="fs-6">
                    English, Hindi, Marathi, Gujrati & many more..
                  </div>
                </div>
                <div className="col-2 d-flex align-items-center">
                  <button type="button" class="btn btn-link text-info fw-bold">
                    Set Launguage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h3 className="text-info">How to Pass?</h3>
          <div className="fs-6">
            Complete the following steps below and receive your certifcate
          </div>

          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-4 d-flex flex-column text-center align-items-center ">
                <div
                  className="rounded-circle"
                  style={{
                    width: 100,
                    height: 100,
                    border: "2px solid #3B7EB9",
                    fontSize: 30,
                    textAlign: "center",
                    backgroundColor: "#fff",
                    padding: 25,
                  }}
                >
                  <i class="fab fa-youtube" style={{ color: "#3B7EB9" }}></i>
                </div>
                <h4 style={{ color: "#3B7EB9" }}>
                  Complete Your <br /> Lectures
                </h4>
              </div>
              <div className="col-4 d-flex flex-column text-center align-items-center ">
                <div
                  className="rounded-circle"
                  style={{
                    width: 100,
                    height: 100,
                    border: "2px solid #3B7EB9",
                    fontSize: 30,
                    textAlign: "center",
                    backgroundColor: "#fff",
                    padding: 25,
                  }}
                >
                  <i
                    class="fas fa-file-invoice"
                    style={{ color: "#3B7EB9" }}
                  ></i>
                </div>
                <h4 style={{ color: "#3B7EB9" }}>
                  Complete Your <br /> Assesments
                </h4>
              </div>
              <div className="col-4 d-flex flex-column text-center align-items-center ">
                <div
                  className="rounded-circle"
                  style={{
                    width: 100,
                    height: 100,
                    border: "2px solid #3B7EB9",
                    fontSize: 30,
                    textAlign: "center",
                    backgroundColor: "#3B7EB9",
                    padding: 25,
                  }}
                >
                  <i
                    class="fas fa-clipboard-check"
                    style={{ color: "#fff" }}
                  ></i>
                </div>
                <h4 style={{ color: "#3B7EB9" }}>
                  Earn Your <br /> Certificate
                </h4>
              </div>
              <hr
                style={{
                  borderTop: "3px solid #3B7EB9",
                  position: "relative",
                  bottom: "145px",
                  zIndex: "-1",
                  width: "60%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
