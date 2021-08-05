import React from "react";
import Recommended from "./recommended";

export default function Dashboard() {
  return (
    <div>
      <div className="container-fluid">
        <div className="container mx-5">
          <h2 className="mb-0">Dashboard</h2>
          <p style={{ fontSize: 15 }}>
            Select your course to track your progress
          </p>
        </div>
        <div className="container mx-5">
          <ul
            class="nav nav-tabs"
            id="myTab"
            role="tablist"
            style={{ fontSize: "16px" }}
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active justify-content-center"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                style={{ width: "12rem" }}
              >
                My Modules
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link justify-content-center"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                style={{ width: "12rem" }}
              >
                Completed
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link justify-content-center"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                style={{ width: "12rem" }}
              >
                In progress
              </button>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row mt-5">
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <a
                          href="/module"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row mt-5">
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div class="card" style={{ width: "14rem" }}>
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-dark">Go To Module</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row mt-5">
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    class="card"
                    style={{ width: "14rem", color: "#3B7EB9" }}
                  >
                    <div class="card-body">
                      <h6 class="card-subtitle mb-2 text-muted">
                        Clinical Research
                      </h6>
                      <h5 class="card-title pb-3">
                        Clinical Research Aproaches
                      </h5>
                      <div className="row">
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="fas fa-desktop"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              11
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              videos
                            </h6>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              display: "inline-block",
                            }}
                          >
                            <i
                              style={{
                                fontSize: "30px",
                              }}
                              class="far fa-clock"
                            ></i>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              marginLeft: "9px",
                            }}
                          >
                            <h5 class="card-title" style={{ fontSize: "15px" }}>
                              05
                            </h5>
                            <h6 class="card-subtitle mt-0 mb-0 text-muted">
                              hours
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#3B7EB9" }}
                        >
                          Go To Module
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Recommended />
        </div>
      </div>
    </div>
  );
}
