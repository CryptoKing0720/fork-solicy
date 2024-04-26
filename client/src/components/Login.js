import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../authContext";
import "./style/Form.css";
import logo from "../utils/img/logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const { authorize, authorizeUser, setUserID, userID } =
    useContext(AuthContext);

  let history = useHistory();

  const login = async () => {
    try {
      const res = await Axios.post(
        "https://cartedo-server.herokuapp.com/login",
        {
          name: name,
          password: password,
        }
      );
      if (res.data.message) {
        setLoginStatus(false);
        setError(true);
      } else {
        setUserID(res.data.user._id);
        setLoginStatus(true);
        authorizeUser();
        setError(false);
        history.push(`/blockchain/${res.data.user._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <img src={logo} />
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <p className="error">
          {error ? "Please provide valid credentials" : ""}
        </p>
        <button className="authbutton" onClick={login}>
          {" "}
          Login{" "}
        </button>{" "}
        <br />
        <Link className="authbutton nav" to="/signup">
          New User
        </Link>
      </div>
    </div>
  );
}

export default Login;
