import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios"

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  user: {},
});

const BASE_URL = "/api";
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const isAuth = async () => {
      try { const res = await axios.get(BASE_URL+'/user/me',{ withCredentials: true }).then()
        setUser(res.data.obj);
        setAuth(true);
      } catch(error) {
        setUser({});
        setAuth(false)
      };
    };

    isAuth();

  },[]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;