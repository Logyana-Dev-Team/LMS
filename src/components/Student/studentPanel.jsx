import React from "react";
import Dashboard from "./Dasboard";
import Footer from "./Footer";
import Header from "./Header";
import NewsSection from "./NewsSection";

export default function Student() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-10">
          <Dashboard />
          <Footer />
        </div>
        <div className="col-2">
          <NewsSection />
        </div>
      </div>
    </>
  );
}
