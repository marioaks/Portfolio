import React, { Component } from "react";
import { Helmet } from "react-helmet";
import About from "Components/About/About";
import Constants from "Config/constants";

class AboutPage extends Component {
  render() {
    return (
      <>
        <div className="about-container">
          <Helmet title={`About | ${Constants.siteTitle}`} />
          <About />
        </div>
      </>
    );
  }
}

export default AboutPage;
