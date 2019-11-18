import React, { Component } from "react";

class Expertise extends Component {
  render() {
    return (
      <div className="expertise container">
        <div className="expertise-content border rounded px-4 py-5 text-center">
          <div className="mb-5">
            <h3>My Expertise</h3>
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
