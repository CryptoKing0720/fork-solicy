import React, { useState } from "react";
const AuthContext = React.createContext();

function AuthContextProvider(props) {
  const [authorize, setAuthorize] = useState(false);
  const [userID, setUserID] = useState("");
  function authorizeUser() {
    setAuthorize(true);
  }
  return (
    <AuthContext.Provider
      value={{ authorize, authorizeUser, userID, setUserID }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
