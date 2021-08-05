import React from "react";
import headerImage from "../../public/images/photodune-4161018-group-of-students-m.jpg";

export default function Header() {
  return (
    // Header
    <div
      id="header"
      className="mdk-header mdk-header--bg-dark bg-dark js-mdk-header mb-0"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="mdk-header__bg">
        <div
          className="mdk-header__bg-front"
          style={{
            backgroundImage: `url(${headerImage})`,
          }}
        ></div>
      </div>
      <div className="mdk-header__content justify-content-center">
        <div
          className="navbar navbar-expand navbar-dark-pickled-bluewood bg-transparent will-fade-background"
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

          <a href="index.html" className="navbar-brand mr-16pt">
            <img
              src="images/logo-white.png"
              alt="logo"
              className="img-fluid"
              style={{ width: 200 }}
            />
          </a>

          <ul className="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
            <li className="nav-item">
              <a href="index.html" className="nav-link">
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
              <a href="/signup" className="btn btn-outline-white">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <div className="hero container page__container text-center text-md-left py-112pt">
          <h1 className="text-white text-shadow">Blended Learning</h1>
          <p
            className="
                lead
                measure-hero-lead
                mx-auto mx-md-0
                text-white text-shadow
                mb-48pt
              "
          >
            Makes the New Professional
          </p>

          <a
            href="/courses"
            className="btn btn-lg btn-white btn--raised mb-16pt"
          >
            Browse Courses
          </a>
        </div>
      </div>
    </div>
  );
}
