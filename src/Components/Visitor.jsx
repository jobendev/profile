import React, { useState } from "react";
import Button from "@mui/material/Button";

function Visitor(props) {
  return (
    <div className="visit-container">
      <div className="welcome">
        <h1>
          Thanks for visiting! I'm Joben a Scrum Master and a Full-stack Web
          Developer,
        </h1>
        <p>what's your name?</p>
        <div className="inputsubmit">
          <input
            className="input"
            type="text"
            placeholder="Please write your name"
          />
          <Button size="small">next</Button>
        </div>
      </div>

      <div className="imagecontainer">
        <img src="../src/assets/joben.png" alt="" />
      </div>
    </div>
  );
}

export default Visitor;
