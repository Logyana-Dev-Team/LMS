import React from "react";

export default function Header() {
  return (
    // Header
    <div
      id="header"
      class="mdk-header js-mdk-header mb-0"
      data-fixed
      data-effects=""
    >
      <div class="mdk-header__content">
        <div
          class="navbar navbar-expand navbar-light navbar-shadow"
          id="default-navbar"
          data-primary
        >
          <a href="/student" className="navbar-brand mr-16pt">
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

          <ul className="nav navbar-nav ml-auto mr-0">
            <li className="nav-item">
              <a href="/student" className="btn btn-outline-primary">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/signup"
                className="btn btn-outline-primary"
                style={{ height: "100%", fontSize: "17px" }}
              >
                <i class="far fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <img
                src="images/256_michael-dam-258165-unsplash.jpg"
                class="rounded"
                width="35"
                alt="..."
              />
              <div className="ml-2">
                <div class="dropdown">
                  <a
                    href="#"
                    class="nav-link align-items-center link-dark dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ height: 15 }}
                  >
                    <strong>Emma Tylor</strong>
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
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-shopping-cart me-2"></i> My Purchase
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-file-alt me-3"></i> My Certificates
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/help">
                        <i class="fas fa-question-circle me-2"></i> Help Center
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-sign-out-alt me-2"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
