import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";

function MainContainer({ children }) {
  return (
    <div className="main-container " id="container">
      <div className="overlay"></div>
      <div className="search-overlay"></div>
      <SideBar /> 
      <div id="content" className="main-content">
        <div className="layout-px-spacing">
          <div className="middle-content container-xxl p-0">
            <div className="row layout-top-spacing">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;
