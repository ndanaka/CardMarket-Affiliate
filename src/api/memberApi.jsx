import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import { GET_MEMBERS } from "../constant/api";

import { useAtom } from "jotai";
import { idAtom, timeAtom, tokenWithPersistenceAtom } from "../atoms/index";

const MemberApi = () => {
  const navigate = useNavigate();

  // operation characteristics
  const [, setTime] = useAtom(timeAtom);
  const [token, setToken] = useAtom(tokenWithPersistenceAtom);
  const [, setId] = useAtom(idAtom);

  const [op, setOp] = useState({
    appErr: null,
    serverErr: null,
  });

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
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setId(data.id);
        navigate("/login");
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

  const GetMembers = async () => {
    try {
      return await axios.get(GET_MEMBERS, postConfig);
    } catch (error) {
      console.log(error);
    }
  };

  return { GetMembers };
};

export default MemberApi;
