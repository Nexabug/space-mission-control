import React from "react";
import Btn from "../../Ui/Btn";
import "./homepage.css";
function Homepage() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>space mission control</h1>
        <p>
          its a space mission control site for all the info about the space
          related things
        </p>
        <Btn>see details </Btn>
        <Btn> dashboard </Btn>
      </div>
    </div>
  );
}

export default Homepage;
