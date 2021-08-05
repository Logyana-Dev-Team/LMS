import React from "react";

export default function Footer() {
  return (
    <div style={{ fontFamily: "'Exo 2'", backgroundColor: "white" }}>
      <div className="pt-4 pb-4 border-bottom">
        <div className="container text-start">
          <img alt="" width="130" srcset="" /> <br />
          <br />
          <small className="text-muted" style={{ width: "50%" }}>
            True Lessions is a beautifully crafted user interface for modern
            Education Platforms, including Courses & Tutorials, Video Lessons,
            Student and Teacher Dashboard, Curriculum Management, Earnings and
            Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.
          </small>
          <br /> <br />
          <a href="/#">
            <small className="text-muted text-dark">Terms</small>
          </a>
          <a href="/#">
            <small className="text-muted text-dark">Privacy policy</small>
          </a>
          <br /> <br />
          <small className="text-muted">
            Copyright 2021 © All rights reserved.
          </small>
        </div>
      </div>
    </div>
  );
}
