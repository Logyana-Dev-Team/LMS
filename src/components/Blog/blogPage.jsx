import React from "react";

export default function BlogPage() {
  return (
    <div class="page-section border-bottom-2">
      <div class="container page__container">
        <div class="page-separator">
          <div class="page-separator__text">From the blog</div>
        </div>

        <div class="row card-group-row">
          <div class="col-md-6 col-lg-4 card-group-row__col">
            <div
              class="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
            >
              <img
                src="images/paths/sketch_430x168.png"
                alt=""
                class="card-img"
              />
              <div class="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
              <div class="posts-card-popular__content">
                <div class="card-body d-flex align-items-center"></div>
                <div class="posts-card-popular__title card-body">
                  <div className="row">
                    <div className="col-8">
                      <small class="text-muted text-uppercase">Blog</small>
                      <a class="card-title" href="/blogSingle">
                        The Importance of EdTech in a Post-pandemic World
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="/blogSingle"
                        style={{ width: "101%", marginTop: "35px" }}
                        className="btn btn-sm btn-info"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 card-group-row__col">
            <div
              class="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
            >
              <img
                src="images/paths/sketch_430x168.png"
                alt=""
                class="card-img"
              />
              <div class="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
              <div class="posts-card-popular__content">
                <div class="card-body d-flex align-items-center"></div>
                <div class="posts-card-popular__title card-body">
                  <div className="row">
                    <div className="col-8">
                      <small class="text-muted text-uppercase">Blog</small>
                      <a class="card-title" href="/blogSingle">
                        Covishield VS Covaxin
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="/blogSingle"
                        style={{ width: "101%", marginTop: "35px" }}
                        className="btn btn-sm btn-info"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 card-group-row__col">
            <div
              class="
                    card card--elevated
                    posts-card-popular
                    overlay
                    card-group-row__card
                  "
            >
              <img
                src="images/paths/sketch_430x168.png"
                alt=""
                class="card-img"
              />
              <div class="fullbleed bg-primary" style={{ opacity: 0.5 }}></div>
              <div class="posts-card-popular__content">
                <div class="card-body d-flex align-items-center"></div>

                <div class="posts-card-popular__title card-body">
                  <div className="row">
                    <div className="col-8">
                      <small class="text-muted text-uppercase">Blog</small>
                      <a class="card-title" href="/blogSingle">
                        Who’s WHO in Research?
                      </a>
                    </div>
                    <div className="col-4">
                      <a
                        href="/blogSingle"
                        style={{ width: "101%", marginTop: "35px" }}
                        className="btn btn-sm btn-info"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
