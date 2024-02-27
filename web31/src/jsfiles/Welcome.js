import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "../css/index.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Welcome = () => {
  const history = useHistory();

  function login() {
    history.push("/login");
  }
  return (
    <div>
      <div className="homepage"></div>
      <div className="homepage1">
        <center>
          {" "}
          <h1>ADMISSION'2024</h1>
          <h2>Build your Successful Future with Edification</h2>
          <Button variant="outline-primary" onClick={login}>
            Login
          </Button>{" "}
        </center>
      </div>
    </div>
  );
};

export default Welcome;
