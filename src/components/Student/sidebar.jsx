import React from "react";

export default function Sidebar() {
  return (
    <>
      <div class="sidebar-sticky p-3" style={{ width: "280px" }}>
        <small className="mb-2">Dashboard</small>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a
              href="/module"
              class="nav-link align-items-center active"
              aria-current="page"
            >
              <i class="fas fa-list me-2"></i> Overview
            </a>
          </li>
          <li>
            <div class="dropdown">
              <a
                href="#"
                class="nav-link align-items-center link-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-pen-alt me-2"></i> Chapters
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 3
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 4
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 5
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 6
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 7
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 9
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Chapter 10
                  </a>
                </li>
              </ul>
            </div>
            {/* <a href="#" class="nav-link align-items-center link-dark">
              <i class="fas fa-pen-alt me-2"></i> Chapters
            </a> */}
          </li>
          <li>
            <a href="/grades" class="nav-link align-items-center link-dark">
              <i class="fas fa-award me-3"></i> Grades
            </a>
          </li>
          <li>
            <a href="/courseInfo" class="nav-link align-items-center link-dark">
              <i class="fas fa-info-circle me-2"></i> Course Info
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
