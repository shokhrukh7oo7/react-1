import React, { Component } from "react";
import aboutFirst from "../../assets/image/about-1.png";
import aboutSecond from "../../assets/image/about-2.png";
import aboutThirst from "../../assets/image/about-3.png";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="about-header">
            <p className="aboutHeading">About us</p>
            <p className="aboutParagpraph">
              Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
              neque nisi felis non ultrices massa id egestas quam velit pretium
              nu.
            </p>
          </div>

          <div className="about-start">
            <div className="about-left">
              <img src={aboutFirst} alt="" />
              <div className="info-1">
                <p className="infoHead">1. Schedule online</p>
                <p className="infoTitle">
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
            </div>

            <div className="about-centre">
              <img src={aboutSecond} alt="" />
              <div className="info-1">
                <p className="infoHead">2. Pay online easily</p>
                <p className="infoTitle">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
            </div>

            <div className="about-right">
              <img src={aboutThirst} alt="" />
              <div className="info-1">
                <p className="infoHead">3. Get your house cleaned</p>
                <p className="infoTitle">
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
          </div>

          <div className="btn">
            <button className="about-btn">Get a free quote</button>
            <button className="about-btn-2">Explore services</button>
          </div>
        </div>
      </section>
    );
  }
}
