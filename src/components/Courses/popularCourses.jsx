import React from "react";

export default function Polular() {
  return (
    <>
      <div
        class="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
        style={{ whiteSpace: "nowrap" }}
      >
        <small class="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
          Displaying 4 out of 10 courses
        </small>
        <div class="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
          <small class="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">
            Sort by
          </small>

          <a href="/#" class="sort desc small text-headings text-uppercase">
            Newest
          </a>

          <a href="/#" class="sort small text-headings text-uppercase ml-2">
            Popularity
          </a>
        </div>

        <a
          href="/#"
          data-target="#library-drawer"
          data-toggle="sidebar"
          class="btn btn-sm btn-white ml-sm-16pt"
        >
          <i class="material-icons icon--left">tune</i> Filters
        </a>
      </div>

      <div class="page-separator">
        <div class="page-separator__text">Popular Courses</div>
      </div>

      <div className="row card-group-row">
        <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            className="
                    card card-sm card--elevated
                    p-relative
                    o-hidden
                    overlay overlay--primary-dodger-blue
                    js-overlay
                    card-group-row__card
                  "
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              href="/studentCourse"
              className="card-img-top js-image"
              data-position=""
              data-height="140"
            >
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">
                    play_circle_outline
                  </i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" href="/studentCourse">
                    Fundamentals in Clinical Research Level 1
                  </a>
                </div>
                <a
                  href="/studentCourse"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="
                          ml-4pt
                          material-icons
                          text-20
                          card-course__icon-favorite
                        "
                >
                  favorite_border
                </a>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">
                  Fundamentals in Clinical Research Level 1
                </div>
              </div>
            </div>

            <p className="my-16pt text-70">
              Learn the Fundamentals in Clinical Research Level 1.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a href="/studentCourse" className="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            className="
                    card card-sm card--elevated
                    p-relative
                    o-hidden
                    overlay overlay--primary-dodger-blue
                    js-overlay
                    card-group-row__card
                  "
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              href="/studentCourse"
              className="card-img-top js-image"
              data-position=""
              data-height="140"
            >
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">
                    play_circle_outline
                  </i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" href="/studentCourse">
                    Fundamentals in Clinical Research Level 2
                  </a>
                </div>
                <a
                  href="/studentCourse"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="
                          ml-4pt
                          material-icons
                          text-20
                          card-course__icon-favorite
                        "
                >
                  favorite_border
                </a>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">
                  Fundamentals in Clinical Research Level 2
                </div>
              </div>
            </div>

            <p className="my-16pt text-70">
              Learn the Fundamentals in Clinical Research Level 2.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a href="/studentCourse" className="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            className="
                    card card-sm card--elevated
                    p-relative
                    o-hidden
                    overlay overlay--primary-dodger-blue
                    js-overlay
                    card-group-row__card
                  "
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              href="/studentCourse"
              className="card-img-top js-image"
              data-position=""
              data-height="140"
            >
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">
                    play_circle_outline
                  </i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" href="/studentCourse">
                    Advanced concepts in clinical research level 1
                  </a>
                </div>
                <a
                  href="/studentCourse"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="
                          ml-4pt
                          material-icons
                          text-20
                          card-course__icon-favorite
                        "
                >
                  favorite_border
                </a>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">
                  Advanced concepts in clinical research level 1
                </div>
              </div>
            </div>

            <p className="my-16pt text-70">
              Learns the Advanced concepts in clinical research level 1
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a href="/studentCourse" className="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
          <div
            className="
                    card card-sm card--elevated
                    p-relative
                    o-hidden
                    overlay overlay--primary-dodger-blue
                    js-overlay
                    card-group-row__card
                  "
            data-toggle="popover"
            data-trigger="click"
          >
            <a
              href="/studentCourse"
              className="card-img-top js-image"
              data-position=""
              data-height="140"
            >
              <img src="images/paths/sketch_430x168.png" alt="course" />
              <span className="overlay__content">
                <span className="overlay__action d-flex flex-column text-center">
                  <i className="material-icons icon-32pt">
                    play_circle_outline
                  </i>
                  <span className="card-title text-white">Preview</span>
                </span>
              </span>
            </a>

            <div className="card-body flex">
              <div className="d-flex">
                <div className="flex">
                  <a className="card-title" href="/studentCourse">
                    Advanced concepts in clinical research level 2
                  </a>
                </div>
                <a
                  href="/studentCourse"
                  data-toggle="tooltip"
                  data-title="Add Favorite"
                  data-placement="top"
                  data-boundary="window"
                  className="
                          ml-4pt
                          material-icons
                          text-20
                          card-course__icon-favorite
                        "
                >
                  favorite_border
                </a>
              </div>
            </div>
          </div>
          <div className="popoverContainer d-none">
            <div className="media">
              <div className="media-left mr-12pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  width="40"
                  height="40"
                  alt="Angular"
                  className="rounded"
                />
              </div>
              <div className="media-body">
                <div className="card-title mb-0">
                  Advanced concepts in clinical research level 2
                </div>
              </div>
            </div>

            <p className="my-16pt text-70">
              Learn the Advanced concepts in clinical research level 2.
            </p>

            <div className="mb-16pt">
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Clear the basics of Clinical Trials</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Understand the phases of a Clinical Trial</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>Have insight into Toxicokinetic Studies</small>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-50 mr-8pt">
                  check
                </span>
                <p className="flex text-50 lh-1 mb-0">
                  <small>
                    Be informed about the Evolution of Clinical Research
                  </small>
                </p>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-auto">
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    access_time
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>6 hours</small>
                  </p>
                </div>
                <div className="d-flex align-items-center mb-4pt">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    play_circle_outline
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>12 lessons</small>
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <span className="material-icons icon-16pt text-50 mr-4pt">
                    assessment
                  </span>
                  <p className="flex text-50 lh-1 mb-0">
                    <small>Beginner</small>
                  </p>
                </div>
              </div>
              <div className="col text-right">
                <a href="/studentCourse" className="btn btn-primary">
                  Watch trailer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-32pt">
        <ul class="pagination justify-content-start pagination-xsm m-0">
          <li class="page-item disabled">
            <a class="page-link" href="/#" aria-label="Previous">
              <span aria-hidden="true" class="material-icons">
                chevron_left
              </span>
              <span>Prev</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Page 1">
              <span>1</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Page 2">
              <span>2</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="/#" aria-label="Next">
              <span>Next</span>
              <span aria-hidden="true" class="material-icons">
                chevron_right
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
