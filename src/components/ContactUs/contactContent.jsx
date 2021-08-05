import React from "react";

export default function ContactContent() {
  return (
    <div
      class="mdk-header-layout__content page-content"
      style={{ textAlign: "center" }}
    >
      <div class="page-section bg-primary">
        <div class="container page__container d-flex flex-column flex-md-row align-items-center text-center text-md-left">
          <div class="flex mb-32pt mb-md-0">
            <h2 style={{ textAlign: "center" }} class="text-white mb-0">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div class="container page__container page-section">
        <div className="row">
          <div className="col-6">
            <div class="card">
              <div class="card-body" style={{ padding: "4rem" }}>
                <div class="mb-1">
                  <div class="avatar avatar-sm mr-3">
                    <span class="avatar-title rounded-circle bg-primary">
                      <span class="material-icons">mail_outline</span>
                    </span>
                  </div>
                  <div class="flex">
                    <div class="align-items-center mb-1 mt-3">
                      <strong class="card-title" style={{ fontSize: "20px" }}>
                        How can we help you?
                      </strong>
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        lineHeight: "2",
                        marginTop: "40px",
                      }}
                    >
                      <a
                        href="mailto:info@truelessons.io"
                        class="alt-font text-decoration-underline"
                      >
                        Send us an email <br /> <br />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div class="card">
              <div class="card-body" style={{ padding: "4rem" }}>
                <div class="mb-1">
                  <div class="avatar avatar-sm mr-3">
                    <span class="avatar-title rounded-circle bg-primary">
                      <span class="material-icons">call</span>
                    </span>
                  </div>
                  <div class="flex">
                    <div class="align-items-center mb-1 mt-3">
                      <strong class="card-title" style={{ fontSize: "20px" }}>
                        Feel free to get in touch.
                      </strong>
                    </div>
                    <div
                      style={{
                        fontSize: "15px",
                        textAlign: "center",
                        lineHeight: "2",
                        marginTop: "40px",
                      }}
                    >
                      <a
                        href="tel:9741600933"
                        class="alt-font text-decoration-underline"
                      >
                        Give us a call today on <br /> +91 9741600933
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="d-flex mb-1">
              <div class="flex">
                <div class="page-section container page__container">
                  <label class="form-label">
                    Fill out the form and we'll be in touch soon!
                  </label>
                  <div class="page-headline text-center">
                    <h2>How Can We Help You?</h2>
                  </div>
                  <div class="col-lg-10 p-0 mx-auto">
                    <form action="signup-payment.html">
                      <div class="form-group">
                        <label class="form-label" for="name">
                          Your first and last name:
                        </label>
                        <input
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="Your first and last name ..."
                        />
                      </div>
                      <div class="form-group">
                        <label class="form-label" for="email">
                          Your email:
                        </label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          placeholder="Your email address ..."
                        />
                      </div>
                      <div class="form-group mb-24pt">
                        <label class="form-label" for="mobile">
                          Mobile:
                        </label>
                        <input
                          id="mobile"
                          type="mobile"
                          class="form-control"
                          placeholder="Your Mobile No..."
                        />
                      </div>
                      <div class="form-group mb-24pt">
                        <label class="form-label" for="message">
                          Message:
                        </label>
                        <textarea
                          id="message"
                          type="message"
                          class="form-control"
                          placeholder="Your Message..."
                        />
                      </div>
                      <button class="btn btn-primary">Send Message</button>
                    </form>
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
