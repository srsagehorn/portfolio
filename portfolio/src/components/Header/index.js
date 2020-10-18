import React from "react";

export default function () {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="logoName navbar-text">
        <a className="navbar-brand" href="/">
          <img
            className="navImg"
            src={require("../../pics/logo.png")}
            alt="SS logo"
          />
        </a>
        <a href="/" className="name">
          Shannon Sagehorn
        </a>
      </div>
      <div className="navBtns navbar-text ml-auto">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon ">
            <img src={require("../../pics/menu.png")} alt="" className="menu" />
          </span>
        </button>
        <div className="toggler-example collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio/port">
                Portfolio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio/res">
                Resume <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio/cont">
                Contact Me <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
