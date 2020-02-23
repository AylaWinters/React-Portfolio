import React from "react";
import "./photography.css";

function photography() {
  return (
    <div className="third">
      <h1 className="heading3">Photography</h1>
      <div className="container">
        <div className="box">
          <img src="./assets/photos/love.jpg" />
        </div>
        <div className="box">
          <img src="./assets/photos/glasses.jpg" />
        </div>
        <div className="box">
          <img src="./assets/photos/dude.jpg" />
        </div>
        <div className="box">
          <img src="./assets/photos/arc.jpg" />
        </div>
        <div className="box">
          <img src="./assets/photos/purple.jpg" />
        </div>
      </div>
    </div>
  );
}

export default photography;
