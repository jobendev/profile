import React, { useState } from "react";
import Button from "@mui/material/Button";

function Visitor(props) {
  return (
    <div className="visit-container">
      <div className="welcome">
        <span className="normal">Thanks for visiting! I'm Joben a</span>{" "}
        <span className="highlight">Scrum Master and</span>
        <span className="highlight">Full-stack Web Developer.</span>
        <div className="inputsubmit">
          <Button size="small">about joben</Button>
        </div>
      </div>

      <div className="imagecontainer">
        <img src="../src/assets/joben.png" alt="" />
      </div>
    </div>
  );
}

export default Visitor;
