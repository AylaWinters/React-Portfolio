import React from "react";
import "./contact.css";

function contact() {
  return (
    <div className="forth">
      <h3 className="heading3 contact-word">Contact</h3>
      <div className="contact">
        <div className="row">
          <div className="col m5 s12">
            <div className="info-container">
              <div className="info">
                <br />
                Andre Entrekin
              </div>
              <div className="my-email">
                <a
                  href="mailto:andre.entrekin@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  andre.entrekin@gmail.com
                </a>
              </div>
              <div className="media">
                <a
                  href="https://github.com/AndreTheTallGuy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square"></i>
                </a>
                <a
                  href="https://www.instagram.com/andrethetallguy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/andreentrekin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <form className="col m6 s12">
            <div className="row contact-info">
              <div className="input-field col s6">
                <input id="name" type="text" className="validate" />
                <label for="name">Name</label>
              </div>
              <div className="input-field col s6">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="message"
                    className="materialize-textarea"
                  ></textarea>
                  <label id="messageWord" for="message">
                    Message
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
