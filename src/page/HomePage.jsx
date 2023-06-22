import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import Services from "../components/services/Services";
import Articles from "../components/articles/Articles";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <About/>
        <Services />
        <Articles />
        <Contact />
      </main>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;
