import React, { Component } from "react";

//components
import NavBar from "../nav-bar/nav-bar";
import { Link } from "react-router-dom";

class Experience extends Component {
  componentWillReceiveProps() {
    document.title =
      "Experience - Vidhya Sagar Thakur Front-End Developer Portfolio";
  }

  componentDidMount() {
    document.title =
      "Experience - Vidhya Sagar Thakur Front-End Developer Portfolio";
  }

  render() {
    return (
      <div className="experience-page">
        <NavBar page="experience" />
        <div className="experience-container">
          <h2>Experience</h2>

          <div className="experience-block">
            <a
              href="https://www.codingelements.com/"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <div className="experience-block-info">
              <h3>Full Stack Developer</h3>
              <p className="italic">Jan 2020 - Present</p>
            </div>
            <p className="experience-block-text">
              At Coding Elements I create Some cool websites with unique
              requirements, maintain internal Node.js projects using{" "}
              <a href="https://reactjs.org/">ReactJs</a> and develop web
              applications with{" "}
              <a href="https://facebook.github.io/react/">React JS.</a>
            </p>
            <div className="project-tags">
              <div className="tag tag-html">HTML5</div>
              <div className="tag tag-scss">CSS</div>
              <div className="tag tag-js">JS</div>
              <div className="tag tag-php">NODE</div>
              <div className="tag tag-wordpress">ReactJs</div>
              <div className="tag tag-laravel">Express</div>
              <div className="tag tag-asgard">MaterialUI</div>
              <div className="tag tag-react">MongoDB</div>
            </div>
          </div>

          <div className="university-info">
            <Link to="/education">~ Graduated Delhi University 2020 ~</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
