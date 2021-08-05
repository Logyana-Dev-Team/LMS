import React from "react";
import GradesContent from "./GradesContent";
import Header from "./Header";
import Sidebar from "./sidebar";

export default function Grades() {
  return (
    <>
      <Header />
      <div div className="d-flex">
        <Sidebar />
        <GradesContent />
      </div>
    </>
  );
}
