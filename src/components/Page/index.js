import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Page.css";

const Page = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <Header />
      <div className="child-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
