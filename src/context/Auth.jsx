import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

import { atom, useAtom } from "jotai";
import { tokenAtom } from "../store/index";
import UseApi from "../hooks/useApi";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [token, setToken] = useAtom(tokenAtom);
  // to store the token
  // const [user, setUser] = useState('');
  // to decide when to fetch and the frequency to follow
  // const [fetchAgain, setFetchAgain] = useState();
  const [dData, setDData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  // to keep a track of the data
  const { GetTime } = UseApi();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);

    if (location.pathname == "/admin/manage/view") {
      GetTime();
    }
  }, [navigate, location]);

  // remove the token when close the browser
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Your logic here
      localStorage.removeItem("token");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <AuthContext.Provider value={{ dData }}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
// export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
