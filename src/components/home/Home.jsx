import React, { Component } from "react";
import HomeLeft from "../../assets/image/home-left.png";
import contactPhoneLog from "../../assets/image/contact-phone_logo.svg";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section id="home">
        <div className="container">
          <div className="home-left_right">
            <div className="home-left">
              <h1 className="heading">Quality cleaning for your home</h1>
              <p className="paragraph">
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="home-btn-contact">
                <button className="home-btn">Get a free quote</button>
                <div className="home-contact">
                  <img src={contactPhoneLog} alt="logo" />
                  <div className="home-number">
                    <h6>Call us now</h6>
                    <h3>(414) 567 - 2109</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-right">
              <img src={HomeLeft} alt="img" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
