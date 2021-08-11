import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Drawer from "./Drawer";
import Header from "./Header";

export default function AddChapter() {
  const [course, setCourse] = useState([]);
  const [module, setModule] = useState([]);
  const [chapterVideo, setChapterVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState();
  const [fields, setFields] = useState([]);

  const [chapterData, setChapterData] = useState({
    chapterTitle: "",
    description: "",
    videoName: "",
  });

  const [quizData, setQuizData] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  });

  useEffect(() => {
    getCourse();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setFields((preValue) => [
      ...preValue,
      {
        question: quizData.question,
        option1: quizData.option1,
        option2: quizData.option2,
        option3: quizData.option3,
        option4: quizData.option4,
        correctOption: quizData.correctOption,
      },
    ]);
    console.log(fields);
    setQuizData({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctOption: "",
    });
  };

  const getCourse = () => {
    axios
      .get("/api/course")
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => console.log(err));
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setChapterData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const quizEvent = (e) => {
    const { name, value } = e.target;

    setQuizData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const getModules = (e) => {
    const id = e.target.value;

    axios
      .get(`/api/module/getModule/${id}`)
      .then((res) => {
        setModule(res.data);
      })
      .catch((err) => console.log(err));
  };

  const uploadVideo = async (e) => {
    const files = e.target.files;
    const url = "https://api.cloudinary.com/v1_1/logyana/video/upload";
    const config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (data) => {
        setProgress(Math.round((100 * data.loaded) / data.total));
      },
    };

    console.log(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "truelessons");
    formData.append("api_key", "266722153473982");
    formData.append("timestamp", (Date.now() / 1000) | 0);
    setLoading(true);

    return axios
      .post(url, formData, config)
      .then((response) => {
        const data = response.data;
        const fileURL = data.secure_url;
        setChapterVideo(fileURL);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err.response));
  };

  const addChapter = (e) => {
    e.preventDefault();
    axios
      .post("/api/chapter", {
        course: course[0]._id,
        module: module[0]._id,
        chapterName: chapterData.chapterTitle,
        description: chapterData.description,
        videoName: chapterVideo,
        quiz: fields,
      })
      .then((response) => {
        window.setTimeout(function () {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div class="mdk-header-layout__content page-content ">
        <div class="pt-32pt">
          <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
            <div class="flex d-flex flex-column flex-sm-row align-items-center">
              <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                <h2 class="mb-0">Add Chapter</h2>

                <ol class="breadcrumb p-0 m-0">
                  <li class="breadcrumb-item">
                    <a href="/admin">Dashboard</a>
                  </li>

                  <li class="breadcrumb-item active"> &nbsp; Add Chapter</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div class="page-section border-bottom-2">
          <div class="container page__container">
            <div class="row">
              <form className="d-flex" onSubmit={addChapter}>
                <div class="col-md-8">
                  <div class="page-separator">
                    <div class="page-separator__text">Basic information</div>
                  </div>
                  <label class="form-label">Select Course</label>
                  <div class="form-group mb-24pt">
                    <select
                      name="course"
                      class="form-control form-control-lg custom-select"
                      onChange={getModules}
                    >
                      <option selected>Select Course</option>
                      {course.map((courses, i) => (
                        <option value={courses._id} key={i}>
                          {courses.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label class="form-label">Select Module</label>
                  <div class="form-group mb-24pt">
                    <select
                      name="category"
                      class="form-control form-control-lg custom-select"
                      onChange={inputEvent}
                    >
                      <option selected>Select Module</option>
                      {module
                        ? module.map((modules, i) => (
                            <option value={modules._id} key={i}>
                              {modules.name}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>

                  <label class="form-label">Chapter title</label>
                  <div class="form-group mb-24pt">
                    <input
                      type="text"
                      name="chapterTitle"
                      onChange={inputEvent}
                      class="form-control form-control-lg"
                      placeholder="Chapter title"
                    />
                  </div>

                  <div class="form-group mb-32pt">
                    <label class="form-label">Description</label>
                    <textarea
                      class="form-control"
                      name="description"
                      onChange={inputEvent}
                      rows="3"
                      placeholder="Course description"
                    ></textarea>
                    <small class="form-text text-muted">
                      Shortly describe this course.
                    </small>
                  </div>

                  <div class="page-separator">
                    <div class="page-separator__text">Questions</div>
                  </div>

                  <div
                    class="accordion js-accordion accordion--boxed mb-24pt"
                    id="parent"
                  >
                    <div class="accordion__item">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#course-toc-1"
                        data-parent="#parent"
                      >
                        <span class="flex">Write Questions</span>
                      </button>
                      <div class="accordion__menu collapse" id="course-toc-1">
                        <div class="accordion__menu-link d-block">
                          <div class="form-group mb-24pt">
                            <input
                              type="text"
                              name="question"
                              onChange={quizEvent}
                              class="form-control"
                              placeholder="Question"
                              value={quizData.question}
                            />
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div class="form-group mb-24pt">
                                <input
                                  type="text"
                                  name="option1"
                                  onChange={quizEvent}
                                  class="form-control"
                                  placeholder="Option 1"
                                  value={quizData.option1}
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="form-group mb-24pt">
                                <input
                                  type="text"
                                  name="option2"
                                  onChange={quizEvent}
                                  class="form-control"
                                  placeholder="Option 2"
                                  value={quizData.option2}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div class="form-group mb-24pt">
                                <input
                                  type="text"
                                  name="option3"
                                  onChange={quizEvent}
                                  class="form-control"
                                  placeholder="Option 3"
                                  value={quizData.option3}
                                />
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="form-group mb-24pt">
                                <input
                                  type="text"
                                  name="option4"
                                  onChange={quizEvent}
                                  class="form-control"
                                  placeholder="Option 4"
                                  value={quizData.option4}
                                />
                              </div>
                            </div>
                          </div>
                          <div class="form-group mb-24pt">
                            <select
                              name="correctOption"
                              class="form-control form-control-lg custom-select"
                              onChange={quizEvent}
                            >
                              <option value={quizData.correctOption} selected>
                                Select Correct Answer
                              </option>
                              <option value="Option 1">Option 1</option>
                              <option value="Option 2">Option 2</option>
                              <option value="Option 3">Option 3</option>
                              <option value="Option 4">Option 4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleClick(e)}
                    class="btn btn-outline-secondary mb-24pt mb-sm-0"
                  >
                    <i class="fas fa-plus"></i> &nbsp; Add Option
                  </button>
                </div>
                <div class="col-md-4">
                  <div class="page-separator">
                    <div class="page-separator__text">Video</div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <label class="form-label">Add Video</label>
                      {chapterVideo ? (
                        <div class="mt-3 mb-3">
                          <video width="400" controls>
                            <source src={chapterVideo} type="video/mp4" />
                            Your browser does not support HTML video.
                          </video>
                        </div>
                      ) : null}

                      <div class="custom-file">
                        <input
                          type="file"
                          onChange={uploadVideo}
                          class="custom-file-input"
                          id="inputGroupFile01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                      </div>
                      {progress && (
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-info progress-bar-striped"
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: progress + "%" }}
                          >
                            {progress}%
                          </div>
                        </div>
                      )}

                      <small class="form-text text-muted">
                        Enter a valid video.
                      </small>
                    </div>
                  </div>
                  {loading ? (
                    <Loader
                      type="ThreeDots"
                      color="#FFB800"
                      height="100"
                      width="100"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-success my-4 d-block mx-auto"
                    >
                      Add Chapter
                    </button>
                  )}
                  {fields ? (
                    <div>
                      {fields.map((fields, i) => (
                        <div className="row" key={i}>
                          <div className="row m-0">
                            <h4>
                              {i + 1}. &nbsp;
                              {fields.question}
                            </h4>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 m-0">
                              <h5>
                                <span className="fw-bold">
                                  Option 1 :&nbsp;
                                </span>
                                {fields.option1}
                              </h5>
                            </div>
                            <div className="col-6 m-0">
                              <h5>
                                <span className="fw-bold">
                                  Option 2 :&nbsp;
                                </span>
                                {fields.option2}
                              </h5>
                            </div>
                          </div>
                          <div className="row m-0">
                            <div className="col-6 m-0">
                              <h5>
                                <span className="fw-bold">
                                  Option 3 :&nbsp;
                                </span>
                                {fields.option3}
                              </h5>
                            </div>
                            <div className="col-6 m-0">
                              <h5>
                                <span className="fw-bold">
                                  Option 4 :&nbsp;
                                </span>
                                {fields.option4}
                              </h5>
                            </div>
                            <h5>
                              <span className="fw-bold">
                                Correct Answer :&nbsp;
                              </span>
                              {fields.correctOption}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </>
  );
}
