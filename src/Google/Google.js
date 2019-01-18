import React, { Component } from "react";
import "./Google.css";

class Google extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          G<span className="second">o</span>
          <span className="third">o</span>
          <span className="fourth">g</span>
          <span className="fifth">l</span>
          <span className="sixth">e</span>
        </h1>
        <form>
          <div id="main" className="form-group has-feedback">
            <input
              className="fa fa-microphone"
              type="text"
              placeholder="Search Google or type a URL"
            />
            <i id="filtersubmit" className="fa fa-microphone" />
          </div>
        </form>
      </div>
    );
  }
}

export default Google;
