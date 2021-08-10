import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";

export default function EditModule() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [courseImage, setCourseImage] = useState("");
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignupData] = useState({
    course: "",
    moduleName: "",
    modulePrice: "",
  });

  useEffect(() => {
    getModule();
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

  const getModule = () => {
    axios
      .get(`/api/module/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
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

  const editModule = (e) => {
    e.preventDefault();
    axios
      .patch("/api/module", {
        _id: id,
        name: signUpData.moduleName,
        course: signUpData.course,
        imageName: courseImage,
        price: signUpData.modulePrice,
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
            <div className="page-separator__text">Edit Module</div>
          </div>
          <div class="card mb-32pt">
            <div class="card-header d-flex align-items-center">
              <strong class="card-title">Edit Module</strong>
            </div>
            <div className="card-body mb-32pt">
              <form onSubmit={editModule}>
                <div class="form-group">
                  <label class="form-label">Course</label>
                  <select
                    name="course"
                    onChange={inputEvent}
                    class="form-control custom-select"
                  >
                    <option selected>{data.name}</option>

                    {course.map((course, i) => (
                      <option value={course._id} key={i}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                  <small class="form-text text-muted">Select a Course.</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Module Name</label>
                  <input
                    type="text"
                    name="moduleName"
                    onChange={inputEvent}
                    class="form-control"
                    value={data.name}
                  ></input>
                  <small class="form-text text-muted">Enter Module Name.</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Module Price</label>
                  <input
                    type="text"
                    name="modulePrice"
                    onChange={inputEvent}
                    class="form-control"
                    value={data.price}
                  ></input>
                  <small class="form-text text-muted">Enter Module Name.</small>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div class="form-group">
                      <label class="form-label d-flex">Module Image</label>
                      <img
                        src={data.imageName}
                        className="rounded m-2"
                        alt={data.name}
                      />
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
                </div>
                <div className="row">
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
                    Edit Module
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
