import React from "react";

export default function () {
  return (
    <main className="pageContent">
      <div id="space"></div>
      <div className="col contactIcons">
        <h1>Let's Talk!</h1>
        <a
          href="https://github.com/srsagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="contactImg"
            id="gitimg"
            src={require("../../pics/github.png")}
            alt="Github Logo"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/shannonsagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="contactImg"
            src={require("../../pics/linkedIn.png")}
            alt="Linked In Logo"
          />
        </a>
        <a
          href="mailto:srsagehorn@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="contactImg"
            src={require("../../pics/gmail.png")}
            alt="Gmail Logo"
          />
        </a>
        <a
          href="https://www.facebook.com/shannon.sagehorn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="contactImg"
            src={require("../../pics/fb.png")}
            alt="facebook Logo"
          />
        </a>
        <a
          href="https://www.instagram.com/shannanagins_/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="contactImg"
            src={require("../../pics/insta.png")}
            alt="Instagram logo"
          />
        </a>
      </div>
    </main>
  );
}
