import React, { Component } from "react";
import contactPhoneLog from "../../assets/image/contact-phone_logo.svg";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="contact-left__right">
            <div className="contact-left">
              <h1 className="contact-heading">Contact Us</h1>
              <p className="contact-paragraph">
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan
                pellentesque lacus duis pharetra eutortor.
              </p>

              <div className="contact-logo_number">
                <img src={contactPhoneLog} alt="" />
                <div className="contact-number">
                  <h6>Call us now</h6>
                  <h3>(414) 567 - 2109</h3>
                </div>
              </div>

              <h4>Not convinced yet?</h4>
              <p className="contact-paragraph">
                Massa bibendum consectetur maurisid gravida purus, dolor dui
                amet morbi non nunc urna purus diam.
              </p>

              <button className="contact-btn">Browse our packages</button>
            </div>

            <div className="contact-right">
              <div className="contact-form">
                <div className="full-name">
                  <span className="name">Full name</span>
                  <input type="text" required />
                </div>
                <div className="phone-number">
                  <span className="number">Phone number</span>
                  <input type="tel" required />
                </div>
              </div>

              <div className="contact-form">
                <div className="addressess">
                  <span className="address">Address</span>
                  <input type="text" required />
                </div>
                <div className="emiles">
                  <span className="email">Email</span>
                  <input type="email" required />
                </div>
              </div>

              <div className="contact-form">
                <div className="service-1-1">
                  <span className="service-1">Requested service</span>
                  <input type="text" required />
                </div>
                <div className="service-2-2">
                  <span className="service-2">Day of service</span>
                  <input type="text" required />
                </div>
              </div>

              <div className="contact-form add">
                <div className="add-a-note">
                  <span className="add-note">Add a note</span>
                  <input className="add-form" type="text" required />
                </div>
              </div>
              <button className="form-btn">Submit message</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
