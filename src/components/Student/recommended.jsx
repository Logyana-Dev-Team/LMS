import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Recommended() {
  return (
    <>
      <h3 style={{ color: "#3B7EB9" }}>Recommended Modules</h3>
      <hr />
      <div className="row mt-5 ms-5">
        <div class="col-12">
          <div
            className="swiper-container text-center"
            data-slider-options='{ "slidesPerView": 1, "loop": true, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "1200": { "slidesPerView": 4 }, "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 3 } } }'
          >
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  nextEl: `#prev`,
                  prevEl: `#next`,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div>
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div
                      class="card align-items-center"
                      style={{ color: "#3B7EB9" }}
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
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
                                position: "relative",
                                bottom: "7px",
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
                              <h5
                                class="card-title"
                                style={{ fontSize: "15px" }}
                              >
                                05
                              </h5>
                              <h6 class="card-subtitle mt-0 mb-0 text-muted">
                                hours
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center my-4 ">
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div
            id="prev"
            className="swiper-button-next-nav swiper-button-next rounded-circle light slider-navigation-style-07 box-shadow-double-large"
          >
            <i class="fas fa-arrow-right"></i>
          </div>
          <div
            id="next"
            className="swiper-button-previous-nav swiper-button-prev rounded-circle light slider-navigation-style-07 box-shadow-double-large"
          >
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
      </div>
    </>
  );
}
