import React from "react";

export default function Header() {
  return (
    // Header
    <div
      id="header"
      class="mdk-header js-mdk-header mb-0"
      data-fixed
      data-effects=""
      style={{ zIndex: "100" }}
    >
      <div class="mdk-header__content">
        <div
          class="navbar navbar-expand navbar-dark-pickled-bluewood navbar-shadow"
          id="default-navbar"
          data-primary
        >
          {/* <button
            className="navbar-toggler w-auto mr-16pt d-block rounded-0"
            type="button"
            data-toggle="sidebar"
          >
            <span className="material-icons">short_text</span>
          </button> */}

          <a href="/" className="navbar-brand mr-16pt">
            <img
              src="images/logo-white.png"
              alt="logo"
              className="img-fluid"
              style={{ width: 200 }}
            />
          </a>

          <ul className="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/courses" className="nav-link">
                Courses
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/career" className="nav-link">
                Careers
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto mr-0">
            <li className="nav-item">
              <a
                href="/login"
                className="nav-link"
                data-toggle="tooltip"
                data-title="Login"
                data-placement="bottom"
                data-boundary="window"
              >
                <i className="material-icons">lock_open</i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/signup"
                className="btn btn-outline-white"
                style={{ color: "white" }}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
