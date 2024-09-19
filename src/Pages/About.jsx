import React from "react";
import { Link } from "react-router-dom";
const About = () => {
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
                      <i className="icon m-4 fa-brands fa-github"></i>
                      <i className="icon m-4 fa-brands fa-codepen"></i>
                      <i className="icon m-4 fa-brands fa-linkedin-in"></i>
                      <i className="icon m-4 fa-brands fa-x-twitter"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 ">
              <div className="box2 ">
                <div className="small text-start  p-2">
                  <h1 className="text-warning">About Me...</h1>
                  <hr />
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
                  <p>
                    Hello! I’m Ria Dhiman, a dedicated BCA student with a
                    passion for website design and development. My journey in
                    the world of technology began with a fascination for how
                    websites could offer seamless, interactive experiences, and
                    that curiosity quickly evolved into a deep commitment to
                    mastering the art and science of web design. Over the years,
                    I’ve honed my skills in crafting user-centric, pixel-perfect
                    designs that not only look aesthetically pleasing but also
                    provide an intuitive and engaging user experience. I believe
                    that a website is more than just a digital presence; it’s a
                    gateway for users to connect, interact, and explore. With
                    this mindset, I approach every project with a focus on the
                    end-user, ensuring that each design choice is made with
                    their needs and satisfaction in mind. My technical toolkit
                    includes HTML, CSS, JavaScript, and various frameworks that
                    allow me to turn ideas into functional, responsive websites.
                    I’m constantly learning and experimenting with new design
                    trends, techniques, and technologies to keep my skills sharp
                    and my designs modern. As I continue my journey through my
                    BCA studies, I am eager to collaborate with others, work on
                    innovative projects, and contribute to building websites
                    that truly resonate with users. My goal is to create digital
                    experiences that are not only visually stunning but also
                    highly functional, delivering a seamless and enjoyable
                    experience for all users. I am excited about the endless
                    possibilities in web design and development and look forward
                    to what the future holds.
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="resume">
        <div className="container box justify-content-center">
          <h1 className="text-center mt-3 text-warning">Resume</h1>
          <p className="text-center">
            Describing my Education, Skill's,and futher more qualities which
            specialize me in crafting user-centric, pixel-perfect websites and
            digital solutions.
          </p>
          <br />
          <hr />
          <div className="row justify-content-center m-3">
            <div className="col-lg-6">
              <div className="box p-3">
                <h3 className="text-warning">Education</h3>
                <hr />
                <h3>
                  <span className="m-2">
                    <i
                      className="fa-solid fa-book text-warning"
                      style={{
                        fontSize: "38px",
                      }}></i>
                  </span>
                  Intermediate Certificate CBSE
                </h3>
                <p className="m-3">
                  <i className="fa-solid fa-angles-right"></i> Manava Bharati
                  India International School Mussoorie
                  <br />
                  <span> Scoored with first division</span>
                </p>
                <br />
                <hr />
                <h3>
                  <span className="m-2">
                    <i
                      className="fa-solid fa-book text-warning"
                      style={{
                        fontSize: "38px",
                      }}></i>
                  </span>
                  Secondary School Certificate CBSE
                </h3>
                <p className="m-3">
                  <i className="fa-solid fa-angles-right"></i> Manava Bharati
                  India International School Mussoorie
                  <br />
                  <span>Scoored with first division</span>
                </p>
                <br />
                <hr />
                <h3>
                  <span className="m-2">
                    <i
                      className="fa-solid fa-book text-warning"
                      style={{
                        fontSize: "38px",
                      }}></i>
                  </span>
                  Graduation
                </h3>
                <p className="m-3">
                  <i className="fa-solid fa-angles-right"></i> Persuing
                  graduation in BCA from Aj Campus
                </p>
                <br />
                <hr />
              </div>
              <div className="box">
                <h3 className="text-warning">Qualities</h3>
                <hr />
                <h4 className="text-secondary">Good Listener</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "75%" }}></div>
                </div>
                <h4 className="text-secondary">Teamwork</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "75%" }}></div>
                </div>

                <h4 className="text-secondary">Quick Learner</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "75%" }}></div>
                </div>
                <h4 className="text-secondary">Good Communication</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "80%" }}></div>
                </div>
                <h4 className="text-secondary">Positive & Self-Motivated</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "80%" }}></div>
                </div>
                <h4 className="text-secondary">Leadership</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "75%" }}></div>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box p-3 ">
                <h3 className="text-warning">Experience</h3>
                <hr />
                <p>
                  Did 3 month's of internship in a Digital Marketing Company
                  called
                  <b>
                    <i className="text-warning">" OFFBEATPIXELS "</i>
                  </b>
                  as a,
                  <b>
                    <i className="text-warning">" Web Developer "</i>
                  </b>
                </p>
                <hr />
              </div>
              <div className="box p-3 ">
                <h3 className="text-warning">Skills</h3>
                <hr />
                <h4 className="text-secondary">Html</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "70%" }}></div>
                </div>
                <h4 className="text-secondary">CSS</h4>
                <div
                  className="progress m-3 "
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "70%" }}></div>
                </div>
                <h4 className="text-secondary">Bootstrap</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%" }}></div>
                </div>
                <h4 className="text-secondary">Javascript</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "50%" }}></div>
                </div>
                <h4 className="text-secondary">SASS</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%" }}></div>
                </div>
                <h4 className="text-secondary">Github</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%" }}></div>
                </div>
                <h4 className="text-secondary">Database</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "40%" }}></div>
                </div>
                <h4 className="text-secondary">C & C++</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%" }}></div>
                </div>
                <h4 className="text-secondary">PHP</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "60%" }}></div>
                </div>
                <h4 className="text-secondary">MS Offfice</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "70%" }}></div>
                </div>
                <h4 className="text-secondary">MongoDB</h4>
                <div
                  className="progress m-3"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75 "
                  aria-valuemin="0"
                  aria-valuemax="60">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: "40%" }}></div>
                </div>

                <hr className="mt-4" />
              </div>
            </div>
          </div>
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
                  Copyright@2024,<b className="text-warning">Riya Dhiman</b>
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

export default About;
