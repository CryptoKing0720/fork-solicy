import React, { useState } from "react";
import Axios from "axios";
import "./style/Form.css";
import logo from "../utils/img/logo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  let history = useHistory();

  const register = async () => {
    try {
      const response = await Axios.post(
        "https://cartedo-server.herokuapp.com/signup",
        {
          name: nameReg,
          password: passwordReg,
        }
      );
      history.push(`/login`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <img src={logo} />
        <h1>Registration</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setNameReg(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />{" "}
        <br />
        <button className="authbutton" onClick={register}>
          {" "}
          Signup{" "}
        </button>
        <Link className="authbutton nav" to="/login">
          Existing User
        </Link>
      </div>
    </div>
  );
}

export default Signup;
