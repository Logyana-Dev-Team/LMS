import React from "react";

export default function Blog() {
  return (
    <div>
      <div className="border-bottom-2 py-16pt navbar-light bg-white border-bottom-2">
        <div className="container page__container">
          <div className="row align-items-center">
            <div
              className="
                  d-flex
                  col-md
                  align-items-center
                  border-bottom border-md-0
                  mb-16pt mb-md-0
                  pb-16pt pb-md-0
                "
            >
              <div
                className="
                    rounded-circle
                    bg-primary
                    w-64
                    h-64
                    d-inline-flex
                    align-items-center
                    justify-content-center
                    mr-16pt
                  "
              >
                <i className="material-icons text-white">subscriptions</i>
              </div>
              <div className="flex">
                <div className="card-title mb-4pt">20+ Courses</div>
                <p className="card-subtitle text-70">
                  Explore a wide range of skills.
                </p>
              </div>
            </div>
            <div
              className="
                  d-flex
                  col-md
                  align-items-center
                  border-bottom border-md-0
                  mb-16pt mb-md-0
                  pb-16pt pb-md-0
                "
            >
              <div
                className="
                    rounded-circle
                    bg-primary
                    w-64
                    h-64
                    d-inline-flex
                    align-items-center
                    justify-content-center
                    mr-16pt
                  "
              >
                <i className="material-icons text-white">verified_user</i>
              </div>
              <div className="flex">
                <div className="card-title mb-4pt">By Industry Experts</div>
                <p className="card-subtitle text-70">
                  Professional development from the best people.
                </p>
              </div>
            </div>
            <div className="d-flex col-md align-items-center">
              <div
                className="
                    rounded-circle
                    bg-primary
                    w-64
                    h-64
                    d-inline-flex
                    align-items-center
                    justify-content-center
                    mr-16pt
                  "
              >
                <i className="material-icons text-white">update</i>
              </div>
              <div className="flex">
                <div className="card-title mb-4pt">Unlimited Access</div>
                <p className="card-subtitle text-70">
                  Unlock Library and learn any topic with one subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section border-bottom-2">
        <div className="container page__container">
          <div className="page-separator">
            <div className="page-separator__text">From the blog</div>
          </div>

          <div className="row card-group-row">
            <div className="col-md-6 col-lg-4 card-group-row__col">
              <div
                className="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
              >
                <img
                  src="images/paths/sketch_430x168.png"
                  alt=""
                  className="card-img"
                />
                <div
                  className="fullbleed bg-primary"
                  style={{ opacity: "0.5" }}
                ></div>
                <div className="posts-card-popular__content">
                  <div className="card-body d-flex align-items-center">
                    <div className="avatar-group flex"></div>
                    <a
                      style={{ textDecoration: "none" }}
                      className="d-flex align-items-center"
                      href="/#"
                    >
                      <i
                        className="material-icons mr-1"
                        style={{ fontSize: "inherit" }}
                      >
                        remove_red_eye
                      </i>
                      <small>327</small>
                    </a>
                  </div>
                  <div className="posts-card-popular__title card-body">
                    <a className="card-title" href="/blog">
                      The Importance of EdTech in a Post-pandemic World
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 card-group-row__col">
              <div
                className="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
              >
                <img
                  src="images/paths/sketch_430x168.png"
                  alt=""
                  className="card-img"
                />
                <div
                  className="fullbleed bg-primary"
                  style={{ opacity: "0.5" }}
                ></div>
                <div className="posts-card-popular__content">
                  <div className="card-body d-flex align-items-center">
                    <div className="avatar-group flex"></div>
                    <a
                      style={{ textDecoration: "none" }}
                      className="d-flex align-items-center"
                      href="/#"
                    >
                      <i
                        className="material-icons mr-1"
                        style={{ fontSize: "inherit" }}
                      >
                        remove_red_eye
                      </i>
                      <small>327</small>
                    </a>
                  </div>
                  <div className="posts-card-popular__title card-body">
                    <a className="card-title" href="/blog">
                      Covishield VS Covaxin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 card-group-row__col">
              <div
                className="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
              >
                <img
                  src="images/paths/sketch_430x168.png"
                  alt=""
                  className="card-img"
                />
                <div
                  className="fullbleed bg-primary"
                  style={{ opacity: "0.5" }}
                ></div>
                <div className="posts-card-popular__content">
                  <div className="card-body d-flex align-items-center">
                    <div className="avatar-group flex"></div>
                    <a
                      style={{ textDecoration: "none" }}
                      className="d-flex align-items-center"
                      href="/#"
                    >
                      <i
                        className="material-icons mr-1"
                        style={{ fontSize: "inherit" }}
                      >
                        remove_red_eye
                      </i>
                      <small>327</small>
                    </a>
                  </div>
                  <div className="posts-card-popular__title card-body">
                    <a className="card-title" href="/blog">
                      Who’s WHO in Research?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="posts-cards">
            <div className="card posts-card mb-0">
              <div
                className="
                    posts-card__content
                    d-flex
                    align-items-center
                    flex-wrap
                  "
              >
                <div className="avatar avatar-lg mr-3">
                  <a href="blog-post.html">
                    <img
                      src="images/paths/invision_200x168.png"
                      alt="avatar"
                      className="avatar-img rounded"
                    />
                  </a>
                </div>
                <div className="posts-card__title flex d-flex flex-column">
                  <a href="blog-post.html" className="card-title mr-3">
                    Design Systems Essentials
                  </a>
                  <small className="text-50">35 views last week</small>
                </div>
                <div
                  className="
                      d-flex
                      align-items-center
                      flex-column flex-sm-row
                      posts-card__meta
                    "
                >
                  <div
                    className="
                        mr-3
                        text-50 text-uppercase
                        posts-card__tag
                        d-flex
                        align-items-center
                      "
                  >
                    <i className="material-icons text-muted-light mr-1">
                      folder_open
                    </i>
                    inVision
                  </div>
                  <div className="mr-3 text-50 posts-card__date">
                    <small>11 Nov, 2018 07:46 AM</small>
                  </div>
                  <div className="media ml-sm-auto align-items-center">
                    <div className="media-left mr-2 avatar-group">
                      <div
                        className="avatar avatar-xs"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Janell D."
                      >
                        <img
                          src="images/256_rsz_1andy-lee-642320-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>

                      <div
                        className="avatar avatar-xs"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Janell D."
                      >
                        <img
                          src="images/256_michael-dam-258165-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>

                      <div
                        className="avatar avatar-xs"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Janell D."
                      >
                        <img
                          src="images/256_luke-porter-261779-unsplash.jpg"
                          alt="Avatar"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="media-body">
                      <a href="/#">+2 more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
