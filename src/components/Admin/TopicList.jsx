import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Drawer from "./Drawer";
import Header from "./Header";
export default function TopicList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
    axios
      .get("/api/course")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="mdk-header-layout__content page-content ">
        <div className="container page__container page-section">
          <div
            className="page-separator"
            style={{ justifyContent: "space-between" }}
          >
            <div className="page-separator__text">Courses List</div>
            <div className="ps-2 bg-light">
              <a href="/addTopic" className="btn btn-success">
                <i class="fas fa-plus"></i> &nbsp; Add Course
              </a>
            </div>
          </div>
          <div class="card mb-32pt">
            <div
              class="table-responsive"
              data-toggle="lists"
              data-lists-sort-by="js-lists-values-date"
              data-lists-sort-desc="true"
              data-lists-values='["js-lists-values-name", "js-lists-values-department", "js-lists-values-status", "js-lists-values-type", "js-lists-values-phone", "js-lists-values-date"]'
            >
              <table class="table mb-0 thead-border-top-0 table-nowrap">
                <thead>
                  <tr>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-name"
                      >
                        #
                      </a>
                    </th>

                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-department"
                      >
                        Courses
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-status"
                      >
                        Images
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-status"
                      >
                        Status
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-status"
                      >
                        Edit
                      </a>
                    </th>
                    <th>
                      <a
                        href="javascript:void(0)"
                        class="sort"
                        data-sort="js-lists-values-status"
                      >
                        Delete
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody class="list" id="employees">
                  {data.map((courses, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{courses.name}</td>
                      <td style={{ width: "15%" }}>
                        <div class="mr-8pt">
                          <img
                            src={courses.imageName}
                            alt="course"
                            className="avatar-img rounded"
                          />
                        </div>
                      </td>
                      <td>
                        <h6 className="m-0 p-0">
                          <span
                            class="badge bg-success"
                            style={{ padding: ".35em .65em" }}
                          >
                            <small>Active</small>{" "}
                          </span>
                        </h6>
                      </td>
                      <td>
                        <a
                          href={`/editTopic/${courses._id}`}
                          type="button"
                          class="btn btn-success"
                        >
                          <i class="far fa-edit"></i>
                        </a>
                      </td>
                      <td>
                        <button type="button" class="btn btn-danger">
                          <i class="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div class="card-footer p-8pt">
              <ul class="pagination justify-content-start pagination-xsm m-0">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true" class="material-icons">
                      chevron_left
                    </span>
                    <span>Prev</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Page 1">
                    <span>1</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Page 2">
                    <span>2</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span>Next</span>
                    <span aria-hidden="true" class="material-icons">
                      chevron_right
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Drawer />
    </>
  );
}
