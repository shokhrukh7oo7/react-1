import React, { Component } from "react";
import serviceFirst from "../../assets/image/sevice-1.png";
import serviceSecond from "../../assets/image/service-2.png";
import serviceThird from "../../assets/image/service-3.png";
import bcg from "../../assets/image/bcg-ser.png";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="service-head">
            <p className="service-heading">Our Services</p>
            <button className="service-btn">Get a free quote</button>
          </div>

          <div className="service-start">
            <div className="service-left">
              <img src={serviceFirst} alt="" />
              <div className="info-1">
                <p className="infoHead">1. Schedule online</p>
                <p className="infoTitle">
                  Sagittis nibh scelerisque vitae egetolment vulputate sem
                  elementum sed n.
                </p>
              </div>
            </div>

            <div className="service-centre">
              <img src={serviceSecond} alt="" />
              <div className="info-1">
                <p className="infoHead">2. Pay online easily</p>
                <p className="infoTitle">
                  Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida
                  amet at nunc.
                </p>
              </div>
            </div>

            <div className="service-right">
              <img src={serviceThird} alt="" />
              <div className="info-1">
                <p className="infoHead">3. Get your house cleaned</p>
                <p className="infoTitle">
                  Nunc maecenas sollicitudin metus tellus mattis sed porttitor
                  cursus eleifend.
                </p>
              </div>
            </div>
          </div>
          <section id="bcg">
            <div className="bcg-left-right">
              <div className="bcg-left">
                <img src={bcg} alt="" />
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
