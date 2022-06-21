import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios"

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState({});
  
  useEffect(() => {
    const isAuth = async () => {
      try { const res = await axios.get('/user/me',{ withCredentials: true }).then()
        setUser(res.data);
        setAuth(true);
        console.log(user)
      } catch(error) {
        setUser(null);
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