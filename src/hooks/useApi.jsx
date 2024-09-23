import { useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";

import { CHANGEPSD, GETTIME, LOGIN, REGISTER } from "../constant/api";
import { idAtom, timeAtom, tokenAtom } from "../store/index";

const UseApi = () => {
  const navigate = useNavigate();

  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [, setToken] = useAtom(tokenAtom);
  const [op, setOp] = useState({
    appErr: null,
    servreErr: null,
  });

  const [, setId] = useAtom(idAtom);

  // configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = localStorage.getItem("token");

  // Post Op Configuration
  const postConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //register
  const Register = async (input) => {
    try {
      const { data } = await axios.post(REGISTER, input, config);
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setId(data.id);
      input.role ? navigate("/admin/manage") : navigate("/login");
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const Login = async (input) => {
    try {
      const { data } = await axios.post(LOGIN, input, config);
      localStorage.setItem("token", data.token);
      navigate("/homepage");
      setToken(data.token);
      setCookie();
      GetTime();
      setId("");
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const GetTime = async () => {
    try {
      const { data } = await axios.get(GETTIME, postConfig);
      setTime(data);
    } catch (error) {}
  };

  const ChangePsd = async () => {
    try {
      const { data } = await axios.post(CHANGEPSD, postConfig);
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  return { Register, Login, setOp, op, GetTime };
};

export default UseApi;
