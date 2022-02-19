import React from "react";
import { createContext, useState } from "react";
export const Auth = createContext();
const AuthContext = ({ children }) => {
  const [auth, setIsAuth] = useState(false);
  var value = 0;
  return <Auth.Provider value={{ setIsAuth, auth }}>{children}</Auth.Provider>;
};
export { AuthContext };
