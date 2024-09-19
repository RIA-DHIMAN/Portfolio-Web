import React from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <div className="container box justify-content-center">
          <h5 className="text-secondary text-center mt-3">Contact</h5>
          <br />
          <h1 className="text-center text-warning">Get In Touch with Me!</h1>
          <br />
          <hr />
          <div className="row m-4">
            <div className="col-lg-4">
              <div className="box1 p-4 ">
                <h4>
                  <i className="fa-solid fa-location-dot text-warning"></i>
                  <b>
                    <i className="text-warning m-2"> Address :</i>
                  </b>
                </h4>
                <p>Mussoorie</p>
                <hr />
                <h4>
                  <i className="fa-solid fa-phone-volume text-warning"></i>
                  <b>
                    <i className="text-warning m-2"> Contact :</i>
                  </b>
                </h4>
                <p>+91 8077 371 835</p>
                <hr />
                <h4>
                  <i className="fa-solid fa-envelope text-warning"></i>
                  <b>
                    <i className="text-warning m-2"> Email :</i>
                  </b>
                </h4>
                <p>driadhiman@gmail.com</p>
                <hr />
                <h4>
                  <i className="fa-solid fa-magnifying-glass-location text-warning"></i>
                  <b>
                    <i className="text-warning m-2"> Location :</i>
                  </b>
                </h4>
                <p>
                  <iframe
                    style={{
                      height: "100%",
                      width: "100%",
                      border: "0",
                    }}
                    title="map"
                    frameborder="0"
                    src="https://www.google.com/maps/embed/v1/place?q=Mussoorie+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                </p>
                <hr />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="box1 p-2">
                <form action="">
                  <div className="row m-2">
                    <div className="col-lg-6">
                      <label htmlFor="fullname" className="m-3">
                        <h4 className="text-warning">
                          <i> Name :</i>
                        </h4>
                      </label>
                      <input
                        type="text"
                        htmlFor="fullname"
                        className=" rounded-3 w-100 h-75"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="email" className="m-3">
                        <h4 className="text-warning">
                          <i> Email :</i>
                        </h4>
                      </label>
                      <br />
                      <input
                        type="email"
                        htmlFor="email"
                        className=" rounded-3 w-100 h-75"
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="row m-3">
                    <label htmlFor="inputtext">
                      <h4 className="text-warning">
                        <i> Enter Your Message :</i>
                        <br />
                        <br />
                      </h4>
                    </label>
                    <textarea
                      className="rounded-3"
                      name=""
                      id="textarea"
                      placeholder="entre your mesage"
                      rows="6"></textarea>
                  </div>
                  <br />
                  <button className="btn btn-secondary p-3 m-3">
                    <Link
                      className="text-light text-decoration-none"
                      to="/contact">
                      Click to Send Message
                    </Link>
                  </button>
                  <hr />
                </form>
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

export default Contact;
