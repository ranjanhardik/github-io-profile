import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="contact">
        <div className="container">
          <blockquote className="text-center">
            <p className="quotation mb-5">Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.</p>
          </blockquote>
          <div className="social-links text-center pb-5">
            <a className="mx-3" href="https://twitter.com/AsheeshKumar34" aria-label="twitter" target="_blank" rel="noopener noreferrer">
              <span className="icon-container p-2 d-inline-block rounded-circle">
                <i className="fa fa-twitter fa-lg"></i>
              </span>
            </a>
            <a className="mx-3" href="https://www.facebook.com/asheesh.kumar.9465" aria-label="facebook" target="_blank" rel="noopener noreferrer">
              <span className="icon-container p-2 d-inline-block rounded-circle">
                <i className="fa fa-facebook fa-lg"></i>
              </span>
            </a>
            <a className="mx-3" href="https://www.linkedin.com/in/theasheeshkumar/" aria-label="linkedin" target="_blank" rel="noopener noreferrer">
              <span className="icon-container p-2 d-inline-block rounded-circle">
                <i className="fa fa-linkedin fa-lg"></i>
              </span>
            </a>
            <a className="mx-3" href="https://www.instagram.com/asheeshkumar34/" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              <span className="icon-container p-2 d-inline-block rounded-circle">
                <i className="fa fa-instagram fa-lg"></i>
              </span>
            </a>
            <a className="mx-3 d-inline-block mt-4 mt-md-0" href="mailto: asheesh.kumar3496@gmail.com" aria-label="email" target="_blank" rel="noopener noreferrer">
              <span className="icon-container p-2 d-inline-block rounded-circle">
                <i className="fa fa-envelope fa-lg"></i>
              </span>
            </a>
          </div>
          <div className="copyright text-center">
            <span className="d-block">Handcrafted by me over a cup of tea</span>
            <span className="d-inline-block">Copyright &copy; 2021</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
