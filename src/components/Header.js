import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="home-wrap d-flex">
        <header className="py-4">
          <div className="header-position d-flex flex-column justify-content-between position-fixed">
            <h1 className="text-right pr-3 mb-0 pb-4">AK</h1>
            <nav>
              <ul className="list-unstyled text-right pr-3 mb-0">
                <li className="pb-3">
                  <a href="#about">About</a>
                </li>
                <li className="pb-3">
                  <a href="#experience">Experience</a>
                </li>
                <li className="pb-3">
                  <a href="#projects">Projects</a>
                </li>
                <li className="">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <a
              href="mailto:asheesh.kumar3496@gmail.com"
              className="d-block text-right pr-3"
            >
              Email Me
            </a>
          </div>
        </header>

        <div className="home-sections">
          <div className="section"></div>
        </div>
      </div>
    );
  }
}

export default Header;
