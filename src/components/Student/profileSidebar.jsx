import React from "react";

export default function ProfileSidebar() {
  return (
    <>
      <div class="sidebar-sticky" style={{ width: "280px" }}>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a
              href="/profile"
              class="nav-link align-items-center active"
              aria-current="page"
            >
              <i class="fas fa-user me-2"></i> Profile
            </a>
          </li>
          <li>
            <a href="#" class="nav-link align-items-center link-dark">
              <i class="fas fa-shopping-cart me-2"></i> My Purchase
            </a>
          </li>
          <li>
            <a href="#" class="nav-link align-items-center link-dark">
              <i class="fas fa-file-alt me-3"></i> My Certificates
            </a>
          </li>
          <li>
            <a href="/help" class="nav-link align-items-center link-dark">
              <i class="fas fa-question-circle me-2"></i> Help Center
            </a>
          </li>
          <li>
            <a href="#" class="nav-link align-items-center link-dark">
              <i class="fas fa-sign-out-alt me-2"></i> Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
