// import { useEffect } from "react";
import React, { useState } from "react";
import "../css/header.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <header>
      <Fade top>
        <nav>
          <div className="login">
            <img className="logo" src="/images/logo.svg" alt="logo" />
            <div className="toggle" onClick={showMenu}>
              <span className="bars"></span>
            </div>
          </div>
          {/* <Zoom when={show}> */}
          <div className={`${show ? "menu active" : "menu"}`}>
            <ul className="items">
              <li className="item">Features</li>
              <li className="item">Pricing</li>
              <li className="item">Resources</li>
            </ul>
            <ul className="sign-up">
              <li className="item">Login</li>
              <button className="button">Sign Up</button>
            </ul>
          </div>
          {/* </Zoom> */}
        </nav>
      </Fade>
      <div className="deets">
        <Fade right>
          <img
            className="illustrator"
            src="/images/illustration-working.svg"
            alt="illustrator"
          />
        </Fade>
        <div className="message">
          <Zoom>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </Zoom>
        </div>
      </div>
    </header>
  );
};

export default Header;
