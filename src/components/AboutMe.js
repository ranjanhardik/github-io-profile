import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me" className="about-me">
        <div className="container about-me-content">
          <h3 className="text-center about-me-heading mb-3">About me</h3>
          <p className="about-me-desc text-center">
            I like to code things from scratch and enjoy bringing ideas to life in the browser.
          </p>
          <p className="about-me-desc mb-0 text-center">
            I am an experienced Frontend Engineer with a demonstrated history of working in the computer software
            industry. Skilled in HTML, CSS, JS, SCSS, ReactJS, VueJS, Github. Strong engineering professional with a
            Bachelor's degree focused in Computer Science Engineering from Chitkara University.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
