import React, { useState } from "react";
import Button from "@mui/material/Button";

function Visitor(props) {
  return (
    <div className="welcome">
      <h1>
      Before Knowing Joben, He'd like to know you first.
      </h1>
      <p></p>
      <div className="inputsubmit">
        <input
          className="input"
          type="text"
          placeholder="Please write your name"
        />
        <Button size="small">
          Next
        </Button>
      </div>
    </div>
  );
}

export default Visitor;
