import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn]=useState(null)
  const [reloadPage, setReloadPage]=useState(false)

  async function updateLogin() {
    try{
      const loggedInRes = await axios.get("/auth/check-logged-in");
      setUser(loggedInRes.data.user);
      setLoggedIn(loggedInRes.data.loggedIn);
      return loggedInRes.data;
    }catch(err){
      console.log("Error: " + err.message);
      setUser(null);
      setLoggedIn(false)
    }
  }

  useEffect(() => {
    updateLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, updateLogin, loggedIn, reloadPage, setReloadPage }}>
      {props.children}
    </AuthContext.Provider>
  );
}


export default AuthContext;
export { AuthContextProvider }