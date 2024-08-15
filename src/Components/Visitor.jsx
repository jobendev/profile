import React, { useState } from "react";
import Button from "@mui/material/Button";

function Visitor(props) {
  return (
    <div className="welcome">
      <h1>
      Thanks for visiting! I'm Joben,
      </h1>
      <p>what's your name?</p>
      <div className="inputsubmit">
        <input
          className="input"
          type="text"
          placeholder="Please write your name"
        />
        <Button size="small">
          next
        </Button>
      </div>
    </div>
  );
}

export default Visitor;
