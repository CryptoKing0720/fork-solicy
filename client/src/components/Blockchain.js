import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../authContext";
import Axios from "axios";
import "./style/Blockchain.css";
import hashGen from "../utils/hashGen";
import logo from "../utils/img/logo.png";
import {
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineDown,
} from "react-icons/ai";

function blockchain() {
  const { authorize, userID } = useContext(AuthContext);
  if (!authorize) {
    return <Redirect to="/login" />;
  }

  const { userid } = useParams();
  const [blockNum, setBlockNum] = useState(1);
  const [blockdata, setBlockData] = useState("");
  const [blockList, setBlockList] = useState([]);
  const [userName, setUserName] = useState("");

  async function getList() {
    try {
      const res = await Axios.get(
        `https://cartedo-server.herokuapp.com/users/${userID}`
      );
      setBlockList(res.data.blockList);
      setUserName(res.data.users.name);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(getList, [blockList]);

  const createBlock = async () => {
    setBlockNum((prev) => prev + 1);
    try {
      const response = await Axios.post(
        "https://cartedo-server.herokuapp.com/blockchain",
        {
          data: blockdata,
          hash: await hashGen(`${(blockNum * 2).toString()}myApp`),
          user: userID,
          name: `BLOCK #${blockNum}`,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img src={logo} />
      <h1 className="peers">PEERS</h1>
      <AiOutlineUser className="icons" />
      <p className="currentUser">{userName}</p>
      <div className="App">
        <h1 className="header">BLOCKCHAIN</h1>
        <div className="list fixed-list">
          <strong>DATA : </strong>
          <span>
            <AiOutlineFileText /> Welcome to blockchain
          </span>{" "}
          <br />
          <strong>HASH : </strong>
          <span className="hash-green"> 1256shjsjk12 </span> <br />
          <span className="genesis"> GENESIS BLOCK </span>
        </div>
        {blockList.map((value, key) => (
          <div>
            <div key={key} className="list">
              <strong>DATA : </strong>
              <span>
                <AiOutlineFileText />
                {value.data}
              </span>{" "}
              <br />
              <strong>HASH : </strong>
              <span className="hash-green"> {value.hash} </span> <br />
              <span className="genesis">{value.name} </span>
              <span className="time"> on {value.createdAt} </span>
            </div>
            <AiOutlineDown className="arrow" />
          </div>
        ))}
        <Container className="blockform">
          <br />
          <label className="datainput">DATA</label>
          <input type="text" onChange={(e) => setBlockData(e.target.value)} />
          <Button
            className="create"
            variant="outline-dark"
            onClick={createBlock}
          >
            {" "}
            + ADD NEW BLOCK
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default blockchain;
