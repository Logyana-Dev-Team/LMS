import React from "react";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import DesignCourses from "./designCourses";
import Development from "./developemntCourses";
import Polular from "./popularCourses";

export default function Courses() {
  return (
    <>
      <Header />
      <div
        data-push
        data-responsive-width="992px"
        class="mdk-drawer-layout js-mdk-drawer-layout"
      >
        <div class="mdk-drawer-layout__content">
          <div class="page-section">
            <div class="container page__container">
              <Polular />
              <Development />
              <DesignCourses />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
