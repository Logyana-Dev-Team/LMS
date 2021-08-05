import React from "react";
import Header from "./Header";
import ProfileContent from "./profileContent";
import ProfileSidebar from "./profileSidebar";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-2">
          <ProfileSidebar />
        </div>
        <div className="col-10">
          <ProfileContent />
        </div>
      </div>
    </>
  );
}
