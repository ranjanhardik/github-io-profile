import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 300;
      if (isTop !== true) {
        this.setState({
          scrolled: true,
        });
      } else {
        this.setState({
          scrolled: false,
        });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg p-3 navigation ${
          this.state.scrolled ? "scrolled" : "not-scrolled"
        }`}
      >
        <a className="navbar-brand font-weight-bold" href="/">
          Asheesh Kumar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarAsheesh"
          aria-controls="navbarAsheesh"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="toggle-icon">
            <div className="toggle-icon-one"></div>
            <div className="toggle-icon-two"></div>
            <div className="toggle-icon-three"></div>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarAsheesh">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item px-3">
              <a className="nav-link" href="#landing-page">
                Introduction
              </a>
            </li>
            {/* <li className="nav-item px-3">
              <a className="nav-link" href="#about-me">
                About
              </a>
            </li> */}
            <li className="nav-item px-3">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
