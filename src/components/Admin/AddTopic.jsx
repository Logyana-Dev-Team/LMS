import axios from "axios";
import React from "react";
import { useState } from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import Loader from "react-loader-spinner";

export default function AddTopic() {
  const [courseImage, setCourseImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignupData] = useState({
    courseName: "",
  });

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
    // console.log(file);
    setCourseImage(file.secure_url);
    setLoading(false);
  };

  const addChapter = (e) => {
    e.preventDefault();
    axios
      .post("/api/course", {
        name: signUpData.courseName,
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
            <div className="page-separator__text">Add Course</div>
          </div>
          <div class="card mb-32pt">
            <div class="card-header d-flex align-items-center">
              <strong class="card-title">Add Course</strong>
            </div>
            <div className="card-body mb-32pt">
              <form onSubmit={addChapter}>
                <div class="form-group">
                  <label class="form-label">Course Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="courseName"
                    onChange={inputEvent}
                  ></input>
                  <small class="form-text text-muted">Enter Course Name.</small>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div class="form-group">
                      <label class="form-label">Course Image</label>
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
                        Select a Course.
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
                    Add Chapter
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
