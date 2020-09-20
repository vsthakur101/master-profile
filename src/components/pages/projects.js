import React, { Component } from "react";

//components
import NavBar from "../nav-bar/nav-bar";

class Projects extends Component {
  componentWillReceiveProps() {
    document.title = "VIDHYA SAGAR THAKUR";
  }

  componentDidMount() {
    document.title =
      "Projects - Vidhya Sagar Thakur Front-End Developer Portfolio";
  }

  render() {
    return (
      <div className="projects-page">
        <NavBar page="projects" />
        <div className="projects-container">
          <h2>Projects</h2>

          <div className="project">
            {/* <picture className="project-image">
                        <source srcSet="" type="image/webp" />
                        <source srcSet="" type="image/jpeg" /> 
                        <img src="" alt=" Logo" />
                    </picture> */}
            <div className="project-text">
              <h3>Developer Connecting</h3>
              <p>
                A platform for developers and students who can ask for help and
                post their coding issues .
              </p>
              <p>
                My role in this project was mainly creating the whole frontend
                and backend part with database connectivity.
              </p>
              <p>
                Please contact me for references for this work, as it is closed
                source.
              </p>
            </div>
            <div className="project-tags">
              <div className="tag tag-html">HTML5</div>
              <div className="tag tag-css">CSS</div>
              <div className="tag tag-js">JS</div>
              <div className="tag tag-reactjs">ReactJS</div>
              <div className="tag tag-expressjs">ExpressJS</div>
              <div className="tag tag-nodejs">Node JS</div>
              <div className="tag tag-mysql">MongoDB</div>
            </div>
          </div>

          <div className="project">
            {/* <picture className="project-image">
              <source srcSet="" type="image/webp" />
              <source srcSet="" type="image/jpeg" />
              <img src="" alt="" />
            </picture> */}
            <div className="project-text">
              <h3>COVID 19 TRACKER</h3>
              <p>
                COVID 19 TRACKER web app can help to monitor corana virus cases
                in all over world through graph.
              </p>
            </div>
            <div className="project-tags">
              <div className="tag tag-html">HTML5</div>
              <div className="tag tag-css">CSS</div>
              <div className="tag tag-js">JS</div>
              <div className="tag tag-ruby-on-rails">ReactJS</div>
            </div>
            <div className="project-links">
              <a
                className="project-button"
                href="https://corona-virus-update-19.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="fa fa-link"></span> View Website
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-text">
              <h3>Weather App</h3>
              <p>
                This app will provide you weather information according to your
                location. This is a progressive web app. so you can use it as
                mobile application.
              </p>
            </div>
            <div className="project-tags">
              <div className="tag tag-html">HTML5</div>
              <div className="tag tag-css">CSS</div>
              <div className="tag tag-bootstrap">Bootstrap</div>
              <div className="tag tag-js">JS</div>
              <div className="tag tag-reactjs">React JS</div>
            </div>
          </div>

          <div className="project">
            <div className="project-text">
              <h3>Dost Education</h3>
              <p>
                A NGO Website re-designed by me.it is fully responsive and
                attractive wesite.
              </p>
            </div>
            <div className="project-tags">
              <div className="tag tag-html">HTML5</div>
              <div className="tag tag-css">CSS</div>
              <div className="tag tag-js">JS</div>
              <div className="tag tag-mysql">Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
      //   </div>
      //   </div>
    );
  }
}

export default Projects;
