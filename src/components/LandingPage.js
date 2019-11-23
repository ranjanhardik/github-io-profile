import React, { Component } from "react";
import ProfileImage from "../assets/images/profile_image.svg";
import LandingImage from "../assets/images/landing_image.svg";

class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page" className="container">
        <div className="landing-page d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-4 title text-center">
            H
            <div class="box">
              <p class="letter bounce">.</p>
              <p class="letter">ı</p>
            </div>
            , I am Asheesh. N
            <div class="box">
              <p class="letter bounce">.</p>
              <p class="letter">ı</p>
            </div>
            ce to meet you.
          </h1>
          <p className="sub-title">I code beautiful looking websites.</p>
          <img src={LandingImage} alt="" className="w-100 h-auto"></img>
        </div>
      </div>
    );
  }
}

export default LandingPage;
