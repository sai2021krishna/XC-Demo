import React, { useEffect, useState } from "react";
import "../CSS/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="rightSide">
        <img
          className="nav__logo"
          src={require("../../Media/Images/xc.png")}
          alt="XC Logo"
        ></img>
        {/*  <div className="navOptions">
          <button>hello</button>
          <button>hello2</button>
          <button>hello3</button>
        </div> */}
      </div>

      <div className="loginButtonDiv">
        <button className="loginButton">Login</button>
      </div>
    </div>
  );
}

export default Nav;
