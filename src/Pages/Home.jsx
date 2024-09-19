import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="stats" className="head ">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 ">
              <div className="box">
                <div className="profile-image text-center">
                  <img
                    style={{
                      marginTop: "10%",
                      width: "300px",
                      height: "50vh",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                    src="/Images/rio3.jpg"
                    alt="image-A"
                  />
                </div>
                <div className="intro text-center m-4">
                  <i>
                    <h2>Riya Dhiman</h2>
                  </i>
                  <h4 className="text-warning">"BCA Student"</h4>
                  <hr />
                  <p>
                    Passionate about Website Design and Website Development.
                  </p>
                  <br />
                  <div className="social">
                    <p>
                      <a
                        className="text-light"
                        href="https://github.com/RIA-DHIMAN">
                        <i className="icon m-4 fa-brands fa-github"></i>
                      </a>
                      <a
                        className="text-light"
                        href="https://codepen.io/Ria-Dhiman">
                        <i className="icon m-4 fa-brands fa-codepen"></i>
                      </a>
                      <a
                        className="text-light"
                        href="https://www.linkedin.com/in/ria-dhiman-06a114306/">
                        <i className="icon m-4 fa-brands fa-linkedin-in"></i>
                      </a>
                      <a className="text-light" href="https://x.com/?lang=en">
                        <i className="icon m-4 fa-brands fa-x-twitter"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 ">
              <div className="box2 ">
                <div className="small text-start text-secondary p-2">
                  <h5 className="text-secondary">Hello There !</h5>
                </div>
                <div className="main p-3 mt-2">
                  <p
                    style={{
                      fontSize: "35px",
                    }}>
                    "I’m <i className="text-warning">Ria Dhiman,</i> a BCA
                    student passionate about website design and development,
                    crafting user-centric designs with pixel-perfect precision."
                  </p>
                </div>
                <div className="medium p-2 mt-2">
                  <h4 className="text-secondary">
                    <i
                      style={{
                        color: "#0de71c",
                        margin: "5px",
                      }}
                      className="fa-solid fa-circle-dot"></i>
                    Available for Work
                  </h4>
                </div>
                <div className="button p-3 m-2">
                  <button className="btn btn-secondary p-3">
                    <Link
                      className="text-light text-decoration-none"
                      to="/about">
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
              <div className="box1">
                <h3 className="p-2 m-2 text-warning">
                  Companies I Worked With...
                </h3>
                <hr />
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="2000">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-flex justify-content-center">
                        <img
                          src="https://offbeatpixels.com/images/offbeat-pixel.png"
                          className="d-block w-25 "
                          alt="Image-1"
                        />
                        <img
                          src="https://thebacktobasics.com/images/logo/B2Blogo.png"
                          className="d-block w-25 "
                          alt="Image-2"
                        />
                        <img
                          src="Images/orgaawe.png"
                          className="d-block w-25 "
                          alt="Image-3"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <img
                          src="https://offbeatpixels.com/images/offbeat-pixel.png"
                          className="d-block w-25 "
                          alt="Image-5"
                        />
                        <img
                          src="https://thebacktobasics.com/images/logo/B2Blogo.png"
                          className="d-block w-25 "
                          alt="Image-6"
                        />
                        <img
                          src="Images/orgaawe.png"
                          className="d-block w-25 "
                          alt="Image-7"
                        />
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-flex justify-content-center">
                        <img
                          src="https://offbeatpixels.com/images/offbeat-pixel.png"
                          className="d-block w-25 "
                          alt="Image-10"
                        />
                        <img
                          src="https://thebacktobasics.com/images/logo/B2Blogo.png"
                          className="d-block w-25 "
                          alt="Image-11"
                        />
                        <img
                          src="Images/orgaawe.png"
                          className="d-block w-25 "
                          alt="Image-12"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container justify-content-center text-center p-3 mt-3">
          <div className="row">
            <div className="col box p-3">
              <h1 className="text-center mt-3 text-warning">
                Works & Projects
              </h1>
              <p className="p-4">
                I design and develop user-centric, responsive websites with
                pixel-perfect precision, combining creativity and functionality
                for seamless digital experiences.
              </p>
              <hr />
              <div className="container justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out">
                      <img
                        src="Images/work-3.png"
                        alt="image-A"
                        className="image w-100 py-2 "
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">Website Development</h3>
                      <p className="text-secondary">
                        Digital Marketing Official Website Development Of
                        OffbeatPixels.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out">
                      <img
                        src="Images/work-4.png"
                        alt="image-A"
                        className="image w-100 py-2"
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">Website Designe</h3>
                      <p className="text-secondary">
                        Content based Official Website Designe of OrgaaWe.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out ">
                      <img
                        src="/Images/work-5.png"
                        alt="image-A"
                        className="image w-100 py-2 "
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">Website Designe</h3>
                      <p className="text-secondary">
                        Adventure Helding Official Website Designe Of Back to
                        Basics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out">
                      <img
                        src="Images/work-2.png"
                        alt="image-A"
                        className="image w-100 py-2"
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">Website Development</h3>
                      <p className="text-secondary">
                        Content based Official Website Development of OrgaaWe.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out ">
                      <img
                        src="Images/work-1.png"
                        alt="image-A"
                        className="image w-100 py-2 "
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">website Development</h3>
                      <p className="text-secondary">
                        Adventure Helding Official Website Development Of Back
                        to Basics.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 box1">
                    <div className="image zoom-out">
                      <img
                        src="Images/work-6.png"
                        alt="image-A"
                        className="image w-100 py-2 "
                      />
                    </div>
                    <div className="text">
                      <h3 className="text-warning">Website Designe</h3>
                      <p className="text-secondary">
                        Digital Marketing Official Website Designe Of
                        MacsConcepts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <button className="btn btn-secondary p-3">
                <Link className="text-light text-decoration-none" to="/service">
                  Click to See More
                </Link>
              </button>
              <br />
              <br />
            </div>
          </div>
          <br />
        </div>
      </section>
      <section className="contact">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col box1">
              <div className="heading  p-5 text-center">
                <h1 className="heading-text text-warning">
                  Are You Ready to kickstart your project with a touch of magic?
                </h1>
                <br />
                <p className="text-secondray">
                  Reach out and let's make it happen ✨. I'm also available for
                  full-time or Part-time opportunities to push the boundaries of
                  design and deliver exceptional work.
                </p>
                <br />
                <button className="btn btn-secondary p-3">
                  <Link
                    className="text-light text-decoration-none"
                    to="/contact">
                    Click to Contact
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer m-3">
        <div className="container">
          <div className="row">
            <div className="col-6 text-start">
              <p>
                <i>
                  Copyright@2023,<b className="text-warning">Riya Dhiman</b>
                  .All Rights Reserved.
                </i>
              </p>
            </div>
            <div className="col-6 text-end">
              <p>
                <i>
                  ✨ Designed by <b>Ria Dhiman</b>
                </i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
