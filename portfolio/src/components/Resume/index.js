import React from "react";

export default function () {
  return (
    <main className="pageContent">
      {/* <!-- resume --> */}
      <div className="colorBlock">
        <span className="title">RESUME</span>
        <a href="downloads/res.pdf" download rel="noopener" target="_blank">
          <button type="button" className="btn btn-outline-secondary" id="download">
            PDF<i className="fa fa-download"></i>
          </button>
        </a>
      </div>
      <div className="container resumeContainer">
        <div className="row">
          {/* <div className="col-md-2">
        <div className="vl"></div>
      </div> --> */}
          <div className="col-md-12 resume">
            <div className="box">
              <div className="h6">EDUCATION</div>
              {/* <!-- ASU --> */}
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/asu.png"
                    alt="Arizona State University Logo"
                  />
                </div>
                <div className="col-md-10">
                  {/* <!-- <p className="dates">
              August 2019 - December 2020
            </p> --> */}
                  <p className="eduHead">
                    Arizona State University{" "}
                    <span className="dates">August 2019 - December 2020</span>
                  </p>
                  <p className="eduHead2">
                    Bachelor of Science in Graphic Information Technology
                  </p>
                  <p className="info">Primary Focus - Front-End Web Design</p>
                  <p className="info">Secondary Focus - Communication Studies</p>
                  <p className="info">GPA - 3.91</p>
                  <span className="cskill">HTML/CSS</span>
                  <span className="cskill">JavaScript</span>
                  <span className="gdskill">Photoshop</span>
                  <span className="gdskill">Illusttrator</span>
                  <span className="gdskill">After Effects</span>
                  <span className="gdskill">Premier Pro</span>
                  <span className="gdskill">Light Room</span>
                </div>
              </div>
              {/* <!-- northwestern --> */}
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/nu.png"
                    alt="Northwestern University Logo"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">
                    Northwestern University{" "}
                    <span className="dates">April 2020 - October 2020</span>
                  </p>
                  <p className="eduHead2">
                    Graduate Certificate - Full Stack Development
                  </p>
                  <span className="cskill">Python</span>
                  <span className="cskill">Java</span>
                  <span className="cskill">JavaScript</span>
                  <span className="cskill">jQuery</span>
                  <span className="cskill">Ajax/APIs</span>
                  <span className="cskill">JSON</span>
                  <span className="cskill">Bootstrap</span>
                  <span className="cskill">Visual Studio</span>
                  <span className="cskill">Git/GitHub</span>
                  <span className="cskill">MongoDB</span>
                  <span className="cskill">HTML/CSS</span>
                  <span className="cskill">Node.js</span>
                  <span className="cskill">Jest</span>
                  <span className="cskill">MySQL</span>
                  <span className="cskill">React</span>
                </div>
              </div>
              {/* <!-- Nebraska --> */}
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/nebraska.png"
                    alt="University of Nebraska - Lincoln"
                  />
                </div>

                <div className="col-md-10 neb">
                  <p className="eduHead">
                    University of Nebraska - Lincoln{" "}
                    <span className="dates">August 2017 - May 2019</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="h6">INVOLVEMENT & AWARDS</div>
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/asu.png"
                    alt="Arizona State University Logo"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">
                    Dean's List{" "}
                    <span className="dates">August 2019 - December 2020</span>
                  </p>
                  <p className="eduHead2">Arizona State University</p>
                </div>
              </div>
              {/* <!-- AKPsi --> */}
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/akpsi.png"
                    alt="Alpha Kappa Psi logo"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">Alpha Kappa Psi - Zeta Chapter Alumni</p>
                  <p className="eduHead2">Professional Business Fraternity</p>
                  <p className="info">Pledge Educator 2017-2019</p>
                  <p className="info">Chairman of Service 2017-2018</p>
                </div>
              </div>
              {/* <!-- Kappa Delta --> */}
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/kd.png"
                    alt="Kappa Delta logo"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">Kappa Delta - Pi Chapter Alumni</p>
                </div>
              </div>
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/nebraska.png"
                    alt="University of Nebraska - Lincoln"
                  />
                </div>

                <div className="col-md-10">
                  <p className="eduHead">
                    Nomine - Undergraduate Excellence in Communication Award{" "}
                    <span className="dates">2018</span>
                  </p>
                  <p className="eduHead2">University of Nebraska - Lincoln</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="h6">WORK EXPERIENCE</div>
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/vmm.png"
                    alt="Vision Maker Media Logo"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">
                    Vision Maker Media{" "}
                    <span className="dates">November 2017 - July 2018</span>
                  </p>
                  <p className="eduHead2">Business Development Intern</p>
                  <span className="skill">FileMaker Pro</span>
                  <span className="skill">Salesforce</span>
                  <span className="skill">Hootsuite</span>
                  <span className="skill">Social Media</span>
                  <span className="skill">Non-Profit</span>
                </div>
              </div>
              <div className="row resBlock">
                <div className="col-md-2 resIcon">
                  <img
                    className="resPic"
                    src="pics/nebraska.png"
                    alt="University of Nebraska - Lincoln"
                  />
                </div>
                <div className="col-md-10">
                  <p className="eduHead">
                    University of Nebraska - Communications Department
                    <span className="dates">January 2018 - May 2018</span>
                  </p>
                  <p className="eduHead2">Research Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
