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
      <img
        className="nav__logo"
        src={require("../../Media/Images/xc.png")}
      ></img>
      <button className="button">Login</button>
    </div>
  );
}

export default Nav;
