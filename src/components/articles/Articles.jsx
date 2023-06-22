import React, { Component } from "react";
import ArticleLeft from "../../assets/image/article-left.png";
import ArticleRight from "../../assets/image/artice-right.png";
import "./Articles.css";

export default class Articles extends Component {
  render() {
    return (
      <section id="article">
        <div className="container">
          <div className="article-start">
            <p className="article-head">Articles & resources</p>
            <div className="btn">
              <button className="article-btn">Get a free quote</button>
              <button className="article-btn-2">Browse articles</button>
            </div>
          </div>

          <div className="article-left-right">
            <div className="article-left">
              <img src={ArticleLeft} alt="" />
            </div>
            <div className="article-left-text">
              <p className="art-para">
                8 best vacuum cleaners to clean any mess for your home in 2022
              </p>
              <p className="art-para-2">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="cub">
                <p className="art-data">Jan 28, 2022</p>
                <div className="cubick"></div>
              </div>
            </div>
            <div className="article-right">
              <img src={ArticleRight} alt="" />
            </div>
            <div className="article-right-text">
              <p className="art-para3">
                How to properly disinfect your phone and other electronics
              </p>
              <p className="art-para-1">
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="cub">
                <p className="art-data1">Feb 1, 2022</p>
                <div className="cubick1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
