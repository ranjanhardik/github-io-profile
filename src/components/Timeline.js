import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div className="container my-journey test">
        <div className="text-center mb-5 my-journey--heading">
          <h3>Timeline</h3>
          <p>My journey so far...</p>
        </div>
        <section class="timeline">
          <div class="timeline-img"></div>
          <div class="container">
            <div class="timeline-item">
              <div class="timeline-content js--fadeInRight">
                <h4>Frontend Engineer</h4>
                <h6>Flock(helloflock.com)</h6>
                <p>July 2018 - Present</p>
                <p>Flock is an all-in-one software platform to manage HR, Benefits, and Compliance.</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInLeft">
                <h4>Frontend Intern</h4>
                <h6>Cleartax</h6>
                <p>Feb 2018 - June 2018</p>
                <p>
                  Cleartax is a fintech company helping people and businesses with tax, compliance and mutual fund investments.
                </p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInRight">
                <h4>Engineering Intern</h4>
                <h6>AppDirect</h6>
                <p>Feb 2017 - Jul 2017</p>
                <p>AppDirect provides the only end-to-end cloud commerce platform for succeeding in the digital economy.</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content timeline-card js--fadeInLeft">
                <h4>Chitkara University</h4>
                <h6>Bachelor's degree</h6>
                <p>Computer Science Engineering, 7.86/10</p>
                <p className="mb-0">2013-2017</p>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-img"></div>
              <div class="timeline-content js--fadeInRight">
                <h4>K.V. Sector-31, Chandigarh</h4>
                <h6>High School</h6>
                <p>Science, 83.4%</p>
                <p className="mb-0">2012-2013</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
