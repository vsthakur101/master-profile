import React, { Component } from "react";

//components
import NavBar from "../nav-bar/nav-bar";

class Education extends Component {
  componentWillReceiveProps() {
    document.title =
      "Education - VIDHYA SAGAR THAKUR Front-End Developer Portfolio";
  }

  componentDidMount() {
    document.title =
      "Education - VIDHYA SAGAR THAKUR Front-End Developer Portfolio";
  }

  render() {
    return (
      <div className="education-page">
        <NavBar page="education" />
        <div className="education-container">
          <h2>Education</h2>
          <p className="education-explanation">
            Graduated from{" "}
            <a
              href="https://sol.du.ac.in/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Delhi University
            </a>{" "}
            with a Bachelor of Arts, majoring in B.A Programme. My relevant
            university courses are shown below.
          </p>

          <h4>2016-2017</h4>
          <ul>
            <li>Paper 1 - ENA - ENGLISH-A</li>
            <li>Paper 2 - HNA - HINDI-A</li>
            <li>Paper 3 - HS1 - HISTORY OF INDIA UPTO 8TH CENTURY A.D.</li>
            <li>Paper 4 - PS - POLITICAL SCIENCE</li>
          </ul>
          <h4>2017-2018</h4>
          <ul>
            <li>Paper 1 - ENA - ENGLISH - A</li>
            <li>Paper 2 - LLC - LANGUAGE,LITERATURE AND CULTURE</li>
            <li>
              Paper 3 - HS3 - HISTORY OF INDIA 8TH CENTURY TO 18TH CENTURY
            </li>
            <li>Paper 4 - PS - POLITICAL SCIENCE</li>
          </ul>
          <h4>2018-2019</h4>
          <ul>
            <li>Paper 1 - HNA - HINDI-A</li>
            <li>Paper 2 - ESB - ENTREPRENEARSHIP AND SMALL BUSINESS</li>
            <li>Paper 3 - HS6 - ISSUES IN WORLD HISTORY: THE 20TH CENTURY</li>
            <li>Paper 4 - PS - POLITICAL SCIENCE</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Education;
