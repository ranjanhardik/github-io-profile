import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div className="container my-journey">
        <div class="row">
          <div class="col-md-12">
            <div class="main-timeline">
              <div class="timeline">
                <div href="#" class="timeline-content w-100">
                  <span class="timeline-year">2013</span>
                  <div class="timeline-icon">
                    <i class="fa fa-rocket"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Schooling</h3>
                    <p class="description">
                      Finished class 12th from Kendriya Vidyalaya, Sector 31,
                      Chandigarh with 83% marks.
                    </p>
                  </div>
                </div>
              </div>
              <div class="timeline">
                <div href="#" class="timeline-content w-100">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-users"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Graduation</h3>
                    <p class="description">
                      Finished graduation from Chitkara University, Punjab with 7.6 CGPA.
                    </p>
                  </div>
                </div>
              </div>

              <div class="timeline">
                <div href="#" class="timeline-content w-100">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-cog"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">AppDirect</h3>
                    <p class="description">
                      Worked as an intern for 6 months.
                    </p>
                  </div>
                </div>
              </div>
              <div class="timeline">
                <div href="#" class="timeline-content w-100">
                  <span class="timeline-year">2018</span>
                  <div class="timeline-icon">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">Cleartax</h3>
                    <p class="description">
                      Worked as an intern for 4 months.
                    </p>
                  </div>
                </div>
              </div>

              <div class="timeline">
                <div href="#" class="timeline-content">
                  <span class="timeline-year">2017</span>
                  <div class="timeline-icon">
                    <i class="fa fa-web"></i>
                  </div>
                  <div class="content">
                    <h3 class="title">ANGULAR</h3>
                    <p class="description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Alias animi dolor in, maiores natus ipsum dolor sit amet,
                      consectetur adipisicing elit. Alias animi dolor in,
                      maiores natus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timeline;
