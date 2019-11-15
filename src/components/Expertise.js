import React, { Component } from "react";

class Expertise extends Component {
  render() {
    return (
      <div className="expertise container">
        <div className="expertise-content border rounded p-4 text-center">
          <div className="mb-5">
            <h3>Frontend Engineer</h3>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <p className="sub-heading">Languages I speak</p>
              <p>HTML</p>
              <p>CSS(Scss, Bootstrap)</p>
              <p>Javascript</p>
              <p>React.js</p>
              <p>Vue.js</p>
            </div>
            <div className="col-12 col-md-6">
              <p className="sub-heading">Dev Tools</p>
              <p>VSCode</p>
              <p>Iterm(Terminal)</p>
              <p>Github</p>
              <p>Zeplin</p>
              <p>Adobe Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Expertise;
