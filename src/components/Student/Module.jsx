import React from "react";
import Header from "./Header";
import ModuleContent from "./ModuleContent";
import Sidebar from "./sidebar";

export default function Module() {
  return (
    <>
      <Header />
      <div div className="d-flex">
        <Sidebar />
        <ModuleContent />
      </div>
    </>
  );
}
