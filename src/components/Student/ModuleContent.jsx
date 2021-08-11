import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ModuleContent() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [course, setCourse] = useState([]);
  const [chapter, setChapter] = useState([]);

  useEffect(() => {
    GetCourseById();
  }, []);

  const GetCourseById = () => {
    axios
      .get(`/api/module/${id}`)
      .then((res) => {
        setData(res.data);
        setCourse(res.data.course);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`/api/chapter/getChapterByModule/${id}`)
      .then((res) => {
        setChapter(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container mx-5 my-2">
          <h2 className="mb-0 text-info">{course.name}</h2>
          <p style={{ fontSize: 15 }}>{data.name}</p>
        </div>
        <div className="container py-5 my-5">
          <nav class="course-nav">
            <a
              href="#left"
              style={{
                fontSize: "25px",
                color: "#fff",
                backgroundColor: "#3B7EB9",
              }}
            >
              <i class="fas fa-arrow-circle-left"></i>
            </a>
            <div className="d-flex align-items-center flex-column">
              <a
                data-toggle="tooltip"
                data-placement="bottom"
                href=""
                data-original-title=""
                title=""
              ></a>
              <small className="text-info">START</small>
            </div>
            {chapter.map((chapter, i) => (
              <div className="d-flex align-items-center flex-column" key={i}>
                <span
                  style={{
                    position: "absolute",
                    bottom: "70px",
                    fontSize: "15px",
                    color: "#3B7EB9",
                  }}
                >
                  <i class="fas fa-file-invoice"></i>
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "40px",
                    fontSize: "15px",
                    color: "#3B7EB9",
                  }}
                >
                  <i class="fas fa-check"></i>
                </span>
                <a
                  data-toggle="tooltip"
                  data-placement="bottom"
                  data-title="Getting Started with Angular: Introduction"
                  href="#"
                  data-original-title=""
                  title=""
                ></a>
                <small className="text-info">{chapter.chapterName}</small>
              </div>
            ))}

            <a href="#" style={{ fontSize: "25px", color: "#fff" }}>
              <i class="fas fa-arrow-circle-right"></i>
            </a>
          </nav>
        </div>
        <div className="container mb-5 pb-5">
          <div className="row justify-content-center">
            <div className="col-10">
              {chapter.map((chapter, i) => (
                <div class="card" key={i}>
                  <div
                    class="card-header"
                    style={{ backgroundColor: "#CBE7FF66" }}
                  >
                    <h2 className="text-info">{chapter.chapterName}</h2>
                  </div>
                  <div class="card-body">
                    <div className="row">
                      <div className="col-8 border-end">
                        <table class="table table-borderless mx-5">
                          <thead>
                            <tr>
                              <th scope="col">Required</th>
                              <th scope="col">Grade</th>
                              <th scope="col">Due Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <div className="d-flex">
                                  <i
                                    class="fas fa-file-invoice me-2"
                                    style={{
                                      fontSize: "20px",
                                      position: "relative",
                                      top: "15px",
                                    }}
                                  ></i>
                                  <div className="ms-2">
                                    <h5 className="mb-0 p-0">Quiz</h5>
                                    <small
                                      className="mb-1 p-0 tex-muted text-secondary"
                                      style={{ fontWeight: "normal" }}
                                    >
                                      Evolution of clinic reaserch part-2
                                    </small>{" "}
                                    <br />
                                    <span className="mb-1 p-0 text-dark">
                                      3-4 mins
                                    </span>
                                  </div>
                                </div>
                              </th>

                              <td>8/10</td>
                              <td>
                                <span>
                                  May 9 <br /> 11:49 PM
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <div className="d-flex ">
                                  <i
                                    class="fas fa-file-invoice me-2"
                                    style={{
                                      fontSize: "20px",
                                      position: "relative",
                                      top: "15px",
                                    }}
                                  ></i>
                                  <div className="ms-2">
                                    <h5 className="mb-0 p-0">Quiz</h5>
                                    <small
                                      className="mb-1 p-0 tex-muted text-secondary"
                                      style={{ fontWeight: "normal" }}
                                    >
                                      Evolution of clinic reaserch part-2
                                    </small>{" "}
                                    <br />
                                    <span className="mb-1 p-0 text-dark">
                                      3-4 mins
                                    </span>
                                  </div>
                                </div>
                              </th>

                              <td>8/10</td>
                              <td>
                                <span>
                                  May 9 <br /> 11:49 PM
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-4">
                        <div className="row mt-3">
                          <div className="col-6 d-flex justify-content-center">
                            <div className="text-center">
                              <i class="fas fa-desktop text-info fs-4 mb-2"></i>
                              <p className="m-0 p-0">Videos</p>
                              <small className="text-muted">2-6 Hours</small>
                            </div>
                          </div>
                          <div className="col-6 d-flex justify-content-center">
                            <div className="text-center">
                              <i class="fas fa-info-circle text-info fs-4 mb-2"></i>
                              <p className="m-0 p-0">Status</p>
                              <small className="text-muted">
                                Not Completed
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-5 justify-content-center">
                          <div class="col-auto">
                            <a
                              href={"/video/" + chapter._id}
                              className="btn btn-outline-info"
                            >
                              Start
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
