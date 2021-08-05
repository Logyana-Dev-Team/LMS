import React from "react";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Content from "./homeContent";

export default function Home() {
  return (
    <div className="mdk-header-layout js-mdk-header-layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
