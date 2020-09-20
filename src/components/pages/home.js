import React, { Component } from "react";

//components
import NavBar from "../nav-bar/nav-bar";
import { Link } from "react-router-dom";

class Home extends Component {
  componentWillReceiveProps() {
    document.title = "Vidhya Sagar Thakur Front-End Developer Portfolio";
  }

  componentDidMount() {
    document.title = "Vidhya Sagar Thakur Front-End Developer Portfolio";
  }

  render() {
    return (
      <div className="home-page">
        <NavBar page="home" />
        <div className="home-top-container">
          <div className="home-top-left">
            <picture className="home-top-left-image">
              <source
                srcSet="https://scontent.fdel27-1.fna.fbcdn.net/v/t31.0-8/26233784_957291257759033_8133547502870557064_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=2emh-3maOjIAX9s8UD1&_nc_ht=scontent.fdel27-1.fna&oh=367b0dc9a9642f9bf2cf333c192f5b4d&oe=5F8E2640"
                type="image/webp"
              />
              <source
                srcSet="https://scontent.fdel27-1.fna.fbcdn.net/v/t31.0-8/26233784_957291257759033_8133547502870557064_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=2emh-3maOjIAX9s8UD1&_nc_ht=scontent.fdel27-1.fna&oh=367b0dc9a9642f9bf2cf333c192f5b4d&oe=5F8E2640"
                type="image/jpeg"
              />
              <img
                src="https://scontent.fdel27-1.fna.fbcdn.net/v/t31.0-8/26233784_957291257759033_8133547502870557064_o.jpg?_nc_cat=109&_nc_sid=174925&_nc_ohc=2emh-3maOjIAX9s8UD1&_nc_ht=scontent.fdel27-1.fna&oh=367b0dc9a9642f9bf2cf333c192f5b4d&oe=5F8E2640"
                alt="VIDHYA SAGAR THAKUR"
              />
            </picture>
          </div>
          <div className="home-top-right">
            <h2>VIDHYA SAGAR THAKUR</h2>
            <ul>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-user"></i>
                </div>
                <span>Full Stack Developer</span>
              </li>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-location-arrow"></i>
                </div>
                <span>New Delhi, India</span>
              </li>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <span>B.A, Bachelor In Arts</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-text">
            <p>
              I'm VS. A Javascript developer intent on developing the{" "}
              <Link to="/projects">sweetest projects</Link>
            </p>
            <br />
            <p>
              When I'm not programming you can find me in the gym, going for a
              run or binge watching the latest TV Shows. If you are interested
              in getting in touch with me, feel free to{" "}
              <Link to="/contact">drop me a line</Link>.
            </p>
            <div className="home-bottom-buttons">
              <a
                href="https://github.com/vsthakur101"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="button github">
                  <span className="icon is-small">
                    <i className="fab fa-github"></i>
                  </span>
                  Github
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1Iq4F5i6QDnHk1aVpzvtNdflWjBQUvVxq/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="button CV">
                  <span className="icon is-small">
                    <i className="fa fa-arrow-circle-down"></i>
                  </span>
                  Download CV
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
