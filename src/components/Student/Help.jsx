import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HelpContent from "./HelpContent";
import ProfileSidebar from "./profileSidebar";

export default function Help() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-2">
          <ProfileSidebar />
        </div>
        <div className="col-10">
          <HelpContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
