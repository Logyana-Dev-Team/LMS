import React from "react";

export default function GradesContent() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mx-5 my-2">
          <h2 className="mb-0">Grades</h2>
          <p style={{ fontSize: 15 }}>
            You have 3 assignments coming up. Make sure to complete them before
            the deadline.
          </p>
        </div>
        <div className="container-fluid">
          <table class="table table-borderless mx-5">
            <thead>
              <tr>
                <th scope="col">Chapters</th>
                <th scope="col">Status</th>
                <th scope="col">Due</th>
                <th scope="col">Weight</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <div className="d-flex text-danger">
                    <i
                      class="fas fa-file-invoice me-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <div>
                      <h5 className="mb-1 p-0 text-danger">Quiz</h5>
                      <small
                        className="mb-1 p-0 tex-muted text-secondary"
                        style={{ fontWeight: "normal" }}
                      >
                        Evolution of clinic reaserch part-2
                      </small>{" "}
                      <br />
                      <span className="mb-1 p-0 text-dark">3-4 mins</span>
                    </div>
                  </div>
                </th>
                <td>
                  <span className="text-danger">Overdue</span>
                </td>
                <td>
                  <span>
                    May 9 <br /> 11:49 PM
                  </span>
                </td>
                <td>3%</td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <div className="d-flex text-primary">
                    <i
                      class="fas fa-file-invoice me-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <div>
                      <h5 className="mb-1 p-0 text-primary">Quiz</h5>
                      <small
                        className="mb-1 p-0 tex-muted text-secondary"
                        style={{ fontWeight: "normal" }}
                      >
                        Evolution of clinic reaserch part-2
                      </small>{" "}
                      <br />
                      <span className="mb-1 p-0 text-dark">3-4 mins</span>
                    </div>
                  </div>
                </th>
                <td>
                  <span className="text-primary">Overdue</span>
                </td>
                <td>
                  <span>
                    May 9 <br /> 11:49 PM
                  </span>
                </td>
                <td>3%</td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <div className="d-flex text-primary">
                    <i
                      class="fas fa-file-invoice me-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <div>
                      <h5 className="mb-1 p-0 text-primary">Quiz</h5>
                      <small
                        className="mb-1 p-0 tex-muted text-secondary"
                        style={{ fontWeight: "normal" }}
                      >
                        Evolution of clinic reaserch part-2
                      </small>{" "}
                      <br />
                      <span className="mb-1 p-0 text-dark">3-4 mins</span>
                    </div>
                  </div>
                </th>
                <td>
                  <span className="text-primary">Overdue</span>
                </td>
                <td>
                  <span>
                    May 9 <br /> 11:49 PM
                  </span>
                </td>
                <td>3%</td>
                <td></td>
              </tr>
              <tr>
                <th>
                  <div className="d-flex text-primary">
                    <i
                      class="fas fa-file-invoice me-2"
                      style={{ fontSize: "18px" }}
                    ></i>
                    <div>
                      <h5 className="mb-1 p-0 text-primary">Quiz</h5>
                      <small
                        className="mb-1 p-0 tex-muted text-secondary"
                        style={{ fontWeight: "normal" }}
                      >
                        Evolution of clinic reaserch part-2
                      </small>{" "}
                      <br />
                      <span className="mb-1 p-0 text-dark">3-4 mins</span>
                    </div>
                  </div>
                </th>
                <td>
                  <span className="text-primary">Overdue</span>
                </td>
                <td>
                  <span>
                    May 9 <br /> 11:49 PM
                  </span>
                </td>
                <td>3%</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
