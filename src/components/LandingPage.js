import React, { Component } from "react";
import ProfileImage from "../assets/images/profile_image.svg";
import LandingImage from "../assets/images/landing_image.svg";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="landing-page d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-4 title text-center">Hi, I am Asheesh. Nice to meet you.</h1>
          <p className="sub-title">I code beautiful looking websites.</p>
          <img src={LandingImage} alt="" className="w-100 h-auto"></img>
        </div>
      </div>
    );
  }
}

export default LandingPage;
