import React from "react";

export default function () {
  return (
    <main className="pageContent">
      {/* <!-- image and tag line --> */}
      <div className="colorBox">
        <div className="row headLiner">
          <div className="col-lg-6 imgContainer">
            <img
              className="imgMe"
              src={require("../../pics/me.jpg")}
              alt="portrait of Shannon"
            />
          </div>
          <div className="col-lg-6 heading">
            <div id="left">
              <h2 className="firstln">
                Chicago based <span className="prob"></span>
              </h2>
            </div>
            <br />
            <div className="secondln">
              <h2>and Full-Stack Engineer</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container index">
        {/* <!-- about me --> */}
        <div className="row">
          <div className="text">
            <h3>About Me</h3>
            <p className="indent">
              Hey! My name is Shannon. I am an avid burger eater and terrible
              driver. I never remember my reusable bags and physically can’t
              walk in a straight line. Now that you know a little about my
              strengths, onto the more important things; above all, I am a
              problem solver. Puzzles, logic games, and algorithm problems, are
              right up my alley. At the core of problem solving is being a
              constant student. I love staying on top of new technologies and
              learning new languages. Finding out why something does or doesn’t
              work is why I love coding.
            </p>
            <p className="indent">
              Like any other indecisive millennial, I wanted to find a career
              that was challenging and fulfilling. Software engineering was the
              perfect place to combine my love for design and creativity with
              problem solving and tech. Now I get to create beautifully crafted
              code to help businesses thrive and call it work (but it’s really
              just fun).
            </p>

            <p className="indent">
              I am a recent graduate of the Full-Stack Graduate Certificate
              program at Northwestern and graduated Summa Cum Laude from Arizona
              State University with a Bachelor of Science in Graphic Information
              Technology.
            </p>
            <p>
              I hope you enjoy this site and getting to know me.{" "}
              <a id="contactLink" href="./contact.html">
                Contact me
              </a>{" "}
              if you want to get in touch!
            </p>
            <p>Thanks!</p>
            <p className="addBtmPadding">-Shan</p>
          </div>
        </div>
      </div>
    </main>
  );
}
