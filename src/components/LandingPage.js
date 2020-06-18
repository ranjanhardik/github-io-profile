import React, { Component } from "react";
import LandingImage from "../assets/images/landing_image.svg";

class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page" className="container">
        <div className="landing-page d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-5 title text-center">
            H
            <div className="box">
              <p className="letter bounce">.</p>
              <p className="letter">ı</p>
            </div>
            , I am Asheesh.
            <div className="d-inline-block ml-md-2">
              N
              <div className="box">
                <p className="letter bounce">.</p>
                <p className="letter">ı</p>
              </div>
              ce to meet you.
            </div>
          </h1>
          <img src={LandingImage} alt="" className="w-100 h-auto"></img>
        </div>
      </div>
    );
  }
}

export default LandingPage;
