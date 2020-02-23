import React from "react";
import "./hero.css";
import background from "../../photos/mediumBigTree.gif";
const style = { background: `url('../../photos/mediumBigTree.gif')` };
function hero() {
  return (
    <div className="first" style={{ backgroundImage: `url(${background})` }}>
      <div className="heading">Andre Entrekin</div>
      <div className="subheading">
        <div className="coder">Coder</div>
        <div className="phoEdu">
          <span>| Photographer | Educator</span>
        </div>
      </div>
    </div>
  );
}

export default hero;
