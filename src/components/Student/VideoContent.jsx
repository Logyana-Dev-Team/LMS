import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";

export default function VideoContent() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [disable, setDisable] = useState(true);

  const src = data.videoName;

  useEffect(() => {
    axios
      .get(`/api/chapter/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const myCallback = () => setDisable(false);

  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              {src ? (
                <Player autoPlay={false} onEnded={() => myCallback()}>
                  <source src={data.videoName} />
                </Player>
              ) : null}
              <div className="row justify-content-between mt-3">
                <div className="col d-flex align-items-center">
                  {/* <div class="dropdown">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span className="ms-3">Choose Your Language</span> */}
                </div>
                <div className="col">
                  <button
                    onClick={(event) =>
                      (window.location.href = "/quiz/" + data._id)
                    }
                    type="button"
                    class="btn btn-info float-right ms-2"
                    disabled={disable}
                  >
                    Quiz
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary float-right"
                  >
                    Resources
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-4 ps-4 overflow-auto"
              style={{ height: "55vh" }}
            >
              <h5>Script</h5>
              <dl class="row">
                <dt class="col-sm-3">00:10</dt>
                <dd class="col-sm-9">
                  A description list is perfect for defining terms.
                </dd>

                <dt class="col-sm-3">00:10</dt>
                <dd class="col-sm-9">
                  <p>Definition for the term.</p>
                </dd>

                <dt class="col-sm-3">00:10</dt>
                <dd class="col-sm-9">
                  This definition is short, so no extra paragraphs or anything.
                </dd>

                <dt class="col-sm-3 text-truncate">00:10</dt>
                <dd class="col-sm-9">
                  This can be useful when space is tight. Adds an ellipsis at
                  the end.
                </dd>
                <dt class="col-sm-3">00:10</dt>
                <dd class="col-sm-9">
                  This definition is short, so no extra paragraphs or anything.
                </dd>

                <dt class="col-sm-3 text-truncate">00:10</dt>
                <dd class="col-sm-9">
                  This can be useful when space is tight. Adds an ellipsis at
                  the end.
                </dd>
                <dt class="col-sm-3">00:10</dt>
                <dd class="col-sm-9">
                  This definition is short, so no extra paragraphs or anything.
                </dd>

                <dt class="col-sm-3 text-truncate">00:10</dt>
                <dd class="col-sm-9">
                  This can be useful when space is tight. Adds an ellipsis at
                  the end.
                </dd>
              </dl>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="h4 text-info mt-3">{data.chapterName}</div>
              <p className="text-muted">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
