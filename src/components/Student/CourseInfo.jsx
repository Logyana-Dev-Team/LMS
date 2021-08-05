import React from "react";
import CourseInfoContent from "./CourseInfoContent";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function CourseInfo() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <CourseInfoContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
