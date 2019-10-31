import React, { Component } from "react";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      if (isTop !== true) {
        this.setState({
          scrolled: true
        });
      } else {
        this.setState({
          scrolled: false
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
        <a className="navbar-brand font-weight-bold" href="#">
          Asheesh Kumar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active px-3">
              <a className="nav-link" href="#">
                Introduction
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
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
