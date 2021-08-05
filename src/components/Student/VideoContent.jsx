import React from "react";

export default function VideoContent() {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-8">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="row justify-content-between mt-3">
                <div className="col d-flex align-items-center">
                  <div class="dropdown">
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
                  <span className="ms-3">Choose Your Language</span>
                </div>
                <div className="col">
                  <button type="button" class="btn btn-info float-right ms-2">
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
            <div className="col-4 ps-4">
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
              <div className="h5 text-info mt-3">
                Chapter 1 - Evolution of Clinical Research Part - 1
              </div>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                odit praesentium? Culpa impedit aperiam ipsum velit corporis hic
                perspiciatis deleniti quidem est libero vero, commodi porro
                excepturi. Facilis, fugit quia? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nesciunt similique porro deleniti
                necessitatibus odit unde molestias quos ad magnam reprehenderit
                ipsa aliquam, delectus et, at itaque, cum earum maxime ratione!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
