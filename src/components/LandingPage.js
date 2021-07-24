import React, { Component } from "react";
import LandingImage from "../assets/images/landing_image.png";

class LandingPage extends Component {
  render() {
    return (
      <div id="landing-page" className="landing-page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 text-white intro">
              <h1 className="mb-4 title">Hey! I'm Asheesh</h1>
              <p className="description">I am a frontend engineer based in Bangalore. I like to code things from scratch and enjoy bringing ideas to life in the browser.</p>
            </div>
            <div className="col-12 col-md-6">
              <img src={LandingImage} alt="" className="w-100"></img>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,176C80,192,160,224,240,240C320,256,400,256,480,229.3C560,203,640,149,720,149.3C800,149,880,203,960,213.3C1040,224,1120,192,1200,176C1280,160,1360,160,1400,160L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
    );
  }
}

export default LandingPage;
