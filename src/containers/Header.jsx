import React, { useEffect, useState } from "react";
import { authAxios } from "../App";
import { userId } from "../App";

export default function Header() {
  const [user, setUser] = useState("");

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    window.location = "/";
  };

  useEffect(() => {
    authAxios
      .get(`/api/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
      });
  }, []);

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
          class="navbar navbar-expand navbar-light navbar-shadow bg-white"
          id="default-navbar"
          data-primary
        >
          <a href="/" className="navbar-brand mr-16pt">
            <img
              src="images/logo-black@2x.png"
              alt="logo"
              className="img-fluid"
              style={{ width: 200 }}
            />
          </a>

          <span
            style={{ borderLeft: "1px solid #bababa", height: "30px" }}
          ></span>

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
            <li className="nav-item dropdown">
              <a href="/blog" className="nav-link">
                Blog
              </a>
            </li>
          </ul>

          <ul className="nav navbar-nav ml-auto mr-0">
            {user ? (
              <li className="nav-item">
                <img
                  src="images/256_rsz_nicolas-horn-689011-unsplash.jpg"
                  class="rounded"
                  width="35"
                  alt="..."
                />
                <div className="ml-2">
                  <div class="dropdown">
                    <a
                      href="#dropdown"
                      class="nav-link align-items-center link-info dropdown-toggle m-0 p-0"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ height: 15 }}
                    >
                      <strong style={{ height: 15 }}>{user.name}</strong>
                    </a>
                    <small>Student</small>
                    <ul
                      class="dropdown-menu"
                      style={{ left: "-50px" }}
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="/profile">
                          <i class="fas fa-user me-2"></i> Profile
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#dropdown-item">
                          <i class="fas fa-shopping-cart me-2"></i> My Purchase
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#dropdown-item">
                          <i class="fas fa-file-alt me-3"></i> My Certificates
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/help">
                          <i class="fas fa-question-circle me-2"></i> Help
                          Center
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={handleLogOut}
                          href="#dropdown-item"
                        >
                          <i class="fas fa-sign-out-alt me-2"></i> Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <>
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
                    className="btn btn-outline-info"
                    style={{ color: "" }}
                  >
                    Get Started
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
