import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Player from "video-react/lib/components/Player";
import { authAxios, userId } from "../../App";

export default function StudentCourseContent() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    GetCourseById();
  }, []);

  const src = data.videoName;

  const GetCourseById = () => {
    axios
      .get(`/api/module/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const enrollModule = () => {
    authAxios
      .post("/api/users/enroll", {
        userId: userId,
        module: id,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div class="mdk-header-layout__content page-content">
      <div
        class="mdk-box bg-primary js-mdk-box mb-0"
        data-effects="blend-background"
        data-domfactory-upgraded="mdk-box"
      >
        <div class="mdk-box__bg">
          <div
            class="mdk-box__bg-front"
            style={{
              transform: "translateZ(0px)",
              willChange: "opacity",
              opacity: "0.24583",
            }}
          ></div>
          <div
            class="mdk-box__bg-rear"
            style={{
              transform: "translateZ(0px)",
              willChange: "opacity",
              opacity: "0.75417",
            }}
          ></div>
        </div>
        <div class="mdk-box__content">
          <div class="hero py-64pt text-center text-sm-left">
            <div class="container page__container">
              <h1 class="text-white">{data.name}</h1>
              {/* <p class="lead text-white-50 measure-hero-lead">
                Clear the basics of Clinical Trials. Understand the phases of a
                Clinical Trial. Have insight into Toxicokinetic Studies. Be
                informed about the Evolution of Clinical Research
              </p> */}
              <div class="d-flex flex-column flex-sm-row align-items-center justify-content-start">
                <button
                  data-bs-toggle="collapse"
                  data-bs-target="#course-toc-1"
                  class="btn btn-outline-white mb-16pt mb-sm-0 mr-sm-16pt"
                >
                  Watch trailer{" "}
                  <i class="material-icons icon--right">play_circle_outline</i>
                </button>
                <a href="/signup" class="btn btn-white">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section border-bottom-2">
        <div class="container page__container">
          <div class="page-separator">
            <div class="page-separator__text">Table of Contents</div>
          </div>
          <div class="row mb-0">
            <div class="col-lg-7">
              <div
                class="accordion js-accordion accordion--boxed list-group-flush"
                id="parent"
                data-domfactory-upgraded="accordion"
              >
                <div class="accordion__item">
                  <button
                    class="accordion__toggle accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#course-toc-1"
                    data-parent="#parent"
                  >
                    <span class="flex">Course Overview</span>
                  </button>
                  <div class="accordion__menu collapse show" id="course-toc-1">
                    <div class="accordion__menu-link d-block">
                      <div className="mb-2">
                        <span class="icon-holder icon-holder--small icon-holder--dark rounded-circle d-inline-flex icon--left">
                          <i class="material-icons icon-16pt">
                            play_circle_outline
                          </i>
                        </span>
                        <span class="flex">Watch Trailer</span>
                      </div>
                      {src ? (
                        <Player>
                          <source src={data.videoName} />
                        </Player>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div class="accordion__item open">
                  <button
                    class="accordion__toggle accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#course-toc-2"
                    data-parent="#parent"
                  >
                    <span class="flex">
                      Clear the basics of Clinical Trials
                    </span>
                  </button>
                  <div class="accordion__menu collapse" id="course-toc-2">
                    <div class="accordion__menu-link">
                      <span class="icon-holder icon-holder--small icon-holder--dark rounded-circle d-inline-flex icon--left">
                        <i class="material-icons icon-16pt">check_circle</i>
                      </span>
                      <a class="flex" href="student-lesson.html">
                        Introduction
                      </a>
                      <span class="text-muted">8m 42s</span>
                    </div>
                    <div class="accordion__menu-link active">
                      <span class="icon-holder icon-holder--small icon-holder--primary rounded-circle d-inline-flex icon--left">
                        <i class="material-icons icon-16pt">
                          play_circle_outline
                        </i>
                      </span>
                      <a class="flex" href="student-lesson.html">
                        Introduction
                      </a>
                      <span class="text-muted">50m 13s</span>
                    </div>
                    <div class="accordion__menu-link">
                      <span class="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                        <i class="material-icons icon-16pt">lock</i>
                      </span>
                      <a class="flex" href="student-lesson.html">
                        Comparing
                      </a>
                      <span class="text-muted">12m 10s</span>
                    </div>
                    <div class="accordion__menu-link">
                      <span class="icon-holder icon-holder--small icon-holder--light rounded-circle d-inline-flex icon--left">
                        <i class="material-icons icon-16pt">hourglass_empty</i>
                      </span>
                      <a class="flex" href="student-take-quiz.html">
                        Quiz: Getting Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 justify-content-center">
              <div class="card">
                <div class="card-body py-16pt text-center">
                  <span class="icon-holder icon-holder--outline-secondary rounded-circle d-inline-flex mb-8pt">
                    <i class="material-icons">timer</i>
                  </span>
                  <h4 class="card-title">
                    <strong>Unlock Library</strong>
                  </h4>
                  <p class="card-subtitle text-70 mb-3">
                    Get access to all videos in the library
                  </p>
                  {userId ? (
                    <>
                      <div className="mb-2">Only ₹{data.price}</div>
                      <button
                        onClick={enrollModule}
                        class="btn btn-accent mb-8pt"
                      >
                        Enroll
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mb-2">Only ₹{data.price}</div>
                      <a href="/login" class="btn btn-accent mb-8pt">
                        Purchase
                      </a>
                      <p class="mb-0">
                        Already have an account? <a href="/login">Login</a>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section bg-alt border-bottom-2">
        <div class="container page__container">
          <div class="row ">
            <div class="col-md-7">
              <div class="page-separator">
                <div class="page-separator__text">About this course</div>
              </div>
              <p class="text-70">{data.description}</p>
            </div>
            <div class="col-md-5">
              <div class="page-separator">
                <div class="page-separator__text bg-alt">What you’ll learn</div>
              </div>
              <ul class="list-unstyled">
                <li class="d-flex align-items-center">
                  <span class="material-icons text-50 mr-8pt">check</span>
                  <span class="text-70">
                    Fundamentals of working with Clinical Research
                  </span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="material-icons text-50 mr-8pt">check</span>
                  <span class="text-70">
                    Understand the phases of a Clinical Trial
                  </span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="material-icons text-50 mr-8pt">check</span>
                  <span class="text-70">
                    Have insight into Toxicokinetic Studies
                  </span>
                </li>
                <li class="d-flex align-items-center">
                  <span class="material-icons text-50 mr-8pt">check</span>
                  <span class="text-70">
                    Be informed about the Evolution of Clinical Research
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
