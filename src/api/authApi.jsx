import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { CHANGEPSD, GETTIME, LOGIN, REGISTER } from "../constant/api";

import { useAtom } from "jotai";
import { idAtom, timeAtom, tokenWithPersistenceAtom } from "../atoms/index";

const AuthApi = () => {
  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [, setId] = useAtom(idAtom);

  const [op, setOp] = useState({
    appErr: null,
    serverErr: null,
  });

  const navigate = useNavigate();

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

      if (data.status) {
        if (!token) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          setId(data.id);
          navigate("/login");
        } else {
          navigate("/admin/manage");
        }
      } else {
        setOp({
          appErr: data.message,
          serverErr: data.message,
        });
      }
    } catch (error) {
      setOp({
        appErr: error?.response?.data?.message,
        serverErr: error?.message,
      });
    }
  };

  const submitLogin = async (formData) => {
    try {
      const { data } = await axios.post(LOGIN, formData, config);

      if (data.status) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        const payload = jwtDecode(data.token);

        switch (payload.role) {
          case "Manager":
            navigate("/admin");
            break;

          case "Admin":
            navigate("/admin");
            break;

          default:
            navigate("/homepage");
            break;
        }

        setId("");
      } else {
        setOp({
          appErr: data.message,
          serverErr: data.message,
        });
      }
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

export default AuthApi;
