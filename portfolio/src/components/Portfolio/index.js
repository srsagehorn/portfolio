import React from "react";

export default function () {
  return (
    <main className="pageContent">
      <div className="colorBlock">
        <span className="title">PORTFOLIO</span>
      </div>
      <div className="portContainer">
        <div className="container">
          {/* <!-- syligen --> */}
          <div className="portfolioCard">
            <div className="card">
              <div className="card-body portCard">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="img-square-wrapper">
                      <div
                        id="carousel-algo"
                        className="carousel slide"
                        data-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/code.png")}
                              alt="screenshot of codewars account stats"
                            />
                            <div className="carousel-item">
                              <img
                                className="d-block w-100 img-fluid"
                                src={require("../../pics/codeExample.jpg")}
                                alt="Example of a github repo entry"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                className="d-block w-100 img-fluid"
                                src={require("../../pics/codewars.jpg")}
                                alt="Shannon's code wars account"
                              />
                            </div>
                          </div>
                          <a
                            className="carousel-control-prev"
                            href="#carousel-algo"
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carousel-algo"
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <h5 className="card-title">SyliGen</h5>
                    <p className="card-text">
                      This fullstack app is a syllabus generator designed for
                      college professors and currently being used by Arizona
                      State University Faculty. The user friendly fully
                      customizable syllabus creator automatically updates and
                      input university specific language on Title IX, Corona
                      Virus, and other mandatory sections. The final product is
                      an auto formatted pdf and embeddable html versions of the
                      syllabus. SyliGen is created with HTML/CSS, Bootstrap, JS,
                      Node, Express, MySQL. Deployed on Heroku.
                    </p>
                    <a
                      href="https://syligen.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Live Site{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/syligen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Github Repo{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- notify --> */}
          <div className="portfolioCard">
            <div className="card">
              <div className="card-body portCard">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-square-wrapper">
                      <div
                        id="carousel-ffl"
                        className="carousel slide"
                        data-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/fflLogo.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/ffl1.png")}
                              alt="Example of a github repo entry"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/ffl2.png")}
                              alt="Shannon's code wars account"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-ffl"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-ffl"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">Notify</h5>
                    <p className="card-text">
                      Notify is a group project created as a neighborhood forum
                      app. Users can log in and select their chicago
                      neighborhood, then post and notify their neighbors or
                      crime, events, lost dogs and much more. Notify was created
                      by HTML/CSS, JS, Node, Express, Handlebars, MySQL, and
                      SVG.
                    </p>
                    <a
                      href="https://pacific-thicket-40936.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Live Site{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>

                    <a
                      href="https://github.com/klynch94/Notify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Github Repo{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- coCal --> */}
          <div className="portfolioCard">
            <div className="card">
              <div className="card-body portCard">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-square-wrapper">
                      <div
                        id="carousel-eei"
                        className="carousel slide"
                        data-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/eeiLogo.png")}
                              alt="portfolio piece"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-eei"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-eei"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">CollabCal</h5>
                    <p className="card-text">
                      CollabCal is a group project, and social networking meets
                      calendar app. Users can join calendar groups and chat on
                      each event to coordinate car pools or meeting time. Users
                      can also check if they are going or not. CollabCal was
                      made with HTML/CSS, JS, Node, Express, React, MySQL,
                    </p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Live Site coming 9/20!
                    </a>
                    <a
                      href="https://github.com/srsagehorn/project3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Github
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- note taker --> */}
          <div className="portfolioCard">
            <div className="card">
              <div className="card-body portCard">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-square-wrapper">
                      <div
                        id="carousel-seo"
                        className="carousel slide"
                        data-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/musicnMovies.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/movic.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/movic2.jpg")}
                              alt="portfolio piece"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-seo"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-seo"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">
                      Note Taker is a full stack note taking app designed to
                      make creating saving and updating notes easy and user
                      friendly. The note taker is made with HTML/CSS Bootstrap,
                      JS, Node, and Express all deployed on Heroku.
                    </p>
                    <a
                      href="https://note-taker-anator-anator.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Visit Application{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/noteTaker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      GitHub Repo{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- team profile --> */}
          <div className="portfolioCard">
            <div className="card">
              <div className="card-body portCard">
                <div className="row">
                  <div className="col-md-6">
                    <div className="img-square-wrapper">
                      <div
                        id="carousel-cal"
                        className="carousel slide"
                        data-interval="false"
                      >
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                          ></li>
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                          ></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/cal.png")}
                              alt="portfolio piece"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/calendar.gif")}
                              alt="gif of calendar animation"
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              className="d-block w-100 img-fluid"
                              src={require("../../pics/calWire.jpg")}
                              alt="gif of calendar animation"
                            />
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-cal"
                          role="button"
                          data-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-cal"
                          role="button"
                          data-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="card-title">
                      Calendar and Scheduling Application
                    </h5>
                    <p className="card-text">
                      Online calendars are becomming the norm for busy
                      professionals but the iCal leaves something to be desired.
                      This app uses the moment.js API to provide real time
                      scheduling. Set reminders, create and check off to-do
                      lists, and create events, with an easy-to-use UI.
                    </p>
                    <a
                      href="https://srsagehorn.github.io/sagehornHW5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Visit Application{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                    <a
                      href="https://github.com/srsagehorn/sagehornHW5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      Github Repo{" "}
                      <img
                        className="leave"
                        src={require("../../pics/leaveSite.png")}
                        alt="leave site icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
