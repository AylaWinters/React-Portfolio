import React from "react";

function projects() {
  return (
    <div className="second">
      <h2 className="projects">Projects</h2>
      <div className="flex-container">
        <div className="sites">
          <figure className="snip1273 project-photos">
            <img
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="../../photos/Close2You.png"
              alt="travel site image"
            />
            <figcaption>
              <h6>Close2You</h6>
              <p>
                A two person project using Github to create a website using 3
                APIs and a widgit. On this site, a user can search a city to
                find out more info such as weather, events, and history of that
                location.
              </p>
            </figcaption>
            <a
              href="https://andrethetallguy.github.io/Project-1/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </figure>
          <div className="links">
            <a
              className="projectLinks"
              href="https://github.com/AndreTheTallGuy/Project-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |
            <a
              className="projectLinks"
              href="https://andrethetallguy.github.io/Project-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
        <div className="sites">
          <figure className="snip1273 project-photos">
            <img
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="../../photos/Dream Garage.png"
              alt="garage site image"
            />
            <figcaption>
              <h6>Dream Garage</h6>
              <p>
                A three person project using Github to create a website allowing
                the user to create a garage of their favorite cars. Car info is
                pulled from an API and user selected cars are stored in a
                database. Cars are then pulled from the database based on the
                UUID that was placed in Local Storage.
              </p>
            </figcaption>
            <a
              href="http://limitless-sands-05500.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </figure>
          <div className="links">
            <a
              className="projectLinks"
              href="http://limitless-sands-05500.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |
            <a
              className="projectLinks"
              href="https://github.com/peterkrumb/My-Garage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
        <div className="sites">
          <figure className="snip1273 project-photos">
            <img
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="../../photos/weather.png"
              alt="weather site image"
            />
            <figcaption>
              <h6>Weather App</h6>
              <p>
                A weather web app showing today's weather and a 5 day forecast.
                The app also uses local storage to populate buttons for
                previously viewed cities.
              </p>
            </figcaption>
            <a
              href="https://andrethetallguy.github.io/Homework6/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </figure>
          <div className="links">
            <a
              className="projectLinks"
              href="https://github.com/AndreTheTallGuy/Homework6"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |
            <a
              className="projectLinks"
              href="https://andrethetallguy.github.io/Homework6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
        <div className="sites">
          <figure className="snip1273 project-photos">
            <img
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="../../photos/scheduler.png"
              alt="scheduler site image"
            />
            <figcaption>
              <h6>Day Planner</h6>
              <p>
                A simple and effcient day planner website using local storage to
                save user tasks and the DOM to keep track of time.
              </p>
            </figcaption>
            <a
              href="https://andrethetallguy.github.io/Homework5/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </figure>
          <div className="links">
            <a
              className="projectLinks"
              href="https://github.com/AndreTheTallGuy/Homework5"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |
            <a
              className="projectLinks"
              href="https://andrethetallguy.github.io/Homework5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
        <div className="sites">
          <figure className="snip1273 project-photos">
            <img
              data-aos="flip-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src="../../photos/quiz.png"
              alt="quiz site image"
            />
            <figcaption>
              <h6>Animal Quiz App</h6>
              <p>
                A fun web application that quizes the user with random animal
                facts. The app also uses local storage to keep track of high
                scores.
              </p>
            </figcaption>
            <a
              href="https://andrethetallguy.github.io/Homework4/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </figure>
          <div className="links">
            <a
              className="projectLinks"
              href="https://github.com/AndreTheTallGuy/Homework4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            |
            <a
              className="projectLinks"
              href="https://andrethetallguy.github.io/Homework4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projects;
