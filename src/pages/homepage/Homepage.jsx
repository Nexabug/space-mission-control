import React from "react";
import Btn from "../../Ui/Btn";
import "./homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          <em>space mission</em> <br />
          control
        </h1>
        <p>
          its a space mission control site for all the info about the space
          related things
        </p>
        <div className="btns">
          <Link to="/mission">
            <Btn>see details</Btn>
          </Link>
          <Link to="/dashboard">
            <Btn bg="transparent"> dashboard </Btn>
          </Link>
        </div>
      </div>
      <div className="hero-img">
        <img src="/rocket.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
