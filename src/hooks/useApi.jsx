import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import { useAtom } from "jotai";

import { CHANGEPSD, GETTIME, LOGIN, REGISTER } from "../constant/api";

import { idAtom, timeAtom, tokenAtom } from "../store/index";

const UseApi = () => {
  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [, setToken] = useAtom(tokenAtom);
  const [, setId] = useAtom(idAtom);

  const [op, setOp] = useState({
    appErr: null,
    serverErr: null,
  });

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // configuration
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Post Op Configuration
  const postConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  //register
  const submitRegister = async (formData) => {
    try {
      const { data } = await axios.post(REGISTER, formData, config);

      localStorage.setItem("token", data.token);

      setToken(data.token);
      setId(data.id);

      formData.role ? navigate("/admin/manage") : navigate("/login");
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const submitLogin = async (input) => {
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

  const submitChangePsd = async () => {
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

  return { submitRegister, submitLogin, setOp, op, GetTime };
};

export default UseApi;
