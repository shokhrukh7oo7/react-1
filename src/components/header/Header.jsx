import React from "react";
import navLogo from "../../assets/image/nav-logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <section id={style.nav}>
        <div className="container">
          <div className={style.navLeftRight}>
            <div className={style.navLeft}>
              <img src={navLogo} alt="" />
              <ul className={style.navLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Articles</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className={style.navRight}>
              <p className={style.navParagraph}>Cart(0)</p>
              <button className={style.nav_btn}>Get a free quote</button>
            </div>
            <div className={style.burger}>
              <div className={style.line - 1}></div>
              <div className={style.line - 2}></div>
              <div className={style.line - 3}></div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
