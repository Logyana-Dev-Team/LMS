import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Loader from "react-loader-spinner";
import Drawer from "./Drawer";
import Header from "./Header";

export default function AddModule() {
  const [courseImage, setCourseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState([]);
  const [signUpData, setSignupData] = useState({
    course: "",
    moduleName: "",
  });

  useEffect(() => {
    getCourse();
  }, []);

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

    setSignupData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;

    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "veggisale");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/logyana/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setCourseImage(file.secure_url);
    setLoading(false);
  };

  const addModule = (e) => {
    e.preventDefault();
    axios
      .post("/api/module", {
        name: signUpData.moduleName,
        course: signUpData.course,
        imageName: courseImage,
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
      <div className="mdk-header-layout__content page-content ">
        <div className="container page__container page-section">
          <div className="page-separator">
            <div className="page-separator__text">Add Module</div>
          </div>
          <div class="card mb-32pt">
            <div class="card-header d-flex align-items-center">
              <strong class="card-title">Add Module</strong>
            </div>
            <div className="card-body mb-32pt">
              <form onSubmit={addModule}>
                <div class="form-group">
                  <label class="form-label">Courses</label>
                  <select
                    name="course"
                    onChange={inputEvent}
                    class="form-control custom-select"
                  >
                    <option selected>Select Course</option>
                    {course.map((course, i) => (
                      <option value={course._id} key={i}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <small class="form-text text-muted">Select a Course.</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Modules</label>
                  <input
                    type="text"
                    name="moduleName"
                    onChange={inputEvent}
                    class="form-control"
                  ></input>
                  <small class="form-text text-muted">Enter Module Name.</small>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div class="form-group">
                      <label class="form-label">Module Image</label>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          onChange={uploadImage}
                          id="inputGroupFile01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                      </div>
                      <small class="form-text text-muted">
                        Select a Module Image.
                      </small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div class="form-group">
                      <label class="form-label mb-0" for="active">
                        Active
                      </label>
                      <div class="custom-control custom-checkbox-toggle ml-8pt mt-3">
                        <input
                          type="checkbox"
                          id="active"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="active">
                          Active
                        </label>
                      </div>
                    </div>
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
                    Add Module
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </>
  );
}
