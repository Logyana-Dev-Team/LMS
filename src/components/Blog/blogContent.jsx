import React from "react";

export default function BlogContent() {
  return (
    <div
      class="mdk-header-layout__content page-content "
      style={{ paddingTop: "64px" }}
    >
      <div class="page-section bg-alt border-bottom-2">
        <div class="container page__container">
          <div class="d-flex flex-column flex-lg-row align-items-center">
            <div class="d-flex flex-column flex-md-row align-items-center align-items-md-start flex mb-16pt mb-lg-0 text-center text-md-left">
              <div class="avatar overlay overlay--primary mb-16pt mb-md-0 mr-md-16pt">
                <img
                  src="images/paths/sketch_40x40%402x.png"
                  class="avatar-img rounded"
                  alt="lesson"
                />
                <div class="overlay__content"></div>
              </div>
              <div class="flex">
                <h1 class="h2 measure-lead-max mb-16pt">
                  Defects in the Healthcare System as highlighted during the
                  Covid-19 pandemic.
                </h1>
              </div>
            </div>
            <div class="ml-lg-16pt">
              <a href="blog.html" class="btn btn-light">
                Blog
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section border-bottom-2">
        <div class="container page__container">
          <div class="row">
            <div class="col-lg-8">
              <div class="mb-24pt">
                <a href="/#" class="chip chip-outline-secondary">
                  Design
                </a>
                <a href="/#" class="chip chip-outline-secondary">
                  Sketch
                </a>
              </div>

              <div class="d-flex flex-column flex-md-row align-items-md-center mb-16pt">
                <div class="mb-16pt mb-md-0 mr-md-16pt">
                  <div class="rounded p-relative o-hidden overlay overlay--primary">
                    <img
                      class="img-fluid rounded"
                      src="images/paths/sketch_200x168.png"
                      alt="..."
                    />
                    <div class="overlay__content"></div>
                  </div>
                </div>
                <div class="flex">
                  <p class="lead measure-paragraph-max">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    accusamus culpa deserunt distinctio, eos expedita inventore
                    labore laborum libero magnam nisi recusandae sapiente sunt
                    unde, voluptatibus? Accusantium distinctio laborum nihil,
                    nostrum possimus quos rem repellendus tenetur voluptatem! A,
                    ad adipisci commodi doloribus id maxime provident quo
                    suscipit. Itaque, recusandae ut.
                  </p>
                </div>
              </div>

              <blockquote class="blockquote blockquote--reverse pl-0">
                <p class="text-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque debitis distinctio earum et fugiat id itaque officia
                  provident quasi! Dolorem, fuga modi molestias natus non nulla
                  optio porro praesentium provident quaerat.
                </p>
                <footer class="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <p class="text-50 measure-paragraph-max mb-24pt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus dignissimos eaque facilis inventore ipsa modi natus,
                optio quisquam quod quos, ratione sed, ullam veritatis. Delectus
                dolorem doloremque, doloribus explicabo facere fugiat, incidunt
                ipsam maiores minima modi molestias natus quia quis recusandae
                rem reprehenderit saepe sint sunt tenetur velit voluptate
                voluptatum!
              </p>

              <h4>Labore nemo nisi recusandae</h4>

              <div class="d-flex flex-column flex-md-row mb-32pt">
                <div class="flex mb-16pt mb-md-0 mr-md-16pt">
                  <p class="lead text-70 measure-paragraph-max">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                    accusamus culpa deserunt distinctio, eos expedita inventore
                    labore laborum libero magnam nisi recusandae sapiente sunt
                    unde, voluptatibus? Accusantium distinctio laborum nihil,
                    nostrum possimus quos rem repellendus tenetur voluptatem! A,
                    ad adipisci commodi doloribus id maxime provident quo
                    suscipit. Itaque, recusandae ut.
                  </p>

                  <blockquote class="blockquote">
                    <p class="text-50">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cumque debitis distinctio earum et fugiat id itaque
                      officia provident quasi! Dolorem, fuga modi molestias
                      natus non nulla optio porro praesentium provident quaerat.
                    </p>
                    <footer class="blockquote-footer">
                      Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </div>
                <div>
                  <div class="rounded p-relative o-hidden overlay overlay--primary">
                    <img
                      class="img-fluid rounded"
                      src="images/paths/invision_200x168.png"
                      alt="..."
                    />
                    <div class="overlay__content"></div>
                  </div>
                </div>
              </div>

              <div class="measure-lead-max">
                <div class="page-separator">
                  <div class="page-separator__text">Comments</div>
                </div>

                <div class="d-flex mb-24pt">
                  <a href="/#" class="avatar avatar-sm mr-12pt">
                    <span class="avatar-title rounded-circle">LB</span>
                  </a>
                  <div class="flex">
                    <div class="form-group">
                      <label for="comment" class="form-label">
                        Your comment
                      </label>
                      <textarea
                        class="form-control"
                        name="comment"
                        id="comment"
                        rows="3"
                        placeholder="Type here to leave a comment ..."
                      ></textarea>
                    </div>
                    <button class="btn btn-outline-secondary">
                      Post comment
                    </button>
                  </div>
                </div>
                <div class="pt-3 mb-24pt">
                  <h4>2 Comments</h4>
                  <div class="d-flex mb-3">
                    <a href="/#" class="avatar avatar-sm mr-12pt">
                      <span class="avatar-title rounded-circle">JF</span>
                    </a>
                    <div class="flex">
                      <a href="/#" class="text-body">
                        <strong>Joseph S. Ferland</strong>
                      </a>
                      <br />
                      <p class="mt-1 text-70">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vero neque magnam modi corrupti in aliquid odit
                        eligendi pariatur! Ad consequatur illo voluptates,
                        dignissimos tenetur odit magni excepturi! Nesciunt,
                        fuga, vel.
                      </p>
                      <div class="d-flex align-items-center">
                        <small class="text-50 mr-2">27 min ago</small>
                        <a href="/#" class="text-50">
                          <small>Liked</small>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="ml-sm-32pt mt-3 card p-3">
                    <div class="d-flex">
                      <a href="/#" class="avatar avatar-sm mr-12pt">
                        <span class="avatar-title rounded-circle">FM</span>
                      </a>
                      <div class="flex">
                        <div class="d-flex align-items-center">
                          <a href="/#" class="text-body">
                            <strong>FrontendMatter</strong>
                          </a>
                          <small class="ml-auto text-muted">just now</small>
                        </div>
                        <p class="mt-1 text-70">
                          Hi Joseph,
                          <br /> Thank you for purchasing our course! <br />
                          <br />
                          Please have a look at the charts library documentation{" "}
                          <a href="/#">here</a> and follow the instructions.
                        </p>

                        <div class="d-flex align-items-center">
                          <a
                            href="/#"
                            class="text-50 d-flex align-items-center text-decoration-0"
                          >
                            <i
                              class="material-icons mr-1"
                              style={{ fontSize: "inherit" }}
                            >
                              favorite_border
                            </i>{" "}
                            3
                          </a>
                          <a
                            href="/#"
                            class="text-50 d-flex align-items-center text-decoration-0 ml-3"
                          >
                            <i
                              class="material-icons mr-1"
                              style={{ fontSize: "inherit" }}
                            >
                              thumb_up
                            </i>{" "}
                            13
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="/#" class="btn btn-block btn-light">
                    Load more ...
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="page-separator">
                <div class="page-separator__text">Recommended</div>
              </div>

              <div class="mb-8pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/invision_200x168.png"
                    alt="public/images/paths/invision_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Design Systems Essentials
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">inVision</a>
                    </small>
                    <small class="text-muted mr-8pt">35 Views</small>
                    <small class="text-muted">11 Nov, 2018</small>
                  </div>
                </div>
              </div>

              <div class="mb-8pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/photoshop_200x168.png"
                    alt="public/images/paths/photoshop_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Semantic Logo Design
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">Photoshop</a>
                    </small>
                    <small class="text-muted mr-8pt">78 Views</small>
                    <small class="text-muted">10 Nov, 2018</small>
                  </div>
                </div>
              </div>

              <div class="mb-16pt d-flex align-items-center">
                <a
                  href="blog-post.html"
                  class="avatar avatar-lg overlay overlay--primary mr-12pt"
                >
                  <img
                    src="images/paths/sketch_200x168.png"
                    alt="public/images/paths/sketch_200x168.png"
                    class="avatar-img rounded"
                  />
                  <span class="overlay__content"></span>
                </a>
                <div class="flex">
                  <a class="card-title mb-4pt" href="blog-post.html">
                    Merge Duplicates Inconsistent Symbols &amp; Styles
                  </a>
                  <div class="d-flex align-items-center">
                    <small class="text-muted mr-8pt">
                      <a href="/#">Sketch</a>
                    </small>
                    <small class="text-muted mr-8pt">78 Views</small>
                    <small class="text-muted">09 Nov, 2018</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section bg-alt">
        <div class="container page__container">
          <div class="page-separator">
            <div class="page-separator__text">Feedback</div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-md-4">
              <div class="card card-feedback card-body">
                <blockquote class="blockquote mb-0">
                  <p class="text-70 small mb-0">
                    A wonderful course on how to start. Eddie beautifully
                    conveys all essentials of a becoming a good Angular
                    developer. Very glad to have taken this course. Thank you
                    Eddie Bryan.
                  </p>
                </blockquote>
              </div>
              <div class="media ml-12pt">
                <div class="media-left mr-12pt">
                  <a href="student-profile.html" class="avatar avatar-sm">
                    <span class="avatar-title rounded-circle">UK</span>
                  </a>
                </div>
                <div class="media-body media-middle">
                  <a href="student-profile.html" class="card-title">
                    Umberto Kass
                  </a>
                  <div class="rating mt-4pt">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="card card-feedback card-body">
                <blockquote class="blockquote mb-0">
                  <p class="text-70 small mb-0">
                    A wonderful course on how to start. Eddie beautifully
                    conveys all essentials of a becoming a good Angular
                    developer. Very glad to have taken this course. Thank you
                    Eddie Bryan.
                  </p>
                </blockquote>
              </div>
              <div class="media ml-12pt">
                <div class="media-left mr-12pt">
                  <a href="student-profile.html" class="avatar avatar-sm">
                    <span class="avatar-title rounded-circle">UK</span>
                  </a>
                </div>
                <div class="media-body media-middle">
                  <a href="student-profile.html" class="card-title">
                    Umberto Kass
                  </a>
                  <div class="rating mt-4pt">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-4">
              <div class="card card-feedback card-body">
                <blockquote class="blockquote mb-0">
                  <p class="text-70 small mb-0">
                    A wonderful course on how to start. Eddie beautifully
                    conveys all essentials of a becoming a good Angular
                    developer. Very glad to have taken this course. Thank you
                    Eddie Bryan.
                  </p>
                </blockquote>
              </div>
              <div class="media ml-12pt">
                <div class="media-left mr-12pt">
                  <a href="student-profile.html" class="avatar avatar-sm">
                    <span class="avatar-title rounded-circle">UK</span>
                  </a>
                </div>
                <div class="media-body media-middle">
                  <a href="student-profile.html" class="card-title">
                    Umberto Kass
                  </a>
                  <div class="rating mt-4pt">
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star</span>
                    </span>
                    <span class="rating__item">
                      <span class="material-icons">star_border</span>
                    </span>
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